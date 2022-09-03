import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import { updateProfile } from '../../../actions/dayActions';
import { Card, Button, Row, Col, Container, Form } from 'react-bootstrap';
import Loading from '../../../components/Loading/Loading';
import { ErrorMessage } from '../../../components/Error/ErrorMessage';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faEraser } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../NWD_Logo_White.png';
import obama from '../../../giphy.gif';
import lampAnimation from '../../../lamp-animation.gif';
import consistent from '../../../consistent.gif';
import './quizrepresentative.css';

export default function QuizRepresentativeScreen() {
  const [titleDiv, setTitleDiv] = useState(true);
  const [kickOff, setKickOff] = useState(false);
  const [honesty, setHonesty] = useState(false);
  const [consistency, setConsistency] = useState(false);
  const [specificity, setSpecificity] = useState(false);

  const showHideState = {
    hide: {
      display: "none",
    },
    show: {
      display: "flex",
    },
  }

  const showHideGrid = {
    hide: {
      display: "none",
    },
    show: {
      display: "grid",
    },
  }

  useEffect(() => {
    document.title = "Art of Looking";
  }, []);

  return (
    <>
 
<Header />

<motion.div
  className="titleDiv"
  animate={ titleDiv ? "show" : "hide"}
  variants={showHideState}
  onClick={()=> {
  setTitleDiv(titleDiv => false);
  setKickOff(kickOff => true);
}}>
  <span>Making the Data Deeply Representative</span>
  <h1>Top Quality Data</h1>
  <span><strong>The ingredients for the best insight</strong></span>
</motion.div>

<motion.div

animate={ kickOff ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h4 className="quizHeaderWhite">Context</h4>
    </div>
    <br />
    <span>
As we explored in the opening of the <strong>'Art of Looking'</strong>, one of the key components of having the right information is being able to trust your data source,
and for the data source to be full of data that is representative of the problem to be solved.
<br />
<br />
Obviously, on NWD the source of all your data is <strong className="emphasis">you! :)</strong>
<br />
<br />
The question is then how we can ensure that the information you provide is of the most trustworthy, representative and valuable kind.
<br />
<br />
Here are 3 principles that are going to help us achieve just that.
</span>
<br />
<br />
<strong className="emphasis">Honesty</strong>
<br />
<br />
<strong className="emphasis">Specificity</strong>
<br />
<br />
<strong className="emphasis">Consistency</strong>
</div>
<div className="rightCol">
<div className="rightContent">
<p>Examples</p>

</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
  setTitleDiv(titleDiv => true);
  setKickOff(kickOff = false);
}}>Previous</Button>
<Button className="quizButton" onClick={()=> {
  setKickOff(kickOff => false);
  setHonesty(honesty => true);
}}>Next</Button>
</div>
</motion.div>

<motion.div

animate={ honesty ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h4 className="quizHeaderWhite">Honesty is the Best Policy</h4>
    </div>
<br />
<span>
Trust is the bedrock of a thriving civil society.
<br />
<br />
People can only act calmly and conscientiously 
if they know people will honour their commitments and speak openly and honestly to them, 
and adhere to the codes - written and unwritten -
that perpetuate peace and foster co-operation.
<br />
<br />
Similarly, to get the efficiencies and opportunities that come with money, you have to trust that when you pay someone they will give you something in return, 
and you both have to trust and believe that money is has a value.
<br />
<br />
The same is true with your entries.
<br />
<br />
By laying down your honest thoughts - the ones you trust that summarise 
what you felt and tried to do on any particularly day most intimately - you will be paid back with a far greater level of opportunity of insight down the line.
<br />
<br />
Thought of another way, NWD is not Instagram.
<br />
<br />
Here you are not incentivised or quietly encouraged to paint a higlight-reel picture of your life. 
<br />
<br />
Equally, the opposite is also not true. Honesty needn't mean a damning indictment or a crushingly cold assessment of your day. 
<br />
<br />
Here on NWD, perhaps the key currency is complete honesty as that is positively correlated with greater potential for insight and, in turn, a greater 
likelihood of self-transformation.
</span>
</div>
<div className="rightCol">
<div className="rightContent">
<img src={obama} width="80%" />

</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
  setTitleDiv(titleDiv => true);
  setHonesty(honesty => false);
}}>Previous</Button>
<Button className="quizButton" onClick={()=> {
  setSpecificity(specificity => true);
  setHonesty(honesty => false);
}}>Next</Button>
</div>
</motion.div>

<motion.div

animate={ specificity ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h4 className="quizHeaderWhite">Can you be more specific?</h4>
    </div>
    <br />
    <span>
      Specificity is like honesty in the sense that the most honest version of events is likely to include more details than less.
        <br />
        <br />
      However, it is important to single out specificity with some specificity as that little bit of extra detail each day will really tally up
      over time and contribute to a lot more not only data for insight.
        <br />
        <br />
        <h3 className="quizHeaderWhite">How does it help?</h3>
        <br />
      I find that when I have seen a signal and am looking through my diary as a result,
      the details on the page spark other memories from the day that I hadn't
      even written down. This phenomenon is key to the value of NWD days. Those sparks represent how the platform is trying to stop
       invaluable insight about yourself from going to waste.
      <br />
      <br />
      The days where I have been more specific with these details in my diary, the greater this memory spark power is.
      <br />
      <br />
      As we've mentioned many times in this course, being able to find an action or relationship that can be transformed courtesy of
      having this method of spotting signals and being able to delve through your written and unwritten contexts is a huge part of the power of NWD.
      <br />
      <br />
      As a result, the more context that springs to mind, the better placed you are to get to the most transformative decision; and this all starts with honesty and specificity.
    </span>
</div>
<div className="rightCol">
<div className="rightContent">
<img src={lampAnimation} width="50%" />


</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
  setHonesty(honesty => true);
  setSpecificity(specificity => false);
}}>Previous</Button>
<Button className="quizButton" onClick={()=> {
  setSpecificity(specificity => false);
  setConsistency(consistency => true);
}}>Next</Button>
</div>
</motion.div>

<motion.div

animate={ consistency ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h4 className="quizHeaderWhite">Consistency</h4>
    </div>
<br />
    <span>
      One of the final points we mentioned in the upfront data bucket is over a 'more than sufficient period of time'.
        <br />
        <br />
      Doing your NWD inputs over an extended period is not only important as it will help you build lots of data.
      It is as important because it will give you the views of your habits that you are particularly interested in.
        <br />
        <br />
      <strong>How does my week look?</strong>
      <br />
      <br />
      <strong>How does a month look?</strong>
      <br />
      <br />
      <strong>How does this month differ from last month?</strong>
      <br />
      <br />
      <strong>This quarter from last quarter?</strong>
      <br />
      <br />
      <strong>This year from last year?</strong>
      <br />
      <br />
      <strong>This day this year from the same day last year?</strong>
      <br />
      <br />
      This ability to compare equivalent periods of time will give you extraordinary insights, and the only way to build it is this
      daily consistency; one day after the other of honest and specific inputs over as long a time as you possibly can. 
      <i className="aside">(That all being true, remember: you can learn from why you didn't do a daily entry to as well, so don't fall off the wagon completely if you miss a few days).</i>
        </span>
</div>
<div className="rightCol">
<div className="rightContent">
<img src={consistent} width="50%" />

</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
  setSpecificity(specificity => true);
  setConsistency(consistency => false);
}}>Previous</Button>
<Button className="quizButton" href="/insight/quiz/real_quiz">Next</Button>
</div>
</motion.div>



    </>
  );
}
