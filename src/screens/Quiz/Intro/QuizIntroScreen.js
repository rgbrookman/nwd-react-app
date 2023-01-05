import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import CentralHeader from '../../../components/Header/CentralHeader';
import { updateProfile } from '../../../actions/dayActions';
import { Card, Button, Row, Col, Container, Form } from 'react-bootstrap';
import TileLoading from '../../../components/Loading/TileLoading';
import { ErrorMessage } from '../../../components/Error/ErrorMessage';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faEraser } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../NWD_Logo_White.png';
import why from '../../../lnwh.gif';
import { Helmet } from "react-helmet";
import './quizintro.css';

export default function QuizScreen() {
  const [titleMain, setTitleMain] = useState(true);
  const [titleDiv, setTitleDiv] = useState(true);
  const [kickOff, setKickOff] = useState(false);
  const [sceneSet, setSceneSet] = useState(false);
  const [threeParts, setThreeParts] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);

  const showHideState = {
    hide: {
      display: "none",
    },
    show: {
      display: "flex",
    },
  }

  const showHideGrid = {
    hide: {
      display: "none",
    },
    show: {
      display: "grid",
    },
  }

  const loadingTimeout = () => {
    setTimeout(()=> {
      setPageLoading(false)
    }, 5000)
  }

  useEffect(()=> {
    loadingTimeout();
  })
  

  const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  return (
    <>
    <Helmet>
      <title>Art of Looking</title>
    </Helmet>
<CentralHeader />

<motion.main className="quizIntroMain"
 animate={ titleMain ? "show" : "hide"}
 variants={showHideState}
 onClick={()=> {
  setTitleMain(titleMain => false);
 setTitleDiv(titleDiv => false);
 setKickOff(kickOff => true);
}}>
  { pageLoading ? <TileLoading /> : 
<motion.div
  className="titleDiv"
  animate={ titleDiv ? "show" : "hide"}
  variants={showHideState}
  onClick={()=> {
  setTitleDiv(titleDiv => false);
  setKickOff(kickOff => true);
}}>

 <h1>The Art of Looking</h1>
  
{ vw < 800 ?  
<span><strong>Experience Only Available on Desktop</strong></span> 
: <><span><strong>Setup for Speedily and Safely Turning Your Insights into Greater Joy & Growth</strong></span>  
<hr className="dividingLine" />
  <span className="clickAnywhere">Click anywhere to start</span></> }
 

</motion.div>
}
</motion.main>

    <motion.div
      animate={ kickOff ? "show" : "hide"}
      variants={showHideGrid}
      className="quizDiv">
      <div className="leftCol">
        <div className="colTitle">
          <h3 className="quizHeaderWhite">Kicking Off</h3>
        </div>
          <br />
          <span>
            The <strong>Insight</strong> section of NWD is about giving anyone who wants it a completely different vantage point on their own life.
            <br />
            <br />
            Our own eyes provide a completely phenomenal view on the moments that make up our days.
            Both the eyes themselves and the perspective they afford are brilliant for helping forge connections with other humans, 
            fabulous for studying details in our
            immediate surroundings and terrific at facilitating the visceral glory of simply being alive.
            <br />
            <br />
            However, they are not well suited to
            breaking down our behaviours and reliably and regularly turning the best and worst of what we do into greater joy and growth. For that, you need more than a first person perspective.
          </span>
          <br />
            <br />
          <hr className="dividingLine" />
          <br />
          <span>
            All of the sections that make up NoWastedDays are especially designed to make many different vantage points on life possible.
            In the <strong>Insight</strong> section, you will find a host of graphs and charts that take your <strong>Today</strong> diary data
            and empower you to positively transform your level of self-awareness and self-assurance.
                <br />
          <br />
            However, not a single iota of insight or ounce of possibility can be created by simply playing back the data in a few simple charts.
          <br />
          <br />
            To open the door to safe, significant insight and action, there are two big buckets that need filling up first (and they can be found to your right).</span>
          <br />
          <br />
          <strong className='emphasis'>‘The Art of Looking’</strong>
            <span> is the digital faucet designed to help any user fill both buckets to the brim whilst their own dataset is getting sufficiently full.</span>
    </div>
  <div className="rightCol">
  <div className="rightContent">
  <Container>
  <Row>
  <Col>
  <div className="quizHeaderDiv">
    <span className="colLabel1">The Data Bucket</span>
    <span className="colLabel2"><strong>Key Components</strong></span>
      <h1 className="quizHeaderGreen">The Right Amount of the Right Information:</h1>
      <div className="introExplainer">
        <p>A dataset truly representative of a problem to be solved</p>
          <hr className="dividingLine" />
        <p>A significant sample size covering a more than sufficient period of time</p>
          <hr className="dividingLine" />
        <p>A highly trusted data provider</p>
      </div>
  </div>
  </Col>
  <Col >
  <div className="quizHeaderDiv">
  <span className="colLabel1">The Observer Bucket</span>
  <span className="colLabel2"><strong>Key Components</strong></span>
  <h1 className="quizHeaderGreen">A Reader that is Ready to Read It:</h1>
  <div className="introExplainer">
  <p>Knows what they are looking at</p>
  <hr className="dividingLine" />
  <p>Keeps the key to all Context</p>
  <hr className="dividingLine" />
    <p>Explores in the Open Mode</p>
    <hr className="dividingLine" />
    <p>Carries Healthy Skepticism</p>
    <hr className="dividingLine" />
    <p>Holds on to Sufficient Optimism</p>
    <hr className="dividingLine" />
    <p>...and is alive in the present moment</p>
  </div>
  </div>
  </Col>
  </Row>

  </Container>
  <div className="hoverText">
  <span>Hover to reveal the things that make up each bucket</span>
    </div>
  </div>

  </div>
  <div className="buttonRow">
        <Button className="quizButton" onClick={()=> {
            setTitleDiv(titleDiv => true);
              setKickOff(kickOff => false);
        }}>Previous</Button>
    <Button className="quizButton" onClick={()=> {
        setKickOff(kickOff => false);
        setSceneSet(sceneSet => true);
    }}>Next</Button>
  </div>
</motion.div>

<motion.div

animate={ sceneSet ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h4 className="quizHeaderWhite">Why?!</h4>
    </div>
      <br />
    <span>
      The 'Art of Looking' encompasses both my own personal experience from <s>700</s> over 800 days of NoWastedDays
      diary inputs and the key practical pillars that build a firm foundation from which you can reliably find a empowered perspective on your own life.
      <hr></hr>
      Ever since I started to get a grasp for web development and data,
      it has aggravated me just how infrequently either are unconditionally applied to any of our lives. 
    </span>
      <br />
      <br />
      <span>
      We feel the forces of data and technology endlessly in our culture; through our devices, in our news media, in our sporting competitions,
      within our jobs, school studies; online, offline - everywhere!
    <br />
    <br />
    Yet for all the causes data and technology can be a slave or a servant to, there seems to be a huge lack of them that are entirely
    centered on helping any human being healthily learn more about themselves, <strong>at a cost they can control</strong>.</span>
      <br />
      <br />
      <span>
    This predicament has come to pass for many reasons, but three principle causes stand out in my opinion:
    </span>
      <br />
      <br />
      <span>
      <strong>
    a) knowing what data it is most worthwhile to collect is hard </strong><i className="aside">(and data is leveraged most
    in spaces where measurement is considered obvious and easy)</i>
      <br />
      <br />
      <strong>
    b) knowing how and to what end to bring all that data together is even harder </strong><i className="aside">(i.e. what are we optimising for?
    happiness? resilience? joy? great conditioning? wisdom? wealth?)</i>
      <br />
      <br />
      <strong>
    c) being able to present it in a way that can systemically and safely create a positive change for most people is even harder still as
    the last thing anyone wants is iatrogenic* effects.</strong><i className="aside"> *a word for when medical interventions actually make the patient more sick.</i>
    </span>
      <br />
      <br />
      <span>
    NWD is trying to remedy these issues and, in time, why that is a worth doing will take up more space on the site.
    However, in the meantime, our mission is clear - to support people unconditionally with being alive.
    Providing this platform on a pay as you can (PAYC) model is one of many ways we can start to realise that goal.
    </span>
      <br />
      <br />
      <span>
    Back to the present, however, lets turn our eyes to the <br /><strong className="emphasis">'Art of Looking'!</strong>
    </span>

