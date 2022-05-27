export interface action1 {
    type:"GET_QUIZ_DATA";
    payload: QuizType | any
}

export interface action2 {
    type:"NEXT_QUESTION";
    payload: QuizType | any
}

export interface action3 {
    type:"NEXT_QUESTION";
    payload: QuizType | any
}

export interface action4 {
    type:"SET_ANSWERS";
    payload: QuizType | any
}

export interface action5 {
    type:"ANS_HISTORY";
    payload: QuizType | any
}

export interface action6 {
    type:"SET_SCORE";
}

export interface action7 {
    type:"INCORRECT_ANS_ERR";
    payload: QuizType | any
}

export type QuizType = {
    question: string,
    answers: string[]
    correctAnswer: string
}

export type QuizAction = action1 | action2 | action3 | action4 | action5 | action6 | action7 ;

export type QuizState = {
    question: any,
    score: number,
    answers: string
    ansError:any
    // historyData: ansArray[]
    historyData: any
    data:any
}

export type RootState = {
    questions: any,
}

export interface Props {
    quizanwers: string,
    correctans: string
}

export type RootStateQuizEnd = {
    questions: any,
    answers: string,
    score: number,
    historyData: any
}
