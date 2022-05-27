import React, { useEffect, useState,ChangeEvent  } from 'react'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from "redux"
import {setCorrectAnwers,setScore,setIncorrectAnwerErr} from '../../actions/quizAction'
import {Props} from '../../interfaces/types'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export const QuizQuestioButton: React.FC<Props> = ({ quizanwers,correctans }) => {

    const dispatch: Dispatch<any> = useDispatch()

    const handleClick = (e: React.ChangeEvent<any>) => {
        dispatch(setCorrectAnwers(e.target.value))

        if(correctans == e.target.value){
            dispatch(setScore())
        } else if(correctans !== e.target.value){
            dispatch(setIncorrectAnwerErr(true))
        }
    }

    return (

            <div style={{ margin: "2px" }} >
                <Stack spacing={2}>
                    <Button variant="contained" value={quizanwers} onClick={handleClick}>{quizanwers}</Button>
                </Stack>
            </div>

            )
}


