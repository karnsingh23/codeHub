import React from 'react';
import Card from '../../components/card/Card';
import './docspage.css';  
import { useNavigate } from 'react-router-dom';

function DocsPage() {
    const navigate = useNavigate();
  return (
    <div className="container">
      <Card
        image="https://media.licdn.com/dms/image/v2/D4D12AQEaTK5_cv5Fmg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1677082453584?e=2147483647&v=beta&t=VXl-woeyLRR0V2W5m4YVtXdzfqLLDZwowWRNcY-NXDc"
        title="HTML"
        description="Learn the fundamentals of HTML, the standard markup language for creating web pages."
        buttonText="Start Learning"
        onClick={()=>{navigate('/docs/html')}}
      />
      <Card
        image="https://miro.medium.com/v2/resize:fit:600/1*OFsc0SD55jhi8cjo7aCA4w.jpeg"
        title="CSS"
        description="Discover how to style your web pages with CSS, making them visually appealing and responsive."
        buttonText="Start Learning"
        onClick={()=>{navigate('/docs/css')}}
      />
      <Card
        image="https://www.squash.io/wp-content/uploads/2023/11/javascript-series.jpg"
        title="JavaScript"
        description="Understand the basics of JavaScript and how to add interactivity and dynamic content to your websites."
        buttonText="Start Learning"
        onClick={()=>{navigate('/docs/javascript')}}
      />
      <Card
        image="https://www.patterns.dev/img/reactjs/react-logo@3x.svg"
        title="React"
        description="Dive into React, a popular JavaScript library for building user interfaces, especially single-page applications."
        buttonText="Start Learning"
        onClick={()=>{navigate('/docs/react')}}
      />
      <Card
        image="https://miro.medium.com/v2/resize:fit:1400/1*__f27S-qQF2CAASt5bOwqg.png"
        title="Tailwind"
        description="Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to help you build custom designs without writing custom CSS."
        buttonText="Start Learning"
        onClick={()=>{navigate('/docs/tailwind')}}
      />
      <Card
        image="https://blog.appsignal.com/_next/image?url=%2Fimages%2Fblog%2F2022-04%2Fnode18.png&w=3840&q=50"
        title="Node.js"
        description="Learn about Node.js, a runtime environment for executing JavaScript on the server side."
        buttonText="Start Learning"
        onClick={()=>{navigate('/docs/nodejs')}}
      />
      <Card
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqgQGX4ZoIczkvyw2TqlQxMECeAiDO4kwdBunafWJcq0bmMu9sBIHMt7Yn_N9eFNiAqSc&usqp=CAU"
        title="MongoDB"
        description="Discover MongoDB, a NoSQL database that stores data in a flexible, JSON-like format."
        buttonText="Start Learning"
        onClick={()=>{navigate('/docs/mongodb')}}
      />
      <Card
        image="https://www.tshirtgeek.com.br/wp-content/uploads/2021/09/com037-scaled.jpg"
        title="SQL"
        description="Understand the basics of SQL, the language used to manage and manipulate relational databases."
        buttonText="Start Learning"
        onClick={()=>{navigate('/docs/sql')}}
      />
    </div>
  );
}

export default DocsPage;
