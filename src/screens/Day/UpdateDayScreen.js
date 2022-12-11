import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { updateDayAction, listDays } from '../../actions/dayActions';
import FullDock from '../../components/Dock/FullDock';
import MouseTooltip from '../../components/MouseTooltip/MouseTooltip';
import CentralHeader from '../../components/Header/CentralHeader';
import Loading from '../../components/Loading/Loading';
import PageLoading from '../../components/Loading/PageLoading';
import { ErrorMessage } from '../../components/Error/ErrorMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faEraser, faCircleCheck, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import axios from "axios";
import PropagateLoader from "react-spinners/PropagateLoader";
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import './dayscreens.css';

export default function UpdateDayScreen({ history }) {

// Form State
const [startScore, setStartScore] = useState();
const [logDate, setLogDate] = useState();
const [thankYou, setThankYou] = useState();
const [selfLess, setSelfLess] = useState();
const [mindBody, setMindBody] = useState();
const [momentOne, setMomentOne] = useState();
const [momentOneScore, setMomentOneScore] = useState();
const [momentTwo, setMomentTwo] = useState();
const [momentTwoScore, setMomentTwoScore] = useState();
const [momentThree, setMomentThree] = useState();
const [momentThreeScore, setMomentThreeScore] = useState();
const [momentFour, setMomentFour] = useState();
const [momentFourScore, setMomentFourScore] = useState();
const [momentFive, setMomentFive] = useState();
const [momentFiveScore, setMomentFiveScore] = useState();
const [rememberToday, setRememberToday] = useState();
const [leaveBehind, setLeaveBehind] = useState();
const [endScore, setEndScore] = useState();
const [fontState, setFontState] = useState(96);

const [loadingAnimation, setLoadingAnimation] = useState(false);

const [videoDisplay, setVideoDisplay] = useState(true);

const [videoLink, setVideoLink] = useState('Wp2tWyWpMF8');

const [pageLoading, setPageLoading] = useState(true);

// Book State
const [classState, setClassState]= useState('journal outer');

// Dock State
const [cursorState, setCursorState] = useState('');
const [cursorDisplayState, setCursorDisplayState] = useState(true);

const [show, setShow] = useState(false);
const target = useRef(null);


const dispatch = useDispatch();
const navigate = useNavigate();
  let { id } = useParams();

const userLogin = useSelector((state) => state.userLogin);
const { userInfo } = userLogin;

const yearList = useSelector((state) => state.yearList);
const { years } = yearList;

const weekList = useSelector((state) => state.weekList);
const { weeks } = weekList;

const dayList = useSelector((state) => state.dayList); //
const { loading, error, days } = dayList;

const dayUpdate = useSelector((state) => state.dayUpdate);
const { success: successUpdate } = dayUpdate;

useEffect(() => {
  dispatch(listDays());
}, [dispatch, userInfo, history]);

const resetHandler = () => {
  setLogDate();
  setStartScore(0);
  setThankYou('');
  setSelfLess('');
  setMindBody('');
  setMomentOne('');
  setMomentOneScore("");
  setMomentTwo('');
  setMomentTwoScore("");
  setMomentThree('');
  setMomentThreeScore("");
  setMomentFour('');
  setMomentFourScore("");
  setMomentFive('');
  setMomentFiveScore("");
  setRememberToday('');
  setLeaveBehind('');
  setEndScore(0);
};

useEffect(() => {

  const fetching = async () => {
    try {
      const { data } = await axios.get(`https://nwd-backend.herokuapp.com/api/days/today/${id}`);
      setLogDate(data.logDate);
      setStartScore(data.startScore);
      setThankYou(data.thankYou);
      setSelfLess(data.selfLess);
      setMindBody(data.mindBody);
      setMomentOne(data.momentOne);
      setMomentOneScore(data.momentOneScore);
      setMomentTwo(data.momentTwo);
      setMomentTwoScore(data.momentTwoScore);
      setMomentThree(data.momentThree);
      setMomentThreeScore(data.momentThreeScore);
      setMomentFour(data.momentFour);
      setMomentFourScore(data.momentFourScore);
      setMomentFive(data.momentFive);
      setMomentFiveScore(data.momentFiveScore);
      setRememberToday(data.rememberToday);
      setLeaveBehind(data.leaveBehind);
      setEndScore(data.endScore);
} catch(error) {
  console.log(error);
}
    }
  fetching();
}, [id]);

const updateHandler = (e) => {
 e.preventDefault();
 dispatch(updateDayAction(id,
    logDate,
      startScore,
      thankYou,
      selfLess,
      mindBody,
      momentOne,
      momentOneScore,
      momentTwo,
      momentTwoScore,
      momentThree,
      momentThreeScore,
      momentFour,
      momentFourScore,
      momentFive,
      momentFiveScore,
      rememberToday,
      leaveBehind,
      endScore));
    

      if ( !logDate ||
        !startScore ||
        !thankYou ||
        !selfLess ||
        !mindBody ||
        !momentOne ||
        !momentOneScore ||
        !momentTwo ||
        !momentTwoScore ||
        !momentThree ||
        !momentThreeScore ||
        !momentFour ||
        !momentFourScore ||
        !momentFive ||
        !momentFiveScore ||
        !rememberToday ||
        !leaveBehind ||
        !endScore) return;

        // resetHandler();

};

const loadingTimeout = () => {
  setTimeout(()=> {
    setPageLoading(false)
  }, 3000)
}

const stateChanger = () => {
  {classState == 'journal outer' ? setClassState(classState => 'journal outer is-flipped') : setClassState(classState => 'journal outer')}
}

const cursorDisplayHide = () => {
  setCursorDisplayState(cursorDisplayState => false);
  };
  
  const cursorChangeName = () => {
    setCursorState(cursorState => years && years.map((year) => year.yourName)) 
    {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
  };
  
  const cursorChangeDOB=() => {
    setCursorState(cursorState => years && years.map((year) => year.birthDate.substring(0,10))) 
    {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
  };
  
  const cursorChangeValues = () => {
    setCursorState(cursorState => years && years.map((year) => 
    `${year.myValues_1}: ${year.myValues_1_Text} /// ${year.myValues_2}: ${year.myValues_2_Text} /// ${year.myValues_3}: ${year.myValues_3_Text} /// ${year.myValues_4}: ${year.myValues_4_Text} /// ${year.myValues_5}: ${year.myValues_5_Text}`));
    setFontState(fontState => 32);
    {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
  };
  
  const cursorChangeVision = () => {
    setCursorState(cursorState => years && years.map((year) => 
    `${year.myVision_1} /// ${year.myVision_2} /// ${year.myVision_3} /// ${year.myVision_4} /// ${year.myVision_5}`));
    setFontState(fontState => 32);
    {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
  };
  
  const cursorChangeIkigai = () => {
    setCursorState(cursorState => 
      years && years.map((year) => year.myIkigai)) 
    {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
  };
  
  const cursorChangeQuote = () => {
    setCursorState(cursorState => years && years.map((year) => year.navigationalQuote));
    {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
  };
  
  const cursorChangeMemory = () => {
    setCursorState(cursorState =>   days && days
    .filter((day, i, days) => days.indexOf(day) === Math.floor((Math.random() * days.length )))
    .filter((day, i, days) => days.indexOf(day) === 0 )
    .map((day, index, days) => day.rememberToday)); 
    {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
  };
  
  const cursorChangeWhy = () => {
    setCursorState(cursorState => years && years.map((year) => year.whyNWD));
    {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
  };
  
  const cursorChangeObjOne = () => {
    setCursorState(cursorState => weeks && weeks
      .filter((week, i, weeks) => weeks.indexOf(week) === weeks.length -1 )
      .map((week) => week.objectiveOne_text)) 
    {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
  };
  
  const cursorChangeObjTwo = () => {
    setCursorState(cursorState => weeks && weeks
      .filter((week, i, weeks) => weeks.indexOf(week) === weeks.length -1 )
      .map((week) => week.objectiveTwo_text)) 
    {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
  };
  
  const cursorChangeObjThree = () => {
    setCursorState(cursorState => weeks && weeks
      .filter((week, i, weeks) => weeks.indexOf(week) === weeks.length -1 )
      .map((week) => week.objectiveThree_text)) 
    {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
  };
  
  const cursorChangeObjFour = () => {
    setCursorState(cursorState => weeks && weeks
      .filter((week, i, weeks) => weeks.indexOf(week) === weeks.length -1 )
      .map((week) => week.objectiveFour_text)) 
    {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
  };
  
  const cursorChangeObjFive = () => {
    setCursorState(cursorState => weeks && weeks
      .filter((week, i, weeks) => weeks.indexOf(week) === weeks.length -1 )
      .map((week) => week.objectiveFive_text)) 
    {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
  };
  
  const cursorChangeObjSix = () => {
    setCursorState(cursorState => weeks && weeks
      .filter((week, i, weeks) => weeks.indexOf(week) === weeks.length -1 )
      .map((week) => week.objectiveSix_text)) 
    {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
  };
  
  const cursorChangeObjSeven = () => {
    setCursorState(cursorState => weeks && weeks
      .filter((week, i, weeks) => weeks.indexOf(week) === weeks.length -1 )
      .map((week) => week.objectiveSeven_text)) 
    {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
  };
  
  const cursorChangeObjEight = () => {
    setCursorState(cursorState => weeks && weeks
      .filter((week, i, weeks) => weeks.indexOf(week) === weeks.length -1 )
      .map((week) => week.objectiveEight_text)) 
    {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
  };
  
  const cursorChangeObjNine = () => {
    setCursorState(cursorState => weeks && weeks
      .filter((week, i, weeks) => weeks.indexOf(week) === weeks.length -1 )
      .map((week) => week.objectiveNine_text)) 
    {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
  };
  
  const cursorChangeObjTen = () => {
    setCursorState(cursorState => weeks && weeks
      .filter((week, i, weeks) => weeks.indexOf(week) === weeks.length -1 )
      .map((week) => week.objectiveTen_text)) 
    {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
  };


useEffect(()=> {
  loadingTimeout();
})

const showState = {
  hide: {
    display: "none",
  },
  show: {
    display: "flex",
  },
}



  return (
    <>
    <MouseTooltip
    visible={cursorDisplayState}
    offsetX={15}
    offsetY={10}
    zIndex={1000}
  >
  <h1 className="sickTooltip" style={{fontSize: `${fontState}px`}}>{cursorState}</h1>

  </MouseTooltip>
  <CentralHeader />

<form onChange={updateHandler}>


<main className="updateday container">

<div className="tile left">
<div className="dateRow">
  <label htmlFor="loggedDate">Diary Entry Date:</label>
  { pageLoading && !logDate ? <></> : 
<input
id="loggedDate"
type="date"
value={logDate.substring(0,10)}
onChange={(e) => setLogDate(e.target.value)}
required
/>
}
</div>
{/* <hr className="horizontalLine" /> */}
  <div className="momentRow">

<label htmlFor="beforeScore" className="statement starter">Before filling in my NWD today, I feel </label> <h5>{startScore}</h5>
</div>
<input
id="beforeScore"
className="weekSlider"
type="range"
min="0"
max="5"
step="0.1"
value={startScore}
onChange={(e) => setStartScore(e.target.value)} 
/>
<br></br>
<br></br>
   { thankYou ? <label htmlFor="thankYou" className="statement starter">Today, I would like to say thank you to</label> : <></>}
   <textarea
   id="thankYou"
    className="formInput moment"
    wrap="soft"
    autoComplete="off"
    value={thankYou}
    placeholder="Today, I would like to say thank you to..."
    onChange={(e) => setThankYou(e.target.value)}
    />
   <hr></hr>
   {/* <h6 className="statement starter">I will prime myself for self-less exploration today by <input className="formInput" type="text" placeholder="..."></input></h6> */}
   { selfLess ? <label htmlFor="selfLess" className="statement starter">I will prime myself for self-less exploration today by </label> : <></>}
   <textarea
   id="thankYou"
    className="formInput moment"
    wrap="soft"
    autoComplete="off"
    value={selfLess}
    placeholder="I will prime myself for self-less exploration today by..."
    onChange={(e) => setSelfLess(e.target.value)}
    />
   <hr></hr>
   {/* <h6 className="statement starter">I am pleased to live in my mind and body today because <input className="formInput" type="text" placeholder="..."></input></h6> */}
   { mindBody ? <label htmlFor="mindBody" className="statement starter">I am pleased to live in my mind and body today because </label> : <></>}
   <textarea
   id="mindBody"
    className="formInput moment"
    wrap="soft"
    autoComplete="off"
    value={mindBody}
    placeholder="I am pleased to live in my mind and body today because..."
    onChange={(e) => setMindBody(e.target.value)}
    />
   <hr></hr>

   </div>

  <div className="tile centre">
    <div className="momentRow">
          <textarea
              className="formInput moment"
              wrap="soft"
              value={momentOne}
              autoComplete="off"
              placeholder="Moment One is..."
              onChange={(e) => setMomentOne(e.target.value)}
            />
            <h5>{momentOneScore}</h5>
            </div>
            <input

className="weekSlider"
type="range"
min="0"
max="10"
step="0.1"
value={momentOneScore}
onChange={(e) => setMomentOneScore(e.target.value)} 
/>
  <hr></hr>
  <div className="momentRow">
          <textarea
              className="formInput moment"
              wrap="soft"
              value={momentTwo}
              autoComplete="off"
              placeholder="Moment Two is..."
              onChange={(e) => setMomentTwo(e.target.value)}
            />
            <h5>{momentTwoScore}</h5>
            </div>
            <input

className="weekSlider"
type="range"
min="0"
max="10"
step="0.1"
value={momentTwoScore}
onChange={(e) => setMomentTwoScore(e.target.value)} 
/>
  <hr></hr>
  <div className="momentRow">
          <textarea
              className="formInput moment"
              wrap="soft"
              value={momentThree}
              autoComplete="off"
              placeholder="Moment Three is..."
              onChange={(e) => setMomentThree(e.target.value)}
            />
            <h5>{momentThreeScore}</h5>
            </div>
            <input

className="weekSlider"
type="range"
min="0"
max="10"
step="0.1"
value={momentThreeScore}
onChange={(e) => setMomentThreeScore(e.target.value)} 
/>
  <hr></hr>
  <div className="momentRow">
          <textarea
              className="formInput moment"
              wrap="soft"
              value={momentFour}
              autoComplete="off"
              placeholder="Moment Four is..."
              onChange={(e) => setMomentFour(e.target.value)}
            />
            <h5>{momentFourScore}</h5>
            </div>
            <input

className="weekSlider"
type="range"
min="0"
max="10"
step="0.1"
value={momentFourScore}
onChange={(e) => setMomentFourScore(e.target.value)} 
/>
  <hr></hr>
  <div className="momentRow">
          <textarea
              className="formInput moment"
              wrap="soft"
              value={momentFive}
              autoComplete="off"
              placeholder="Moment Five is..."
              onChange={(e) => setMomentFive(e.target.value)}
            />
            <h5>{momentFiveScore}</h5>
            </div>
             <input
className="weekSlider"
type="range"
min="0"
max="10"
step="0.1"
value={momentFiveScore}
onChange={(e) => setMomentFiveScore(e.target.value)} 
/> 
           
  </div>
  <div className="tile left">
  {/* <h6 className="statement starter">The memories from today that will capture it forever <input className="formInput" type="text" placeholder="..."></input></h6> */}
  { rememberToday ? <label htmlFor="rememberToday" className="statement starter">I am pleased to live in my mind and body today because </label> : <></>}
   <textarea
   id="rememberToday"
    className="formInput moment"
    wrap="soft"
    autoComplete="off"
    value={rememberToday}
    placeholder="The memories from today that will capture it forever are..."
    onChange={(e) => setRememberToday(e.target.value)}
    rows={4}
    />
      <hr></hr>
      {/* <h6 className="statement starter">The thoughts and feelings from today I would like to leave behind are <input className="formInput" type="text" placeholder="..."></input></h6> */}
      { leaveBehind ? <label htmlFor="leaveBehind" className="statement starter">I am pleased to live in my mind and body today because</label> : <></>}
   <textarea
   id="leaveBehind"
    className="formInput moment"
    wrap="soft"
    autoComplete="off"
    value={leaveBehind}
    placeholder="I am pleased to live in my mind and body today because..."
    onChange={(e) => setLeaveBehind(e.target.value)}
    rows={4}
    />
    <br></br>
    <br></br>
    <div className="momentRow">


        <label htmlFor="endScore" className="statement starter">After the day described above, I feel... </label> <h5>{endScore}</h5>    </div>

<input
id="endScore"
className="weekSlider"
type="range"
min="0"
max="5"
step="0.1"
value={endScore}
onChange={(e) => setEndScore(e.target.value)} 
/>
</div>
  

</main>
</form>
<footer className="dock footer">
<FullDock 
openClose={stateChanger} 
hideOverlay={cursorDisplayHide}
changeName={cursorChangeName}
changeDOB={cursorChangeDOB}
changeValues={cursorChangeValues} 
changeWhy={cursorChangeWhy} 
changeVision={cursorChangeVision} 
changeIkigai={cursorChangeIkigai} 
changeQuote={cursorChangeQuote} 
changeMemory={cursorChangeMemory} 
changeObjOne={cursorChangeObjOne}
changeObjTwo={cursorChangeObjTwo}
changeObjThree={cursorChangeObjThree}
changeObjFour={cursorChangeObjFour}
changeObjFive={cursorChangeObjFive}
changeObjSix={cursorChangeObjSix}
changeObjSeven={cursorChangeObjSeven}
changeObjEight={cursorChangeObjEight}
changeObjNine={cursorChangeObjNine}
changeObjTen={cursorChangeObjTen}
updateDay={updateHandler}
/>
</footer>

 </>
  );
}
