import React, { useEffect, useState } from 'react';
import '../css/App.css';
import fetch from 'node-fetch';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { Button, Card, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles, useTheme } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';


interface gridProps {
    grid: tile[],
    setGrid: React.Dispatch<React.SetStateAction<tile[]>>
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        backgroundColor: "black",
    },
    gridList: {
        width: '100%',
        height: '100%'
    },
}));


function ImageGrid(props: gridProps) {
    const history = useHistory();
    var tileData = props.grid;
    var setTileData = props.setGrid;
    const [open, setOpen] = useState(false);
    const [selectedArtist, setSelectedArtist] = useState<tile>({
        img: "none",
        title: "none",
        popularity: 0,
        imgHeight: 0,
        imgWidth: 0,
        uri: "none"
    });
    const theme = useTheme();

    const screenXL = useMediaQuery(theme.breakpoints.up('xl'));
    const screenLG = useMediaQuery(theme.breakpoints.up('lg'));
    const screenMD = useMediaQuery(theme.breakpoints.up('md'));
    var columns = 3;
    if (screenMD) columns = 4;
    if (screenLG) columns = 6;
    if (screenXL) columns = 8;


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const startQuiz = () => {
        setOpen(false);
        setTimeout(() => {
            history.push('/quiz/' + selectedArtist.uri)
        }, 1000)
    }

    useEffect(() => {
        async function getArtists() {
            const response = await fetch("https://quizical.tabishimran.com/api/grid");
            if (response.status === 401) {
                history.push('/login');
            } else {
                const data = await response.json();
                setTileData(data);
            }
        }
        getArtists();
    }, [])

    const classes = useStyles();

    const modal = (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                style={{ marginTop: "2rem", overflowY: "hidden" }}
            >
                <DialogTitle id="responsive-dialog-title">{"Start Quiz : " + selectedArtist.title}</DialogTitle>
                <DialogContent style={{ overflowY: "hidden" }}>
                    <DialogContentText>
                        Answer questions about audio snippets from {selectedArtist.title}'s top tracks.
                    </DialogContentText>
                    <Card style={{ height: "25rem" }}>
                        <CardMedia image={selectedArtist.img} style={{ height: "100%", maxWidth: "100%" }}>
                        </CardMedia>
                    </Card>
                </DialogContent>
                <DialogActions disableSpacing={true} style={{ justifyContent: "center", alignItems: "center" }}>
                    <Button variant="contained" size="large" color="primary" onClick={startQuiz} style={{ color: "white", margin: "1rem", borderRadius: "16%/50%" }}>
                        Start Quiz
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );


    return (
        <div className={classes.root}>
            {modal}
            <GridList cellHeight={160} className={classes.gridList} cols={columns}>
                {tileData.map((tile) => (
                    <GridListTile key={tile.img} cols={1} onClick={() => {
                        setSelectedArtist(tile);
                        handleClickOpen();
                    }}>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

export default ImageGrid;