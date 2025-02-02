import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Footer from './components/footer/Footer'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import DocsPage from './pages/docsPage/DocsPage'
import Quiz from './pages/quiz/Quiz'
import './App.css'
import Docs from './pages/docs/Docs'
import Profile from './pages/profile/Profile'
import API from './pages/api/API'



function App() {
  const [isLoggedIn , setIsLoggedIn] = useState(!!localStorage.getItem("token"))

  return (
    <>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>} />
          <Route path='/docspage' element={<DocsPage/>} />
          <Route path='/quiz/:num' element={<Quiz/>} />
          <Route path='/docs/:language' element={<Docs/>} />
          <Route path='/myProfile' element={<Profile/>} />
          <Route path='/apidocs'  element={<API/>}/>
          
        </Routes>
       <Footer/>
      </Router>
    </>
  );
}

export default App
