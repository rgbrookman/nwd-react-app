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

  const [helpNodeState, setHelpNodeState] = useState('hidedock node inactive');

  const showHelpNodes = () => {
    if(helpNodeState === 'hidedock node inactive') {
      setHelpNodeState(helpNodeState => 'hidedock node');
    } else {
      setHelpNodeState(helpNodeState => 'hidedock node inactive');
    }
  }

  const currentWindow = window.location.href;

  return (
 
<div className="hidedock container">
   

      { currentWindow.endsWith('/') ? 
      <>
         <div className="hidedock node"
    data-tooltip="Toggle Frame"
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
      <div className="hidedock node"
    data-tooltip="Click for Help"
    onClick={props.showTutorial}>
    <FontAwesomeIcon
    id="questionIcon"
    className="icon"
    icon={faQuestion}/>
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

        <div className="hidedock node"
    data-tooltip="Click for Tutorial Video"
   onClick={props.showTutorial}
   onMouseOver={showHelpNodes}>
    <FontAwesomeIcon
    id="questionIcon"
    className="icon"
    icon={faQuestion}/>
</div>

     <div className={helpNodeState} data-tooltip="Try the NWD Values Process">
<a href={'/values'}>
  <FontAwesomeIcon
    id="saveIcon"
    className="icon"
    icon={faCompassDrafting}/>
    </a>
      </div>

      <div className={helpNodeState}
  data-tooltip="Vision Process Coming Soon."
  style={{opacity: '0.25'}}>
  <FontAwesomeIcon
    id="saveIcon"
    className="icon"
    icon={faGlasses}/>
      </div>

      <div className={helpNodeState}
  data-tooltip="Ikigai Process Coming Soon."
  style={{opacity: '0.25'}}>
  <FontAwesomeIcon
    id="ikigaiIcon"
    className="icon"
    icon={faDna}/>
      </div>

      <div className={helpNodeState}
  data-tooltip="Quote Generator Coming Soon."
  style={{opacity: '0.25'}}>
  <FontAwesomeIcon
    id="quoteIcon"
    className="icon"
    icon={faQuoteLeft}/>
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
     <div className="hidedock node"
    data-tooltip="Click for Tutorial Video"
   onClick={props.showTutorial}
   onMouseOver={showHelpNodes}>
    <FontAwesomeIcon
    id="questionIcon"
    className="icon"
    icon={faQuestion}/>
</div>

     <div className={helpNodeState} data-tooltip="Try the NWD Values Process">
<a href={'/values'}>
  <FontAwesomeIcon
    id="saveIcon"
    className="icon"
    icon={faCompassDrafting}/>
    </a>
      </div>

      <div className={helpNodeState}
  data-tooltip="Vision Process Coming Soon."
  style={{opacity: '0.25'}}>
  <FontAwesomeIcon
    id="saveIcon"
    className="icon"
    icon={faGlasses}/>
      </div>

      <div className={helpNodeState}
  data-tooltip="Ikigai Process Coming Soon."
  style={{opacity: '0.25'}}>
  <FontAwesomeIcon
    id="ikigaiIcon"
    className="icon"
    icon={faDna}/>
      </div>

      <div className={helpNodeState}
  data-tooltip="Quote Generator Coming Soon."
  style={{opacity: '0.25'}}>
  <FontAwesomeIcon
    id="quoteIcon"
    className="icon"
    icon={faQuoteLeft}/>
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


