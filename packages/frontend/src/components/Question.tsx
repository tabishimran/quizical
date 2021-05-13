import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import '../css/App.css';
import QuizNav from './QuizNav';
import Player from './Player';
import { Card, CardActionArea, CardContent, Grid, Typography } from '@material-ui/core';


interface questionProps {
    question: question,
    nextQuestion: ()=>void
}

function Question(props: questionProps) {
    
    var question = props.question;
    const nextQuestion = props.nextQuestion
    console.log(question);
    const [answered,setAnswered] = useState(false);
    
    const getColor = function(){

    }

    const checkAnswer = function(each:string){
        setAnswered(true)
        if(each==question.answer){
            console.log('true')
        }
        setTimeout(()=>{
            setAnswered(false);
            nextQuestion();
        },1000);
    }

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{ textAlign: "center", height: '100%', marginTop: '2rem'}}
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
                            onClick={()=>{
                                checkAnswer(each);
                            }}
                            style={{
                                backgroundColor: answered?each==question.answer?"#1DB954":"#2f2929":"#2f2929",
                                height: "4rem",
                                width: "13rem",
                                textAlign:"center"
                            }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography variant="body1" style={{ "color": "white" }}>
                                        {each}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))};
                </Grid>
        </Grid>
    );
}

export default Question;