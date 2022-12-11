// eslint-disable
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { createDayAction, listDays } from '../../actions/dayActions';
import MouseTooltip from '../../components/MouseTooltip/MouseTooltip';
import CentralHeader from '../../components/Header/CentralHeader';
import './diaryscreen.css';

export default function ViewDiaryScreen({ history }) {

// Form State
const [startScore, setStartScore] = useState(0);
const [datePicker, setDatePicker] = useState();
const [logDate, setLogDate] = useState(0);
const [thankYou, setThankYou] = useState('');
const [selfLess, setSelfLess] = useState('');
const [mindBody, setMindBody] = useState('');
const [momentOne, setMomentOne] = useState('');
const [momentOneScore, setMomentOneScore] = useState(0);
const [momentTwo, setMomentTwo] = useState("");
const [momentTwoScore, setMomentTwoScore] = useState(0);
const [momentThree, setMomentThree] = useState("");
const [momentThreeScore, setMomentThreeScore] = useState(0);
const [momentFour, setMomentFour] = useState("");
const [momentFourScore, setMomentFourScore] = useState(0);
const [momentFive, setMomentFive] = useState("");
const [momentFiveScore, setMomentFiveScore] = useState(0);
const [rememberToday, setRememberToday] = useState("");
const [leaveBehind, setLeaveBehind] = useState("");
const [endScore, setEndScore] = useState(0);

// Layout & Animation State
const [isDisplay, setIsDisplay] = useState(true);
const [isDisplay1, setIsDisplay1] = useState(true);
const [isDisplay2, setIsDisplay2] = useState(true);
const [isDisplay3, setIsDisplay3] = useState(true);
const [isDisplay4, setIsDisplay4] = useState(true);
const [isDisplay5, setIsDisplay5] = useState(true);
const [isDisplay6, setIsDisplay6] = useState(true);
const [isDisplay7, setIsDisplay7] = useState(true);
const [isDisplay8, setIsDisplay8] = useState(true);
const [isDisplay9, setIsDisplay9] = useState(true);
const [isDisplay10, setIsDisplay10] = useState(true);

const [videoDisplay, setVideoDisplay] = useState(true);

const [videoLink, setVideoLink] = useState('TpLVtoE6bFg');

const [pageLoading, setPageLoading] = useState(true);

const [cursorState, setCursorState] = useState('');
const [cursorDisplayState, setCursorDisplayState] = useState(true);

const dispatch = useDispatch();
const navigate = useNavigate();

const userLogin = useSelector((state) => state.userLogin);
const { userInfo } = userLogin;

const dayList = useSelector((state) => state.dayList);
const { loading, error, days } = dayList;

useEffect(() => {
  dispatch(listDays());
}, [dispatch, userInfo, history])

const diaryVideo = "sqOgyNfHl1U";

useEffect(() => {
  document.title = "View Diary";
}, []);

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

    <select className="datePickerNew" name="datePicker"
      defaultValue={datePicker} onChange={(e) => setDatePicker(e.target.value)}>


{ days && days.map(day => 
<option className="datePickerOption" key={day._id}

>{day.logDate.slice(0,10)}</option> )}

</select>
    <main className="testName">
 
<div className="tileLeftOuter">

    <div className="tile left">
    { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
    <label key={day._id} htmlFor="beforeScoreID" className="statement starter">Morning Feeling: <strong>{day.startScore}</strong></label>        
    )}

  { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
          <input
          key={day._id}
          id="beforeScoreID"
          className="weekSlider"
          type="range"
          min="0.0"
          max="5.0"
          step="0.1"
          value={day.startScore}
          />
                )}
      <hr></hr>
         <label for="thankYou" className="statement starter">Today, I would like to say thank you to</label> 
         { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>


         <textarea
         id="thankYou"
         key={day._id}
          className="formInput moment"
          wrap="soft"
          autoComplete="off"
          value={day.thankYou}
          placeholder="Today, I would like to say thank you to..."
          onChange={(e) => setThankYou(e.target.value)}
          />
          )}
         <hr></hr>
       
         <label for="selfLess" className="statement starter">I will prime myself for self-less exploration today by </label>
         { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
           
         <textarea
         id="thankYou"
         key={day._id}
          className="formInput moment"
          wrap="soft"
          autoComplete="off"
          value={day.selfLess}
          placeholder="I will prime myself for self-less exploration today by..."
          onChange={(e) => setSelfLess(e.target.value)}
          />
          )}
         <hr></hr>
        
         <label for="mindBody" className="statement starter">I am pleased to live in my mind and body today because </label>
         { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
         <textarea
         id="mindBody"
         key={day._id}
          className="formInput moment"
          wrap="soft"
          autoComplete="off"
          value={day.mindBody}
          placeholder="I am pleased to live in my mind and body today because..."
          onChange={(e) => setMindBody(e.target.value)}
          />
           )}
         <hr></hr>
   
         </div>
         </div>

        <div className="tile centre">
        { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
          <textarea
          className="formInput moment"
          wrap="soft"
          autoComplete="off"
          value={day.momentOne}
          placeholder="Moment One is..."
          />
          )}
        <hr></hr>
        { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
          <textarea
          className="formInput moment"
          wrap="soft"
          autoComplete="off"
          value={day.momentTwo}
          placeholder="Moment One is..."
          />
          )}
        <hr></hr>
        { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
          <textarea
          className="formInput moment"
          wrap="soft"
          autoComplete="off"
          value={day.momentThree}
          placeholder="Moment One is..."
          />
          )}
        <hr></hr>
        { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
          <textarea
          className="formInput moment"
          wrap="soft"
          autoComplete="off"
          value={day.momentFour}
          placeholder="Moment One is..."
          />
          )}
        <hr></hr>
        { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
          <textarea
          className="formInput moment"
          wrap="soft"
          autoComplete="off"
          value={day.momentFive}
          placeholder="Moment One is..."
          />
          )}
        </div>
        <div className="tile left">
        {/* <h6 className="statement starter">The memories from today that will capture it forever <input className="formInput" type="text" placeholder="..."></input></h6> */}
         <label for="rememberToday" className="statement starter">The memories from today that will capture it forever are...</label>
        { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
         <textarea
         id="rememberToday"
          className="formInput moment"
          wrap="soft"
          autoComplete="off"
          value={day.rememberToday}
          placeholder="The memories from today that will capture it forever are..."
 
          />
          )}
            <hr></hr>
          
          <label for="leaveBehind" className="statement starter">The thoughts and feelings from today I would like to leave behind are...</label> 
            { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
        <textarea
         id="leaveBehind"
          className="formInput moment"
          wrap="soft"
          autoComplete="off"
          value={day.leaveBehind}
          placeholder="I am pleased to live in my mind and body today because..."
      
          />
            )}
               <hr></hr>
                { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
    <label key={day._id} htmlFor="endScoreID" className="statement starter">Evening Feeling: <strong>{day.endScore}</strong></label>        
    )}

  { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
          <input
          key={day._id}
          id="endScoreID"
          className="weekSlider"
          type="range"
          min="0.0"
          max="5.0"
          step="0.1"
          value={day.endScore}
          />
                )}
</div>
        

</main>


       
    </>
  );
}
