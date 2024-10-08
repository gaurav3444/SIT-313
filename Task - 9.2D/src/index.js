import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // Import Navigate
import Login from './Login';
import Signup from './Signup';
import PostPage from './PostPage';
import FindQuestions from './FindQuestions';
import Plans from './plans';
import Completion from './Completion';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to Login */}
        <Route path="app" element={<App />} /> {/* Keep App Route */}
        <Route path="login" element={<Login />} />
        <Route path="post" element={<PostPage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="find_question" element={<FindQuestions />} />
        <Route path="plans" element={<Plans />} />
        <Route path="completion" element={<Completion/>} />
      </Routes>
      </BrowserRouter>
    </div>
);