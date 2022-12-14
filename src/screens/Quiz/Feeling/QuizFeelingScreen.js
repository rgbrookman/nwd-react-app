import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import CentralHeader from '../../../components/Header/CentralHeader';
import { updateProfile } from '../../../actions/dayActions';
import { Card, Button, Row, Col, Container, Form } from 'react-bootstrap';
import Loading from '../../../components/Loading/Loading';
import { ErrorMessage } from '../../../components/Error/ErrorMessage';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faEraser } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../NWD_Logo_White.png';
import sameAverage from '../../../Same_Average.png';
import starting from '../../../starting.gif';
import waveConcept from '../../../wave_concept.png';
import feelingscoretoday from '../../../endScoreFront.png';
import feelingscorechart from '../../../feelingScoreGraph.png';
import spiral from '../../../spiral.png';
import './quizfeeling.css';

export default function QuizFeelingScreen() {
  const [titleDiv, setTitleDiv] = useState(true);
  const [whatYou, setWhatYou] = useState(false);
  const [myLearnings, setMyLearnings] = useState(false);
  const [myLearnings1, setMyLearnings1] = useState(false);
  const [myLearnings2, setMyLearnings2] = useState(false);
  const [myLearnings3, setMyLearnings3] = useState(false);

  const [input, setInput] = useState(true);
  const [output, setOutput] = useState(false);

  const [wave, setWave] = useState(true);
  const [spiral, setSpiral] = useState(true);

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

<CentralHeader  />

<motion.div
  className="titleDiv"
  animate={ titleDiv ? "show" : "hide"}
  variants={showHideState}
  onClick={()=> {
  setTitleDiv(titleDiv => false);
  setWhatYou(whatYou => true);
}}>
<span>Looking at your Charts 101:</span>
  <h1>Your Feeling Score</h1>
  <span><strong>Safely learning from the expression of your feeling over time</strong></span>
</motion.div>

<motion.div
  animate={ whatYou ? "show" : "hide"}
  variants={showHideGrid}
  className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h4 className="quizHeaderWhite">Your Feeling Score: Inputs & Outputs</h4>
    </div>
    <br />
    <span>
      One of they key inputs in your daily diary is the <strong>'After the day described above, I felt...'</strong> score (or feeling score for short).
      <br />
      <br />
      This is your own numerical assessment of how you felt on average across any particular day since your inputs earlier that morning.
    </span>
    <br />
    <br />
    <span><i className="aside">
      As a small aside, some of you may have noticed that the score range is between 0.0 and 5.0, and not a classic 0 to 10. This is done deliberately.
      Often when people are presented with a 0 to 10 scale, they default to a 7.
      However, when presented with a less familiar range,
      the slight unfamiliarity forces them to think a bit more deeply,
      and produces a more indicative result. As we want the most indicative data,
      it made complete sense to do it the 0.0 to 5.0 way.</i>
    </span>
    <br />
    <br />
    <span>
      This score is mapped in a time series line graph <i className="aside">(click on 'view output to see it')</i>.
      This enables you to see how that 0.0 to 5.0 score has looked over time.
    </span>
    <br />
    <br />
      <span>
    Below the chart itself are three revealing pieces of context about your feeling score.
      </span>
        <br />
            <br />
    <span>1.</span><span className="emphasis">Average:</span><span> The result of adding up all of your feeling scores, and dividing them by the total
    number of days you have logged. This is otherwise known as the 'mean'.</span>
        <br />
            <br />
  <span>2.</span><span className="emphasis">Variance:</span><span> How much your feeling score is likely to differ from your average.
  The higher this number is, the larger the difference from the average is.</span>
        <br />
        <br />
<span>3.</span><span className="emphasis">Recent v. Lifetime:</span><span> The degree to which your average from the last 14 days is more or less than your overall average</span>
</div>
<div className="rightCol">
<div className="rightContent">

<div className="sideBySide">


<motion.div className="toggleButtonDiv"
animate={input ? "show" : "hide"}
variants={showHideState}>
<img className="feelingScoreToday" src={feelingscoretoday} width="100%"/>
<div className="toggleSpread">
<Button id="output" className="toggleButton" onClick={()=> {
setInput(input => false);
setOutput(output => true);
}}>View Output</Button>
<h3 id="scoreHere" className="quizHeaderGreen">The Score You Put Above... </h3>
</div>
</motion.div>
<motion.div className="toggleButtonDiv"
animate={input ? "hide" : "show"}
variants={showHideState}>
<img className="feelingScoreChart" src={feelingscorechart} width="40%"/>
<div className="toggleSpread">
<h3 className="quizHeaderGreen">...is then displayed like this</h3>
<Button id="output" className="toggleButton" onClick={()=> {
  setInput(input => true);
  setOutput(output => false);
}}>View Input</Button>
</div>
</motion.div>
</div>

</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
setTitleDiv(titleDiv => true);
setWhatYou(whatYou => false);
}}>Previous</Button>
<Button className="quizButton" onClick={()=> {
setWhatYou(whatYou => false);
setMyLearnings(myLearnings => true);
}}>Next</Button>
</div>
</motion.div>

