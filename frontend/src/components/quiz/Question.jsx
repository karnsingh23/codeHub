import React from "react";
import Options from "./Option";
import './question.css'

const Question = ({ question, selectedOption, onOptionChange, onSubmit }) => {
    return (
        <div className="question-container">
            <h3 className="question-id">Question {question.id}</h3>
            <h5 className="question-text">{question.question}</h5>
            <form onSubmit={onSubmit} className="question-form">
                <Options
                    options={question.options}
                    selectedOption={selectedOption}
                    onOptionChange={onOptionChange}
                />
                <button  type="submit" className="submit-btn">
                    Next
                </button>
            </form>
        </div>
    );
};

export default Question;
