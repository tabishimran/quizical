import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react'
import { useHistory, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar'

interface resultsParams{
    correctAnswers:string,
    totalQuestions:string
}

function QuizComplete() {
    const history = useHistory();
    const params = useParams<resultsParams>();


    return (
        <div>
            <NavBar></NavBar>
            <div className="container">
                <div className="view">
                    <Grid
                        container
                        alignContent="center"
                        alignItems="center"
                        justify="center"
                        style={{
                            height: "100%",
                            width: "100%"
                        }}
                    >
                        <Grid item xs={4}>
                            <Card
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    backgroundColor:"#2f2929"
                                }}>
                                <CardMedia>
                                </CardMedia>
                                <CardContent>
                                    <Typography variant="h6" style={{color:"white"}}>Score :{params.correctAnswers}/{params.totalQuestions}</Typography>
                                </CardContent>
                                <CardActionArea>

                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default QuizComplete;
