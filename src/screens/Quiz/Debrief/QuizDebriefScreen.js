import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header/Header';
import { Card, Button, Row, Col, Container, Form } from 'react-bootstrap';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import './quizdebrief.css';

export default function QuizDebriefScreen() {
  const [titleDiv, setTitleDiv] = useState(true);
  const [kickOff, setKickOff] = useState(false);
  const [open, setOpen] = useState(false);
  const [skeptical, setSkeptical] = useState(false);
  const [present, setPresent] = useState(false);
  const [optimistic, setOptimistic] = useState(false);

  const [pic, setPic] = useState(true);
  const [poc, setPoc] = useState(true);
  const [nic, setNic] = useState(true);
  const [noc, setNoc] = useState(true);

  const showHideState = {
    hide: {
      display: "none",
    },
    show: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
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

  const school = '1JCJVaK48RM';
  const amorFati = '2Xzh1BjCA5Q';

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
  <h1>Debrief</h1>
  <span><strong>A surefire way to process every outcome</strong></span>
</motion.div>

<motion.div
  animate={ kickOff ? "show" : "hide"}
  variants={showHideGrid}
  className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h4 className="quizHeaderWhite">Content</h4>
    </div>
    <br />
<span>
  When you get into your groove with NWD, 
  you will find yourself doing a lof of dissecting decisions, making sense of various moments and evaluating outcomes.
</span>
  <br />
  <br />
<span>
  To look at an outcome objectively and in its entirety is extremely difficult,
  To look at an outcome objectively and in its entirety without a reliable prompt or piece of guidance is basically impossible.
  <br />
  <br />
  This difficulty then, in turn, stands in the way of any of us learning from each day and the things we have tried to achieve within it as much as we possibly could.
  As a result, more often than not, we end up short on insight and high on a poorly calibrated sense of your role in the outcome.
</span>
<br />
<br />
<span>
  This miscalibration usually takes one of two forms:
<br />
<br />
  <strong className="emphasis">Form #1.</strong> We portion ourselves the blame for all the things that went 'wrong',
  and can only see the role of others and random good fortune in the things that went 'right'.
<br />
<br />
  <strong className="emphasis">Form #2.</strong> We flood ourselves in praise and acclaim, and really start to believe our own hype.
  Then, in turn, we don't have a grateful word to say about the role of key people, the people upon whose shoulders we are standing
  or sheer blind good fortune that afforded us an opportunity to succeed at all.
</span>
<br />
<br />
<span>
  I have worked in data for over a decade as a marketing analyst, as a performance development coach for a professional ice hockey team,
  and as a founder of different start-ups. In that time I have needed to review many performances and outcomes of many different types.
  Whilst depending on the situation there are a million ways to do this, one ultra-robust, really accessible framework that you
  can do on any scrap of paper, spare word doc or excel sheet, I am sharing in this section.
</span>
<br />
<br />
<span>
<strong className="emphasis">The Debrief Format</strong>
<br />
<br />
Create 4 colums or chunks, and give each one of the following headers:
<br />
<br />
1. <strong className="emphasis">Postive Impact</strong> + <strong className="emphasis">In Your Control</strong>
<br />
<br />
2. <strong className="emphasis">Postive Impact</strong> + <strong className="emphasis">Out of Your Control</strong>
<br />
<br />
3. <strong className="emphasis">Negative Impact</strong> + <strong className="emphasis">In Your Control</strong>
<br />
<br />
4. <strong className="emphasis">Negative Impact</strong> + <strong className="emphasis">Out of Your Control</strong>
</span>
<br />
<br />
<span>
  The last note for this section, and something I hope to demonstrate across the next four mini-steps is that in any outcome,
  there are <strong>always</strong> multiple notes that fit into each of the buckets above.
</span>
</div>
<div  id="debriefColMain" className="rightCol">
<div id="debriefColDiv" className="rightContent">
<motion.div className="positiveInControl"
>
<motion.div className="explain"
animate={pic ? "show" :"hide"}
variants={showHideState}>
<h2 className="quizHeaderGreen">Positive In Your Control</h2>
<span>An action you either instigated or owned that demonstrably served the objective in an additive way</span>
</motion.div>
<motion.div className="why"
animate={pic ? "hide" :"show"}
variants={showHideState}>
<span><strong>Confidence</strong> -  There will always be things that you
contributed positively and you deserve to consolidate the confidence from those actions.</span>
</motion.div>
<motion.button
className="debriefButton"
onClick={()=> {
  setPic(pic => !pic);
}}
>What role does this bucket play?</motion.button>
</motion.div>

<div className="positiveOutControl">
<motion.div className="explain"
animate={poc ? "show" :"hide"}
variants={showHideState}>
<h2 className="quizHeaderGreen">Positive Out of Your Control</h2>
<span>An action someone else or something else instigated or owned that demonstrably served the objective in an additive way</span>
</motion.div>
<motion.div className="why"
animate={poc ? "hide" :"show"}
variants={showHideState}>
<span><strong>Gratitude</strong> - There will always be things that benefitted a situation
over which you had less than zero control over. Giving gratitude to these things will help you feel better more often.</span>
</motion.div>
<motion.button
className="debriefButton"
onClick={()=> {
  setPoc(poc => !poc);
}}
>What role does this bucket play?</motion.button>
</div>

<div className="negativeInControl">
<motion.div className="explain"
animate={nic ? "show" :"hide"}
variants={showHideState}>
<h2 className="quizHeaderGreen">Negative and In Your Control</h2>
<span>An action that you started that demonstrably served the objective in an subtractive way</span>
</motion.div>
<motion.div className="why"
animate={nic ? "hide" :"show"}
variants={showHideState}>
<span><strong>Construction</strong> - There will always be things you could have instigated in better time or owned more entirely.
Articulating these things will help you healthily detach from them; seeing them only in objective opportunity terms versus
character flaws.</span>
</motion.div>
<motion.button
className="debriefButton"
onClick={()=> {
  setNic(nic => !nic);
}}
>What role does this bucket play?</motion.button>
</div>
<div className="negativeOutControl">
<motion.div className="explain"
animate={noc ? "show" :"hide"}
variants={showHideState}>
<h2 className="quizHeaderGreen">Negative and Out of Your Control</h2>
<span>An action someone else or something else started and finished that demonstrably served the objective in a subtractive way</span>
</motion.div>
<motion.div className="why"
animate={noc ? "hide" :"show"}
variants={showHideState}>
<span><strong>Transcendence</strong> - Your emotional response to a situation is a force that blurs the boundary between what you could and could not control.
Honestly articulating what you could not control will allow you to detach and, in time, perhaps even forgive and then love those forces
for how they have shaped and strengthened your outlook.</span>
</motion.div>
<motion.button
className="debriefButton"
onClick={()=> {
  setNoc(noc => !noc);
}}
>What role does this bucket play?</motion.button>
</div>


</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
  setTitleDiv(titleDiv => true);
  setKickOff(kickOff => false);
}}>Previous</Button>
<Button className="quizButton" onClick={()=> {
  setKickOff(kickOff => false);
  setOpen(open => true);
}}>Next</Button>
</div>
</motion.div>

