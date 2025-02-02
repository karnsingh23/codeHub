import React from 'react';
import Hero from '../../components/hero/Hero';
import Card from '../../components/card/Card';
import { Navigate, useNavigate } from 'react-router-dom';
import './home.css';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <Hero />
      <div className="quizes">
        <Card
          image="https://img.freepik.com/premium-vector/quiz-comic-pop-art-style_175838-505.jpg"
          title="Web Basics"
          description="Test your knowledge and challenge yourself with this fun and engaging quiz. Explore a variety of questions and see how many you can answer correctly!"
          buttonText="Start"
          onClick={()=>{navigate('/quiz/webBasics')}}
        />
        <Card
          image="https://www.wscubetech.com/resources/_next/image?url=https%3A%2F%2Fdeen3evddmddt.cloudfront.net%2Fuploads%2Fquiz%2Fsql%20quiz.png&w=750&q=75"
          title="SQL Basics"
          description="Test your knowledge and challenge yourself with this fun and engaging quiz. Explore a variety of questions and see how many you can answer correctly!"
          buttonText="Start"
          onClick={()=>{navigate('/quiz/sqlBasics')}}
        />
        <Card
          image="https://www.codermantra.com/wp-content/uploads/2023/03/javascript-quiz.png"
          title="JS Quiz"
          description="Test your knowledge and challenge yourself with this fun and engaging quiz. Explore a variety of questions and see how many you can answer correctly!"
          buttonText="Start"
          onClick={()=>{navigate('/quiz/jsBasics')}}
        />
        <Card
          image="https://media.licdn.com/dms/image/v2/D5612AQE7p9ZHV6DJdg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1716031326898?e=2147483647&v=beta&t=2VFnqCvavHYfBKpXETX2IsMr7kZrMUlK9HZO8zySERw"
          title="React Quiz"
          description="Test your knowledge and challenge yourself with this fun and engaging quiz. Explore a variety of questions and see how many you can answer correctly!"
          buttonText="Start"
          onClick={()=>{navigate('/quiz/reactBasics')}}
        />
      </div>

      <div className="docs">
        <div className="docsContainer">
        <Card
          image="https://img.freepik.com/free-vector/api-development-concept-illustration_114360-5180.jpg"
          title="API Documentation"
          description="Explore our API documentation to learn how to integrate with our services seamlessly. Includes detailed endpoints, parameters, and examples."
          buttonText="View Docs"
          onClick={()=>{navigate('/apidocs')}}
        />
        <Card
          image="https://img.freepik.com/premium-vector/programming-concept-illustration_73903-276.jpg"
          title="Coding Language Docs"
          description="Learn about various programming languages, their syntax, and best practices. Includes examples and guides for developers of all levels."
          buttonText="Explore Now"
          onClick={()=>{navigate('/docspage')}}
        />
        </div>
      </div>
    </>
  );
}

export default Home;
