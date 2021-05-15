import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import '../css/App.css';


interface quizNavProps {
    questionNumber: number
}

const useStyles = makeStyles({
    root: {
        paddingTop: "2rem",
        flexGrow: 1,
        backgroundColor: "#191414",
        dot:{
            backgroundColor:"white"
        }
    }
});


function QuizNav(props: quizNavProps) {

    const classes = useStyles();
    // const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

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