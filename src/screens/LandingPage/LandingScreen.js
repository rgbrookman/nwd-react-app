import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import LandingPageHeader from '../../components/Header/LandingPageHeader';
import Footer from '../../components/Footer/Footer';
import ReducedFooter from '../../components/Footer/ReducedFooter';
import ControlledCarousel from '../../components/Carousel/Carousel';
import { listDays } from '../../actions/dayActions';
import { listYears } from '../../actions/yearActions';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { createWeekAction, listWeeks } from '../../actions/weekActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSolarPanel, faPlugCircleBolt, faRepeat } from '@fortawesome/free-solid-svg-icons'
import Loading from '../../components/Loading/Loading';
import {Helmet} from "react-helmet"
import { ErrorMessage } from '../../components/Error/ErrorMessage';
import axios from "axios";
import logo from '../../NWD_Logo_White.png';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import './landingpage.css';


export default function LandingScreen(history) {
  const [clickBox, setClickBox] = useState(false);
  const [linkRefCreate, setLinkRefCreate] = useState(false);
  const [linkRefUpdate, setLinkRefUpdate] = useState(false);
  const [videoID, setVideoID] =useState('SfQNtiEH3M4');
  const [videoDisplay, setVideoDisplay] =useState(false);
  const [textDisplay, setTextDisplay] =useState(true);

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

  const valueState = {
    hide: {
      display: "none",
    },
    show: {
      display: "block",
    },
  };

  const hideState = {
    hide: {
      display: "none",
    },
    show: {
      display: "flex",
    },
  };


const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

const platformExplainer = 'HZb2wQ-zAQo';
const visionExplainer = 'tSuRg3bqgIg';

  return (

    <>
    <>
  <Helmet>
                    <title>Welcome</title>
                </Helmet>
                </>

      <LandingPageHeader />

    { userInfo ?
      <main className="landingPageLogInMain">
       



        <motion.h1 
     className="landingPageHeaderText"
     animate={ textDisplay ? "show" :  "hide" }
    variants={hideState}
    >
          {userInfo.name}, <br/>this is your NoWastedDays.</motion.h1>
<hr className="dividingLine" />
         
          { vw > 800 ? 
          <>
      <motion.div 
        className="lpVideoDiv"
        animate={ videoDisplay ? "show" : "hide"}
        variants={hideState}
        style={{marginBottom: "24px"}}>

<iframe className='landingPageVideo'
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/${videoID}?start=0`}
        style={{width: "600px", height: "400px", borderRadius: "10px"}}>
</iframe>
      </motion.div>

<div className="landingPageButtonDiv">

  <button className="landingPageButton"
  onClick={()=>{
  setVideoID( videoID => visionExplainer);
  setVideoDisplay( videoDisplay => !videoDisplay);
  setTextDisplay( textDisplay => !textDisplay);
}}>The Vision</button>

<button className="landingPageButton"
onClick={()=>{
  setVideoID( videoID => platformExplainer);
  setVideoDisplay( videoDisplay => !videoDisplay);
   setTextDisplay( textDisplay => !textDisplay);
}}>How to Get Started</button>
<div id="feedbackButton" data-tooltip="Use Feedback Page in the Header or Contact Page in the Footer <3">
<button   className="landingPageButton"
onClick={()=>{
  setVideoID( videoID => platformExplainer);
  setVideoDisplay( videoDisplay => !videoDisplay);
   setTextDisplay( textDisplay => !textDisplay);
}}>Your Feedback</button>
</div>

</div>
</>
: null }

      <hr className="dividingLine" />
      <motion.div
      animate={ clickBox ? "show" : "hide"}
      variants={valueState}>

      <Container>
      <Row>
      <Col>
      <div className="landingPageBox"
      >
        <a href={linkRefCreate.toString()}>Create</a>
      </div>
        </Col>
        <Col>
        <div className="landingPageBox">
          <a href={linkRefUpdate.toString()}>Update</a>
        </div>
          </Col>
          <Col>
          <div className="landingPageBox">
            <a id="close" onClick={()=> {
              setClickBox(clickBox => !clickBox);
            }}>Close</a>
          </div>
            </Col>
        </Row>
      </Container>
        </motion.div>

  { vw > 800 ? null  :
      <Container className="selectionContainer mt-3">
      <Row>
      <Col>
        {!years ? <Loading /> : years.map((year) =>
        <div key={year._id} className="landingPageBox inactive"
        onClick={()=> {
          setClickBox(clickBox => !clickBox);
          setLinkRefCreate('/year/create');
          setLinkRefUpdate(`/year/${year._id}`);
        }}>
          <h1>Year</h1>
        </div>
              )}
      </Col>
      <Col>
      {!weeks ? <Loading /> :weeks
            .filter((week, i, weeks) => weeks.indexOf(week) === weeks.length -1 )
            .map((week) => (


      <div key={week._id} className="landingPageBox inactive"
      onClick={()=> {
        setClickBox(clickBox => !clickBox);
        setLinkRefCreate('/week/create');
        setLinkRefUpdate(`/week/${week._id}`);
      }}>
        <h1>Week</h1>
      </div>
        ))}

      </Col>
      </Row>
      <Row className="mt-3">
      <Col>
      {!days ? <Loading /> : days
            .filter((day, i, days) => days.indexOf(day) === days.length -1 )
            .map((day) => (

      <div key={day._id} className="landingPageBox inactive"
      onClick={()=> {
        setClickBox(clickBox => !clickBox);
        setLinkRefCreate('/today');
        setLinkRefUpdate(`/today/${day._id}`);
      }}>
        <h1>Day</h1>
      </div>
        )  )}

      </Col>

      </Row>
      </Container>
      }

{ vw < 800 ? 
          <>
      <motion.div 
        className="lpVideoDiv"
        animate={ videoDisplay ? "show" : "hide"}
        variants={hideState}>

<iframe className='landingPageVideoMobile'
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/${videoID}?start=0`}
        >
</iframe>
      </motion.div>
<hr />
<Container className="landingPageButtonDivMobile d-flex justify-cfaffafafontent-evenly">
<Row>
  <Col>
<button className="landingPageButtonMobile" 
  onClick={()=>{
  setVideoID( videoID => visionExplainer);
  setVideoDisplay( videoDisplay => !videoDisplay);
}}>Vision</button>
</Col>

  <Col>
  <button className="landingPageButtonMobile"
onClick={()=>{
  setVideoID( videoID => platformExplainer);
  setVideoDisplay( videoDisplay => !videoDisplay);
}}>How To Get Started</button>
  </Col>
  <Col>
  <button className="landingPageButtonMobile">
    <a className="lpLinkMobile" href="/today" >Log Your Day</a>
  </button>
  </Col>
</Row>
</Container>
</>
: null }

 

      </main>
      :
      <Container className="landingPageNoLogin" fluid>

      <Row className="text-center mx-3 my-4">
      <div className="landingPageRowHeader">
      <span className="landingPageHeaderText">Welcome to NoWastedDays</span>

          </div>
      <span className="strapLine">Organising your mind just got a little bit better</span>

        </Row>

        <Row className="landingPageRow mx-3 align-items-center">
        <Col className="benefitCol text-center mt-4" sm={12} md={4}>

        <FontAwesomeIcon
            className="planningIcon"
          icon={faSolarPanel}/>

        <h3 className="benefitHeader">Planning</h3>
        <span className="benefitExplainer">Simplify your day around 5 key moments & score your success.</span>
          </Col>
          <Col className="benefitCol text-center mt-4" sm={12} md={4}>
          <FontAwesomeIcon
              className="primingIcon"
            icon={faPlugCircleBolt}/>
        <h3 className="benefitHeader">Priming</h3>
          <span className="benefitExplainer">Walk through unique experiences to help you set up each day for maximum joy and growth.</span>
            </Col>
            <Col className="benefitCol text-center mt-4" sm={12} md={4}>
            <FontAwesomeIcon
                className="playbackIcon"
              icon={faRepeat}/>
            <h3 className="benefitHeader">Playback</h3>
              <span className="benefitExplainer">Look at your days from a healthy distance through your own graphs and charts.</span>
              </Col>
                  </Row>
      </Container>
    }

{ vw > 800 ? <Footer /> : <ReducedFooter /> }

</>
  );
}
