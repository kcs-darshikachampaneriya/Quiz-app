import React, {Fragment,useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Dispatch } from "redux"
import { QuizQuestion } from './QuizQuestion';
import {getQuizData} from '../../actions/quizAction'
import {RootState} from '../../interfaces/types'

export const Quiz = () => {
  const dispatch: Dispatch<any> = useDispatch()

  useEffect(() => {
    dispatch(getQuizData());
  }, [])

  const questionData = useSelector((state: RootState) => state.questions)

  return (
    <Fragment>
       {questionData.data.length > 0 && <QuizQuestion quizQuestion={questionData.data}/>}
    </Fragment>
  )
}


