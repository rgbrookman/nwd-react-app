import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import CentralHeader from '../../components/Header/CentralHeader';
import CentralHeaderLP from '../../components/Header/CentralHeaderLP';
import MouseTooltip from '../../components/MouseTooltip/MouseTooltip';
import Sidebar from '../../components/Sidebar/Sidebar';
import { listDays } from '../../actions/dayActions';
import { listYears } from '../../actions/yearActions';
import ClassicFooter from '../../components/Footer/ClassicFooter';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { createWeekAction, listWeeks } from '../../actions/weekActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOn, faToggleOff, faSolarPanel, faPlugCircleBolt, faRepeat } from '@fortawesome/free-solid-svg-icons'
import Loading from '../../components/Loading/Loading';
import FullDock from '../../components/Dock/FullDock';
import HideDock from '../../components/Dock/HideDock';
import {Helmet} from "react-helmet";
import { ErrorMessage } from '../../components/Error/ErrorMessage';
import axios from "axios";
import logo from '../../NWD_Logo_White.png';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import './landingpagescreen.css';
import { propTypes } from 'react-bootstrap/esm/Image';


export default function ViewLandingScreen(history) {
  const [clickBox, setClickBox] = useState(false);
  const [linkRefCreate, setLinkRefCreate] = useState(false);
  const [linkRefUpdate, setLinkRefUpdate] = useState(false);
  const [videoID, setVideoID] = useState('SfQNtiEH3M4');
  const [videoDisplay, setVideoDisplay] =useState(false);
  const [textDisplay, setTextDisplay] =useState(true);
  const [dayIconState, setDayIconState] =useState(false);
  

  const [classState, setClassState] =useState('journal outer');

  const [lpCursorState, setLpCursorState] = useState();

  const [cursorState, setCursorState] = useState('');
const [cursorDisplayState, setCursorDisplayState] = useState(true);
const [toggleIcon, setToggleIcon] = useState("faToggleOn");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const yearList = useSelector((state) => state.yearList);
  const { years } = yearList;

  const weekList = useSelector((state) => state.weekList);
  const { weeks } = weekList;

  const dayList = useSelector((state) => state.dayList);
  const { loading, error,  days } = dayList;

  useEffect(() => {
dispatch(listYears());
  }, [dispatch, userInfo, history])

  useEffect(() => {
    dispatch(listWeeks());
  }, [dispatch, userInfo, history]);

  useEffect(() => {
    dispatch(listDays());
  }, [dispatch, userInfo, history]);

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);


const dayIconMethod = {
  iconOff: {
    backgroundColor: '#004a22',
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      repeat: 20,
    },
  },
iconOn: {
  color: "whitesmoke",
},
};

function tooltipSelector () {
  if(!userInfo) {
    setLpCursorState(lpCursorState => 'A mindfulness journal that works with you, not through');
    setCursorState(cursorState => "");
  } else if (days && days.length < 1 && userInfo){
    setLpCursorState(lpCursorState => "");
    setCursorState(cursorState => 'Welcome to NWD! Time to start your first day! Click the calendar button below.');
  } else if (userInfo && days && days.length > 0 && weeks && weeks.length < 1) {
    setCursorState(cursorState => 'Great stuff! Remember to check back in later to review and reflect! When you have a moment, try planning out your week.');
  } else if (userInfo && days && days.length > 0 && weeks && weeks.length > 0 && years && years.length < 1) {
    setCursorState(cursorState => 'Brilliant stuff. Week planning is very helpful, and even more so if you have a vision for the year you are working towards. Jump onto the year page and start mapping!');
  } else if (userInfo && days && days.length > 0 && weeks && weeks.length > 0 && years && years.length > 0) {
    setCursorState(cursorState => 'Smashed it! Time to have a look at the quiz as you build your first week of logged days');
  } else if (userInfo && days && days.length >= 7 && weeks && weeks.length > 0 && years && years.length > 0 && localStorage.quiz_start === "0") {
    setCursorState(cursorState => 'You are well and truly heating up. Would you consider sharing NWD with a friend ');
  } else if (userInfo && days && days.length >= 7 && weeks && weeks.length > 0 && years && years.length > 0 && localStorage.quiz_start === "1" && localStorage.quiz_end === "1") {
    setCursorState(cursorState => 'We are in the presence of a master. Maybe consider sharing your wisdom with the community?');
  };
};

const cursorDisplayToggle = () => {
  setCursorDisplayState(cursorDisplayState => !cursorDisplayState);
  };

  const changeIcon = () => {

    if(cursorDisplayState) {
      return faToggleOn;
    } else {
      return faToggleOff;
    }
  };

useEffect(()=> {
  tooltipSelector();
})

  return (
    <>
      <MouseTooltip 
          visible={cursorDisplayState}
          offsetX={15}
          offsetY={10}
          zIndex={1000}
        >
        <h1 className="sickTooltip">{cursorState}</h1>
        </MouseTooltip>
    <>
        <Helmet>
                      <title>Homepage</title>
                  </Helmet>
                  </>
  
   { userInfo ? 
       <>


    
           <CentralHeader />
   <main className="loggedInMain">

   <Sidebar />
   <HideDock 
   toggleOverlay={cursorDisplayToggle}
   flashIcon={dayIconMethod}
   iconState={dayIconState} />
   </main>
                 
   
   </>
   
   : 
   vw > 600 ? 
   <>
       <CentralHeaderLP />
<main className="loggedInMain">
<div class="main">
  <div class="part one">Organising your</div>
  <div class="part two">
    <span> Mind</span>
    <span> Day </span>
    <span> Week </span>
    <span> Year </span>
    <span> Values </span>
    <span> Vision </span>
  </div>
  <div class="part three">has never been better.</div>
</div>
{/* <div className="tile left">

<h1>Simple</h1>
<p>NWD takes the simple principles of a paper mindfulness journal but makes them work harder for your joy and growth.</p>

         </div>

        <div className="tile centre">
        <h1>Smart</h1>
        <p>NWD hosts unique experiences and advice that make it easy to do hard thinking about your own life and mind</p>
        </div>
        <div className="tile right">
        <h1>Safe</h1>
        <p>Your journal inputs and all of your other data is encrypted as well as never segmented, shared or sold. Only you can see and use it.</p>
</div> */}

</main>
{/* <section className="featuredIn">
  <span>A Few Thoughts from Current Users</span>
</section>
<section className="currentlyHiring">
  <span>We are currently recruiting for the following positions: </span>
</section>             */}


<ClassicFooter />
</>
: 
<>
<main className="landingPage mobile">
  <h1>App coming soon to mobile</h1>
  <a href={'https://www.nowasteddays.org/'}>Sign up to Mailing List</a>
  <a href={'https://www.instagram.com/nowasteddays/'}>Follow NWD on Instagram</a>
</main>
</>



   
   
   }


     
  
    
  
  </>
  );
}
