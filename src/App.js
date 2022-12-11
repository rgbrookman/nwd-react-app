import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

// Year
import CreateYearScreen from './screens/Year/CreateYearScreen';
import UpdateYearScreen from './screens/Year/UpdateYearScreen';

// Day
import CreateDayScreen from './screens/Day/CreateDayScreen';
import UpdateDayScreen from './screens/Day/UpdateDayScreen';

// Week
import UpdateWeekScreen from './screens/Week/UpdateWeekScreen';
import CreateWeekScreen from './screens/Week/CreateWeekScreen';

// Landing
import ViewLandingScreen from './screens/LandingPage/ViewLandingScreen';

// Diary 
import ViewDiaryScreen from './screens/Diary/ViewDiaryScreen';

// Insight
import ViewInsightScreen from './screens/Insight/ViewInsightScreen';

// Quiz
import QuizIntroScreen from './screens/Quiz/Intro/QuizIntroScreen';
import QuizFeelingScreen from './screens/Quiz/Feeling/QuizFeelingScreen';
import QuizTasksScreen from './screens/Quiz/Tasks/QuizTasksScreen';
import QuizMindsetScreen from './screens/Quiz/Mindset/QuizMindsetScreen';
import QuizWaveScreen from './screens/Quiz/Wave/QuizWaveScreen';
import QuizRepresentativeScreen from './screens/Quiz/Representative/QuizRepresentativeScreen';
import QuizDebriefScreen from './screens/Quiz/Debrief/QuizDebriefScreen';
import RealQuizScreen from './screens/Quiz/Real/RealQuizScreen';
import FinalQuizScreen from './screens/Quiz/Real/FinalQuizScreen';

// Login / Register
import ViewLoginScreen from './screens/Login/ViewLoginScreen';
import ViewRegisterScreen from './screens/Register/ViewRegisterScreen';

//Experiences: Values
import ValuesScreen from './screens/Values/ValuesScreen';

//Experiences: Vision
// import VisionScreen from './screens/Values/VisionScreen';

//Experiences: Ikigai
// import IkigaiScreen from './screens/Values/IkigaiScreen';

//Experiences: Why
// import WhyScreen from './screens/Values/WhyScreen';

//Experiences: Quote
// import QuoteScreen from './screens/Values/QuoteScreen';

// Feedback Screen
import FeedbackScreen from './screens/Feedback/FeedbackScreen';

//Footer
import HelpScreen from './screens/Help/HelpScreen';
import AboutScreen from './screens/About/AboutScreen';
import ContactScreen from './screens/Contact/ContactScreen';
import ProfileScreen from './screens/Profile/ProfileScreen';
import PaymentScreen from './screens/Payments/PaymentScreen';


//Loading
import PropagateLoader from "react-spinners/PropagateLoader";

//Styles
import './App.css';
import './index.css';

//Misc
import ExportScreen from './screens/Export/ExportScreen';
import ExternalScreen from './screens/External/ExternalScreen';
import GoogleAnalytics from './utils/googleanalytics.js'


function App() {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<ViewLandingScreen />} />
          <Route path="/login" element={<ViewLoginScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/register" element={<ViewRegisterScreen />} />
          <Route path="/insight" element={<ViewInsightScreen />} />
          <Route path="/resources" element={<ExternalScreen />} />
          <Route path="/insight/quiz" element={<QuizIntroScreen />} />
          <Route path="/insight/quiz/feeling" element={<QuizFeelingScreen />} />
          <Route path="/insight/quiz/mindset" element={<QuizMindsetScreen />} />
          <Route path="/insight/quiz/moments" element={<QuizTasksScreen />} />
          <Route path="/insight/quiz/wave" element={<QuizWaveScreen />} />
          <Route path="/insight/quiz/representative" element={<QuizRepresentativeScreen />} />
          <Route path="/insight/quiz/debrief" element={<QuizDebriefScreen />} />
          <Route path="/insight/quiz/real_quiz" element={<RealQuizScreen />} />
          <Route path="/insight/quiz/real_quiz/end" element={<FinalQuizScreen />} />
          <Route path="/payc" element={<PaymentScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/week/create" element={<CreateWeekScreen />} />
          <Route path="/week/:id" element={<UpdateWeekScreen />} />
          <Route path="/help" element={<HelpScreen />} />
          <Route path="/feedback" element={<FeedbackScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/values" element={<ValuesScreen />} />
          <Route path="/year/create" element={<CreateYearScreen />} />
          <Route path="/year/:id" element={<UpdateYearScreen />} />
          <Route path="/today" element={<CreateDayScreen />} />
          <Route path="/today/:id" element={<UpdateDayScreen />} />
          <Route path="/diary" element={<ViewDiaryScreen />} />
        </Routes>
      </Router>

  );
}
export default App;
