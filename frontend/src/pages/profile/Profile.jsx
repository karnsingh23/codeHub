import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './profile.css';

function Profile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:3000/api/user/getScore', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        alert('Error fetching scores');
      });
  }, []);

  return (
    <div className="profile-container">
      <h1>My Quizzes</h1>

      <div className="quiz-cards-container">
        {data &&
          data.map((item, index) => (
            <div key={index} className="quiz-card">
              <div className="quiz-title">{item.quizTitle}</div>
              <div className="quiz-score">Score : {item.score}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Profile;
