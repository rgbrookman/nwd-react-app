import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { createYearAction, listYears } from '../../actions/yearActions';
import Loading from '../../components/Loading/Loading';
import CentralHeader from '../../components/Header/CentralHeader';
import MouseTooltip from '../../components/MouseTooltip/MouseTooltip';
import HideDock from '../../components/Dock/HideDock';
import PageLoading from '../../components/Loading/PageLoading';
import { ErrorMessage } from '../../components/Error/ErrorMessage';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faEraser, faQuestion } from '@fortawesome/free-solid-svg-icons'
import './yearscreen.css';

export default function CreateYearScreen({ history }) {
  const [yourName, setYourName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [myValues_1, setMyValues_1] = useState("");
  const [myValues_1_Text, setMyValues_1_Text] = useState("");
  const [myValues_2, setMyValues_2] = useState("");
  const [myValues_2_Text, setMyValues_2_Text] = useState("");
  const [myValues_3, setMyValues_3] = useState("");
  const [myValues_3_Text, setMyValues_3_Text] = useState("");
  const [myValues_4, setMyValues_4] = useState("");
  const [myValues_4_Text, setMyValues_4_Text] = useState("");
  const [myValues_5, setMyValues_5] = useState("");
  const [myValues_5_Text, setMyValues_5_Text] = useState("");
  const [myVision_1, setMyVision_1] = useState("");
  const [myVision_2, setMyVision_2] = useState("");
  const [myVision_3, setMyVision_3] = useState("");
  const [myVision_4, setMyVision_4] = useState("");
  const [myVision_5, setMyVision_5] = useState("");
  const [whyNWD, setWhyNWD] = useState("");
  const [myIkigai, setMyIkigai] = useState("");
  const [navigationalQuote, setNavigationalQuote] = useState("");

  const [videoDisplay, setVideoDisplay] = useState(false);
  const [videoLink, setVideoLink] = useState('N-lf8NgD6-o');

  const [pageLoading, setPageLoading] = useState(true);

  const [lpCursorState, setLpCursorState] = useState('A Truly Modern Mindfulness Journal');

  const [cursorState, setCursorState] = useState('');
const [cursorDisplayState, setCursorDisplayState] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const yearCreate = useSelector((state) => state.yearCreate); //
  const { loading, error, years } = yearCreate;

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createYearAction(
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
      navigationalQuote,
    ));

  };

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
    document.title = "Year | Create";
  }, []);

  const cursorDisplayToggle = () => {
    setCursorDisplayState(cursorDisplayState => !cursorDisplayState);
    };


  return (
    <>
    <CentralHeader  />
    <MouseTooltip
          visible={cursorDisplayState}
          offsetX={15}
          offsetY={10}
          zIndex={1000}
        >
        <h1 className="sickTooltip">Welcome to Your Year Map. It is the home for all of the best frames for your daily decisions.</h1>
        </MouseTooltip>
    <form onSubmit={submitHandler}>
    <main className='yearContainer'>
    <HideDock 
   toggleOverlay={cursorDisplayToggle}
   saveYear={submitHandler} />
    <div id="yeartest">
      
      <div className="yeartile yn">
      { yourName ? <label for="yourName" className="statement starter">My Name is... </label> : <></>}
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
       <label for="DOB" className="statement starter">I was born on... </label> 
      <input
    className="dobInput"
      type="date"
      value={birthDate}
      placeholder=""
      onChange={(e) => setBirthDate(e.target.value)}
    />
      </div>
    
      <div id="yeartilevalues" className="yeartile values">
        <div className="valuesDiv">
      { myValues_1 ? <label for="myValuesOne" className="statement starter">#1 </label> : <></>}
    
             <input
             id="myValuesOne"
             type="text"
              className="formInput year"
              wrap="soft"
              autoComplete="off"
              value={myValues_1}
              placeholder="Trait #1"
              onChange={(e) => setMyValues_1(e.target.value)}
              />
                <textarea
             id="valuesOne"
              className="formInput year"
              wrap="soft"
              autoComplete="off"
              value={myValues_1_Text}
              placeholder="Trait Description"
              rows={15}
              cols={12}
              onChange={(e) => setMyValues_1_Text(e.target.value)}
              />
              </div>
              <div className="valuesDiv">
               { myValues_2 ? <label for="myValuesTwo" className="statement starter">#2 </label> : <></>}
             <input
             id="myValuesTwo"
             type="text"
              className="formInput year"
              wrap="soft"
              autoComplete="off"
              value={myValues_2}
              placeholder="Trait #2"
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
              placeholder="Trait Description"
              onChange={(e) => setMyValues_2_Text(e.target.value)}
              />
              </div>
              <div className="valuesDiv">
               { myValues_3 ? <label for="myValuesThree" className="statement starter">#3 </label> : <></>}
             <input
             id="myValuesThree"
             type="text"
              className="formInput year"
              wrap="soft"
              autoComplete="off"
              value={myValues_3}
              placeholder="Trait #3"
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
              placeholder="Trait Description"
              onChange={(e) => setMyValues_3_Text(e.target.value)}
              />
              </div>
              <div className="valuesDiv">
               { myValues_4 ? <label for="myValuesFour" className="statement starter">#4 </label> : <></>}
             <input
             id="myValuesFour"
             type="text"
              className="formInput year"
              wrap="soft"
              autoComplete="off"
              value={myValues_4}
              placeholder="Trait #4"
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
              placeholder="Trait Description"
              onChange={(e) => setMyValues_4_Text(e.target.value)}
              />
              </div>
              <div className="valuesDiv">
               { myValues_5 ? <label for="myValuesFive" className="statement starter">#5 </label> : <></>}
             <input
             id="myValuesFive"
             type="text"
              className="formInput year"
              wrap="soft"
              autoComplete="off"
              value={myValues_5}
              placeholder="Trait #5."
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
              placeholder="Trait Description"
              onChange={(e) => setMyValues_5_Text(e.target.value)}
              />
              </div>
       
      </div>
    
      <div id="yeartilevision" className="yeartile vision">
    
    <div className="valuesDiv">
      { myVision_1 ? <label for="visionOne" className="statement starter">#1 </label> : <></>}
    
                <textarea
             id="visionOne"
              className="formInput year"
              wrap="soft"
              autoComplete="off"
              value={myVision_1}
              placeholder="#1 Vision for 2023"
              rows={15}
              cols={12}
              onChange={(e) => setMyVision_1(e.target.value)}
              />
              </div>
              <div className="valuesDiv">
      { myVision_2 ? <label for="visionTwo" className="statement starter">#2 </label> : <></>}
    
                <textarea
             id="visionTwo"
              className="formInput year"
              wrap="soft"
              autoComplete="off"
              value={myVision_2}
              placeholder="#2 Vision for 2023"
              rows={15}
              cols={12}
              onChange={(e) => setMyVision_2(e.target.value)}
              />
              </div>
              <div className="valuesDiv">
      { myVision_3 ? <label for="visionThree" className="statement starter">#3 </label> : <></>}
    
                <textarea
             id="visionThree"
              className="formInput year"
              wrap="soft"
              autoComplete="off"
              value={myVision_3}
              placeholder="#3 Vision for 2023"
              rows={15}
              cols={12}
              onChange={(e) => setMyVision_3(e.target.value)}
              />
              </div>
              <div className="valuesDiv">
      { myVision_4 ? <label for="visionFour" className="statement starter">#4 </label> : <></>}
    
                <textarea
             id="visionFour"
              className="formInput year"
              wrap="soft"
              autoComplete="off"
              value={myVision_4}
              placeholder="#4 Vision for 2023"
              rows={15}
              cols={12}
              onChange={(e) => setMyVision_4(e.target.value)}
              />
              </div>
              <div className="valuesDiv">
      { myVision_5 ? <label for="visionFive" className="statement starter">#5 </label> : <></>}
    
                <textarea
             id="visionFive"
              className="formInput year"
              wrap="soft"
              autoComplete="off"
              value={myVision_5}
              placeholder="#5 Vision for 2023"
              rows={15}
              cols={12}
              onChange={(e) => setMyVision_5(e.target.value)}
              />
              </div>
      </div>
    
      <div className="yeartile ikigai">
      { myIkigai ? <label for="iki" className="statement starter">My Ikigai is... </label> : <></>}
             <textarea
             id="iki"
              className="formInput year"
              wrap="soft"
              autoComplete="off"
              value={myIkigai}
              placeholder="My Reason for Being is..."
              onChange={(e) => setMyIkigai(e.target.value)}
              />
      </div>
    
      <div className="yeartile continuation">
    <span id="cont" className="statement starter">Today is day <strong>#00000</strong> in my life.</span>
         
      </div>
    
      <div className="yeartile quote">
      { navigationalQuote ? <label for="navQuote" className="statement starter">My Navigational Quote is... </label> : <></>}
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
    <label for="memory" className="statement starter">Memory that you wanted to remember...</label>
    
  
             <textarea
             
             id="memory"
              className="formInput year"
              wrap="soft"
              autoComplete="off"
          
              placeholder="This is where your memory from today will load :)"
           
              />
      </div>
      </div>
    </main>
    </form>
        </>
  );
}
