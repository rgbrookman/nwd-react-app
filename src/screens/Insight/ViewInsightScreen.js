// eslint
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { listDays } from '../../actions/dayActions';

//Feeling Score
import FeelingScore from '../../components/Charts/FeelingScore/FeelingScore.js';
import FeelingScoreAverage from '../../components/Charts/FeelingScore/FeelingScoreAverage.js';
import FeelingScoreVariance from '../../components/Charts/FeelingScore/FeelingScoreVariance.js';
import FeelingScoreTrend from '../../components/Charts/FeelingScore/FeelingScoreTrend.js';

//Tasks Completed
import TasksCompleted from '../../components/Charts/TasksCompleted/TasksCompleted.js';
import TasksCompletedAverage from '../../components/Charts/TasksCompleted/TasksCompletedAverage.js';
import TasksCompletedVariance from '../../components/Charts/TasksCompleted/TasksCompletedVariance.js';
import TasksCompletedTrend from '../../components/Charts/TasksCompleted/TasksCompletedTrend.js';


//Tasks Attempted
import TasksAttempted from '../../components/Charts/TasksAttempted/TasksAttempted.js';
import TasksAttemptedAverage from '../../components/Charts/TasksAttempted/TasksAttemptedAverage.js';
import TasksAttemptedVariance from '../../components/Charts/TasksAttempted/TasksAttemptedVariance.js';
import TasksAttemptedTrend from '../../components/Charts/TasksAttempted/TasksAttemptedTrend.js';

//Tasks Completion Rate
import TasksCompletionRate from '../../components/Charts/TaskCompletionRate/TaskCompletionRate.js'
import TasksCompletionRateAverage from '../../components/Charts/TaskCompletionRate/TaskCompletionRateAverage.js'
import TasksCompletionRateVariance from '../../components/Charts/TaskCompletionRate/TaskCompletionRateVariance.js'
import TasksCompletionRateTrend from '../../components/Charts/TaskCompletionRate/TaskCompletionRateTrend.js'

//Wave Chart
import WaveChart from '../../components/Charts/Wave/WaveChart.js'

//Loading
import TileLoading from '../../components/Loading/TileLoading';

//Title
import { Helmet } from "react-helmet";

//Header
import CentralHeader from "../../components/Header/CentralHeader";

//Tabs
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

// Mouse Tooltip
import MouseTooltip from '../../components/MouseTooltip/MouseTooltip';

//StyleSheet
import './insightscreen.css';

//D3
import * as d3 from "d3";