<motion.div

animate={ myLearnings ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h3 className="quizHeaderWhite">3 Key Starting Points</h3>
    </div>
    <br />
    <span>
    I have learned so much about myself using NWD.
    As a result, how I feel moment-by-moment each day has seen a stark improvement over time.
    <br />
    <br />
    This course couldn't possibly cram in all of these learnings.
    However, what it does do is share the learnings that will help the most
    in your early interactions with each part of the data.</span>
    <br />
    <br />
    <span>In relation to your feeling score, there are 3 things that stand out as helping enrich those early interactions most:</span>
    <br />
    <br />
    <span>1.</span><strong className="emphasis">The Most Important Insight of Them All</strong>
    <br />
    <br />
    <span>2.</span><strong className="emphasis">The Almighty Average ;)</strong>
    <br />
    <br />
    <span>3.</span><strong className="emphasis">"Can someone turn the volume down!"</strong>
    <br />
    <br />
</div>
<div className="rightCol">
<div className="rightContent">
<img src={starting} width="60%" className="imageOrGif" />
</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
setMyLearnings(myLearnings => false);
setWhatYou(whatYou => true);
}}>Previous</Button>
<Button className="quizButton" onClick={()=> {
setMyLearnings(myLearnings => false);
setMyLearnings1(myLearnings1 => true);
}}>Next</Button>
</div>
</motion.div>

<motion.div

animate={ myLearnings1 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h4 className="quizHeaderWhite">Get them to the Greek.</h4>
    </div>
    <br />
    <span>
      We owe a lot to the ancient greeks, and I often wonder what on earth they would think of our global society today.
      <br />
        <br />
      One of their many legacies that survives today is that of the Greek tragic play.
      Whilst this form of entertainment won't be drawing in crowds like the latest chapter in the Marvel Cinematic Universe
      or the next Lin Manuel Miranda musical epic anytime soon, there are many beautiful ideas inside them that relate directly
      to this very first thing that I think is so important.
      <br />
        <br />
      <strong className="emphasis">2 particular ideas stand out:</strong>
      <br />
        <br />
      <strong className="emphasis">Peripeteia:</strong> the sudden reversal of fortune or change in circumstances,
      especially in reference to fictional narrative.
        <br />
            <br />
        <strong className="emphasis">Anagorisis:</strong>
        the point in a play, novel, etc., in which a principal character recognizes or discovers another
        character's true identity or the true nature of their own circumstances.
      <br />
        <br />
      In essence, these words relate to the parts in Greek tragedy where the protagonist comes face to face
      with his or her true identity or, speaking more generally, undergoes the transition from ignorance
      to knowledge (which in Greek tragic play context rarely makes for a happy time!).
        <br />
        <br />
      Whilst our lives will rarely present such stark revelations as Oedipus learning that he had murdered his father and married his mother,
      having our 'true identity' or something closer to the true nature of our actions or a situation played out
      before us can be quite uncomfortable and, for some, even highly anxiety inducing or outright triggering.
        <br />
        <br />
      This course is written in an attempt to massively mitigate any potentially triggering effects of seeing your
      feeling, moments etc played out on screen.
      This course is constructed expressly to give anyone all of the essential mental tools and 
      the benefit of my many mistakes so that they can capably manage any such discomfort and, 
      most importantly, activate the growth and joy that lays dormant behind it.
      <br />
      <br />
      These intentions do not take away from the fact that if you even suspect you are going
      to find it too difficult, too triggering -
      particularly to the point where you may regress in joy and growth - <strong>this is where I would recommend you stop.</strong>
        <br />
        <br />
      I would like NWD to help as many people as possible and a surefire way <i><strong>not</strong></i> to do that is to pretend
      that this whole format will work impeccably - without treacherous trial or tribulation - for everyone who uses it.
        <br />
        <br />
      I believe that data and technology can facilitate the far more proactive processing and designing of our lives;
      helping anyone reach levels of joy and growth that they would have perhaps struggled to reach in a
      lifetime without this new objective perspective. The human experience has changed in so many ways in the last 250 years. 
      Thousands of years based on agricultural lives
      and optimally sized community centric groups have been overrun by industrial centres, smog, urban sprawl, the internet, smartphones, notifications, surveillance capitalism and many more such things.
      <br />
      <br />
      All this being true, despite the abundance of data and opportunity, how we process our experiences, make sense of our minds
      and relate to our environment, however, has stood weirdly still.
      <br />
      <br />
      This doesn't feel satisfactory for me. What I am trying to find out is what can be done to best
      affect the human need to, for the want of a better word, optimise two fundamental relationships: (1. The one we have with our own minds &
        2. The one we have with our environment) by using data and technology for the most people at the least cost to them.
        <br />
        <br />
      This all being true, and as above, I want to state that stopping now is absolutely 100% not an omission of weakness on your part,
      or in any way a sign of your being unfit for anything in life.
      There are a million and one ways to find greater joy and growth, and some phenomenal resources do exist online.
      I will link to as many of these as I can think of at the bottom of the page.
        <br />
        <br />
      I am, of course, working exceptionally hard to maximise NWDs' effectiveness and suitability in a bid to help everyone experience the wild
      benefit I know I have gotten from it and more.
       <br />
       <br />
      But the reality is that if you are to use NWD and try to push to get even half the potential value from the platform,
      you are going to experience a bit of peripeteia and anagorisis <i className="aside">(and hopefully quite a lot because it is really the more, the better). </i>
       If your time on the platform is only telling you things you already know and taking you to mental places you've already been,
      I've got some more work to do!
        <br />
        <br />
      As I mentioned before, hoping off this journey now is nothing but a great bit of self-awareness,
      and I hope you find tremendous value in the resources I have linked to and that you live astonishingly happy, healthy lives;
      that exists for you I'm sure and you deserve it!
        <br />
        <br />
      All that being said, if you are still here, and are perhaps even more excited for the road ahead than when you started reading, <br /><strong className="emphasis">let's press on to point #2.</strong>
    </span>
</div>

<div className="rightCol">
<div className="rightContent">
<span><strong>Some sick video of me talking through all the stuff you've just read</strong></span>
<a href="/resources">The Links I mentioned</a>
</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
setMyLearnings1(myLearnings1 => false);
setMyLearnings(myLearnings => true);
}}>Previous</Button>
<Button className="quizButton" onClick={()=> {
setMyLearnings1(myLearnings1 => false);
setMyLearnings2(myLearnings2 => true);
}}>Next</Button>
</div>
</motion.div>

