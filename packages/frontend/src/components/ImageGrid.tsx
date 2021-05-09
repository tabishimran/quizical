import React, { useEffect, useState } from 'react';
import '../css/App.css';
import fetch from 'node-fetch';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { useHistory } from 'react-router-dom';



interface widthProp {
    width: Breakpoint
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

function ImageGrid(props: widthProp) {
    const history = useHistory();
    const [tileData, setTileData] = useState([]);
    useEffect(() => {
        async function getArtists() {
            const response = await fetch("https://quizical.tabishimran.com/api/grid");
            if (response.status == 401) {
                history.push('/login');
            } else {
                const data = await response.json();
                console.log(data);
                setTileData(data);
            }
        }
        getArtists();
    }, [])

    const classes = useStyles();
    const getGridListCols = () => {
        if (isWidthUp('xl', props.width)) {
            return 8;
        }
        if (isWidthUp('lg', props.width)) {
            return 6;
        }
        if (isWidthUp('md', props.width)) {
            return 4;
        }
        return 3;
    }

    return (

        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={getGridListCols()}>
                {tileData.map((tile) => (
                    // <GridListTile key={tile.img} cols={tile.cols || 1} rows={tile.rows}>
                    <GridListTile key={tile.img} cols={1} onClick={() => {
                        console.log(tile.title);
                    }}>
                        <img src={tile.img} alt={tile.title} />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

export default withWidth()(ImageGrid);