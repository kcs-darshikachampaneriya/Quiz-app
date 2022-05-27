
import { NEXT_QUESTION, SET_SCORE, SET_ANSWERS, ANS_HISTORY, INCORRECT_ANS_ERR, GET_QUIZ_DATA } from '../actions/actionTypes'
import quizData from '../data/quiz.json'
import { Dispatch } from 'redux';
import { action1,action2,action4,action5,action6,action7 } from '../interfaces/types'

export function getQuizData() {
    return async (dispatch: Dispatch<action1>) => {
        try {
            dispatch({
                type: GET_QUIZ_DATA,
                payload: quizData.questions.slice(0,20)
            });

        } catch (err) {
            console.log(err)
        }
    }
}

export function NextQuestion(data: any) {
    return async (dispatch: Dispatch<action2>) => {

        try {
            dispatch({
                type: NEXT_QUESTION,
                payload: data
            });

        } catch (err) {
            console.log(err)
        }
    }
}

export function setScore() {
    return async (dispatch: Dispatch<action6>) => {

        try {
            dispatch({
                type: SET_SCORE,
            });

        } catch (err) {
            console.log(err)
        }
    }
}

export function setCorrectAnwers(answers: string) {
    return async (dispatch: Dispatch<action4>) => {

        try {
            dispatch({
                type: SET_ANSWERS,
                payload: answers
            });

        } catch (err) {
            console.log(err)
        }
    }
}

export function setAnsHistory(question: string, ans: string) {
    const obj = {
        Question: question,
        isCorrect: ans
    }
    return async (dispatch: Dispatch<action5>) => {

        try {
            dispatch({
                type: ANS_HISTORY,
                payload: obj,
            });

        } catch (err) {
            console.log(err)
        }
    }
}

export function setIncorrectAnwerErr(err: boolean) {
    return async (dispatch: Dispatch<action7>) => {

        try {
            dispatch({
                type: INCORRECT_ANS_ERR,
                payload: err,
            });

        } catch (err) {
            console.log(err)
        }
    }
}