<motion.div

animate={ myLearnings2 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h4 className="quizHeaderWhite">The Almighty Average?</h4>
    </div>
    <br />
    <span>
      The good ol' average. The beating heart of nearly every presentation of data known to mankind.
      For all its prevalence and apparent ease of understanding, it is important we understand it explicity in a NWD context.
    </span>
    <br />
    <br />
    <span>
      The first and most valuable way in which it can be understood is as a signal. 
      <br />
<br />
      This thought will be the loudest, most consistent 
      drumbeat throughout this short course. 
      <br />
<br />
      <strong>Your feeling score metrics, just like every other metric or graph, are there to provide signals, and in doing so, set in motion the following cycle of mental events:</strong>

      <br />
<br />
  <strong>Every metric, shift in the graph or data point is a <strong>signal.</strong></strong>
<br />
<br />
  <strong>Every <strong>signal</strong> helps us ask a better <strong>question.</strong></strong>
<br />
<br />
  <strong>Every <strong>question</strong> helps prompt more purposeful, specific <strong>self-explorations</strong>.</strong>
<br />
<br />
<strong>Every <strong>self-exploration</strong> is capable of producing either a new signal or an observation than can inspire <strong>new actions</strong>.</strong>
<br />
<br />
<strong>These <strong>new actions</strong> will, in time, become new shifts in metrics and <strong>signals</strong> of their own.</strong>
<br />

<hr></hr>
Another important insight surrounding the feeling score is that your feeling score average only means what you know it means;
      it has no other context outside of your own.
      In terms of this particular metric, comparison with others is very unlikely to be of any real value to you.
    <br />
    <br />
    <span>
      As a topline example of this, my average started off hugging the 2.5 mark; quite naturally as it is the mid point between 0 and 5.
      However, over time, my 'average' day, is more like a 3.8 - 4.2.
    </span>
    <br />
    <br />
    <span>
    As I have already expressed, these numbers mean something only to me and how I perceive and score my own feeling.
    </span>
    <br />
    <br />
    <span>
    In my case, therefore, I know that a 3.4 represents, if not a down day, at least one worth note and particular inquiry
     - and I can study my diary more clearly with that in mind.
    It is context I know, and something I can use to keep my improvement conscious and consistent,
    but it wouldn't be obvious to an outside observer necessarily
    without this prior context.
    <br />
    <br />
    Similarly, I know I am quite a tough judge when it comes to giving a day a 5.0, whereas others might use that score more liberally.
    <br />
    <br />
    <span>To repeat, it is the context that has a created a score that we are interested in. 
      The scores and metrics are an utterly irreplaceable as a tool for providing signals, but completely pointless when it comes to 
      the kind of deep, awakening we are trying to afford to each user of the platform. 
      <br />
    <br />
    The awakening will always come from you.
    You have reems of unwritten context bumbling around in your head, and it is this that we need to activate. The combination of the insight signals and access to your diary of days creates mental sparks that allow
    exploring said context with more purpose, specificity and healthy detachment.
    </span>
    <br />
    <br />
    </span>

    <span>
    Overall, to summarise, the key points here are as follows:
    <br />
    <br />
    <strong>"Context is king - The metric itself is only a signal, not an insight. 
      It is your reflections and understanding of the days you've experienced and 
      the things you've felt that turn that that signal into substantive tool for change".</strong>
    <br />
    <br />
    <strong>"Comparison is near futile - you can absolutely learn from the rhetorical experiences of others, or how they have turn their data into actions that have come to enrich their life,
    but there is nothing to gain from comparing their 3.5, to your 3.5, or their 5 to your 5."</strong>
    </span>
    </span>

</div>
<div className="rightCol">
<div className="rightContent">
<p>A real cool visual. Fancy making one?</p>
<a href={'https://www.nowasteddays.org/contact'} target="_blank">Send me an idea.</a>
</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
setMyLearnings2(myLearnings2 => false);
setMyLearnings1(myLearnings1 => true);
}}>Previous</Button>
<Button className="quizButton" onClick={()=> {
setMyLearnings2(myLearnings2 => false);
setMyLearnings3(myLearnings3 => true);
}}>Next</Button>
</div>
</motion.div>

