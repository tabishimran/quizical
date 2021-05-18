import { useState } from 'react';
import '../css/App.css';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';


interface questionProps {
    question: question,
    nextQuestion: () => void,
    incrementCorrectAnswers: () => void,
    setSongPlaying: () => void
}

function Question(props: questionProps) {

    var question = props.question;
    const setPlaying = props.setSongPlaying;
    const nextQuestion = props.nextQuestion;
    const incrementCorrectAnswers = props.incrementCorrectAnswers;
    const [answered, setAnswered] = useState(false);


    const checkAnswer = function (each: string) {
        setAnswered(true)
        if (each === question.answer) {
            incrementCorrectAnswers();
        }
        setPlaying();
        setTimeout(() => {
            setAnswered(false);
            nextQuestion();
        }, 1000);
    }

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{ textAlign: "center", height: '100%', marginTop: '2rem' }}
        >
            <Grid item style={{ backgroundColor: "#191414" }}>
                <Typography
                    variant="h4"
                    style={{
                        color: "white",
                        fontSize: "1.5rem"
                    }}>
                    {question.question}
                </Typography>
            </Grid>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
                alignContent="center"
                style={{
                    marginTop: "3rem",
                    width: "100%"
                }}
            >
                {question.options.map((each) => (
                    <Grid item style={{ margin: "1rem", height: "100%", textAlign: "center" }}>
                        <Card
                            onClick={() => {
                                checkAnswer(each);
                            }}
                            style={{
                                backgroundColor: answered ? each === question.answer ? "#1DB954" : "#2f2929" : "#2f2929",
                                height: "4rem",
                                width: "13rem",
                                textAlign: "center"
                            }}>
                            <CardContent>
                                <Typography variant="body1" style={{ "color": "white" }}>
                                    {each}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))};
                </Grid>
        </Grid>
    );
}

export default Question;
