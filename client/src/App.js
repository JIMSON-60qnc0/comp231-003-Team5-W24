// client/src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import Header from './components/Header';

import HomePage from './components/Home/home';
import Register from './components/Register/register';
import Login from './components/Login/Login';
import MathsCoursePage from './components/Maths/maths';
import QuizPage from './components/Quiz1/quiz1';



function App() {
  return (
    <BrowserRouter>
            <div>
                
                <Routes>
                    <Route path="/" element={<Login />} />

                    <Route path="/home" element={<HomePage />} />

                    
                    <Route path="/registration" element={<Register />} />  
                    <Route path="/login" element={<Login />} />
                    <Route path="/courses/maths" element={<MathsCoursePage />} />
                    <Route path="/courses/maths/quiz1" element={<QuizPage />} />
                    {/* Add more routes for other pages */}
                </Routes>
            </div>
        </BrowserRouter>
);
}

export default App;
