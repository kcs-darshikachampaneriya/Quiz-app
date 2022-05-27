import React,{Fragment} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from './components/NavBar/NavBar';
import { Quiz } from './components/quiz/Quiz';
import { QuizEnd } from './components/quiz/QuizEnd';
import { Provider } from "react-redux";
import store from './store'

function App() {
  return (
    <Fragment>
      <Provider store={store}>
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Quiz/>} />
          <Route path='/score' element={<QuizEnd/>} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </Fragment>

  );
}

export default App;
