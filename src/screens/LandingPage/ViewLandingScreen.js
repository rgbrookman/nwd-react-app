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
import { faFileLines, faHeadphones, faCameraRetro, faFilm, faMagnifyingGlass, faToggleOn, faToggleOff, faQuoteLeft, faSolarPanel, faPlugCircleBolt, faRepeat } from '@fortawesome/free-solid-svg-icons'
import Loading from '../../components/Loading/Loading';
import FullDock from '../../components/Dock/FullDock';
import spiral from  '../../spiral.png';
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
const [cursorDisplayState, setCursorDisplayState] = useState(false);
const [toggleIcon, setToggleIcon] = useState("faToggleOn");
const [tutorialState, setTutorialState] = useState('tutorial');

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

  const showTutorial = () => {
    if(tutorialState === 'tutorial video') {
      setTutorialState(tutorialState => 'tutorial');
    } else {
      setTutorialState(tutorialState => 'tutorial video');
    }
  }

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
   
    <div className="side">
   <Sidebar />
   </div>
    <section className="newsfeed">
      <div className="title">
        <h4>NWD Feed:</h4><span>Last Update: 03/09/2023 17:34:00</span>
      </div>
      <div className={tutorialState}>
   <iframe className='tutorialPlayer'
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/zJkUF4o2D1o}`}>
  </iframe>
</div>

<div className="newsitem">
        <div className="header">
          <div className="headerIcon">
          <FontAwesomeIcon
            id="video"
            className="icon"
            icon={faFilm}/> 
          </div>
          
          <div className="nameDate">
            <h6>Video</h6>
            <span>19/12/2022</span>
            </div>
        </div>
        
        <div className="insight">
          <h2>On Impact</h2>
          <p>I love this clip. It is not some grandstanding moment, 
            or famous focal point in sporting history. It is simply the head caterer at the Norwegian Football Team called <a href={'https://www.moldefk.no/'} target="_blank">Molde FK</a> reflecting on her experience with 
            the much celebrated Manchester City striker, Erling Haaland. Her remembrances of what he used to eat, with a rye smile on her face, and then her clear emotion on how 
            deserving he is of his success and how she missed him.</p>

            <p>It is a clip I keep in a bookmarks folder called 'Nice People', and I use it sometimes as a reminder of the power working hard to be very good (high skill, high value) and combining that with also being very kind.</p>
          
          <iframe 
          width="560" 
          height="315"
          className='newsFeedPlayer'
          title='Youtube player'
          sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
          src="https://www.youtube.com/embed/YY8bKoospnc?start=241">
          </iframe>
        </div>
      </div>

      <hr className="dividingLine"></hr>

      <div className="newsitem">
        <div className="header">
          <div className="headerIcon">
          <FontAwesomeIcon
            id="quote"
            className="icon"
            icon={faQuoteLeft}/> 
          </div>
          
          <div className="nameDate">
            <h6>Quote</h6>
            <span>19/12/2022</span>
            </div>
        </div>
        
        <div className="quote">
          <h2><i>"I try all things. I achieve what I can."</i></h2>
          <span>Herman Melville</span>
          <hr className="dividingLineThin"></hr>
          <span>
            <strong>I am hugely fond of this quote. 
              You can't be a master of every activity 
              but you can be masterful at enjoying every activity; an art made possible through a present and playful mind.
              Some activities you will do excellently, achieving levels of skill or reward as a result; and this quote applies there. 
              There is nothing wrong - in isolation - with being grateful for and proud with your high skill. You are achieving what you can. 
              <br></br>
              Similarly, that thing you are vulnerable enough to try in a group for the first time; you know you may be the worst at it, you know you may fail in some way; that applies too.
              Being vulnerable and calm is a hugely motivating force in the lives of others. It empowers them to do the same, and feel less anxious. Also, there is a quiet joy that comes from doing any task, 
              if only you are quiet and calm enough to find it. Washing up, pickling cabbage, arm knitting, changing the sheets, presenting to a large group, scoring a goal, 
              revising for a test. Nothing has any inherent meaning or impact on you. So why not choose a joyful and mindful perspective?
            </strong>
          </span>
        </div>
      </div>


      <hr className="dividingLine"></hr>

      

 <div className="newsitem">
        <div className="header">
          <div className="headerIcon">
          <FontAwesomeIcon
            id="blog"
            className="icon"
            icon={faFileLines}/> 
          </div>
          
          <div className="nameDate">
            <h6>Blog Post</h6>
            <span>19/12/2022</span>
            </div>
        </div>
        
        <div className="blog">
          <h2>On Putting Joy and Purpose First</h2>
          <span>Time, energy and attention are perhaps humanities 3 largest unspoken commodities. In any one of us, the successful marriage of these valuable assets in the name of an authentic ambition can serve to make each day full of joy, purpose and love. However, if they become detached, and have no distinct direction in which to flow, life can feel like a vacuum; devoid of any feeling or fraternity.</span>
          <a href={'https://www.nowasteddays.org/blog/gratitude-learnings'} target="_blank">Link to Article</a>
        </div>
      </div>

      {/* <hr className="dividingLine"></hr>

      <div className="newsitem">
        <div className="header">
          <div className="headerIcon">
          <FontAwesomeIcon
            id="video"
            className="icon"
            icon={faFilm}/> 
          </div>
          
          <div className="nameDate">
            <h6>Video</h6>
            <span>19/12/2022</span>
            </div>
        </div>
        
        <div className="insight">
          <h2>Inspiration: ABC</h2>
          <span>Specifics</span>
          <iframe 
          width="560" 
          height="315"
          className='newsFeedPlayer'
          title='Youtube player'
          sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
          src="https://www.youtube.com/embed/THCpkFIA3E0">
          </iframe>

        </div>
      </div>

      <hr className="dividingLine"></hr>

      <div className="newsitem">
        <div className="header">
          <div className="headerIcon">
          <FontAwesomeIcon
            id="picture"
            className="icon"
            icon={faCameraRetro}/> 
          </div>
          
          <div className="nameDate">
            <h6>Picture</h6>
            <span>19/12/2022</span>
            </div>
        </div>
        
        <div className="picture">
          <h2>Picture Title</h2>
          <span>Specifics</span>
          <img src={spiral} width="560"></img>
          
        </div>
      </div>

      <hr className="dividingLine"></hr>

      <div className="newsitem">
        <div className="header">
          <div className="headerIcon">
          <FontAwesomeIcon
            id="podcast"
            className="icon"
            icon={faHeadphones}/> 
          </div>
          
          <div className="nameDate">
            <h6>Podcast Name</h6>
            <span>19/12/2022</span>
            </div>
        </div>
        
        <div className="insight">
          <h2>Podcast Name</h2>
          <span>Description of Podcast</span>
        </div>
      </div>

      <div className="newsitem">
        <div className="header">
          <div className="headerIcon">
          <FontAwesomeIcon
            id="insight"
            className="icon"
            icon={faMagnifyingGlass}/> 
          </div>
          
          <div className="nameDate">
            <h6>Insight</h6>
            <span>19/12/2022</span>
            </div>
        </div>
        
        <div className="insight">
          <h2>On Slowing Down</h2>
          <span>blandit libero volutpat sed cras ornare arcu dui vivamus arcu felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat</span>
        </div>
      </div>

      <hr className="dividingLine"></hr> */}
      
    
    </section>

    <section className="community">
      <div className="title">
        <div>
          <h6>Community Insights:</h6>
        </div>
      <input type="search" placeholder="Search" disabled/>
      </div>
      <h3>Coming in Spring 2023</h3>

      {/* <hr className="dividingLine"></hr>

      <div className="insightRow">
        <h5>Lorem Ipsum</h5>
        <span>Lorem Ipsum</span>
      </div> */}
      
    </section>
<div className="hideDockLP">
   <HideDock 
    toggleOverlay={cursorDisplayToggle}
    flashIcon={dayIconMethod}
    iconState={dayIconState} 
    showTutorial={showTutorial}
   />
   </div>
   </main>
                 
   
   </>
   
   : 
   <>
       <CentralHeaderLP />
<main className="loggedOutMain">
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


</main>



<ClassicFooter />
</>
}
</>

  );
}
