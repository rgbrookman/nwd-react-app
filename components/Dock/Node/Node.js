import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faSignature, 
  faCalendarDays, 
  faCompassDrafting,
  faLandmarkDome,
  faDna,
  faGlasses,
  faQuoteLeft,
  faPersonCircleQuestion,
  faGripLinesVertical,
  faBookOpen,
  fa1,
  fa2,
  fa3,
  fa4,
  fa5,
  fa6,
  fa7,
  fa8,
  fa9,
  faBolt
} from '@fortawesome/free-solid-svg-icons'
import './fulldock.css';

const FullDock = () => {

  const [classState, setClassState] =useState('journal outer');

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const yearList = useSelector((state) => state.yearList);
    const { loading, error, years } = yearList;


  return (
 
<div className="dock container">
  <div className="dock node"
  data-tooltip="Your Name">
  <FontAwesomeIcon
    id="nameIcon"
    className="icon"
    icon={faSignature}/>
      </div>
  <div className="dock node"
  data-tooltip="Your Date of Birth">
  <FontAwesomeIcon
    id="dobIcon"
    className="icon"
    icon={faCalendarDays}/>
      </div>
  <div className="dock node"
  data-tooltip="Your Values">
  <FontAwesomeIcon
    id="valuesIcon"
    className="icon"
    icon={faCompassDrafting}/>
      </div>
  <div className="dock node"
  data-tooltip="Your Vision">
  <FontAwesomeIcon
    id="visionIcon"
    className="icon"
    icon={faGlasses}/>
      </div>

  <div className="dock node"
  data-tooltip="Your Ikigai">
  <FontAwesomeIcon
    id="ikigaiIcon"
    className="icon"
    icon={faDna}/>
      </div>
  <div className="dock node"
  data-tooltip="Your Quote">
  <FontAwesomeIcon
    id="quoteIcon"
    className="icon"
    icon={faQuoteLeft}/>
      </div>
    <div className="dock node"
    data-tooltip="Your Memories">
    <FontAwesomeIcon
    id="memoryIcon"
    className="icon"
    icon={faLandmarkDome}/>
      </div>
      <div className="dock node"
    data-tooltip="Open / Close Book"
   onClick={()=>{
      setClassState(classState => 'journal outer is-flipped')
    }}>
    <FontAwesomeIcon
    id="openIcon"
    className="icon"
    icon={faBookOpen}/>
      </div>
      <div className="dock separator">
    <FontAwesomeIcon
    id="separatorIcon"
    className="separator"
    icon={faGripLinesVertical}/>
      </div>
      <div className="dock node"
      data-tooltip="Objective #1">
    <FontAwesomeIcon
    id="oneIcon"
    className="icon"
    icon={fa1}/>
      </div>
      <div className="dock node"
      data-tooltip="Objective #2">
    <FontAwesomeIcon
    id="twoIcon"
    className="icon"
    icon={fa2}/>
      </div>
      <div className="dock node"
      data-tooltip="Objective #3">
    <FontAwesomeIcon
    id="threeIcon"
    className="icon"
    icon={fa3}/>
      </div>
      <div className="dock node"
      data-tooltip="Objective #4">
    <FontAwesomeIcon
    id="fourIcon"
    className="icon"
    icon={fa4}/>
      </div>
      <div className="dock node"
      data-tooltip="Objective #5">
    <FontAwesomeIcon
    id="fiveIcon"
    className="icon"
    icon={fa5}/>
      </div>
      <div className="dock node"
      data-tooltip="Objective #6">
    <FontAwesomeIcon
    id="sixIcon"
    className="icon"
    icon={fa6}/>
      </div>
      <div className="dock node"
      data-tooltip="Objective #7">
    <FontAwesomeIcon
    id="sevenIcon"
    className="icon"
    icon={fa7}/>
      </div>
      <div className="dock node"
      data-tooltip="Objective #8">
    <FontAwesomeIcon
    id="eightIcon"
    className="icon"
    icon={fa8}/>
      </div>
      <div className="dock node"
      data-tooltip="Objective #9">
    <FontAwesomeIcon
    id="nineIcon"
    className="icon"
    icon={fa9}/>
      </div>
      <div className="dock node"
      data-tooltip="Objective #10">
    <FontAwesomeIcon
    id="tenIcon"
    className="icon"
    icon={faBolt}/>
      </div>
  </div>

  )
}

export default FullDock;