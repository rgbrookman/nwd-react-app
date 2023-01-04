// eslint
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
import feelingscoretoday from '../../../endScoreFront.png';
import feelingscorechart from '../../../tasksCompFront.png';
import tasksCompleted from '../../../tasksCompleted.png';
import tcr from '../../../TCR.png';
import './quiztasks.css';

export default function QuizTasksScreen() {
  const [titleDiv, setTitleDiv] = useState(true);
  const [whatYou, setWhatYou] = useState(false);
  const [myLearnings, setMyLearnings] = useState(false);
  const [myLearnings1, setMyLearnings1] = useState(false);
  const [myLearnings2, setMyLearnings2] = useState(false);
  const [myLearnings3, setMyLearnings3] = useState(false);
  const [myLearnings4, setMyLearnings4] = useState(false);

  const [input, setInput] = useState(true);
  const [output, setOutput] = useState(false);

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

  const michealCaine = 'sqOgyNfHl1U';
  
  useEffect(() => {
    document.title = "Art of Looking";
  }, []);

  return (
    <>

    <CentralHeader />

<motion.div
  className="titleDiv"
  animate={ titleDiv ? "show" : "hide"}
  variants={showHideState}
  onClick={()=> {
  setTitleDiv(titleDiv => false);
  setWhatYou(whatYou => true);
}}>
<span>Looking at your Charts 101:</span>
  <h1>Moments Score</h1>
  <span><strong>Safely learning from the expression of your moments over time</strong></span>
</motion.div>

<motion.div

animate={ whatYou ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h4 className="quizHeaderWhite">Your Moment Scores: Inputs & Outputs</h4>
    </div>
      <br />
    <span>
    The different moments that you log in your <strong>Today</strong> diary can, in terms of data, be thought of in 3 different ways:
    </span>
    <br />
        <br />
        <span>
        1. <strong className="emphasis">The # of moments you attempted</strong>
        <br />
        2. <strong className="emphasis">The # of moments you completed</strong>
        <br />
        3. <strong className="emphasis">The % of moments you attempted that you completed</strong>
        <br />
        <br />
          These three really simple aggregations offer a huge number of signals
          into how you are optimising each day for your own unique brand of joy and growth.
        <br />
        <br />
        Alongside each metric, as with the feeling score, is its own gaggle of important friends:
        </span>
            <br />
            <br />
        <span>1.</span><span className="emphasis">Average:</span><span> The result of adding up all of your moment scores, and dividing them by the total number of days you have logged.</span>
              <br />
              <br />
                        <span>2.</span><span className="emphasis">Variance:</span><span> How much any of your moment related scores are likely to differ from the average.
                        The higher this number is, the more likely your score is to be significantly different from the average.</span>
                    <br />
                    <br />
            <span>3.</span><span className="emphasis">Recent v. Lifetime:</span><span> The degree to which your average from the last 14 days is more or less than your overall average</span>
</div>
<div className="rightCol">
  <div className="rightContent">
    <div className="sideBySide">
      <motion.div
        className="toggleButtonDiv"
        animate={input ? "show" : "hide"}
        variants={showHideState}>
          <img className="feelingScoreToday" src={feelingscoretoday} width="100%"/>
            <div className="toggleSpread">
              <Button id="output" className="toggleButton" onClick={()=> {
                setInput(input => false);
                setOutput(output => true);
                }}>View Output</Button>
                  <h3 id="scoreHere" className="quizHeaderGreen">The Moments You Map Up Here ^</h3>
            </div>
        </motion.div>

<motion.div
  className="toggleButtonDiv"
  animate={input ? "hide" : "show"}
  variants={showHideState}>
    <img className="feelingScoreChart" src={feelingscorechart} width="100%"/>
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
      <h4 className="quizHeaderWhite">3 Key Starting Points</h4>
    </div>
  <br />
  <span>In relation to the moments, there are 4 particular learnings that stand out in my mind as likely having the greatest positive impact on your
  initial interactions with the data.</span>
  <br />
  <br />
  <span>1.</span><strong className="emphasis">"Wait? I am just a hot mess?"</strong>
    <br />
        <br />
    <span>2.</span><strong className="emphasis">"Hmm... That doesn't sound like me?"</strong>
    <br />
      <br />
      <span>3.</span><strong className="emphasis">"Wait? Surely that must be bad?"</strong>
    <br />
        <br />
    <span>4.</span><strong className="emphasis">Balance of Running and Resting</strong>
</div>
<div className="rightCol">
<div className="rightContent">
<p>A real cool visual. Fancy making one?</p>
<a href={'https://www.nowasteddays.org/contact'} target="_blank">Send me an idea.</a>
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
      <h4 className="quizHeaderWhite">Lukewarm mess alert!</h4>
    </div>
    <br />
<span>
  In the feeling score section, we kicked off by talking about peripeteia and anagorisis.
  Boy! I have had my fair share of those over my time using NWD, and
  there may be no better way to help you all cope with the uncomfortable revelations in your own data than to
 share some of the most revealing things my data has tried to tell me about myself.
</span>
<br />
<br />
<span>
  Without even a moments further ado, look at my data on the right from an old google-sheets based version of NWD.
  I think it is fair to say that the data is trying to tell me something loud and clear!
  Immediately signals start leaping off the screen:
  </span>
<br />
<br />
<span>
<strong><i>Signal says - <strong>"Ooh! I wonder what is causing you to..."</strong></i></strong>
</span>
<br />
<br />
<span>
<strong>...not have many days where you do everything you said you would?</strong>
</span>
<br />
<br />
<span>
<strong>...rarely follow a day where you did do everything you said you would with another such day?</strong>
</span>
<br />
<br />
<span>
<strong>...write things down that perhaps you are not truly engaged and invested in doing?</strong>
</span>
<br />
<br />
  <i className="aside">
Drum beat heard in the depths again! 
  <br />
<br />
Remember, these signals, just as your own will be, are objective forces without emotion and attachment, and not a value judgement.
</i>
<br />
<br />
<span>
By being a hugely effectual generator of such signals (in a way that your own first person perspective never can
and the impression of others cannot do consistently), your NoWastedDays journal can be a massively helpful self-awareness tool. 
<br />
<br />
  Obviously, the signal itself cannot provide a solution. That comes from following a signal with sufficient scrutiny and exploration. 
  This effort, in turn, will birth an observation that will prompt a new behaviour. This new act will then create different kinds of 
  signals in your data. And, the cycle will renew itself. 
  <br />
  <br />
 Other sections of this course talk in more detail regarding the mindset and mental tools that can help you cope with this cycle of self-revelation, 
 however, this is a very timely moment to empower you to see your distant or recent past with lots of empathy by, again, being open about my own past. 
 <br />
 <br />
 <hr></hr>
 We are all versions of the human animals response to being alive and the difficulties that the journey from being born to now has presented; learning, connecting, growing, thinking, perceiving etc.
 <br />
 <br />
As a version of the human condition over the course of my life to date, 
a pretty accurate description of me would be as follows...
  <br />
  <br />
  I am a person whose suffering tended to manifest in terms of people pleasing, self-sabotage; mostly through not seeing things through to the finish.
  <br />
  <br />
  In several ways, these responses have, directly and indirectly, served me well. They do make you more...
  <br />
  <br />
  <strong className="emphasis">Curious:</strong>
  <br />
  <span>Being prone to not finish things you started, if you are really good at it, often means starting another really quite divergent thing. Despite not having the skills or understanding to do either thoroughly, in my mid-twenties, I tried to start a sustainable fashion brand and an ice hockey analytics company. Enough said, right?</span>
  <br />
  <br />
  <strong className="emphasis">Creative</strong>
  <br />
  <span>If you have explored many divergent things, you can see joins that others struggle to and or have a larger plain of reference from which to make imaginative suggestions. People who aggressively specialise, something which can also be done to excess of course, will inevitably lack this ability to 
    channel the vast underlying connectedness of things.
  </span>
  <br />
  <br />
  <strong className="emphasis">Empathetic</strong>
  <br />
  <span>Playing in different spaces usually means being prepared to be vulnerable and having experienced a greater diversity of human stories;
  both of which are likely to engender more empathy)</span>
  <br />
  <br />
  This all being true, the manifestations of my suffering were also certainly acting as blockers to a better relationship with my own mind and how I related to the world.
  I am doing an increasingly effective job of transcending the worst parts of my suffering by accepting them, understanding them and transforming my relationship with them in order to get the best from myself. 
  I would never have reached this clarity so calmly had it not been for the NWD format; the signals it spawns, 
 the questions it then prompted, the explorations it then afford and the observations they unlocked that were translated into action.
   <br />
  <br />
     <strong>In summary, as one my favourite sports coaches says, 'Doers make mistakes'; expect your data to look like a hot mess if you are pushing yourself and remember the signals it provides are objective and unemotional, not personal and carrying a distinct value judgement. 
      Also, don't forget that no one comes out of childhood and into adulthood unscathed so have a base expectation that you will have inhibiting behaviours that will offer you the joy and challenge to transcend.</strong>
  </span>
  <br />

</div>
<div className="rightCol">
<div id="taskImageDiv" className="rightContent">
<img className="taskImage1" src={tcr} width="75%" />
<img className="taskImage2" src={tasksCompleted} width="75%" />
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
      <h3 className="quizHeaderWhite">"But you said you would!"</h3>
    </div>
  <br />
<span>
  As I just shared, thanks to the NWD format, I have, importantly, gained many revelations about myself and, less importantly but with a certain sense of
  satisfaction, seen a quiet improvement in each measure over time; even if some habits still persist.
<br />
<br />

  A key takeaway from this time and experience is that I can say with utter confidence that <strong>the action(s) that sit behind any signal
  </strong><i className="aside"> (i.e. the cause for which the data displayed in the graph is an effect)</i><strong> are never wholly bad or wholly good.</strong>
<br />
<br />
<strong className="emphasis">Why is that?</strong>
<br />
<br />
  In life, you can only use the terms bad or good if it is completely clear what single trait or outcome you are optimising for.
  This is another thing which is obvious to us in some realms, but often escapes us when referring to our own lives and minds.
<br />
<br />
  For example, if you are trying to gain some weight, having a large portion of white rice with your protein, fibre, fats etc and a nice dessert for afters, is a good thing as the extra nutrients and calories are highly correlated with 
  the singular objective of gaining weight. However, if you are actually trying to lean out and reduce spikes in your blood sugar, it is not a 'good' thing.
<br />
<br />
  However, when you are dealing with bad or good in relation to increasing joy and growth,
  it is spectacularly unhelpful to perceive the vast swathe of life as 'bad'.
<br />
<br />
This is because something either is 'good' due to...
<br />
<br />
  how it is helping provide in the moment, or confidently nurture for the future, a relationship
  with joy and growth that you know deeply resonates with yourself and is, therefore, of deep, known authentic value or, more simply put, <strong>actually good.</strong>,
  <br />
<br />
  or that something has the <strong>potential for good</strong> by offering you a chance to transform your relationship with it. 
  <br />
  This could be a long standing habit, or something you have yet to explore; ostensibly any thought or action that, with some introspection and a degree of effort, will be transcended to the point that it falls in the category above.
</span>
<br />
<br />
<span>
  It's a bit like when athletes are asked, as a veiled reference to struggles in their life, 'Looking back, do you think you would you have changed anything?'.
  Far more often than not, they say something to the affect of "No, because without that difficult time in my life, I might never have made it here today".
</span>
<br />
<br />
<span>
As such, I refer back to the mentions of my particular sufferings, the many days, decisions and moments that were shaped by their 'worst' components. All fall in the
bucket of 'potential for good'. No one comes through their early life and early adult life unscathed i.e. free from trauma, incident or anywhere near perfectly calibrated with such peak
levels of existential conscience that result in a near divine experience of every present moment. As a result, we all have a long list of a 'potential for goods' in our live, and it is the joy of a lifetime to find a way to transcend them. 
Every incremental (even infinitesimal) improvement in condition is a huge and captivating victory.
  <br />
  <br />
  Unfortunately, there is not easy word for these 'potential for goods' at the moment. Let me know if you have any ideas! 
  <br />
  <br />
  <strong>Overall, remember in the largest, most prevailing sense, we are not dealing in the realms of good and bad; simply good and the potential for good thanks to self-awareness turning trauma into transformation.</strong>
</span>
<br />

</div>
<div className="rightCol">
<div className="rightContent">
<p>A real cool visual. Fancy making one?</p>
<a href={'https://www.nowasteddays.org/contact'} target="_blank" rel="noreferrer">Send me an idea.</a>
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
      <h3 className="quizHeaderWhite">"But you said you would!"</h3>
    </div>
    <br />
<h2 className="quizHeaderWhite">What is getting in the way of me doing what I said I would do?</h2>
<br />
<span>
  As we were just starting to explore in the previous step, the action that is impacting any metric is never wholly bad or good
  because that paradigm is not sufficiently applicable to the nurturing of greater joy and growth over time within the human experience.
<br />
<br />
  Quick Reminder of Our Value Dynamic:
<br />
<br />
  <strong>Every metric, shift in the graph and data point is a signal.</strong>
<br />
<br />
  <strong>Every signal helps us ask a better question.</strong>
<br />
<br />
  <strong>Every question helps prompt more purposeful, specific self-explorations.</strong>
<br />
<br />
<strong>Every exploration is capable of producing either a new signal or an observation than can inspire new actions.</strong>
<br />
<br />
<strong>Therefore, whichever action caused the initial shift in the data, is clearly either good or capable for transformation to good through this process.</strong>
<br />
<br />
  Similarly to this wholly not bad or good point, whatever is getting in the way of me doing what I said I would do could fall anywhere on the following scale:
  <br />
  <br />
  <strong className="emphasis">something I should 100% avoid doing and or craving because I have near complete confidence it is inversely correlated with my joy and growth, both now and in the future.</strong>
  <br />
  <br />
  or...
  <br />
  <br />
  <strong className="emphasis">something that I should, in fact, optimise lots of my life towards because, without me realising it before now, it is something I experience huge joy and or growth from every time I do it.</strong>
<br />
<br />
  To repeat, what is getting in the way of you doing what you said you would do, which is really the umbrella question the covers each of the moment scores,
  may be something that feels like a classic habit faux-pas (think: getting distracted by instagram, or losing time due to poor management of your day). But,
  it could also be the actual joys of your lifetime getting in the way, that you are suppressing or not simply not aware of yet perhaps, to use Jim Carrey's line,
  due to 'fear disguised as practicality'.
<br />
<br />
</span>
<span>
I have had many such days, and it does hit you over the head when you see it on the screen.
<br />
<br />
You stare at a day where in the morning you mapped out this temporal mind-field of a plan featuring a million things,
juggling work and play in some cartesian web of personal 'mastery'.
<br />
<br />
But all you did in the end is have a lay-in, a read on the sofa with a coffee, get an ice cream with your girlfriend, sit and watch the sunset from that nice seat on the canal, and then wander home,
taking the odd moment to dance together in the fading light.
<br />
<br />
You see a big feeling score attached to such a 'disastrous' day in terms of those pre-planned moments and it gets your attention.
</span>
<span>
<br />
<br />
The signals start popping up off the page:
<br />
<br />
<strong>"Am I optimising for the right things?"</strong>
<br />
<br />
<strong>"How much time should I make for some serendipity and such quality time now compared to now?"</strong>
<br />
<br />
<strong>"Why am I always optimising for the complex or complicated versus the simple and serene?"</strong>
<br />
<br />
<hr className="dividingLine" />
<br />
On the flip side, here are a few things that, when delving into my diary, I found were getting in my way in the more conventional sense.
<br />
<br />
<strong>Not blocking time:</strong> I would say I wanted to do something, but not block out a specific time window to focus on and complete it.
<br />
<br />
<strong>Not making a moment easier to action:</strong> (Often true of exercise.) Writing in 'Back and Biceps workout' means think of what exercises to do, in what order,
how many sets, reps, rest, where are you are going to do it. But instead linking to a pre-made plan or a YouTube workout really reduces
decision fatigue and helps increase all my moment scores.
<br />
<br />
<strong>Not asking for help:</strong> Your moments don't all expressly relate to things you have to do yourself. Putting things in motion and calling on the help
of experts and friends is essential for a) achieving the things you'd like to do, b) getting more joy via sharing the journey with others and c) learning
more yourself.
<br />
<br />
<strong>Not blocking websites on my laptop:</strong> I can definitely be guilty of falling into a concentration catastrophe by loading up YouTube, whatsapp, BBC news, etc
when my brain is working on a hard task. Using the google chrome extension 'Focus' really helps with that.
<br />
<br />
<strong>Looking at social media first thing:</strong> I have found this recently. I finally put an iPhone 5C I had been using to rest, and replaced it with a refurbished
iPhone 13. One of the huge virtues of an old phone is that is much harder to get distracted, even more so when the tiny screen is cracked. But on this brand new
device, everything is big, pretty and crystal clear, and suddenly I have it by my side constantly and am checking instagram as soon as I wake up, and sometimes this can throw
 my capacity to concentrate.
<br />
<br />
<strong>Not saying no to things that came up but weren't on the list:</strong> As I referred to earlier, I have certainly been a bit of a people pleaser in my past, and sometimes this would 
derail my day simply because I couldn't say no.
<br />
<br />
<strong>Not engaging with my list more:</strong> I like to keep the browser tab open or my today page linked in my bookmarks so I can easily come back to it, and now 
I can view it on my phone as well. But when it was just a spreadsheet in its very early days, this was harder to do. 
<br />
<br />
<strong>Not writing moments specifically enough:</strong> How are you meant to complete a task to the full with no parameters, of time, of detail.
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
setMyLearnings3(myLearnings3 => false);
setMyLearnings2(myLearnings2 => true);
}}>Previous</Button>
<Button className="quizButton" onClick={()=> {
setMyLearnings3(myLearnings3 => false);
setMyLearnings4(myLearnings4 => true);
}}>Next</Button>
</div>
</motion.div>

