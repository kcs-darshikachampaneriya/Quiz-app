import React, { useEffect, useState ,useRef} from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { QuizQuestioButton } from './QuizQuestioButton';
import Button from '@mui/material/Button';
import { Dispatch } from "redux"
import { useDispatch, useSelector } from "react-redux"
import { NextQuestion, setCorrectAnwers, setAnsHistory, setIncorrectAnwerErr } from '../../actions/quizAction'
import { TOTAL_QUESTION } from '../../constants/constant'
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import {RootState} from '../../interfaces/types'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

type Props = {
    quizQuestion:any
}
export const QuizQuestion:React.FC<Props> = ({quizQuestion}) => {
    const Ref = useRef<any>(null);
    const navigate = useNavigate()
    const dispatch: Dispatch<any> = useDispatch()
    const [questionindex, setQuestionindex] = useState(0);
    const [incorrectAns, setincorrectAns] = useState(false);
    const [timer, setTimer] = useState('');

    const getTimeRemaining = (e:any) => {
        var today = new Date()
        const total = Date.parse(e) - Date.parse(today.toString());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }

    const startTimer = (e:any) => {
        let { total, hours, minutes, seconds } = getTimeRemaining(e);
        if (total >= 0) {

            setTimer(
                (hours > 9 ? hours : '0' + hours) + ':' +
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        }
        console.log("total",total)
        if(total === 0){
            nextClick()
        } 
    }

    const clearTimer = (e:any) => {
 
        setTimer('00:00:59');
  
        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 59);
        return deadline;
    }

    if(timer === '00:00:00'){
        clearTimer(getDeadTime());
    }

    useEffect(() => {
         setTimer('00:00:00');
        nextClick()
    }, [])

    const nextClick = () => {
        dispatch(setIncorrectAnwerErr(false))
        setQuestionindex(questionindex + 1)

        dispatch(setCorrectAnwers(''))
        if (questionindex + 1 <= quizQuestion.length) {
            dispatch(NextQuestion(quizQuestion[questionindex]));
        } else {
            navigate("/score")
        }

        if(questionData.question.question){
            if (!correctanswersData) {
                dispatch(setAnsHistory(questionData.question.question, "Not anwers"))
    
            } else if (correctanswersData !== questionData.question.correctAnswer) {
                dispatch(setAnsHistory( questionData.question.question, "false"))
                setincorrectAns(true)
            } else {
                dispatch(setAnsHistory( questionData.question.question, "true"))
            }
        }

    }

    const handleNextClick = () => {
        setTimer('00:00:00');
        nextClick()
    }

    const questionData = useSelector((state: RootState) => state.questions)
    const correctanswersData = useSelector((state: RootState) => state.questions.answers)
    const errorData = useSelector((state: RootState) => state.questions.ansError)
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    <div>Question {questionindex} / {TOTAL_QUESTION}</div>
                     {errorData && (<div> <Alert severity="error">Incorrect Answer!</Alert></div>)}
                    <div><h2>{timer}</h2></div>
                    <Item>{questionData && questionData.question.question}</Item>
                    <Item>{questionData.question.answers && questionData.question.answers.map((anwersData: string) => (<QuizQuestioButton quizanwers={anwersData} correctans={questionData.question.correctAnswer} />))}</Item>
                    <Item><b>Correct Anwers:</b> {correctanswersData !== '' && questionData.question.correctAnswer}</Item>
                </Grid>
            </Grid>
            <Button variant="contained" onClick={handleNextClick}>Next</Button>
        </div>
    )
}


