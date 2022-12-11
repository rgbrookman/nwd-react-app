import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faFloppyDisk, faSignature, faCalendarDays, faCompassDrafting, faLandmarkDome, faDna, faGlasses, faQuoteLeft, faPersonCircleQuestion, faGripLinesVertical, faBookOpen, faEyeSlash, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9, faBolt, faCalendarPlus, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import './fulldock.css';

export default function MidDock ( props ) {
  const [yourName, setYourName] = useState();

  const currentWindow = window.location.href;

  return (
 
<div className="dock container">
  <div className="dock node"
  data-tooltip="Your Name"
  onMouseOver={props.changeName}
  >
  <FontAwesomeIcon
    id="nameIcon"
    className="icon"
    icon={faSignature} 
      />
      </div>
  <div className="dock node"
  data-tooltip="Your Date of Birth"
  onMouseOver={props.changeDOB}
  >
  <FontAwesomeIcon
    id="dobIcon"
    className="icon"
    icon={faCalendarDays}/>
      </div>
  <div className="dock node"
  data-tooltip="Your Values"
  onMouseOver={props.changeValues}>
  <FontAwesomeIcon
    id="valuesIcon"
    className="icon"
    icon={faCompassDrafting}/>
      </div>
  <div className="dock node"
  data-tooltip="Your Vision"
  onMouseOver={props.changeVision}>
  <FontAwesomeIcon
    id="visionIcon"
    className="icon"
    icon={faGlasses}/>
      </div>
  <div className="dock node"
  data-tooltip="Your Ikigai"
  onMouseOver={props.changeIkigai}>
  <FontAwesomeIcon
    id="ikigaiIcon"
    className="icon"
    icon={faDna}/>
      </div>
  <div className="dock node"
  data-tooltip="Your Quote"
  onMouseOver={props.changeQuote}>
  <FontAwesomeIcon
    id="quoteIcon"
    className="icon"
    icon={faQuoteLeft}/>
      </div>
    <div className="dock node"
    data-tooltip="Your Memories"
    onMouseOver={props.changeMemory}>
    <FontAwesomeIcon
    id="memoryIcon"
    className="icon"
    icon={faLandmarkDome}/>
      </div>
  </div>

  

  )
}