<motion.div
  animate={ open ? "show" : "hide"}
  variants={showHideGrid}
  className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
      <h4 className="quizHeaderWhite">Bucket #1: Consolidating Confidence</h4>
    </div>
     <br />
  <span>
    There can be few more talked about things online than confidence; how you get it, how you exude it, how you keep it. 
    If you are man in your teens, 20's or 30's, you are only ever one Youtube advert or social media suggestions away from being 
littered with advice from a certain brand of charisma expert or self-certified confidence guru.
  </span>
  <br />
  <br />
  <span>
They will often talk about self-esteem, self-belief, having goals, being ruthless and a whole other litany of borderline psychotic modes of 
thought, but there are truths about confidence that can empower anyone build their self-assurance in a far healthily and genuine fashion.
  </span>
  <br />
  <br />
  <span>
    A fundamental truth about consolidating confidence is that within any outcome that you have exerted some genuine control over
    - whether it was the most culturally celebrated, intellectually exuberant, physically magnificent,
    god-like accomplishment or the most apparently abject misstep leading to an painful, reputation tainting defeat
    - there will be something that you contributed to the situation that was represents a positive impact
    towards the goal in question. 
        <br />
    <br />
    That positive contribution represents a package of confidence that it is important that you capture. 
    A fabulous way to capture this confidence is by writing it down in the 
    "Positive & In Your Control" column.
    <br />
    <br />
    To help you get filling out the column well, 
    find below a list of things you may be forgetting to capture confidence from or 
    evaluate amongst the things you contributed positively to a situation.
    <strong>Things you may forget to consolidate confidence from:</strong>
    <ul>
    <br />
    <li>Putting yourself into the arena; being bold and taking a chance.</li>
    <br />
  <li>Giving time, energy and attention towards preparation.</li>
      <br />
    <li>Priming your mind for the road ahead.</li>
      <br />
    <li>Extending yourself beyond previous limits.</li>
      <br />
    <li>Perceiving a situation in which change was possible.</li>
      <br />
  <li>The 10 great decisions that preceded the 1 dodgy one</li>
  <br />
