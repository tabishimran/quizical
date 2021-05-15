import { Card, createStyles, Grid, IconButton, makeStyles, Theme, useTheme } from "@material-ui/core";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Forward10RoundedIcon from '@material-ui/icons/Forward10Rounded';
import ReplayRoundedIcon from '@material-ui/icons/ReplayRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import { useEffect, useState } from "react";
import "../css/App.css";

var Sound = require('react-sound').default;



declare const window: any;

interface playerProps {
    audio: string
    songPlaying: boolean,
    setSongPlaying: React.Dispatch<React.SetStateAction<boolean>>
}

const useStyles = makeStyles((theme) =>
    createStyles({
        controls: {
            marginLeft: '1rem',
            marginRight: '1rem',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
        },
        icon: {
            height: 48,
            width: 48,
        },
    }),
);

function Player(props: playerProps) {
    const theme = useTheme();
    const audioURL = props.audio;
    const classes = useStyles();
    const [deviceID, setDeviceId] = useState(null);
    const songPlaying = props.songPlaying;
    const setSongPlaying = props.setSongPlaying;


    useEffect(() => {
        const timer = setTimeout(() => {
            pauseSong()
        }, 10000)
        return () => {
            clearTimeout(timer);
        }
    }, [songPlaying])

    function playSong() {
        setSongPlaying(true);
    }

    function pauseSong() {
        console.log('pause')
        setSongPlaying(false);
    }


    return (
        <Card className="playDock">
            <Grid container direction="row" justify="center" alignItems="center">
                <div className={classes.controls}>
                    <Grid item>
                        <IconButton>
                            <StarRoundedIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <ReplayRoundedIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Sound
                            url={audioURL}
                            playStatus={songPlaying ? Sound.status.PLAYING : Sound.status.PAUSED}
                            playFromPosition={0}
                            onFinishedPlaying={pauseSong}
                        />
                        {songPlaying ?
                            <IconButton style={{ color: "#1DB954" }} onClick={pauseSong}>
                                <PauseCircleFilledIcon className={classes.icon} style={{ color: "primary" }} />
                            </IconButton>
                            :
                            <IconButton style={{ color: "#1DB954" }} onClick={playSong}>
                                <PlayCircleFilledIcon className={classes.icon} style={{ color: "primary" }} />
                            </IconButton>}
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <Forward10RoundedIcon />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <FavoriteBorderRoundedIcon />
                        </IconButton>
                    </Grid>
                </div>
            </Grid>
        </Card>
    );
}

export default Player;