import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import '../css/App.css';


const useStyles = makeStyles({
    root: {
      minWidth:"20rem",
      maxWidth: "40rem",
      flexGrow: 1,
      backgroundColor:"#191414",
      dots:{
          backgroundColor:"white"
      }
    },
  });


function QuizNav(){

    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return(
        <MobileStepper
            variant="dots"
            steps={10}
            position="static"
            activeStep={activeStep}
            className={classes.root}
            nextButton={
            <Button size="small" style={{color:"white"}} onClick={handleNext} disabled={activeStep === 101}>
                Next
                {theme.direction === 'rtl' ? <KeyboardArrowLeft fontSize="large" /> : <KeyboardArrowRight />}
            </Button>
            }
            backButton={
            <Button size="small" style={{color:"white"}} onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight fontSize="large" /> : <KeyboardArrowLeft />}
                Back
            </Button>
            }
      />
    );

}

export default QuizNav;