<li>Nurturing trust to the point that someone believed that you could play your role in achieving a team outcome.</li>
      <br />
  <li>Believing in yourself</li>
      <br />
      <li>Emotional control</li>
      <br />
      <li>Application of technical skills</li>
      <br />
</ul>
Be careful here as overstating your impact on something is as bad as failing to capture what confidence you did earn. 
We explore what might fall in that former category in a coming section.
      <br />
      <br />
    To summarise, whether you hit all of your aims or fell short of every standard, their is confidence out there to be consolidated and you can
    rely on the debrief format, win or lose, as a way to grasp it!
  </span>
  <span>

    </span>
</div>
<div className="rightCol">
<div className="rightContent">
<p>A sick graphic describing what I've said</p>
</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
  setTitleDiv(titleDiv => true);
  setOpen(open => false);
}}>Previous</Button>
<Button className="quizButton" onClick={()=> {
  setSkeptical(skeptical => true);
  setOpen(open => false);
}}>Next</Button>
</div>
</motion.div>

<motion.div

animate={ skeptical ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
        <h4 className="quizHeaderWhite">Bucket #2: Share Genuine Gratitude</h4>
    </div>
      <br />
    <span>
      If I am ever in a bit of a mental funk,
      I have a thought that helps me wake up, be grateful and carry on again with an upturn in energy.
    </span>
    <br />
    <br />
    <span>
      I stop and just reflect on the sheer infinitesimal chance that I am alive in the first place and how this lived
      experience I am having is so precious.
      <br />
    <br />
      If you are feeling up for it, consider for a second the curious courses of history that have had to
      intersect...
      <br />
    <br />
      ...all the love, hate, pioneering effort, balking chance, migration, stagnation, inflation and procrastination;
      each of the dizzying lineages of people, places, processes, postulations, perambulations and prognostications that go back even just a
      couple of generations, let alone a longer period of time and space...
      <br />
    <br />
      ...for you to even to have a chance to exist in the first place. 
      <br />
    <br />
      The chance is so mind bogglingly small that you can't help but be brought back to the present moment 
      and with a bit of perspective in tow.
    </span>
    <br />
    <br />
    <span>
      This thought exercise ladders up to the broader point of this step which is that all the things 
that happened before your life that put you in a position to live you had no control over
 but it is possible to feel intense gratitude for, and that is what this section is about.
      <br />
      <br />
      In a more distilled and present tense fashion, there is so much good that is afforded to us by other people and things on a daily
      basis that it is important to be grateful for it.
    </span>
    <br />
    <br />
    <span>
      Some of these instances you may be saying, 'Well, I had to choose to make the best of these moments and do something about it.
      Nothing actually happened without me doing it myself'.
    <br />
    <br />
    Fair point, but to do something, as I hope my prior ramblings show, you have to have an environment in which to do it;
    and that environment will never have been created exclusively by you.
    <br />
    <br />
    You should be doting on
    existence, nature, favour, friends, family or some other kind of good exceptional external circumstances
    over which you had less than zero control.
    <br />
    <br />
  For those of you that may find gratitude a bit difficult, I have included a list below that can help you build the muscle. 
  Start with point number one, and when you find giving gratitude to that type of thing easy to do, move onto point number two. 
    <br />
    <br />
    <ol>
    <br />
    <li><strong>People / Person:</strong> 
      Start close to home or furthest from home - whatever you find easiest. 
      Who has helped you? 
      From whose wisdom have you made better decisions? 
      Whose goodness have you witness or heard about?
      Who is someone who you have never met but you feel an affinity for that transcends time and space?</li>
    <br />
  <li><strong>Place:</strong> 
    What organisations have helped you succeed or feel more at home in the world? 
    What places have you been grateful to spend time within or enjoyed visiting?
  </li>
  <br />
    <li><strong>Part of your Body:</strong> 
      Our limbs and organs work in unbelievable connectivity to afford us the chance to think, feel and act. Which have helped you the most recently?
      Which have you perhaps never said thank you to, despite the fact they have worked continually, and perhaps without fail, since before you were born? 
    </li>
      <br />
    <li><strong>Plant or Product:</strong> 
      Which of the plants in your home, or plants in your surrounding area are you grateful to see each day? 
      Which of the appliances that you use has helped you a lot recently?
    </li>
      <br />
    <li><strong>Property:</strong> 
      What force can you say has afforded you a chance to feel?
    </li>
    <br />
    <li><strong>Pain or Perversity:</strong> 
      What pain or perversity can you be grateful for because a) it is a sign you are alive in the world and b) because it is better than succumbing to greater pain or be trapped by greater levels of perverse thinking?
    </li>
      <br />
