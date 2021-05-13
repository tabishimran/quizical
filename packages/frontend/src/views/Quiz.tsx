import { Grid, Typography, useTheme } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Question from '../components/Question';
import '../css/App.css';
import NavBar from '../components/NavBar';
import LoadingScreen from '../components/LoadScreen';
import { useParams } from 'react-router';
import fetch from 'node-fetch';
import QuizNav from '../components/QuizNav';
import Player from '../components/Player';

type quizParams = {
    artistUri: string
}



const dummyQuiz = [{ "question": "Identify the song", "answer": "Saans Le", "audio": "https://p.scdn.co/mp3-preview/9f532475cd99ebaa53decb51cf4ab932ab24069e?cid=8befd2616f454f9ba4071865ecd4326e", "options": ["Class-Sikh Maut, Vol. II", "Saans Le", "Meri Baggi", "Gehraiyaan"] }, { "question": "Identify the song", "answer": "Intro", "audio": "https://p.scdn.co/mp3-preview/b78d91c9f737b88ed160a10dc4560b1ce6508519?cid=8befd2616f454f9ba4071865ecd4326e", "options": ["Intro", "", "Shaktimaan", "Stay Calm"] }, { "question": "Identify the song", "answer": "Yaad", "audio": "https://p.scdn.co/mp3-preview/b06bc3bce5569d8ee38f08fbb4b440e22e0a012e?cid=8befd2616f454f9ba4071865ecd4326e", "options": ["101", "Scalp Dem", "Yaad", "Kyu"] }, { "question": "Identify the song", "answer": "Shaktimaan", "audio": "https://p.scdn.co/mp3-preview/aa46ee9bf5c74a956cfc8694a422d3a6f4bd5f40?cid=8befd2616f454f9ba4071865ecd4326e", "options": ["Kranti", "Yaad", "Shaktimaan", "Pnp"] }, { "question": "Identify the song", "answer": "101", "audio": "https://p.scdn.co/mp3-preview/87a6ef08f48d1813e9109fa0a44ee85b0afde25f?cid=8befd2616f454f9ba4071865ecd4326e", "options": ["Intro", "Royalty", "Gehraiyaan", "101"] }, { "question": "Identify the song", "answer": "Ball", "audio": "https://p.scdn.co/mp3-preview/d35cc4cc0fe03ff9b0d7786ade63142d61bca9f1?cid=8befd2616f454f9ba4071865ecd4326e", "options": ["Yaad", "Intro", "Stay Calm", "Ball"] }, { "question": "Identify the song", "answer": "Seedhe Maut Anthem", "audio": "https://p.scdn.co/mp3-preview/df0bc63acba38e8de2bdde2e1ed832787d1ad888?cid=8befd2616f454f9ba4071865ecd4326e", "options": ["Do Guna", "Kyu", "Seedhe Maut Anthem", "Uss Din"] }, { "question": "Identify the song", "answer": "Namastute", "audio": "https://p.scdn.co/mp3-preview/c422a68af0b29977673a236747d39384b592e908?cid=8befd2616f454f9ba4071865ecd4326e", "options": ["MMM", "Namastute", "Saans Le", "Uss Din"] }, { "question": "Identify the song", "answer": "Kyu", "audio": "https://p.scdn.co/mp3-preview/95832dfffe746b6d65e837df75d39d5da04db824?cid=8befd2616f454f9ba4071865ecd4326e", "options": ["Kyu", "Edokdog (skit)", "Keh Chuka, Pt. 1", "Classsikh Maut"] }, { "question": "Identify the song", "answer": "Jolly (skit)", "audio": "https://p.scdn.co/mp3-preview/15a2894325a521a4eec5fd94d797ed83eb2c6199?cid=8befd2616f454f9ba4071865ecd4326e", "options": ["Scalp Dem", "Chalta Reh", "Jolly (skit)", "Edokdog (skit)"] }];
var quizObj = dummyQuiz;

function Quiz() {
    const theme = useTheme();
    const params = useParams<quizParams>();
    const artistUri: string = params.artistUri.split(":")[2];
    const [loading, setLoading] = useState(true);
    const [quiz, setUpQuiz] = useState({});
    const [questionNumber, setQuestionNumber] = useState(0);
    const [curentQuestion, setCurrentQuestion] = useState<question>(quizObj[0]);
    function nextQuestion() {
        console.log(curentQuestion);
        console.log('executing nextQuestion')
        if (questionNumber != dummyQuiz.length - 1) {
            setQuestionNumber(questionNumber + 1);
            setCurrentQuestion(quizObj[questionNumber]);
        }
        else {
            quizComplete();
        }
    }

    function quizComplete() {
        // submit results
    }

    useEffect(() => {
        async function getQuiz(artistUri: string) {
            const response = await fetch("https://quizical.tabishimran.com/api/quiz?artist=" + artistUri);
            console.log(response.status)
            const data = await response.json()
            setUpQuiz(data);
            setLoading(false);
        }
        getQuiz(artistUri);
    }, []);

    const quizView =
        <div style={{ backgroundColor: "#191414" }}>
            <NavBar></NavBar>
            <div className="quizNavigation">
                <QuizNav questionNumber={questionNumber}></QuizNav>
            </div>
            <Question question={curentQuestion} nextQuestion={nextQuestion}></Question>
            <div className="player" style={{
                position: "absolute",
                bottom: "0",
                width: "100%",
                left: 0,
                right: 0,
                marginBottom: "2rem"
            }}>
                <Player audio={curentQuestion.audio}></Player>
            </div>
        </div>

    const loadingScreen =
        <div className="container">
                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    alignContent="center"
                    style={{"height":"100%"}}
                >
                    <LoadingScreen></LoadingScreen>
                </Grid>
        </div>

    return (
        loading?loadingScreen:quizView
    );

}

export default Quiz;