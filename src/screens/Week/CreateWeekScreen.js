import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { createWeekAction, listWeeks, updateWeekAction } from '../../actions/weekActions';
import Loading from '../../components/Loading/Loading';
import { listYears } from '../../actions/yearActions';
import { listDays } from '../../actions/dayActions';
import CentralHeader from '../../components/Header/CentralHeader';
import MouseTooltip from '../../components/MouseTooltip/MouseTooltip';
import HideDock from '../../components/Dock/HideDock';
import MidDock from '../../components/Dock/MidDock';
import { ErrorMessage } from '../../components/Error/ErrorMessage';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import './weekscreen.css';
import axios from "axios";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

export default function WeekScreenTest({ history }) {
  const [objectiveOne_text, setObjectiveOne_text] = useState("");
  const [objectiveOne_score, setObjectiveOne_score] = useState(0);
  const [objectiveTwo_text, setObjectiveTwo_text] = useState("");
  const [objectiveTwo_score, setObjectiveTwo_score] = useState(0);
  const [objectiveThree_text, setObjectiveThree_text] = useState("");
  const [objectiveThree_score, setObjectiveThree_score] = useState(0);
  const [objectiveFour_text, setObjectiveFour_text] = useState("");
  const [objectiveFour_score, setObjectiveFour_score] = useState(0);
  const [objectiveFive_text, setObjectiveFive_text] = useState("");
  const [objectiveFive_score, setObjectiveFive_score] = useState(0);
  const [objectiveSix_text, setObjectiveSix_text] = useState("");
  const [objectiveSix_score, setObjectiveSix_score] = useState(0);
  const [objectiveSeven_text, setObjectiveSeven_text] = useState("");
  const [objectiveSeven_score, setObjectiveSeven_score] = useState(0);
  const [objectiveEight_text, setObjectiveEight_text] = useState("");
  const [objectiveEight_score, setObjectiveEight_score] = useState(0);
  const [objectiveNine_text, setObjectiveNine_text] = useState("");
  const [objectiveNine_score, setObjectiveNine_score] = useState(0);
  const [objectiveTen_text, setObjectiveTen_text] = useState("");
  const [objectiveTen_score, setObjectiveTen_score] = useState(0);

  const [videoDisplay, setVideoDisplay] = useState(true);
  const [videoLink, setVideoLink] = useState('GQzaJ3qCo4k');
  const [cursorDisplayState, setCursorDisplayState] = useState(true);

  const [cursorState, setCursorState] = useState('The dock allows you to look at your diary through the lens of your important frames and plans.');

  const [fontState, setFontState] = useState(96);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const weekCreate = useSelector((state) => state.weekCreate);
  const { loading, error, weeks } = weekCreate;

  const yearList = useSelector((state) => state.yearList);
const { years } = yearList;

const dayList = useSelector((state) => state.dayList); //
const { days } = dayList;


useEffect(() => {
dispatch(listYears());
}, [dispatch, userInfo, history])

useEffect(() => {
  dispatch(listDays());
  }, [dispatch, userInfo, history])


  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createWeekAction(
      objectiveOne_text,
      objectiveOne_score,
      objectiveTwo_text,
      objectiveTwo_score,
      objectiveThree_text,
      objectiveThree_score,
      objectiveFour_text,
      objectiveFour_score,
      objectiveFive_text,
      objectiveFive_score,
      objectiveSix_text,
      objectiveSix_score,
      objectiveSeven_text,
      objectiveSeven_score,
      objectiveEight_text,
      objectiveEight_score,
      objectiveNine_text,
      objectiveNine_score,
      objectiveTen_text,
      objectiveTen_score,
    ));
  };

  useEffect(() => {
    document.title = "Week | Create";
  }, []);

  const cursorDisplayToggle = () => {
    setCursorDisplayState(cursorDisplayState => !cursorDisplayState);
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

  return (
<>
<CentralHeader />
<MouseTooltip
          visible={cursorDisplayState}
          offsetX={15}
          offsetY={10}
          zIndex={1000}
        >
        <h1 className="sickTooltip">{cursorState}</h1>
        </MouseTooltip>
<Form onSubmit={submitHandler}>
<main className="weekContainer">
<HideDock 
   toggleOverlay={cursorDisplayToggle}
   saveWeek={submitHandler} />

   <MidDock 
   changeName={cursorChangeName}
   changeDOB={cursorChangeDOB}
   changeValues={cursorChangeValues} 
   changeWhy={cursorChangeWhy} 
   changeVision={cursorChangeVision} 
   changeIkigai={cursorChangeIkigai} 
   changeQuote={cursorChangeQuote} 
   changeMemory={cursorChangeMemory} />
  <div id="weektest">
    <div class="weekTile">
    { objectiveOne_text ? <label for="objOne" className="statement starter">#1 </label> : <></>}
    <textarea
      id="objOne"
      className="formInput year"
      wrap="soft"
      autoComplete="off"
      value={objectiveOne_text}
      placeholder="Objective #1"
      rows={8}
      cols={12}
      onChange={(e) => setObjectiveOne_text(e.target.value)}
          />
    <input
      className="weekSlider"
      type="range"
      min="0"
      max="10"
      step="1"
      value={objectiveOne_score}
      onChange={(e) => setObjectiveOne_score(e.target.value)} 
      />
    </div>
    <div class="weekTile">
    { objectiveTwo_text ? <label for="objTwo" className="statement starter">#2 </label> : <></>}
    <textarea
      id="objTwo"
      className="formInput year"
      wrap="soft"
      autoComplete="off"
      value={objectiveTwo_text}
      placeholder="Objective #2"
      rows={8}
      cols={12}
      onChange={(e) => setObjectiveTwo_text(e.target.value)}
          />
    <input
      className="weekSlider"
      type="range"
      min="0"
      max="10"
      step="1"
      value={objectiveTwo_score}
      onChange={(e) => setObjectiveTwo_score(e.target.value)} 
      />
</div>
<div class="weekTile">
{ objectiveThree_text ? <label for="objThree" className="statement starter">#3 </label> : <></>}
    <textarea
      id="objThree"
      className="formInput year"
      wrap="soft"
      autoComplete="off"
      value={objectiveThree_text}
      placeholder="Objective #3"
      rows={8}
      cols={12}
      onChange={(e) => setObjectiveThree_text(e.target.value)}
          />
    <input
      className="weekSlider"
      type="range"
      min="0"
      max="10"
      step="1"
      value={objectiveThree_score}
      onChange={(e) => setObjectiveThree_score(e.target.value)} 
      />
</div>
<div class="weekTile">
{ objectiveFour_text ? <label for="objFour" className="statement starter">#4 </label> : <></>}
    <textarea
      id="objFour"
      className="formInput year"
      wrap="soft"
      autoComplete="off"
      value={objectiveFour_text}
      placeholder="Objective #4"
      rows={8}
      cols={12}
      onChange={(e) => setObjectiveFour_text(e.target.value)}
          />
    <input
      className="weekSlider"
      type="range"
      min="0"
      max="10"
      step="1"
      value={objectiveFour_score}
      onChange={(e) => setObjectiveFour_score(e.target.value)} 
      />
</div>
<div class="weekTile">
{ objectiveFive_text ? <label for="objFive" className="statement starter">#5 </label> : <></>}
    <textarea
      id="objFive"
      className="formInput year"
      wrap="soft"
      autoComplete="off"
      value={objectiveFive_text}
      placeholder="Objective #5"
      rows={8}
      cols={12}
      onChange={(e) => setObjectiveFive_text(e.target.value)}
          />
    <input
      className="weekSlider"
      type="range"
      min="0"
      max="10"
      step="1"
      value={objectiveFive_score}
      onChange={(e) => setObjectiveFive_score(e.target.value)} 
      />
</div>
<div class="weekTile">
{ objectiveSix_text ? <label for="objSix" className="statement starter">#6 </label> : <></>}
    <textarea
      id="objSix"
      className="formInput year"
      wrap="soft"
      autoComplete="off"
      value={objectiveSix_text}
      placeholder="Objective #6"
      rows={8}
      cols={12}
      onChange={(e) => setObjectiveSix_text(e.target.value)}
          />
    <input
      className="weekSlider"
      type="range"
      min="0"
      max="10"
      step="1"
      value={objectiveSix_score}
      onChange={(e) => setObjectiveSix_score(e.target.value)} 
      />
</div>
<div class="weekTile">
{ objectiveSeven_text ? <label for="objSeven" className="statement starter">#7 </label> : <></>}
    <textarea
      id="objSeven"
      className="formInput year"
      wrap="soft"
      autoComplete="off"
      value={objectiveSeven_text}
      placeholder="Objective #7"
      rows={8}
      cols={12}
      onChange={(e) => setObjectiveSeven_text(e.target.value)}
          />
    <input
      className="weekSlider"
      type="range"
      min="0"
      max="10"
      step="1"
      value={objectiveSeven_score}
      onChange={(e) => setObjectiveSeven_score(e.target.value)} 
      />
</div>
<div class="weekTile">
{ objectiveEight_text ? <label for="objEight" className="statement starter">#8 </label> : <></>}
    <textarea
      id="objEight"
      className="formInput year"
      wrap="soft"
      autoComplete="off"
      value={objectiveEight_text}
      placeholder="Objective #8"
      rows={8}
      cols={12}
      onChange={(e) => setObjectiveEight_text(e.target.value)}
          />
    <input
      className="weekSlider"
      type="range"
      min="0"
      max="10"
      step="1"
      value={objectiveEight_score}
      onChange={(e) => setObjectiveEight_score(e.target.value)} 
      />
</div>
<div class="weekTile">
{ objectiveNine_text ? <label for="objNine" className="statement starter">#9 </label> : <></>}
    <textarea
      id="objNine"
      className="formInput year"
      wrap="soft"
      autoComplete="off"
      value={objectiveNine_text}
      placeholder="Objective #9"
      rows={8}
      cols={12}
      onChange={(e) => setObjectiveNine_text(e.target.value)}
          />
    <input
      className="weekSlider"
      type="range"
      min="0"
      max="10"
      step="1"
      value={objectiveNine_score}
      onChange={(e) => setObjectiveNine_score(e.target.value)} 
      />
</div>
<div class="weekTile">
{ objectiveTen_text ? <label for="objTen" className="statement starter">#10 </label> : <></>}
    <textarea
      id="objTen"
      className="formInput year"
      wrap="soft"
      autoComplete="off"
      value={objectiveTen_text}
      placeholder="Objective #10"
      rows={8}
      cols={12}
      onChange={(e) => setObjectiveTen_text(e.target.value)}
          />
    <input
      className="weekSlider"
      type="range"
      min="0"
      max="10"
      step="1"
      value={objectiveTen_score}
      onChange={(e) => setObjectiveTen_score(e.target.value)} 
      />
</div>
  </div>
</main>
</Form>
</>
  );
}
