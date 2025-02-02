import React, { useState, useEffect } from "react";
import Question from "../../components/quiz/Question";
import {webBasics , sqlBasics, jsBasics, reactBasics} from '../../components/quiz/QuestionBank'
import Score from "../../components/quiz/Score";
import "./quiz.css";
import { useParams } from "react-router-dom";
import axios from 'axios';
const url = import.meta.env.VITE_API_URL

const Quiz = () => {
    const { num } = useParams();

  
    const [questionBank, setQuestionBank] = useState([]);
    const [quizTitle, setQuizTitle] = useState('')
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState("");
    const [score, setScore] = useState(0);
    const [quizEnd, setQuizEnd] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);


    useEffect(() => {
        if (num === "webBasics") {
            setQuestionBank(webBasics);  
            setQuizTitle('Web Basics')
           
            
        } else if (num === "sqlBasics") {
            setQuestionBank(sqlBasics); 
            setQuizTitle('SQL Basics') 
        }
        else if (num === "jsBasics") {
            setQuestionBank(jsBasics); 
            setQuizTitle('JS Basics') 
        }
        else if (num === "reactBasics") {
            setQuestionBank(reactBasics); 
            setQuizTitle('React Basics') 
        }
        
       
    }, [num]); 
    

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
        setErrorMessage("");
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (selectedOption === "") {
            setErrorMessage("Please select an option before submitting!");
            return;
        }
        checkAnswer();
        handleNextQuestion();
    };

    const checkAnswer = () => {
        if (selectedOption === questionBank[currentQuestion]?.answer) {
            setScore((prevScore) => prevScore + 1);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestion + 1 < questionBank.length) {
            setCurrentQuestion((prevQuestion) => prevQuestion + 1);
            setSelectedOption("");
        } else {
            setQuizEnd(true);
        }
    };

    const scoreStore = async () => {
        try {
            if(!score||!quizTitle){
                alert('score is not available')
            }
            const token = localStorage.getItem("token");  
            console.log(token);
            
    
            if (!token) {
                alert("You must be logged in");
                return;
            }
    
            
            const response = await axios.post(`${url}/api/user/score`, { score,quizTitle }, {
                headers: {
                    Authorization: `Bearer ${token}` 
                }
            })
    
            if (response.status === 200) {
                setSuccessMessage('Quiz submitted successfully!');
                setIsSubmitted(true);  
            } else {
                setSuccessMessage('Failed to submit score, try again later.');
            }
            
            
    
        } catch (error) {
            console.error("Error submitting score:", error);
            alert(`Error: ${error.message}`);
        }
    };
    
    
    
    

    return (
        <div className="quiz-container">
            <h1 className="quiz-title">Buzz QUIZ</h1>
            {successMessage && (
        <div className="success-message">{successMessage}</div>
    )}
            {!quizEnd ? (
                questionBank.length > 0 && (
                    
                    <Question
                        
                        question={questionBank[currentQuestion]}
                        selectedOption={selectedOption}
                        onOptionChange={handleOptionChange}
                        onSubmit={handleFormSubmit}
                    />
                    
                )
            ) : (
                <Score
                    
                    score={score}
                    onNextQuestion={handleNextQuestion}
                    className="quiz-score"
                />
            )}
            <button
                className="btn"
                onClick={scoreStore}
                disabled={isSubmitted} 
                >
                {isSubmitted ? 'Submitted' : 'Submit Test'} 
                </button>
            {errorMessage && (
                <div className="error-message">{errorMessage}</div>
            )}
           
        </div>
    );
};

export default Quiz;
