import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faFloppyDisk, faSignature, faCalendarDays, faCompassDrafting, faLandmarkDome, faDna, faGlasses, faQuoteLeft, faPersonCircleQuestion, faGripLinesVertical, faBookOpen, faEyeSlash, fa0, fa1, fa2, fa3, fa4, fa5, fa6, fa7, fa8, fa9, faBolt, faCalendarPlus, faPlusSquare, faQuestion } from '@fortawesome/free-solid-svg-icons'
import './fulldock.css';
import formatISO9075 from 'date-fns/formatISO9075';

export default function FullDock ( props ) {
  const [yourName, setYourName] = useState();
  const [valuesShowState, setValuesShowState] = useState('mini node inactive');
  const [visionShowState, setVisionShowState] = useState('mini node inactive');

  const valuesShow = () => {
    if(valuesShowState === 'mini node inactive'){
      setValuesShowState(valuesShowState => 'mini node');
      setVisionShowState(visionShowState => 'mini node inactive');
    } else {
      setValuesShowState(valuesShowState => 'mini node inactive');
    }
  }

  const visionShow = () => {
    if(visionShowState === 'mini node inactive'){
      setVisionShowState(visionShowState => 'mini node');
      setValuesShowState(valuesShowState => 'mini node inactive');
    } else {
      setVisionShowState(visionShowState => 'mini node inactive');
    }
  }

  const valuesHide = () => {
    setValuesShowState(valuesShowState => 'dock node inactive');
  }

  const visionHide = () => {
    setVisionShowState(visionShowState => 'dock node inactive');
  }

  const currentWindow = window.location.href;

  return (
 
<div className="dock container">
  <div className="dock node" data-tooltip="Start a New Day">
    <a href="/today">
      <FontAwesomeIcon
        id="openIcon"
        className="icon"
        icon={faCalendarPlus}/>
    </a>
  </div>

      <div className="dock separator">
    <FontAwesomeIcon
    id="separatorIcon"
    className="separator"
    icon={faGripLinesVertical}/>
      </div>


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


<div className="dockNodeWrapper">
  <div className="nodeRow">
    <div className={valuesShowState} data-tooltip="Value #1" onMouseOver={props.changeValuesOne}>
 <FontAwesomeIcon
    id="miniValuesIcon"
    className="icon"
    icon={fa1}/>
      </div>
      <div className={valuesShowState}
  data-tooltip="Value #2" 
  onMouseOver={props.changeValuesTwo}>
  <FontAwesomeIcon
    id="miniValuesIcon"
    className="icon"
    icon={fa2}/>
      </div>
      <div className={valuesShowState}
  data-tooltip="Value #3"
  onMouseOver={props.changeValuesThree}>
  <FontAwesomeIcon
    id="miniValuesIcon"
    className="icon"
    icon={fa3}/>
      </div>
      <div className={valuesShowState}
  data-tooltip="Value #4"
  onMouseOver={props.changeValuesFour}>
  <FontAwesomeIcon
    id="miniValuesIcon"
    className="icon"
    icon={fa4}/>
      </div>
      <div className={valuesShowState}
  data-tooltip="Value #5"
  onMouseOver={props.changeValuesFive}>
  <FontAwesomeIcon
    id="miniValuesIcon"
    className="icon"
    icon={fa5}/>
      </div>
      </div>
      <div className="dock node save"
  data-tooltip="Your Values"
  onClick={valuesShow}>

  <FontAwesomeIcon
    id="saveIcon"
    className="icon"
    icon={faCompassDrafting}/>
      </div>
</div>
  
<div className="dockNodeWrapper">
  <div className="nodeRow">

  <div className={visionShowState} data-tooltip="Vision #1" onMouseOver={props.changeVisionOne}>
 <FontAwesomeIcon
    id="miniValuesIcon"
    className="icon"
    icon={fa1}/>
      </div>
      <div className={visionShowState} data-tooltip="Vision #2" onMouseOver={props.changeVisionTwo}>
 <FontAwesomeIcon
    id="miniValuesIcon"
    className="icon"
    icon={fa2}/>
      </div>
      <div className={visionShowState} data-tooltip="Vision #2" onMouseOver={props.changeVisionThree}>
 <FontAwesomeIcon
    id="miniValuesIcon"
    className="icon"
    icon={fa3}/>
      </div>
      <div className={visionShowState} data-tooltip="Vision #2" onMouseOver={props.changeVisionFour}>
 <FontAwesomeIcon
    id="miniValuesIcon"
    className="icon"
    icon={fa4}/>
      </div>
      <div className={visionShowState} data-tooltip="Vision #2" onMouseOver={props.changeVisionFive}>
 <FontAwesomeIcon
    id="miniValuesIcon"
    className="icon"
    icon={fa5}/>
      </div>

  </div>

  <div className="dock node save"
  data-tooltip="Your Vision"
  onClick={visionShow}>
  <FontAwesomeIcon
    id="saveIcon"
    className="icon"
    icon={faGlasses}/>
      </div>
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
      <div className="dock node"
    data-tooltip="Hide Overlay"
   onMouseOver={props.hideOverlay}>
    <FontAwesomeIcon
    id="openIcon"
    className="icon"
    icon={faEyeSlash}/>
      </div>
      <div className="dock node"
    data-tooltip="Quick Tutorial"
   onClick={props.showTutorial}>
    <FontAwesomeIcon
    id="questionIcon"
    className="icon"
    icon={faQuestion}/>
      </div>
      <div className="dock separator">
    <FontAwesomeIcon
    id="separatorIcon"
    className="separator"
    icon={faGripLinesVertical}/>
      </div>
      <div className="dock node"
      style={{backgroundColor: `rgba(0, 74, 35, ${props.opacityOne + 0.025})`, border: "1px solid rgba(0, 74, 35,0.05)"}}
      data-tooltip="Objective #1"
      onMouseOver={props.changeObjOne}>
    <FontAwesomeIcon
    id="oneIcon"
    className="icon"
    icon={fa1}/>
      </div>
      <div className="dock node"
      style={{backgroundColor: `rgba(0, 74, 35, ${props.opacityTwo + 0.025})`, border: "1px solid rgba(0, 74, 35,0.05)"}}
      data-tooltip="Objective #2"
      onMouseOver={props.changeObjTwo}>
    <FontAwesomeIcon
    id="twoIcon"
    className="icon"
    icon={fa2}/>
      </div>
      <div className="dock node"
      style={{backgroundColor: `rgba(0, 74, 35, ${props.opacityThree + 0.025})`, border: "1px solid rgba(0, 74, 35,0.05)"}}
      data-tooltip="Objective #3"
      onMouseOver={props.changeObjThree}>
    <FontAwesomeIcon
    id="threeIcon"
    className="icon"
    icon={fa3}/>
      </div>
      <div className="dock node"
      style={{backgroundColor: `rgba(0, 74, 35, ${props.opacityFour + 0.025})`, border: "1px solid rgba(0, 74, 35,0.05)"}}
      data-tooltip="Objective #4"
      onMouseOver={props.changeObjFour}>
    <FontAwesomeIcon
    id="fourIcon"
    className="icon"
    icon={fa4}/>
      </div>
      <div 
      className="dock node"
      style={{backgroundColor: `rgba(0, 74, 35, ${props.opacityFive + 0.025}`, border: "1px solid rgba(0, 74, 35,0.05)"}}
      data-tooltip="Objective #5"
      onMouseOver={props.changeObjFive}>
    <FontAwesomeIcon
    id="fiveIcon"
    className="icon"
    icon={fa5}/>
      </div>
      <div className="dock node"
      style={{backgroundColor: `rgba(0, 74, 35, ${props.opacitySix + 0.025})`, border: "1px solid rgba(0, 74, 35,0.05)"}}
      data-tooltip="Objective #6"
      onMouseOver={props.changeObjSix}>
    <FontAwesomeIcon
    id="sixIcon"
    className="icon"
    icon={fa6}/>
      </div>
      <div className="dock node"
      style={{backgroundColor: `rgba(0, 74, 35, ${props.opacitySeven + 0.025})`, border: "1px solid rgba(0, 74, 35,0.05)"}}
      data-tooltip="Objective #7"
      onMouseOver={props.changeObjSeven}>
    <FontAwesomeIcon
    id="sevenIcon"
    className="icon"
    icon={fa7}/>
      </div>
      <div className="dock node"
      style={{backgroundColor: `rgba(0, 74, 35, ${props.opacityEight + 0.025})`, border: "1px solid rgba(0, 74, 35,0.05)"}}
      data-tooltip="Objective #8"
      onMouseOver={props.changeObjEight}>
    <FontAwesomeIcon
    id="eightIcon"
    className="icon"
    icon={fa8}/>
      </div>
      <div className="dock node"
      style={{backgroundColor: `rgba(0, 74, 35, ${props.opacityNine + 0.025})`, border: "1px solid rgba(0, 74, 35,0.05)"}}
      data-tooltip="Objective #9"
      onMouseOver={props.changeObjNine}>
    <FontAwesomeIcon
    id="nineIcon"
    className="icon"
    icon={fa9}/>
      </div>
      <div id="finalnode" 
      className="dock node"
      style={{backgroundColor: `rgba(0, 74, 35, ${props.opacityTen + 0.025})`, border: "1px solid rgba(0, 74, 35,0.05)"}}
      data-tooltip="Objective #10"
      onMouseOver={props.changeObjTen}>
    <FontAwesomeIcon
    id="tenIcon"
    className="icon"
    icon={fa1}
    style={{marginRight: "3px"}}/>
    <FontAwesomeIcon
    id="tenIcon"
    className="icon"
    icon={fa0}/>
      </div>
      <div className="dock separator">
    <FontAwesomeIcon
    id="separatorIcon"
    className="separator"
    icon={faGripLinesVertical}/>
      </div>      
    { currentWindow.endsWith('/today') ?
      <div className="dock node save"
    data-tooltip="Click to Save"
   onClick={props.submitDay}>
    <FontAwesomeIcon
    id="saveIcon"
    className="icon"
    icon={faFloppyDisk}/>
      </div>
:
      <div className="dock node save"
    data-tooltip="Click to Save"
   onClick={props.updateDay}>
    <FontAwesomeIcon
    id="saveIcon"
    className="icon"
    icon={faFloppyDisk}/>
      </div>
}



  </div>

  

  )
}