export default function ViewInsightScreen({ history, dateSelected }) {
// State
const [cursorState, setCursorState] = useState('');
const [cursorDisplayState, setCursorDisplayState] = useState(true);

const [datePicker, setDatePicker] = useState();

const [flipCardState, setFlipCardState] =useState('tile centre card');

  const [pageLoading, setPageLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dayList = useSelector((state) => state.dayList);
  const { loading, error, days } = dayList;

  useEffect(() => {
    dispatch(listDays());
  }, [dispatch, userInfo, history]);

  useEffect(() => {
    document.title = "View Insights";
  }, []);


  const parseDate = d3.timeParse('%Y-%m-%d')

  const showHideState = {
    hide: {
      display: "none",
    },
    show: {
      display: "flex",
    },
  }

  const introState = {
    hidden: {
      opacity: 0,
      scale: 0.1,
    },
  open: {
    opacity: 1,
    scale: 1,
    display: "block",
    position: "absolute",
    top: "200px",
    width: "50%",
    x: "50%",
    transition: {
      duration: 2,
      ease: "easeInOut",
    }
  },
  closed: {
    opacity: 0,
    scale: 1,
    x: "100%",
    width: "50%",
    y: "-200%",
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: 0.25,
    },
  },
};

const loadingTimeout = () => {
  setTimeout(()=> {
    setPageLoading(false)
  }, 5000)
}

useEffect(()=> {
  loadingTimeout();
})

const dateSelector = (e) => {
  setDatePicker(datePicker => e.target.value);
};

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  return (
    <>
    <Helmet>
          <title>Your Insights</title>
        </Helmet>
    <MouseTooltip
          visible={cursorDisplayState}
          offsetX={15}
          offsetY={10}
          zIndex={1000}
        >
        <h1 className="sickTooltip">{cursorState}</h1>
        </MouseTooltip>
 <CentralHeader />
 

    <main className="viewinsight container">
    { pageLoading && !days ? <TileLoading /> :
 <>
    <div className="tile left">
      <div className="dateRow">
      <label for="dp">Diary Entry Date:</label>
      
    <select id="dp" className="datePickerNew" name="datePicker"
      defaultValue={datePicker} onChange={(e) => setDatePicker(e.target.value)}>


{ days && days.map(day => 
<option className="datePickerOption" key={day._id}>{day.logDate.slice(0,10)}</option> 
)}

</select>
</div>
    { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
    <label key={day._id} htmlFor="beforeScoreID" className="statement starter">Before filling in my NWD today, I feel <strong>{day.startScore}</strong></label>        
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
         <label htmlFor="thankYou" className="statement starter">
          Today, I would like to say thank you to</label> 
         { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>


         <textarea
         id="thankYou"
         key={day._id}
          className="formInput moment"
          wrap="soft"
          autoComplete="off"
          value={day.thankYou}
          placeholder=""
          />
          )}
         <hr></hr>
       
         <label htmlFor="selfLess" className="statement starter">I will prime myself for self-less exploration today by </label>
         { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
           
         <textarea
         id="thankYou"
         key={day._id}
          className="formInput moment"
          wrap="soft"
          autoComplete="off"
          value={day.selfLess}
          placeholder=""
          />
          )}
         <hr></hr>
        
         <label htmlFor="mindBody" className="statement starter">I am pleased to live in my mind and body today because </label>
         { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
         <textarea
         id="mindBody"
         key={day._id}
          className="formInput moment"
          wrap="soft"
          autoComplete="off"
          value={day.mindBody}
          placeholder=""
          />
           )}
         <hr></hr>
   
         </div>
       

  


   <div className="tabContainer">

  
        <Tabs
        id="uncontrolled-tab-example"
      defaultActiveKey="diary"
      className="tabs"
    >
      <Tab className="tab" eventKey="diary" title="Diary">
            <div className="tile centre">

      <>
      { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
        <div key={day._id}className="momentRow">
          
        
          <textarea
          className="formInput moment"
          wrap="soft"
          autoComplete="off"
          value={day.momentOne ? day.momentOne : "No Moment One that Day"}
          placeholder="No Moment One that Day"
          />
          <h5>{day.momentOneScore}</h5>
          
          
          </div>
          )}
        <hr></hr>
        { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
        <div key={day._id} className="momentRow">
          <textarea
          className="formInput moment"
          wrap="soft"
          autoComplete="off"
          value={day.momentTwo}
          placeholder="No Moment Two that Day"
          />
          <h5>{day.momentTwoScore}</h5>
          </div>
          )}
        <hr></hr>
        { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
        <div key={day._id}className="momentRow">
          <textarea
          className="formInput moment"
          wrap="soft"
          autoComplete="off"
          value={day.momentThree}
          placeholder="No Moment Three that Day"
          />
          <h5>{day.momentThreeScore}</h5>
          </div>
          )}
        <hr></hr>
        { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
        <div key={day._id} className="momentRow">
          <textarea
          className="formInput moment"
          wrap="soft"
          autoComplete="off"
          value={day.momentFour}
          placeholder="No Moment Four that Day"
          />
          <h5>{day.momentFourScore}</h5>
          </div>
          )}
        <hr></hr>
        { days && days.filter(day => day.logDate.slice(0,10) == datePicker).map(day =>
        <div key={day._id} className="momentRow">
          <textarea
          className="formInput moment"
          wrap="soft"
          autoComplete="off"
          value={day.momentFive}
          placeholder="No Moment Five that Day"
          />
          <h5>{day.momentFiveScore}</h5>
          </div>
          )}
          </>
          </div>
      </Tab>
      <Tab id="fsTab" className="tab" eventKey="fs" title="FS" data-tooltip="Feeling Score">
        <div className="tile centre">
        <FeelingScore />
        <div className="statsRow">
        <label><strong>Average: </strong></label><FeelingScoreAverage />
        <label><strong>Variance: </strong></label><FeelingScoreVariance />
        <label><strong>Recent v. Lifetime: </strong></label><FeelingScoreTrend />
        </div>
        </div>
      </Tab>
      <Tab className="tab" eventKey="tc" title="TC" data-tooltip="Tasks Completed">
      <div className="tile centre">
        <TasksCompleted />
        <div className="statsRow">
        <label><strong>Average: </strong></label><TasksCompletedAverage />
        <label><strong>Variance: </strong></label><TasksCompletedVariance />
        <label><strong>Recent v. Lifetime: </strong></label><TasksCompletedTrend />
        </div>
        </div>
      </Tab>
      <Tab className="tab" eventKey="tcr" title="TCR" data-tooltip="Tasks Completed Rate">
      <div className="tile centre">
        <TasksCompletionRate />
        <div className="statsRow">
        <label><strong>Average: </strong></label><TasksCompletionRateAverage />
        <label><strong>Variance: </strong></label><TasksCompletionRateVariance />
        <label><strong>Recent v. Lifetime: </strong></label><TasksCompletionRateTrend />
        </div>
        </div>
      </Tab>
      <Tab className="tab" eventKey="ta" title="TA" data-tooltip="Tasks Attempted">
      <div className="tile centre">
        <TasksAttempted />
        <div className="statsRow">
        <label><strong>Average: </strong></label><TasksAttemptedAverage />
        <label><strong>Variance: </strong></label><TasksAttemptedVariance />
        <label><strong>Recent v. Lifetime: </strong></label><TasksAttemptedTrend />
        </div>
        </div>
      </Tab>
      <Tab className="tab" eventKey="wave" title="Wave" data-tooltip="Your Wave">
      <div className="tile centre">
        <WaveChart />
        </div>
      </Tab>
    </Tabs>
    </div>

        <div className="tile left">
        {/* <h6 className="statement starter">The memories from today that will capture it forever <input className="formInput" type="text" placeholder="..."></input></h6> */}
         <label htmlFor="rememberToday" className="statement starter">The memories from today that will capture it forever are...</label>
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
          
          <label htmlFor="leaveBehind" className="statement starter">The thoughts and feelings from today I would like to leave behind are...</label> 
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
    <label key={day._id} htmlFor="endScoreID" className="statement starter">After the day described above, I feel... <strong>{day.endScore}</strong></label>        
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
        
</>
}
</main>


       
    </>

  );
}