</div>
<div className="rightCol">
<div className="rightContent">
<img src={why} width="80%" className="imageOrGif" />
</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
setKickOff(kickOff => true);
setSceneSet(sceneSet => false);
}}>Previous</Button>
<Button className="quizButton" onClick={()=> {
setSceneSet(sceneSet => false);
setThreeParts(threeParts => true);
}}>Next</Button>
</div>
</motion.div>

<motion.div

animate={ threeParts ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h3 className="quizHeaderWhite">Contents</h3>
    </div>
    <br />
       <h1 className="quizHeaderWhite">The 'Art of Looking' has...<br /><br /><strong className="emphasis">five key chapters</strong></h1>

</div>
<div className="rightCol">
<div className="rightContentContent">
<h2 className="quizHeaderGreen">Contents</h2>
<span>1.    <strong className="boldHeader"><a href={'/insight/quiz/feeling'} style={{color: "#004a22"}}>Looking at your Charts 101:</a></strong></span>
<span className="subtitle" style={{marginBottom: "24px"}}>Quickly yet Completely Teaching the 4 Core Data Views</span>
<span>2.    <strong className="boldHeader"><a href={'/insight/quiz/wave'} style={{color: "#004a22"}}>Harnessing the Wave:</a></strong></span>
<span className="subtitle" style={{marginBottom: "24px"}}>How to Best Use a Dynamic Hidden Deep in your Data</span>
<span>3.    <strong className="boldHeader"><a href={'/insight/quiz/mindset'} style={{color: "#004a22"}}>Making of a Mindset</a></strong></span>
<span className="subtitle" style={{marginBottom: "24px"}}>Why how you look at your data matters more than any other single thing.</span>
<span>4.    <strong className="boldHeader"><a href={'/insight/quiz/representative'} style={{color: "#004a22"}}>Making the Data Deeply Representative</a></strong></span>
<span className="subtitle" style={{marginBottom: "24px"}}>Sharing the 3 Keys to Top Quality Data</span>
<span>5.    <strong className="boldHeader"><a href={'/insight/quiz/debrief'} style={{color: "#004a22"}}>Getting Value from Any Outcome</a></strong></span>
<span className="subtitle" style={{marginBottom: "24px"}}>The best way to break down any event (and its completely free!)</span>
</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
setThreeParts(threeParts => false);
setSceneSet(sceneSet => true);
}}>Previous</Button>
<Button className="quizButton" href='/insight/quiz/feeling'>Next</Button>
</div>
</motion.div>

    </>
  );
}
