import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import { createDayAction } from '../../actions/dayActions';
import { listYears } from '../../actions/yearActions';
import { listWeeks } from '../../actions/weekActions';
import { listDays } from '../../actions/dayActions';
import { Card, Button } from 'react-bootstrap';
import Loading from '../../components/Loading/Loading';
import PageLoading from '../../components/Loading/PageLoading';
import { ErrorMessage } from '../../components/Error/ErrorMessage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faEraser, faCircleCheck, faQuestion  } from '@fortawesome/free-solid-svg-icons'
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import CentralHeader from '../../components/Header/CentralHeader';
import Sidebar from '../../components/Sidebar/Sidebar';
import FullDock from '../../components/Dock/FullDock';
import MouseTooltip from '../../components/MouseTooltip/MouseTooltip';
import './dayscreens.css';

export default function CreateDayScreen({ history, props }) {

// Form State - Today
const [startScore, setStartScore] = useState(localStorage.startScore ? localStorage.startScore : "");
const [logDate, setLogDate] = useState(0);
const [thankYou, setThankYou] = useState(localStorage.thankYou ? localStorage.thankYou : "");
const [selfLess, setSelfLess] = useState(localStorage.selfLess ? localStorage.selfLess : "");
const [mindBody, setMindBody] = useState(localStorage.mindBody ? localStorage.mindBody : "");
const [momentOne, setMomentOne] = useState(localStorage.momentOne ? localStorage.momentOne : "");
const [momentOneScore, setMomentOneScore] = useState(localStorage.momentOneScore ? localStorage.momentOneScore : "");
const [momentTwo, setMomentTwo] = useState(localStorage.momentTwo ? localStorage.momentTwo : "");
const [momentTwoScore, setMomentTwoScore] = useState(localStorage.momentTwoScore ? localStorage.momentTwoScore : "");
const [momentThree, setMomentThree] = useState(localStorage.momentThree ? localStorage.momentThree : "");
const [momentThreeScore, setMomentThreeScore] = useState(localStorage.momentThreeScore ? localStorage.momentThreeScore : "");
const [momentFour, setMomentFour] = useState(localStorage.momentFour ? localStorage.momentFour : "");
const [momentFourScore, setMomentFourScore] = useState(localStorage.momentFourScore ? localStorage.momentFourScore : "");
const [momentFive, setMomentFive] = useState(localStorage.momentFive ? localStorage.momentFive : "");
const [momentFiveScore, setMomentFiveScore] = useState(localStorage.momentFiveScore ? localStorage.momentFiveScore : "");
const [rememberToday, setRememberToday] = useState(localStorage.rememberToday ? localStorage.rememberToday : "");
const [leaveBehind, setLeaveBehind] = useState(localStorage.leaveBehind ? localStorage.leaveBehind : "");
const [endScore, setEndScore] = useState(localStorage.endScore ? localStorage.endScore : "");

// Year State
const [yourName, setYourName] = useState();
const [inputName, setInputName] = useState();
const [birthDate, setBirthDate] =useState();
const [myValues_1, setMyValues_1] = useState();
const [inputValues_1, setInputValues_1] = useState();
const [myValues_1_Text, setMyValues_1_Text] = useState();
const [inputValues_1_Text, setInputValues_1_Text] = useState();
const [myValues_2, setMyValues_2] = useState();
const [inputValues_2, setInputValues_2] = useState();
const [myValues_2_Text, setMyValues_2_Text] = useState();
const [inputValues_2_Text, setInputValues_2_Text] = useState();
const [myValues_3, setMyValues_3] = useState();
const [inputValues_3, setInputValues_3] = useState();
const [myValues_3_Text, setMyValues_3_Text] = useState();
const [inputValues_3_Text, setInputValues_3_Text] = useState();
const [myValues_4, setMyValues_4] = useState();
const [inputValues_4, setInputValues_4] = useState();
const [myValues_4_Text, setMyValues_4_Text] = useState();
const [inputValues_4_Text, setInputValues_4_Text] = useState();
const [myValues_5, setMyValues_5] = useState();
const [inputValues_5, setInputValues_5] = useState();
const [myValues_5_Text, setMyValues_5_Text] = useState();
const [inputValues_5_Text, setInputValues_5_Text] = useState();
const [myVision_1, setMyVision_1] = useState();
const [inputVision_1, setInputVision_1] = useState();
const [myVision_2, setMyVision_2] = useState();
const [inputVision_2, setInputVision_2] = useState();
const [myVision_3, setMyVision_3] = useState();
const [inputVision_3, setInputVision_3] = useState();
const [myVision_4, setMyVision_4] = useState();
const [inputVision_4, setInputVision_4] = useState();
const [myVision_5, setMyVision_5] = useState();
const [inputVision_5, setInputVision_5] = useState();
const [whyNWD, setWhyNWD] = useState();
const [inputWhy, setInputWhy] = useState();
const [myIkigai, setMyIkigai] = useState();
const [inputIkigai, setInputIkigai] = useState();
const [navigationalQuote, setNavigationalQuote] = useState();
const [inputQuote, setInputQuote] = useState();


// Book State
const [classState, setClassState]= useState('journal outer');

// Dock State
const [cursorState, setCursorState] = useState('The dock allows you to look at your diary through the lens of your important frames and plans.');
const [cursorDisplayState, setCursorDisplayState] = useState(true);

// Loading State
const [pageLoading, setPageLoading] = useState(true);


// Data Calls & Event Handlers
const dispatch = useDispatch();
const navigate = useNavigate();
let { id } = useParams();

const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

const dayCreate = useSelector((state) => state.dayCreate); //
const { loading, error,  day } = dayCreate; 

const yearList = useSelector((state) => state.yearList);
const { years } = yearList;

const weekList = useSelector((state) => state.weekList);
const { weeks } = weekList;

const dayList = useSelector((state) => state.dayList);
const { days } = dayList;

useEffect(() => {
dispatch(listYears());
}, [dispatch, userInfo, history])

useEffect(() => {
  dispatch(listWeeks());
}, [dispatch, userInfo, history]);

useEffect(() => {
  dispatch(listDays());
}, [dispatch, userInfo, history]);

const submitHandler = (e) => {
  e.preventDefault();
  dispatch(createDayAction(
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
    endScore
  ));
  localStorage.removeItem('thankYou');
  localStorage.removeItem('selfLess');
  localStorage.removeItem('mindBody');
  localStorage.removeItem('momentOne');
  localStorage.removeItem('momentTwo');
  localStorage.removeItem('momentThree');
  localStorage.removeItem('momentFour');
  localStorage.removeItem('momentFive');
  localStorage.removeItem('rememberToday');
  localStorage.removeItem('leaveBehind');
  localStorage.removeItem('startScore');
  localStorage.removeItem('endScore');
  localStorage.removeItem('momentOneScore');
  localStorage.removeItem('momentTwoScore');
  localStorage.removeItem('momentThreeScore');
  localStorage.removeItem('momentFourScore');
  localStorage.removeItem('momentFiveScore');
};

const resetHandler = () => {
  localStorage.removeItem('thankYou');
  localStorage.removeItem('selfLess');
  localStorage.removeItem('mindBody');
  localStorage.removeItem('momentOne');
  localStorage.removeItem('momentTwo');
  localStorage.removeItem('momentThree');
  localStorage.removeItem('momentFour');
  localStorage.removeItem('momentFive');
  localStorage.removeItem('rememberToday');
  localStorage.removeItem('leaveBehind');
  localStorage.removeItem('startScore');
  localStorage.removeItem('endScore');
  localStorage.removeItem('momentOneScore');
  localStorage.removeItem('momentTwoScore');
  localStorage.removeItem('momentThreeScore');
  localStorage.removeItem('momentFourScore');
  localStorage.removeItem('momentFiveScore');
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

const cursorChangeDOB= () => {
  setCursorState(cursorState => years && years.map((year) => year.birthDate.substring(0,10))) 
  {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
};

const cursorChangeValues = () => {
  setCursorState(cursorState => years && years.map((year) => year.myValues_1))
  {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
};

const cursorChangeVision = () => {
  setCursorState(cursorState => 
    'Vision #1') 
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
  setCursorState(cursorState => 
    '') 
  {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
};

const cursorChangeWhy = () => {
  setCursorState(cursorState => 
    'Why!') 
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
 <CentralHeader />
  
  <form onSubmit={submitHandler}>


  <main className="createday container">
    <div className="tile left">
      <div className="dateRow">
        <label for="loggedDate">Diary Entry Date:</label>
        { pageLoading && !logDate ? <></> : 
        <input
          id="loggedDate"
          type="date"
          value={logDate}
          onChange={(e) => setLogDate(e.target.value)}
          required
          />
        }
      </div>
{/* <hr className="horizontalLine" /> */}
  <div className="momentRow">

<label for="beforeScore" className="statement starter">Before filling in my NWD today, I feel </label> <h5>{startScore}</h5>
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
   { thankYou ? <label for="thankYou" className="statement starter">Today, I would like to say thank you to</label> : <></>}
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
   { selfLess ? <label for="selfLess" className="statement starter">I will prime myself for self-less exploration today by </label> : <></>}
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
   { mindBody ? <label for="mindBody" className="statement starter">I am pleased to live in my mind and body today because </label> : <></>}
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
  { rememberToday ? <label for="rememberToday" className="statement starter">I am pleased to live in my mind and body today because </label> : <></>}
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
      { leaveBehind ? <label for="leaveBehind" className="statement starter">The thoughts and feelings from today I would like to leave behind are...</label> : <></>}
   <textarea
   id="leaveBehind"
    className="formInput moment"
    wrap="soft"
    autoComplete="off"
    value={leaveBehind}
    placeholder="The thoughts and feelings from today I would like to leave behind are..."
    onChange={(e) => setLeaveBehind(e.target.value)}
    rows={4}
    />
    <br></br>
    <br></br>
    <div className="momentRow">


        <label for="endScore" className="statement starter">After the day described above, I feel... </label> <h5>{endScore}</h5>    </div>

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
submitDay={submitHandler}
/>
</footer>

       
    </>
  );
}
