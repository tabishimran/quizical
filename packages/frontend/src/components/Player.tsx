import { Card, CardActionArea, createStyles, Grid, IconButton, makeStyles } from "@material-ui/core";
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import Forward10RoundedIcon from '@material-ui/icons/Forward10Rounded';
import ReplayRoundedIcon from '@material-ui/icons/ReplayRounded';
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import { useEffect, useState } from "react";

declare const window: any;


const useStyles = makeStyles((theme) =>
  createStyles({
    controls: {
      marginLeft:'1rem',
      marginRight:'1rem',
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

function Player(){

    const classes = useStyles();
    const [sdkLoaded,setSDKLoaded] = useState(false);
    const [playerReady,setPlayerReady] = useState(false);
    const [deviceID,setDeviceId] = useState(null);
    const [songPlaying,playSong] = useState(false);

    useEffect(() => {
        const scriptTag = document.createElement('script');
        scriptTag.src = 'https://sdk.scdn.co/spotify-player.js';
        scriptTag.addEventListener('load',()=>setSDKLoaded(true));
        document.body.appendChild(scriptTag);
    }, [])

    useEffect(() => {
        window.onSpotifyWebPlaybackSDKReady = function(){
            const token = 'BQBYnZCoZrdA0v4ZAovN9b6fxkg5U6WdfdWCHme1V4mMURE3xGmww1xTmOThyFn7V2Nzq_TTf2S_BnE-Y-_usQK4RA6Omr-ZAhvnDwIP9v9KdPskxY-oDS6rQBa3YLc2NE4XvtaC-eX3OpM1JTqIN1M-4kioU3pKaBrq3MsXNpTpt0CePW0JfqRDOuo';
            const player = new window.Spotify.Player({
              name: 'Quizical',
              getOAuthToken: (cb: (arg0: string) => void) => { cb(token); }
            });            
            // Error handling
            player.addListener('initialization_error', ({ message }:{message:any}) => { console.error(message); });
            player.addListener('authentication_error', ({ message }:{message:any}) => { console.error(message); });
            player.addListener('account_error', ({ message }:{message:any}) => { console.error(message); });
            player.addListener('playback_error', ({ message }:{message:any}) => { console.error(message); });
          
            // Playback status updates
            player.addListener('player_state_changed', (state: any) => { console.log(state); });
                    
            player.addListener('ready', ({ device_id }:{device_id:any}) => {
              setDeviceId(device_id);
              setPlayerReady(true);
            });
          
            // Not Ready
            player.addListener('not_ready', ({ device_id }:{device_id:any}) => {
              console.log('Device ID has gone offline', device_id);
              setDeviceId(null);
              setPlayerReady(false);
            });
          
            // Connect to the player!
            console.log("SDK Loaded   : "+sdkLoaded);
            console.log("Player Ready : "+playerReady);
            player.connect();
          };
    },[])

    function handlePlayButton(){
       playSong(!songPlaying);
    }
    
    return(
            <Card>
                <Grid container direction="row" justify="center" alignItems="center">
                    <div className={classes.controls}>
                    <Grid item>
                        <IconButton>
                            <StarRoundedIcon/>
                        </IconButton>   
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <ReplayRoundedIcon/>
                        </IconButton>   
                    </Grid>
                    <Grid item>
                        {songPlaying?
                        <IconButton style={{color:"#1DB954"}} onClick={handlePlayButton}>
                            <PauseCircleFilledIcon className={classes.icon} style={{color:"primary"}}/>
                        </IconButton> 
                        :
                        <IconButton style={{color:"#1DB954"}} onClick={handlePlayButton}>
                            <PlayCircleFilledIcon className={classes.icon} style={{color:"primary"}}/>
                        </IconButton>}    
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <Forward10RoundedIcon/>
                        </IconButton>   
                    </Grid>
                    <Grid item>
                        <IconButton>
                            <FavoriteBorderRoundedIcon/>
                        </IconButton>   
                    </Grid>
                    </div>
                </Grid>
            </Card>
    );
}

export default Player;