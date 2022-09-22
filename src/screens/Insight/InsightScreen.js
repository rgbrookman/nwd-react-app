// eslint
import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { listDays } from './../../actions/dayActions';

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
import Loading from '../../components/Loading/Loading';
import PageLoading from '../../components/Loading/PageLoading';
import PropagateLoader from "react-spinners/PropagateLoader";


import Header from "../../components/Header/Header";

import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import axios from "axios";
import * as d3 from "d3";
import './insight.css'

export default function InsightScreen({ history }) {
  const [isFeelingScoreDiv, setFeelingScoreDiv] = useState(true);
  const [isFeelingScoreGraph, setFeelingScoreGraph] = useState(false);
  const [isTasksCompletedDiv, setTasksCompletedDiv] = useState(true);
  const [isTasksCompletedGraph, setTasksCompletedGraph] = useState(false);
  const [isTasksAttemptedDiv, setTasksAttemptedDiv] = useState(true);
  const [isTasksAttemptedGraph, setTasksAttemptedGraph] = useState(false);
  const [isTasksCompletionRateDiv, setTasksCompletionRateDiv] = useState(true);
  const [isTasksCompletionRateGraph, setTasksCompletionRateGraph] = useState(false);

  const [isIntro, setIsIntro] = useState(true);
  const [isRow, setIsRow] = useState(false);

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

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

  return (
  <>
    <Header />
      { pageLoading && !days ? <div className="pageLoading"><PropagateLoader color={"#fff"} size={30} /></div> :
  <Container fluid>

<Row>

<Col sm={12} lg={6}>
<Row>

<Col className="text-center" >
<h3 className="chartTitle">Your Feeling Score over Time:</h3>
       <FeelingScore />
       </Col>

{ vw > 500 ? 

       <Col id="colBorder" className="d-flex-col align-self-end">
         <Row className="justify-content-center align-center text-start mt-3 mb-4">
       <h4 className="insightHeader">Average</h4>
       <FeelingScoreAverage />

       <h4 className="insightHeader">Deviation</h4>
       <FeelingScoreVariance />

       <h4 className="insightHeader">Recent</h4>
       <FeelingScoreTrend />
       </Row>
        </Col>
:
<div className="testRow">

<h5 className="insightHeader">Average</h5>
<FeelingScoreAverage />

<h5 className="insightHeader">Deviation</h5>
<FeelingScoreVariance />

<h5 className="insightHeader">Recent</h5>
<FeelingScoreTrend />
</div>


        }
       </Row>
</Col>

<Col sm={12} lg={6}>
<Row>

<Col className="text-center" >
<h3 className="chartTitle">Moments Completed Over Time</h3>
       <TasksCompleted />
       </Col>
       { vw > 500 ? 

<Col id="colBorder" className="d-flex-col align-self-end">
  <Row className="justify-content-center align-center text-start mt-3 mb-4">
<h4 className="insightHeader">Average</h4>
<TasksCompletedAverage />

<h4 className="insightHeader">Deviation</h4>
<TasksCompletedVariance />

<h4 className="insightHeader">Recent</h4>
<TasksCompletedTrend />
</Row>
 </Col>
:
<div className="testRow">

<h5 className="insightHeader">Average</h5>
<TasksCompletedAverage />

<h5 className="insightHeader">Deviation</h5>
<TasksCompletedVariance />

<h5 className="insightHeader">Recent</h5>
<TasksCompletedTrend />
</div>


 }
       </Row>
</Col>




</Row>


<Row>




<Col sm={12} lg={6}>
<Row className="mt-3">

<Col className="text-center">
<h3 className="chartTitle">Moments Attempted Over Time</h3>
       <TasksAttempted />
       </Col>
       { vw > 500 ? 

<Col id="colBorder" className="d-flex-col align-self-end">
  <Row className="justify-content-center align-center text-start mt-3 mb-4">
<h4 className="insightHeader">Average</h4>
<TasksAttemptedAverage />

<h4 className="insightHeader">Deviation</h4>
<TasksAttemptedVariance />

<h4 className="insightHeader">Recent</h4>
<TasksAttemptedTrend />
</Row>
 </Col>
:
<div className="testRow">

<h5 className="insightHeader">Average</h5>
<TasksAttemptedAverage />

<h5 className="insightHeader">Deviation</h5>
<TasksAttemptedVariance />

<h5 className="insightHeader">Recent</h5>
<TasksAttemptedTrend />
</div>


 }
       </Row>
</Col>


<Col sm={12} lg={6}>
<Row className="mt-3">

<Col className="text-center">
<h3 className="chartTitle">Moment Realisation Rate Over Time</h3>
       <TasksCompletionRate />
       </Col>
       { vw > 500 ? 

<Col id="colBorder" className="d-flex-col align-self-end">
  <Row className="justify-content-center align-center text-start mt-3 mb-4">
<h4 className="insightHeader">Average</h4>
<TasksCompletionRateAverage />

<h4 className="insightHeader">Deviation</h4>
<TasksCompletionRateVariance />

<h4 className="insightHeader">Recent</h4>
<TasksCompletionRateTrend />
</Row>
 </Col>
:
<div className="testRow">

<h5 className="insightHeader">Average</h5>
<TasksCompletionRateAverage />

<h5 className="insightHeader">Deviation</h5>
<TasksCompletionRateVariance />

<h5 className="insightHeader">Recent</h5>
<TasksCompletionRateTrend />
</div>


 }
       </Row>
</Col>

<Col sm={12} lg={6}>
<Row className="mt-3">

<Col className="text-center">
<h3 className="chartTitle">Your Wave</h3>
       <WaveChart />
       </Col>
       { vw > 500 ? 

<Col id="colBorder" className="d-flex-col align-self-end">
  <Row className="justify-content-center align-center text-start mt-3 mb-4">
<h5 className="insightHeader" style={{color: "yellow", opacity: "0.25", lineHeight: "1"}}>Feeling</h5>


<h5 className="insightHeader" style={{color: "blue", opacity: "0.25", lineHeight: "1"}}>Moments Completed</h5>


<h5 className="insightHeader" style={{color: "red", opacity: "0.25", lineHeight: "1"}}>MRR%</h5>

</Row>
 </Col>
:
<div className="testRow">

<h5 className="insightHeader" style={{color: "yellow", opacity: "0.25"}}>Feeling</h5>


<h5 className="insightHeader" style={{color: "blue", opacity: "0.25"}}>Moments Completed</h5>


<h5 className="insightHeader" style={{color: "red", opacity: "0.25"}}>MCR%</h5>

</div>


 }
       </Row>
</Col>

</Row>
        </Container>

      }
        </>

  );
}
