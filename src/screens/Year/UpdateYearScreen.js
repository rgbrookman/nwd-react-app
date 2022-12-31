import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { updateYearAction, listYears } from '../../actions/yearActions';
import { listDays } from '../../actions/dayActions';
import HideDock from '../../components/Dock/HideDock';
import TileLoading from '../../components/Loading/TileLoading';
import MouseTooltip from '../../components/MouseTooltip/MouseTooltip';
import {Helmet} from "react-helmet"
import PageLoading from '../../components/Loading/PageLoading';
import { ErrorMessage } from '../../components/Error/ErrorMessage';
import { Button, Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faEraser, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { compareAsc, format } from 'date-fns'
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import CentralHeader from '../../components/Header/CentralHeader';
import axios from "axios";
import './yearscreen.css';

export default function UpdateYearScreen({ history }) {
  const [yourName, setYourName] = useState();
  const [inputName, setInputName] = useState();
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
  const [rememberToday, setRememberToday] = useState();
  const [inputWhy, setInputWhy] = useState();
  const [myIkigai, setMyIkigai] = useState();
  const [inputIkigai, setInputIkigai] = useState();
  const [navigationalQuote, setNavigationalQuote] = useState();
  const [inputQuote, setInputQuote] = useState();

  const [birthDate, setBirthDate] = useState();
  const [inputBirthDate, setInputBirthDate] = useState();
  const [cursorDisplayState, setCursorDisplayState] = useState(true);

  const [videoDisplay, setVideoDisplay] = useState(true);
  const [videoLink, setVideoLink] = useState('TpLVtoE6bFg');

  const [pageLoading, setPageLoading] = useState(true);

  const [show, setShow] = useState(false);
  const target = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const yearList = useSelector((state) => state.yearList);
  const { loading, error, years } = yearList;

  const yearUpdate = useSelector((state) => state.yearUpdate);
  const { success: successUpdate } = yearUpdate;

  useEffect(() => {
    dispatch(listYears());
  }, [dispatch, userInfo, history]);

  const dayList = useSelector((state) => state.dayList);
  const { days } = dayList;

  useEffect(() => {
    dispatch(listDays());
  }, [dispatch, userInfo, history]);

  const cursorDisplayToggle = () => {
    setCursorDisplayState(cursorDisplayState => !cursorDisplayState);
    };

useEffect(() => {
  const fetching = async () => {
    try {
      const { data } = await axios.get(`https://nwd-backend.herokuapp.com/api/years/year/${id}`);
        setYourName(data.yourName);
        setBirthDate(data.birthDate);
        setMyValues_1(data.myValues_1);
        setMyValues_1_Text(data.myValues_1_Text);
        setMyValues_2(data.myValues_2);
        setMyValues_2_Text(data.myValues_2_Text);
        setMyValues_3(data.myValues_3);
        setMyValues_3_Text(data.myValues_3_Text);
        setMyValues_4(data.myValues_4);
        setMyValues_4_Text(data.myValues_4_Text);
  setMyValues_5(data.myValues_5);
  setMyValues_5_Text(data.myValues_5_Text);
  setMyVision_1(data.myVision_1);
  setMyVision_2(data.myVision_2);
    setMyVision_3(data.myVision_3);
  setMyVision_4(data.myVision_4);
  setMyVision_5(data.myVision_5);
  setWhyNWD(data.whyNWD);
  setMyIkigai(data.myIkigai);
  setNavigationalQuote(data.navigationalQuote);
} catch(error) {
  console.log(error);
}
    }
  
  const dateValid = async () =>{
    await fetching();
     setBirthDate(birthDate.replace(/-/g,"/").substring(0,10));
  }

  dateValid();   

}, [id, birthDate]);

   const resetHandler = () => {
     setYourName("");
 setBirthDate("");
 setMyValues_1("");
 setMyValues_1_Text("");
 setMyValues_2("");
 setMyValues_2_Text("");
 setMyValues_3("");
 setMyValues_3_Text("");
 setMyValues_4("");
 setMyValues_4_Text("");
 setMyValues_5("");
 setMyValues_5_Text("");
 setMyVision_1("");
 setMyVision_2("");
   setMyVision_3("");
 setMyVision_4("");
 setMyVision_5("");
 setWhyNWD("");
 setMyIkigai("");
 setNavigationalQuote("");
};

const updateHandler = async (e) => {
  await e.preventDefault();
  try {
  dispatch(updateYearAction(id,
    yourName,
    birthDate,
    myValues_1,
    myValues_1_Text,
    myValues_2,
    myValues_2_Text,
    myValues_3,
    myValues_3_Text,
    myValues_4,
    myValues_4_Text,
    myValues_5,
    myValues_5_Text,
    myVision_1,
    myVision_2,
    myVision_3,
    myVision_4,
    myVision_5,
    whyNWD,
    myIkigai,
    navigationalQuote));
  } catch(error) {
      console.log(error);
    }

    if (!yourName ||
        !birthDate ||
        !myValues_1 ||
        !myValues_1_Text ||
        !myValues_2 ||
        !myValues_2_Text ||
        !myValues_3 ||
        !myValues_3_Text ||
        !myValues_4 ||
        !myValues_4_Text ||
        !myValues_5 ||
        !myValues_5_Text ||
        !myVision_1 ||
        !myVision_2 ||
        !myVision_3 ||
        !myVision_4 ||
        !myVision_5 ||
        !whyNWD ||
        !myIkigai ||
        !navigationalQuote ) return;
        
    resetHandler();

};

let birthday = years && years.map((year) => year.birthDate);
console.log(birthday);

let day1 = new Date(birthday);
console.log(day1);

let day2 = new Date();
console.log(day2);

let diff = Math.abs(day2-day1);
  console.log(diff);
let daysCalc = diff / (1000 * 3600 * 24)
  console.log(daysCalc);
let days1 = Math.floor(daysCalc);
    console.log(days1);

const [continuation, setContinuation] = useState(80000);

const loadingTimeout = () => {
  setTimeout(()=> {
    setPageLoading(false)
  }, 3000)
}

useEffect(()=> {
  loadingTimeout();
   setContinuation(days1);
}, [days1]);


  return (

<>
<Helmet>
                      <title>Update | Year</title>
                  </Helmet>
<CentralHeader  />
<MouseTooltip
          visible={cursorDisplayState}
          offsetX={15}
          offsetY={10}
          zIndex={1000}
        >
        <h1 className="sickTooltip"></h1>
        </MouseTooltip>
<form onChange={updateHandler}>
<main className='yearContainer'>
  { pageLoading ? <TileLoading /> : 
  <>
<HideDock 
   toggleOverlay={cursorDisplayToggle}
   updateYear={updateHandler} />
<div id="yeartest">
  <div className="yeartile yn">
  { yourName ? <label htmlFor="yourName" className="statement starter">My Name is... </label> : <></>}
         <textarea
         id="yourName"
          className="formInput year"
          wrap="soft"
          autoComplete="off"
          value={yourName}
          rows={15}
          
          placeholder="My name is...."
          onChange={(e) => setYourName(e.target.value)}
          />
  </div>

  <div className="yeartile dob">
  { birthDate ? 
  <>
  <label htmlFor="DOB" className="statement starter">I was born on... </label>
  <h3>{birthDate}</h3>
  </>
  : 
  <>
  <label htmlFor="DOB" className="statement starter">I was born on... </label>
  <motion.input
  id="DOB"
       type="date"
       value={birthDate}
       onChange={(e) => setBirthDate(e.target.value)}
       animate={ inputBirthDate ? "show": "hide"}
     ></motion.input>
  </>
  }
          
               
  </div>

  <div id="yeartilevalues" className="yeartile values">

    <div className="valuesDiv">
  { myValues_1 ? <label htmlFor="myValuesOne" className="statement starter">#1 </label> : <></>}

         <input
         id="myValuesOne"
         type="text"
          className="formInput year"
          wrap="soft"
          autoComplete="off"
          value={myValues_1}
          placeholder="Value Name"
          onChange={(e) => setMyValues_1(e.target.value)}
          />
            <textarea
         id="valuesOne"
          className="formInput year"
          wrap="soft"
          autoComplete="off"
          value={myValues_1_Text}
          placeholder="Value Description"
          rows={15}
          cols={12}
          onChange={(e) => setMyValues_1_Text(e.target.value)}
          />
          </div>
          <div className="valuesDiv">
           { myValues_2 ? <label htmlFor="myValuesTwo" className="statement starter">#2 </label> : <></>}
         <input
         id="myValuesTwo"
         type="text"
          className="formInput year"
          wrap="soft"
          autoComplete="off"
          value={myValues_2}
          placeholder="Value Name"
          onChange={(e) => setMyValues_2(e.target.value)}
          />
            <textarea
         id="valuesTwo"
          className="formInput year"
          wrap="soft"
          autoComplete="off"
          value={myValues_2_Text}
          rows={15}
          cols={12}
          placeholder="Value Description"
          onChange={(e) => setMyValues_2_Text(e.target.value)}
          />
          </div>
          <div className="valuesDiv">
           { myValues_3 ? <label htmlFor="myValuesThree" className="statement starter">#3 </label> : <></>}
         <input
         id="myValuesThree"
         type="text"
          className="formInput year"
          wrap="soft"
          autoComplete="off"
          value={myValues_3}
          placeholder="Value Name"
          onChange={(e) => setMyValues_3(e.target.value)}
          />
            <textarea
         id="valuesThree"
          className="formInput year"
          wrap="soft"
          autoComplete="off"
          value={myValues_3_Text}
          rows={15}
          cols={12}
          placeholder="Value Description"
          onChange={(e) => setMyValues_3_Text(e.target.value)}
          />
          </div>
          <div className="valuesDiv">
           { myValues_4 ? <label htmlFor="myValuesFour" className="statement starter">#4 </label> : <></>}
         <input
         id="myValuesFour"
         type="text"
          className="formInput year"
          wrap="soft"
          autoComplete="off"
          value={myValues_4}
          placeholder="Value Name"
          onChange={(e) => setMyValues_4(e.target.value)}
          />
            <textarea
         id="valuesFour"
          className="formInput year"
          wrap="soft"
          autoComplete="off"
          value={myValues_4_Text}
          rows={15}
          cols={12}
          placeholder="Value Description"
          onChange={(e) => setMyValues_4_Text(e.target.value)}
          />
          </div>
          <div className="valuesDiv">
           { myValues_5 ? <label htmlFor="myValuesFive" className="statement starter">#5 </label> : <></>}
         <input
         id="myValuesFive"
         type="text"
          className="formInput year"
          wrap="soft"
          autoComplete="off"
          value={myValues_5}
          placeholder="Value Name"
          onChange={(e) => setMyValues_5(e.target.value)}
          />
            <textarea
         id="valuesFive"
          className="formInput year"
          wrap="soft"
          autoComplete="off"
          value={myValues_5_Text}
          rows={15}
          cols={12}
          placeholder="Value Description"
          onChange={(e) => setMyValues_5_Text(e.target.value)}
          />
          </div>
   
  </div>

  <div id="yeartilevision" className="yeartile vision">

<div className="valuesDiv">
  { myVision_1 ? <label htmlFor="visionOne" className="statement starter">#1 </label> : <></>}

            <textarea
         id="visionOne"
          className="formInput year"
          wrap="soft"
          autoComplete="off"
          value={myVision_1}
          placeholder="Vision #1"
          rows={15}
          cols={12}
          onChange={(e) => setMyVision_1(e.target.value)}
          />
          </div>
          <div className="valuesDiv">
  { myVision_2 ? <label htmlFor="visionTwo" className="statement starter">#2 </label> : <></>}

            <textarea
         id="visionTwo"
          className="formInput year"
          wrap="soft"
          autoComplete="off"
          value={myVision_2}
          placeholder="Vision #2"
          rows={15}
          cols={12}
          onChange={(e) => setMyVision_2(e.target.value)}
          />
          </div>
          <div className="valuesDiv">
  { myVision_3 ? <label htmlFor="visionThree" className="statement starter">#3 </label> : <></>}

            <textarea
         id="visionThree"
          className="formInput year"
          wrap="soft"
          autoComplete="off"
          value={myVision_3}
          placeholder="Vision #3"
          rows={15}
          cols={12}
          onChange={(e) => setMyVision_3(e.target.value)}
          />
          </div>
          <div className="valuesDiv">
  { myVision_4 ? <label htmlFor="visionFour" className="statement starter">#4 </label> : <></>}

            <textarea
         id="visionFour"
          className="formInput year"
          wrap="soft"
          autoComplete="off"
          value={myVision_4}
          placeholder="Vision #4"
          rows={15}
          cols={12}
          onChange={(e) => setMyVision_4(e.target.value)}
          />
          </div>
          <div className="valuesDiv">
  { myVision_5 ? <label htmlFor="visionFive" className="statement starter">#5 </label> : <></>}

            <textarea
         id="visionFive"
          className="formInput year"
          wrap="soft"
          autoComplete="off"
          value={myVision_5}
          placeholder="Vision #5"
          rows={15}
          cols={12}
          onChange={(e) => setMyVision_5(e.target.value)}
          />
          </div>
  </div>

  <div className="yeartile ikigai">
  { myIkigai ? <label htmlFor="iki" className="statement starter">My Ikigai is... </label> : <></>}
         <textarea
         id="iki"
          className="formInput year"
          wrap="soft"
          autoComplete="off"
          value={myIkigai}
          placeholder="My Ikigai is..."
          onChange={(e) => setMyIkigai(e.target.value)}
          />
  </div>

  <div className="yeartile continuation">
  { continuation ? <span id="cont" className="statement starter">Today is day <strong>#{continuation}</strong> in my life.</span> : <></>}
     
  </div>

  <div className="yeartile quote">
  { navigationalQuote ? <label htmlFor="navQuote" className="statement starter">My Navigational Quote is... </label> : <></>}
         <textarea
         id="navQuote"
          className="formInput year"
          wrap="soft"
          autoComplete="off"
          value={navigationalQuote}
          placeholder="My Navigational Quote is..."
          onChange={(e) => setNavigationalQuote(e.target.value)}
          />
  </div>

  <div className="yeartile memory">
<label htmlFor="memory" className="statement starter">Memory that you wanted to remember...</label>

{ !days ? <></> : days
        .filter((day, i, days) => days.indexOf(day) === Math.floor((Math.random() * days.length )))
        .filter((day, i, days) => days.indexOf(day) === 0 )
        .map((day, index, days) =>
         <textarea
         key={day._id[0]}
         id="memory"
          className="formInput year"
          wrap="soft"
          autoComplete="off"
          value={day.rememberToday}
          />)}
  </div>
  </div>

  </>
}
</main>
</form>
    </>

  );
}