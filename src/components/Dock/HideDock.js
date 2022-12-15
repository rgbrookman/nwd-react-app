import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion, faToggleOff, faEraser, faToggleOn, faSignature, faCalendarDays, faCompassDrafting, faLandmarkDome, faDna, faGlasses, faQuoteLeft, faPersonCircleQuestion, faGripLinesVertical, faBookOpen, faEyeSlash, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9, faBolt, faFloppyDisk, faPlus, faCalendarPlus } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import './hidedock.css';

export default function HideDock ( props ) {
  const [yourName, setYourName] = useState();

  const currentWindow = window.location.href;

  return (
 
<div className="hidedock container">
   

      { currentWindow.endsWith('/') ? 
      <>
         <div className="hidedock node"
    data-tooltip="Toggle Help"
   onMouseOver={props.toggleOverlay}>
    <FontAwesomeIcon
    id="openIcon"
    className="icon"
    icon={faEyeSlash}/>
    </div>
    <div className="hidedock node"
    data-tooltip="Start a New Day">
      <a href={'/today'}>
    <FontAwesomeIcon
    id="openIcon"
    className="icon"
    icon={faCalendarPlus}/>
    </a>
      </div>
      </> :
      currentWindow.endsWith('/create') 
      ? currentWindow.endsWith('/year/create') ?
      <>
      <div className="hidedock node"
    data-tooltip="Toggle Help"
   onMouseOver={props.toggleOverlay}>
    <FontAwesomeIcon
    id="openIcon"
    className="icon"
    icon={faEyeSlash}/>
      </div>
      <div className="hidedock node save"
      data-tooltip="Click to Save"
     onClick={props.saveYear} >
      <FontAwesomeIcon
      id="saveIcon"
      className="icon"
      icon={faFloppyDisk}/>
        </div>
        <div className="dock node"
    data-tooltip="Quick Tutorial"
   onClick={props.showTutorial}>
    <FontAwesomeIcon
    id="questionIcon"
    className="icon"
    icon={faQuestion}/>
      </div>
        </>
        :
        <>
        <div className="hidedock node"
    data-tooltip="Toggle Help"
   onMouseOver={props.toggleOverlay}>
    <FontAwesomeIcon
    id="openIcon"
    className="icon"
    icon={faEyeSlash}/>
      </div>
        <div className="hidedock node save"
        data-tooltip="Click to Save"
       onClick={props.saveWeek}>
        <FontAwesomeIcon
        id="saveIcon"
        className="icon"
        icon={faFloppyDisk}/>
          </div>
          <div className="dock node"
    data-tooltip="Quick Tutorial"
   onClick={props.showTutorial}>
    <FontAwesomeIcon
    id="questionIcon"
    className="icon"
    icon={faQuestion}/>
      </div>
          </>
      :
   currentWindow.match("/year/") ?
   <>
        <div className="hidedock node"
    data-tooltip="Toggle Help"
   onMouseOver={props.toggleOverlay}>
    <FontAwesomeIcon
    id="openIcon"
    className="icon"
    icon={faEyeSlash}/>
      </div>
   <div className="hidedock node save"
   data-tooltip="Click to Save"
  onClick={props.updateYear}>
   <FontAwesomeIcon
   id="saveIcon"
   className="icon"
   icon={faFloppyDisk}/>
     </div>
     </>
: 
<>
<div className="hidedock node"
data-tooltip="Toggle Help"
onMouseOver={props.toggleOverlay}>
<FontAwesomeIcon
id="openIcon"
className="icon"
icon={faEyeSlash}/>
  </div>
<div className="hidedock node save"
data-tooltip="Click to Save"
onClick={props.updateWeek}>
<FontAwesomeIcon
id="saveIcon"
className="icon"
icon={faFloppyDisk}/>
  </div>
  <div className="hidedock node"
        data-tooltip="Start a New Week"
       onClick={props.saveWeek}>
        <a href="/week/create">
        <FontAwesomeIcon
        id="saveIcon"
        className="icon"
        icon={faCalendarPlus}/>
        </a>
          </div>
  </>
}
  </div>

  )
}