<motion.div

animate={ myLearnings3 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h4 className="quizHeaderWhite">It's noisy in here!</h4>
    </div>
<br />
<span>
As we have explored in the previous step, an average is nothing without an understanding of your specific context,
and you will always be the overwhelming master of that subject.
<br />
<br />
On the subject of context, another key provider of it in regards to your average is what is called the 'variance' or 'deviation'
i.e. a metric that demonstrates how a sample of data varies from the average.
</span>
<br />
<br />
<span>
To explain this relatively simply, have a glance at the chart to the right.
<br />
<br />
The graph includes 3 lines that represent 3 people performing the same measured behaviour.
Their average scores across a 2 week period are identical, but it is obvious that they don't all have the same relationship with the behaviour in question.
<br />
<br />
Person B never got above or below a 5 - demonstrating curious consistency - whereas Person A reached the heights of 8, but the lows of a 2.
Their relationship with and conditioning around whatever it is that they are doing is clearly completely different,
but the notion of the average disguises this. In data speak, you'd say that the average is a pretty 'noisy' metric
i.e. in its attempt to tell us something by bringing data together, it has also hidden things from us.
</span>
<br />
<br />
<span>
This is why we provide a variety of metrics alongside each graph because, when presented alone,
any metric creates a not insignificant amount of noise. Yet, when presented together, we can engage reduce the noise and
gleam far more understanding.
<br />
<br />
Also, on top of this, and another reason we present these metrics together, is the fact we can improve our average all we want,
but if we are't reducing variance at the same time, then we may not be helping ourselves as much as we would hope.
</span>
<br />
<br />
<span>
One way in which I used an insight from NWD to reduce variance and improve feeling was as follows:
</span>
<br />
<br />
<span>
Using several graphs I had made on an old version of the format,
I noticed that doing everything I said I would do, whether that was 3 things or 5 things, resulted in a comparatively similar feeling score.
However, the times where I set myself 3 things, and did them all, carried far less variance in feeling.
<br />
<br />
<span>
Predictably, setting my 5 moments as a combination of ambitious, highly prioritised and recovery-responsible things, and 'achieving' them all,
did create the better feelings on average, the relentless push for that I was on did create more variance in feeling.
</span>
<br />
<br />
<span>
This insight helped me slow down for a period of time,
focus on doing a few things well and a few things only, building that habit and good feeling,
before building up to doing more and more in a sustainable way; a position from which I have used to generate a
strong level of feeling with a far lower variance.
</span>
<br />
<br />
<span>
Overall...
<strong>keep an eye on the variance, because a) it will help you reduce the noise from the average,
and b) you will need to consider not just how to improve your feeling, but where you can reduce variance at the same time.</strong>
</span>
</span>
</div>
<div className="rightCol">
<div id="feelingVariance" className="rightContent">
<img className="feelingVarianceChart" src={sameAverage} width="90%" />
</div>

</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
setMyLearnings2(myLearnings2 => true);
setMyLearnings3(myLearnings3 => false);
}}>Previous</Button>
<Button className="quizButton" href="/insight/quiz/moments">Next</Button>
</div>
</motion.div>

    </>
  );
}