<motion.div

animate={ myLearnings4 ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
    <h4 className="quizHeaderWhite">Learn</h4>
    </div>
    <br />
    <h2 className="quizHeaderWhite">Finding your balance between running and resting</h2>
    <br />
    <span>
      If the light teasing of my friends is anything to go by, were NoWastedDays to ever become a more widely known platform, the prevailing opinion would be that, on the basis of the name,
      that it is about cramming more and more activities into everyday in the kind of Type-A frantic, no rest, 'sleep when you are dead' way that is often lauded in our culture.
    </span>
    <br />
    <br />
    <span>
      NoWastedDays really refers to the notion that on any given day we don't want the information we need to learn more about ourselves - that will in time
      help us become more self-aware and self-assured - to be wasted.
      We are generating this information constantly, and the daily diary format on NWD is a prime way to consolidate a lot of what would otherwise go missing.
    </span>
    <br />
    <br />
    <span>
    To this point, a huge learning from my personal experience of feverish over-activity and unsustainable action was that of the 5 moments I had a day,
    a larger percentage than I initially thought definitely needed to be explicity dedicated to rest and recovery. Without this very intentional recovery element, any
    heighten productivity would be offset by a troubling crash in energy, motivation and self-love.
    How much rest and how much recovery is needed will certainly vary person to person,
    but I have found the following inspiration to provide a really good baseline; the penultimate couplet in the Rudyard Kipling poem, 'If'.
    </span>
    <span>
    <br />
        <br />
    <strong className="emphasis"><i>If you can fill the unforgiving minute
    With fourty seconds’ worth of distance run...</i></strong>
    <br />
        <br />
    i.e. 40 seconds is 66% of a minute so, if you apply this to your NWD, a good baseline is, if you have 3 things dedicated to growth
    and 'achievement', make the other 2 solely dedicated to recovery and restoration.
    </span>

</div>
<div className="rightCol">
<div className="rightContent">
   <iframe className='videoPlayerQuiz'
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/${michealCaine}?start=0`}>
        </iframe>
</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
setMyLearnings3(myLearnings3 => true);
setMyLearnings4(myLearnings4 => false);
}}>Previous</Button>
<Button className="quizButton" href="/insight/quiz/wave">Next</Button>
</div>
</motion.div>

    </>
  );
}
