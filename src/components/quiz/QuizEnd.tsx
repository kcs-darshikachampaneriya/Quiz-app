import React,{useState} from 'react'
import { useDispatch, useSelector } from "react-redux"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TOTAL_QUESTION } from '../../constants/constant';
import {RootStateQuizEnd} from '../../interfaces/types'

function createData(
  question: string,
  isCorrect: number,
) {
  return { question, isCorrect };
}

export const QuizEnd = () => {
  const [result,setResult]=useState(true);

  const correctscoreData = useSelector((state: RootStateQuizEnd) => state.questions.score)
  const historyData = useSelector((state: RootStateQuizEnd) => state.questions.historyData)

  return (

    <div>
      {result && (<div>
      <div style={{ paddingLeft: '550px', paddingRight: '100px', color: 'pink', fontSize: '30px' }}>
        <a href="/score">Result : {(correctscoreData / TOTAL_QUESTION) * 100} % </a>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Question</TableCell>
                <TableCell align="right">Is Correct Anwers</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {historyData.map((row:any) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {row.Question}
                  </TableCell>
                  <TableCell align="right">{row.isCorrect}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <a href='/' style={{ paddingLeft: '650px', paddingRight: '100px', fontSize: '20px'}}>Start Quiz</a>
        </TableContainer>
      </div>
      </div>
      )}
    </div>
  )
}