</ol>
    To summarise, ply your 'Positive & Out of Your Control' box with, in order of importance, as many of the environmental factors that helped you as possible and
    you will feel a huge wash of gratitude and goodness!
    </span>
</div>
<div className="rightCol">
<div className="rightContent">
<h4 classaName="quizHeaderGreen">Positive & Out of Your Control - Insights & Related Quotes:</h4>
<p>The advice of someone</p>
<p>Someone being open to your idea</p>
<p>Someone simply not getting in the way of your idea</p>
<p>The 'machinery' exist so what you wanted to achieve could take place</p>
</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
  setOpen(open => true);
  setSkeptical(skeptical => false);
}}>Previous</Button>
<Button className="quizButton" onClick={()=> {
  setSkeptical(skeptical => false);
  setPresent(present => true);
}}>Next</Button>
</div>
</motion.div>

<motion.div

animate={ present ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
    <h4 className="quizHeaderWhite">Bucket #3: Clear Constructive Commentary</h4>
    </div>
    <br />
  <span>
    This section could feel like it would simply be the inverse of the positive and in your control section.
    But, as we all know, we often find processing the negative harder to do than ruminating and replaying the positive.
  </span>
  <br />
  <br />
  <span>
    But this difficulty processing has one particular cause; an underlying assumption that is getting in the way of our progress.
    <br />
    <br />
    We assume that we are not idiots and, as a result, should only be making choices that represent the best of our accumulated knowledge
    and demonstrate our near-godly apprehension.
  </span>
  <br />
  <br />
  <span>
    The frailty of this assumption is a point that the School of Life video to the right makes far more eruditely and persuasively than I just have.
  </span>
  <br />
  <br />
  <span>
  Most of the 8 principles they present, which are born from so much wisdom, millions of words written and decades of expertise,
    centre on embracing imperfection, accepting your own unique yet archetypal idiocy and the pervasively tragic nature of being alive.
    They present these themes as a powerful remedy to the time we waste resisting these actually unavoidable elements of some large, large part of your life.
  </span>
    <br />
    <br />
  <span>
    In fact, point #4 is even entitled 'Accept Your Idiocy' and is explained thusly:
    <br />
    <br />
<strong>"Don't runaway from the thought that you may be an idiot as if this was a rare and dreadful prospect and insight.
Accept the certainty with good grace in full daylight. You are an idiot. There is not other alternative for a human being.[...]
Embracing our idiocy should render us confident before challenges because messing up is to be expected."</strong>
<br />
<br />
The 'Negative and In Your Control' bucket is here to help with the process of healthily dismantling the earlier assumption and replacing
its underpinning angst and struggle with a wave of empathetic yet unemotional constructive commentary.
<br />
<br />
Fill it up as much as you can with things that you could have done either have done better, or more holistically, or in less time.
<br />
<br />
Celebrate a heaving bucket of such remarks
as the kind of self-insight and awareness that is beautifully symbolic of both your engagement with yourself and the nature of being alive.

  </span>
</div>
<div className="rightCol">
<div className="rightContent">
<iframe className='videoPlayerQuiz'
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/${school}?start=0`}>
</iframe>

</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
  setSkeptical(skeptical => true);
  setPresent(present => false);
}}>Previous</Button>
<Button className="quizButton" onClick={()=> {
  setOptimistic(optimistic => true);
  setPresent(present => false);
}}>Next</Button>
</div>
</motion.div>

<motion.div

animate={ optimistic ? "show" : "hide"}
variants={showHideGrid}
className="quizDiv">
  <div className="leftCol">
    <div className="colTitle">
  <h4 className="quizHeaderWhite">Bucket #4: Forgive Yourself & Others</h4>
    </div>
      <br />
  <span>
    As we discussed in the "positive and out of your control" bucket, life is full of forces and features
    over which you exercise no control whilst trying to journey towards a particular destination.
  </span>
    <br />
    <br />
    <span>
      To map, not only the helpful factors as we discussed earlier, but any present hindering factors as well is very important.
      It often requires more thought and toleration of discomfort than playing back the positive parts of a journey,
      and often feels more skippable than endeavouring to consolidate what you personally could have done better,
      but to map the 'negative and out of your control' puts in motion the following chain of mental events.
    <br />
    <br />
    <strong className="emphasis">1. First, It allows you to detach from them.</strong>
    <br />
    As I stated earlier, it is so easy to mis-calibrate how things played out as it relates to your own contribution.
    You, obviously, should not attribute any of yourself to the things you could not control, whether negative or positive,
    but in the messy, often emotional aftermath of a outcome we can so often do just the opposite.
    <br />
    <br />
    Writing the 'Negative Impact & Out of Your Control' down, therefore, is powerful in acknowledging that
    it was outside of you and the fact that it is now there on the spreadsheet or on the A4 in a very separate bucket
    is a powerful visual acknowledgment of this externality.
      <br />
      <br />
    <strong className="emphasis">2. This detachment allows you to forgive it more easily.</strong>
    <br />
    When we attach our 'selves' to a outcome, it can be far harder to forgive negative external circumstances
    because they have come at the cost of us - our very self - and it seems crazy to be prepared to pay that toll.
    But, as we discussed in the mindset section, attachment and the self are
    notions not only associated with suffering, but are two of its major underpinnings.
    By writing down and detaching from whatever the negative forces in a situation may have been,
    we can see it outside of oursevles, free of a cost to us, and then we can forgive ourselves and it more readily.
      <br />
      <br />
    <strong className="emphasis">3. This forgiveness then empowers you to love the way things played out.</strong>
      <br />
    Once you have detached from something, and have chosen to forgive it, you are then in a position to love it because
    there is every chance that it made you grow.
    This thought has a kind of Stoic origin, most notably in the form of Freidrich Nietzsche. He said as follows:
    <br />
    <br />
    <strong>"My formula for greatness in a human being is <strong className="emphasis">amor fati:</strong> that one wants nothing to be different,
    not forward, not backward, not in all eternity. Not merely bear what is necessary, still less conceal it...<strong className="emphasis">but love it."</strong></strong>
  </span>
  <br />
  <br />
  <span>
Overall, to map them is to detach from circumstances; to detach is to forgive and to forgive is to love them; to love them is to transcend them.
</span>
</div>
<div className="rightCol">
<div className="rightContent">
<iframe className='videoPlayerQuiz'
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/${amorFati}?start=0`}>
</iframe>


</div>
</div>
<div className="buttonRow">
<Button className="quizButton" onClick={()=> {
  setPresent(present => true);
  setOptimistic(optimistic => false);
}}>Previous</Button>
<Button className="quizButton" href="/insight/quiz/representative">Next</Button>
</div>
</motion.div>

    </>
  );
}
