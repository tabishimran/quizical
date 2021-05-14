import { Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@material-ui/core';
import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar'
import queryString from 'query-string'


interface resultsParams {
    correctAnswers: string,
    totalQuestions: string
}

function QuizComplete() {
    const history = useHistory();
    const paramString = useLocation<resultsParams>();
    const params = queryString.parse(paramString.search);

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
                                    backgroundColor: "#2f2929",
                                }}>
                                <CardMedia>
                                </CardMedia>
                                <CardContent>
                                    <Typography variant="h6" style={{ color: "white" }}>Score : {params.correctAnswers}/{params.totalQuestions}</Typography>
                                </CardContent>
                                <CardActionArea>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        color="primary"
                                        onClick={() => {
                                            history.push('/search');
                                        }}
                                        style={{
                                            color: "white",
                                            margin: "1rem",
                                            borderRadius: "25%/50%"
                                        }}
                                    >
                                        Done
                                    </Button>
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
