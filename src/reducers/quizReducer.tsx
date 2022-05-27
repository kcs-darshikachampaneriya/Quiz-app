
import { NEXT_QUESTION, SET_SCORE, SET_ANSWERS, ANS_HISTORY, INCORRECT_ANS_ERR, GET_QUIZ_DATA } from '../actions/actionTypes'
import { QuizAction, QuizState } from '../interfaces/types'

const initialState: QuizState = {
    question: [],
    score: 0,
    answers: '',
    ansError: null,
    historyData: [],
    data: [],
}

const reducer = (
    state: QuizState = initialState,
    action: QuizAction
): QuizState => {
    switch (action.type) {
        case GET_QUIZ_DATA:
            return {
                ...state,
                data: action.payload,
            }
        case NEXT_QUESTION:
            return {
                ...state,
                question: action.payload,
            }
        case SET_SCORE:
            return {
                ...state,
                score: state.score + 1
            }
        case SET_ANSWERS:
            return {
                ...state,
                question: state.question,
                answers: action.payload
            }
        case ANS_HISTORY:
            return {
                ...state,
                historyData: [...state.historyData, action.payload]
            }
        case INCORRECT_ANS_ERR:
            return {
                ...state,
                ansError: action.payload
            }
        default:
            return state
    }
}

export default reducer