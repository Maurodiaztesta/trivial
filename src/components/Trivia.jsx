import './Trivia.scss'
import axios from 'axios';
import React, { useState } from 'react'
import Answers from './Answers';

const Trivia = () => {

    const [numQuestions, setNumQuestions] = useState();
    const [questions, setQuestions] = useState([]);


    const getQuestions = () => {
        axios.get(`https://opentdb.com/api.php?amount=${numQuestions}&type=multiple`).then(res => {
            console.log(res.data.results);
            setQuestions(res.data.results);
        })
    }

    const resetGame = () => {
        window.location.reload()
    }


    return (
        <body>
            <header className='header'>
                <h1 className='header__title'>
                <span className='header__title--letra' style={{color: "#C62828"}}> T </span>
                <span className='header__title--letra' style={{color: "#03A9F4"}}> R </span>
                <span className='header__title--letra' style={{color: "#FF9800"}}> I </span>
                <span className='header__title--letra' style={{color: "#FDD835"}}> V </span>
                <span className='header__title--letra' style={{color: "#EC407A"}}> I </span>
                <span className='header__title--letra' style={{color: "#4CB950"}}> A </span>
                <span className='header__title--letra' style={{color: "#795548"}}> L </span>
                </h1>
                <div className='header__div'>
                    <input className='header__div--input' type='number' name='num' value={numQuestions} onChange={(e) => setNumQuestions(e.target.value)} placeholder='Number of questions'></input>
                    <div>
                        <button className='header__div--button' onClick={getQuestions}>START GAME</button>
                        <button className='header__div--button' onClick={resetGame}>RESET GAME</button>
                    </div>
                </div>
            </header>
            <main className='main'>
                <div className='main__divPadre'>
                    {questions.map((question, index) => <div className='main__divPadre--hijo' key={index}>
                        <h3 className='main__divPadre--hijo--h1'>{question.question.toUpperCase()}</h3>
                        <Answers correctAnswer={question.correct_answer} incorrectAnswers={question.incorrect_answers}></Answers>
                    </div>)}
                </div>
            </main>
        </body>
        
    )
}

export default Trivia


