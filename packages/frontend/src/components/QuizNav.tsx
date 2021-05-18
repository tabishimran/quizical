import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import '../css/App.css';


interface quizNavProps {
    questionNumber: number
}

const useStyles = makeStyles({
    root: {
        paddingTop: "2rem",
        flexGrow: 1,
        backgroundColor: "#191414",
        dot: {
            backgroundColor: "white"
        }
    }
});


function QuizNav(props: quizNavProps) {

    const classes = useStyles();

    return (
        <div className="quizNav">
            <MobileStepper
                variant="dots"
                steps={10}
                position="static"
                activeStep={props.questionNumber}
                className={classes.root}
                nextButton={<div></div>
                }
                backButton={<div></div>
                }
            />
        </div>
    );

}

export default QuizNav;