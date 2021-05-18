import { Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Question from '../components/Question';
import '../css/App.css';
import NavBar from '../components/NavBar';
import LoadingScreen from '../components/LoadScreen';
import { useParams } from 'react-router';
import fetch from 'node-fetch';
import QuizNav from '../components/QuizNav';
import Player from '../components/Player';
import { useHistory } from 'react-router-dom';

type quizParams = {
    artistUri: string
}

const initalQuizData = {
    question: "",
    answer: "",
    audio: "",
    options: [""]
}

function Quiz() {
    const history = useHistory();
    const params = useParams<quizParams>();
    const artistUri: string = params.artistUri.split(":")[2];
    const [loading, setLoading] = useState(true);
    const [quiz, setUpQuiz] = useState<question[]>([]);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState<question>(initalQuizData);
    const [totalQuestions, setTotalQuestions] = useState(0);
    const [correctAnswers, setCorrectAnswer] = useState(0);
    const [songPlaying, setSongPlaying] = useState(false);

    function nextQuestion() {
        if (questionNumber !== quiz.length - 1) {
            setCurrentQuestion(quiz[questionNumber + 1]);
            setQuestionNumber(questionNumber + 1);
        }
        else {
            quizComplete();
        }
    }

    function incrementCorrectAnswers() {
        setCorrectAnswer(correctAnswers + 1);
    }

    function quizComplete() {
        const urlParams = new URLSearchParams();
        urlParams.append('correctAnswers', correctAnswers.toString());
        urlParams.append('totalQuestions', totalQuestions.toString());
        history.push('/complete?' + urlParams.toString())
    }

    useEffect(() => {
        async function getQuiz(artistUri: string) {
            const response = await fetch("https://quizical.tabishimran.com/api/quiz?artist=" + artistUri);
            if (response.status === 401) history.push('/login');
            const data = await response.json()
            setTotalQuestions(data.length);
            setUpQuiz(data);
            setCurrentQuestion(data[0]);
            setQuestionNumber(0);
            setLoading(false);
        }
        getQuiz(artistUri);
    }, []);

    const quizView =
        <div style={{ backgroundColor: "#191414", height: "100vh" }}>
            <NavBar></NavBar>
            <Grid
                container
                direction="row"
                justify="center"
                alignContent="stretch"
                alignItems="center"
                style={{ height: "100%", backgroundColor: "#191414" }}
            >
                <Grid item xs={12}>
                    <div className="quizNavigation">
                        <QuizNav questionNumber={questionNumber}></QuizNav>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Question setSongPlaying={() => { setSongPlaying(false) }} question={currentQuestion} nextQuestion={nextQuestion} incrementCorrectAnswers={incrementCorrectAnswers}></Question>
                </Grid>
                <Grid item xs={12}>
                    <div className="player" style={{
                        position: "relative",
                        bottom: "0",
                        width: "100%",
                        left: 0,
                        right: 0,
                    }}>
                        <Player songPlaying={songPlaying} setSongPlaying={setSongPlaying} audio={currentQuestion.audio}></Player>
                    </div>
                </Grid>
            </Grid>
        </div>

    const loadingScreen =
        <div className="container">
            <Grid container
                direction="column"
                justify="center"
                alignItems="center"
                alignContent="center"
                style={{ "height": "100%" }}
            >
                <LoadingScreen></LoadingScreen>
            </Grid>
        </div>

    return (
        loading ? loadingScreen : quizView
    );

}

export default Quiz;