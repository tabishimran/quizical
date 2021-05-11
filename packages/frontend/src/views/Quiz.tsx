import { Grid } from '@material-ui/core';
import React from 'react';
import Options from '../components/Options';
import Question from '../components/Question';
import QuizNav from '../components/QuizNav';
import Player from '../components/Player';
import '../css/App.css';
import NavBar from '../components/NavBar';
import LoadingScreen from '../components/LoadScreen';
import { useParams } from 'react-router';

type quizParams={
    artistUri:string
}

function Quiz(){

    const params = useParams<quizParams>();
    console.log(params.artistUri)

    return(
        <div>
        <NavBar></NavBar>
        <div className="container">
            <div className="view">
                <Grid 
                    container 
                    direction="column"
                    justify="center" 
                    alignItems="center" 
                    style={{textAlign:"center",height:'100%'}} 
                >
                    {/* <Grid item style={{backgroundColor:"#191414"}}>
                        <QuizNav></QuizNav>
                    </Grid>
                    <Grid item style={{marginTop:'2rem'}}>
                        <Question></Question>
                    </Grid>
                    <Grid item style={{marginTop:'2rem'}}>
                        <Options></Options>
                    </Grid> */}
                    <LoadingScreen></LoadingScreen>
                    {/* <Grid item style={{marginTop:'2rem'}}>
                        <Player></Player>
                    </Grid> */}
                </Grid>
            </div>
        </div>
        </div>
    );

}

export default Quiz;