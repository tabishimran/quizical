import { Card, CardActionArea, createStyles, Grid, IconButton, makeStyles, Theme, useTheme } from "@material-ui/core";
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
    const [sdkLoaded, setSDKLoaded] = useState(false);
    const [playerReady, setPlayerReady] = useState(false);
    const [deviceID, setDeviceId] = useState(null);
    const [songPlaying, setSongPlaying] = useState(false);



    useEffect(() => {
        const scriptTag = document.createElement('script');
        scriptTag.src = 'https://sdk.scdn.co/spotify-player.js';
        scriptTag.addEventListener('load', () => setSDKLoaded(true));
        document.body.appendChild(scriptTag);
    }, [])

    useEffect(() => {
        window.onSpotifyWebPlaybackSDKReady = function () {
            const token = '';
            const player = new window.Spotify.Player({
                name: 'Quizical',
                getOAuthToken: (cb: (arg0: string) => void) => { cb(token); }
            });
            // Error handling
            player.addListener('initialization_error', ({ message }: { message: any }) => { console.error(message); });
            player.addListener('authentication_error', ({ message }: { message: any }) => { console.error(message); });
            player.addListener('account_error', ({ message }: { message: any }) => { console.error(message); });
            player.addListener('playback_error', ({ message }: { message: any }) => { console.error(message); });

            // Playback status updates
            player.addListener('player_state_changed', (state: any) => { console.log(state); });

            player.addListener('ready', ({ device_id }: { device_id: any }) => {
                setDeviceId(device_id);
                setPlayerReady(true);
            });

            // Not Ready
            player.addListener('not_ready', ({ device_id }: { device_id: any }) => {
                console.log('Device ID has gone offline', device_id);
                setDeviceId(null);
                setPlayerReady(false);
            });

            // Connect to the player!
            console.log("SDK Loaded   : " + sdkLoaded);
            console.log("Player Ready : " + playerReady);
            player.connect();
        };
    }, [])

    function playSong() {
        setSongPlaying(true);
        setTimeout(()=>{
            pauseSong()
        },10000)
    }

    function pauseSong() {
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
                            playStatus={songPlaying? Sound.status.PLAYING : Sound.status.PAUSED}
                            playFromPosition={0 /* in milliseconds */}
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