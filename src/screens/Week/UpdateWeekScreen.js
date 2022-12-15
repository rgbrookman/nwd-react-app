import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { createWeekAction, listWeeks, updateWeekAction } from '../../actions/weekActions';
import Loading from '../../components/Loading/Loading';
import PageLoading from '../../components/Loading/PageLoading';
import { listYears } from '../../actions/yearActions';
import { listDays } from '../../actions/dayActions';
import { ErrorMessage } from '../../components/Error/ErrorMessage';
import CentralHeader from '../../components/Header/CentralHeader';
import MouseTooltip from '../../components/MouseTooltip/MouseTooltip';
import HideDock from '../../components/Dock/HideDock';
import axios from "axios";
import MidDock from '../../components/Dock/MidDock';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faEraser, faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import './weekscreen.css';

export default function ViewWeekScreen({ history }) {

  // Form State
  const [objectiveOne_text, setObjectiveOne_text] = useState();
  const [objectiveOne_score, setObjectiveOne_score] = useState();
  const [objectiveTwo_text, setObjectiveTwo_text] = useState();
  const [objectiveTwo_score, setObjectiveTwo_score] = useState();
  const [objectiveThree_text, setObjectiveThree_text] = useState();
  const [objectiveThree_score, setObjectiveThree_score] = useState();
  const [objectiveFour_text, setObjectiveFour_text] = useState();
  const [objectiveFour_score, setObjectiveFour_score] = useState();
  const [objectiveFive_text, setObjectiveFive_text] = useState();
  const [objectiveFive_score, setObjectiveFive_score] = useState();
  const [objectiveSix_text, setObjectiveSix_text] = useState();
  const [objectiveSix_score, setObjectiveSix_score] = useState();
  const [objectiveSeven_text, setObjectiveSeven_text] = useState();
  const [objectiveSeven_score, setObjectiveSeven_score] = useState();
  const [objectiveEight_text, setObjectiveEight_text] = useState();
  const [objectiveEight_score, setObjectiveEight_score] = useState();
  const [objectiveNine_text, setObjectiveNine_text] = useState();
  const [objectiveNine_score, setObjectiveNine_score] = useState();
  const [objectiveTen_text, setObjectiveTen_text] = useState();
  const [objectiveTen_score, setObjectiveTen_score] = useState();


  const [pageLoading, setPageLoading] = useState(true);
  const [cursorDisplayState, setCursorDisplayState] = useState(true);
  const [cursorState, setCursorState] = useState('The dock allows you to look at your diary through the lens of your important frames and plans.');

  const [show, setShow] = useState(false);
const target = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const weekList = useSelector((state) => state.weekList);
  const { loading, error, weeks } = weekList;

  const weekUpdate = useSelector((state) => state.weekUpdate);
  const { success: successUpdate } = weekUpdate;


  useEffect(() => {
    dispatch(listWeeks());
  }, [dispatch, userInfo, history]);

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

  useEffect(() => {

    const fetching = async () => {
      try {
        const { data } = await axios.get(`https://nwd-backend.herokuapp.com/api/weeks/week/${id}`);
          setObjectiveOne_text(data.objectiveOne_text);
          setObjectiveOne_score(data.objectiveOne_score);
          setObjectiveTwo_text(data.objectiveTwo_text);
          setObjectiveTwo_score(data.objectiveTwo_score);
          setObjectiveThree_text(data.objectiveThree_text);
          setObjectiveThree_score(data.objectiveThree_score);
          setObjectiveFour_text(data.objectiveFour_text);
          setObjectiveFour_score(data.objectiveFour_score);
          setObjectiveFive_text(data.objectiveFive_text);
          setObjectiveFive_score(data.objectiveFive_score);
          setObjectiveSix_text(data.objectiveSix_text);
          setObjectiveSix_score(data.objectiveSix_score);
          setObjectiveSeven_text(data.objectiveSeven_text);
          setObjectiveSeven_score(data.objectiveSeven_score);
          setObjectiveEight_text(data.objectiveEight_text);
          setObjectiveEight_score(data.objectiveEight_score);
          setObjectiveNine_text(data.objectiveNine_text);
          setObjectiveNine_score(data.objectiveNine_score);
          setObjectiveTen_text(data.objectiveTen_text);
          setObjectiveTen_score(data.objectiveTen_score);
  } catch(error) {
    console.log(error);
  }
      }
    fetching();
  }, [id]);


  const resetHandler = () => {
    setObjectiveOne_text("");
    setObjectiveOne_score("");
    setObjectiveTwo_text("");
    setObjectiveTwo_score("");
    setObjectiveThree_text("");
    setObjectiveThree_score("");
    setObjectiveFour_text("");
    setObjectiveFour_score("");
    setObjectiveFive_text("");
    setObjectiveFive_score("");
    setObjectiveSix_text("");
    setObjectiveSix_score("");
    setObjectiveSeven_text("");
    setObjectiveSeven_score("");
    setObjectiveEight_text("");
    setObjectiveEight_score("");
    setObjectiveNine_text("");
    setObjectiveNine_score("");
    setObjectiveTen_text("");
    setObjectiveTen_score("");
};

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateWeekAction(id,
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
      objectiveTen_score));

      if (!objectiveOne_text ||
        !objectiveOne_score ||
        !objectiveTwo_text ||
        !objectiveTwo_score ||
        !objectiveThree_text ||
        !objectiveThree_score ||
        !objectiveFour_text ||
        !objectiveFour_score ||
        !objectiveFive_text ||
        !objectiveFive_score ||
        !objectiveSix_text ||
        !objectiveSix_score ||
        !objectiveSeven_text ||
        !objectiveSeven_score ||
        !objectiveEight_text ||
        !objectiveEight_score ||
        !objectiveNine_text ||
        !objectiveNine_score ||
        !objectiveTen_text ||
        !objectiveTen_score) return;

      // resetHandler();

  };

  const showHideState = {
    hide: {
      display: "none",
    },
    show: {
      display: "block",
    },
  }

  const valueState = {
    hide: {
      display: "none",
    },
    show: {
      display: "block",
    },
  };

  const loadingTimeout = () => {
    setTimeout(()=> {
      setPageLoading(false)
    }, 3000)
  }

  useEffect(()=> {
    loadingTimeout();
  })

  useEffect(() => {
    document.title = "Week | Update";
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
    
    const cursorChangeValuesOne = () => {
      setCursorState(cursorState => years && years.map((year) => `${year.myValues_1}: ${year.myValues_1_Text}`));
      {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
    };
  
    const cursorChangeValuesTwo = () => {
      setCursorState(cursorState => years && years.map((year) => `${year.myValues_2}: ${year.myValues_2_Text}`));
      {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
    };
  
    const cursorChangeValuesThree = () => {
      setCursorState(cursorState => years && years.map((year) => `${year.myValues_3}: ${year.myValues_3_Text}`));
      {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
    };
  
    const cursorChangeValuesFour = () => {
      setCursorState(cursorState => years && years.map((year) => `${year.myValues_4}: ${year.myValues_4_Text}`));
      {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
    };
  
    const cursorChangeValuesFive = () => {
      setCursorState(cursorState => years && years.map((year) => `${year.myValues_5}: ${year.myValues_5_Text}`));
      {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
    };
  
    const cursorChangeVisionFive = () => {
      setCursorState(cursorState => years && years.map((year) => `${year.myVision_5}`));
      {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
    };
  
    const cursorChangeVisionOne = () => {
      setCursorState(cursorState => years && years.map((year) => `${year.myVision_1}`));
      {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
    };
  
    const cursorChangeVisionTwo = () => {
      setCursorState(cursorState => years && years.map((year) => `${year.myVision_2}`));
      {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
    };
  
    const cursorChangeVisionThree = () => {
      setCursorState(cursorState => years && years.map((year) => `${year.myVision_3}`));
      {cursorDisplayState == false ? setCursorDisplayState(cursorDisplayState => true) : setCursorDisplayState(cursorDisplayState => true)}
    };
  
    const cursorChangeVisionFour = () => {
      setCursorState(cursorState => years && years.map((year) => `${year.myVision_4}`));
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

  const weekVideo = 'https://share.vidyard.com/watch/Vry5iUQHge3eD6djb2k912?';

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
<form onChange={updateHandler}>
<main className="weekContainer">
<HideDock 
   toggleOverlay={cursorDisplayToggle}
   updateWeek={updateHandler} />
    <MidDock 
   changeName={cursorChangeName}
   changeDOB={cursorChangeDOB}
   changeValuesOne={cursorChangeValuesOne} 
   changeValuesTwo={cursorChangeValuesTwo} 
   changeValuesThree={cursorChangeValuesThree} 
   changeValuesFour={cursorChangeValuesFour} 
   changeValuesFive={cursorChangeValuesFive} 
   changeVisionOne={cursorChangeVisionOne} 
   changeVisionTwo={cursorChangeVisionTwo} 
   changeVisionThree={cursorChangeVisionThree} 
   changeVisionFour={cursorChangeVisionFour} 
   changeVisionFive={cursorChangeVisionFive} 
   changeIkigai={cursorChangeIkigai} 
   changeQuote={cursorChangeQuote} 
   changeMemory={cursorChangeMemory} />
  <div id="weektest">
    <div class="weekTile">
    { objectiveOne_text ? <label for="objOne" className="statement starter">#1 </label> : <></>}
    <textarea
      id="objOne"
      className="formInput week"
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
      className="formInput week"
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
      className="formInput week"
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
      className="formInput week"
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
      className="formInput week"
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
      className="formInput week"
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
      className="formInput week"
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
      className="formInput week"
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
      className="formInput week"
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
      className="formInput week"
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
</form>
</>
  );
}
