import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faFloppyDisk, faSignature, faCalendarDays, faCompassDrafting, faLandmarkDome, faDna, faGlasses, faQuoteLeft, faPersonCircleQuestion, faGripLinesVertical, faBookOpen, faEyeSlash, fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9, faBolt, faCalendarPlus, faPlusSquare, faQuestion } from '@fortawesome/free-solid-svg-icons'
import Loading from '../../components/Loading/Loading';
import { ErrorMessage } from '../../components/Error/ErrorMessage';

import './tutorial.css';

export default function MainTutorial( props ) {
 

  return (
  <>
  <section className="tutorialContainer">
    <h2>Help</h2>
    <br></br>
    <div className="helpRow text">
        <p>NoWastedDays.io is a digital journal powered by data.</p>
        <p>Like any journal, it helps you plan out your year, week and day. However, being digital and powered by data, it can do far more to generate insight and signals that can, in time, lead you to better and better days in the future.</p>
        <p>Find below a helpful list of what each part of the site does and each icon means:</p>
    </div>
    <hr className="dividingLine"></hr>
    <p><strong className="helpTitle">Site Sections</strong></p>
    <div className="helpRow">
        <p><h4>Year</h4> - A place to map the most important cognitive frames we all share - your vision, your values and more - and complete interactive experiences to help make thinking about them easier.</p>
    </div>
    <div className="helpRow">
        <p><h4>Week</h4> - A space to translate the aims and frames of a year into the steps that make it possible week-by-week.</p>
    </div>
    <div className="helpRow">
        <p><h4>Today</h4> - Your daily diary; a smart, simple format for planning and consolidating each day.</p>
    </div>
    <div className="helpRow">
        <p><h4>Insights</h4> - Scroll back through your diary and see your 5 different views of your data. </p>
    </div>
    <div className="helpRow">
        <p><h4>Art of Looking</h4> - A short course to help you explore your data safely and successfully.</p>
    </div>
    <div className="helpRow">
        <p><h4>Your Name</h4> - Click to manage your profile, subscription and contact us.</p>
    </div>
    <hr className="dividingLine"></hr>
    <p><strong className="helpTitle">Icons / Nodes in Dock</strong></p>
    <div className="helpRow explainer">
        
    <div className="dock node" data-tooltip="Start a New Day">
    <a href="/today">
      <FontAwesomeIcon
        id="openIcon"
        className="icon"
        icon={faCalendarPlus}/>
    </a>
  </div>
  <h4>| Start a New Day</h4>
  </div>
  <div className="helpRow explainer">
  <div className="dock node"
  data-tooltip="Your Name"
  >
  <FontAwesomeIcon
    id="nameIcon"
    className="icon"
    icon={faSignature} 
      />
      </div>
  <h4>| Display Your Name as a Frame</h4>
    </div>
    <div className="helpRow explainer">
    <div className="dock node"
  data-tooltip="Your Date of Birth"
  >
  <FontAwesomeIcon
    id="dobIcon"
    className="icon"
    icon={faCalendarDays}/>
      </div>
  <h4>| Display Your Birth Date as a Frame</h4>
    </div>
    <div className="helpRow explainer">
    <div className="dock node"
  data-tooltip="Your Values">

  <FontAwesomeIcon
    id="saveIcon"
    className="icon"
    icon={faCompassDrafting}/>
      </div>
  <h4>| Display Your Values as Frame</h4>
    </div>
    <div className="helpRow explainer">
    <div className="dock node save"
  data-tooltip="Your Vision">
  <FontAwesomeIcon
    id="saveIcon"
    className="icon"
    icon={faGlasses}/>
      </div>
  <h4>| Display Your Visions as Frame</h4>
    </div>
    <div className="helpRow explainer">
    <div className="dock node"
  data-tooltip="Your Ikigai">
  <FontAwesomeIcon
    id="ikigaiIcon"
    className="icon"
    icon={faDna}/>
      </div>
  <h4>| Display Your Ikigai as a Frame</h4>
    </div>
    <div className="helpRow explainer">
    <div className="dock node"
  data-tooltip="Your Quote">
  <FontAwesomeIcon
    id="quoteIcon"
    className="icon"
    icon={faQuoteLeft}/>
      </div>
  <h4>| Display a Great Quote as a Frame</h4>
    </div>
    <div className="helpRow explainer">
    <div className="dock node"
    data-tooltip="Your Memories">
    <FontAwesomeIcon
    id="memoryIcon"
    className="icon"
    icon={faLandmarkDome}/>
      </div>
      <h4>| Display a Memory as a Frame</h4>
      </div>
    <div className="helpRow explainer">
    <div className="dock node"
      data-tooltip="Objective #1">
    <FontAwesomeIcon
    id="oneIcon"
    className="icon"
    icon={fa1}/>
      </div>
      <h4>| Display One of Your Weekly Objectives as Frame</h4>
      </div>
      <div className="helpRow explainer">
      <div className="dock node"
    data-tooltip="Hide Overlay"
   onMouseOver={props.hideOverlay}>
    <FontAwesomeIcon
    id="openIcon"
    className="icon"
    icon={faEyeSlash}/>
      </div>
      <h4>| Hide Frame / Overlay</h4>
      </div>
      <hr className="dividingLine"></hr>
    <p><strong className="helpTitle">Graphs in Your Insights</strong></p>
      <div className="helpRow">
        <p><h4>FS</h4> = Feeling Score: The End of Day Feeling Scores Mapped Over Time: Min / 0 - Max / 5</p>
    </div>
    <div className="helpRow">
        <p><h4>TC</h4> = Tasks Completed: The Sum of The Moments You Completed Each Day Mapped Over Time: Min / 0 - Max / 50</p>
    </div>
    <div className="helpRow">
        <p><h4>TCR</h4> = Tasks Completed Rate: The Sum of the Moments You Completed Each Day Divided By the Number You Attempted Over Time: Min / 0% - Max / 100%</p>
    </div>
    <div className="helpRow">
        <p><h4>TA</h4> = Tasks Attempted: The Total Tasks You Attempted Each Day Mapped Over Time: Min / 0 - Max / 5</p>
    </div>
    <div className="helpRow">
        <p><h4>Wave</h4> = The Wave: All of the Above Combined into a Single Scatter Plot Time Series.</p>
    </div>
    
    <button className="closeButton" onClick={props.showTutorial}>Close</button>
  </section>
 
</>
  );
}
