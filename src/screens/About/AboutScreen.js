import React, { useState, useEffect } from 'react';
import './about.css';
import { motion, AnimatePresence, useViewportScroll, useSpring, useTransform } from "framer-motion";
import { Container } from 'react-bootstrap';
import Footer from "../../components/Footer/Footer";
import ReducedFooter from "../../components/Footer/ReducedFooter";
import Header from "../../components/Header/Header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faSolarPanel, faPlugCircleBolt, faRepeat  } from '@fortawesome/free-solid-svg-icons'


function AboutScreen() {
  const [title, setTitle] = useState('Life: What is it really?');
  const [headerQuestion, setheaderQuestion] = useState();

  const [fortuneAnswer, setFortuneAnswer] = useState(false);
  const [difficultAnswer, setDifficultAnswer] = useState(false);

  const [missionContainer, setMissionContainer] = useState(false);

  const [fortCounter, setFortCounter] = useState(0);
  const [diffCounter, setDiffCounter] = useState(0);
  const [niceanswer, setNiceAnswer] = useState('');
  const [toughanswer, setToughAnswer] = useState('');

  const [clickCount, setClickCount] = useState(0);


  const headerState = {
    hidden: {
      opacity: 0,
    },
    active: {
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 1,
      },
    },
    exit: {
      opacity: 1,
    },
  }

  const buttonState = {
    hidden: {
      opacity: 0,
      scale: 0.1,

    },
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    }
  },
  closed: {
    opacity: 0,

  },
};

const hiddenDivState = {
  hidden: {
    opacity: 0,
    scale: 0.1,
    zIndex: -5,
  },
open: {
  opacity: 1,
  scale: 1,
  zIndex: 5,
  transition: {
    duration: 1,
    ease: "easeInOut",
  }
},
closed: {
  opacity: 0,
},
};

const hiddenScrollState = {
  hidden: {
    opacity: 0,
    scale: 0.7,
    zIndex: -5,
  },
open: {
  opacity: 1,
  scale: 1,
  zIndex: 5,
  opacity: [0,1,0,1,0,1,0,1,0],
  transition: {
    duration: 10,
    ease: "easeInOut",
  }
},
closed: {
  opacity: 0,
},
};

const hiddenMissionState = {
  hidden: {
    display: "none",
    opacity: 0,
    scale: 0.1,
    zIndex: -5,
  },
open: {
  display: 'flex',
  opacity: 1,
  scale: 1,
  zIndex: 5,
  transition: {
    duration: 2,
    delay: 0.5,
    ease: "easeInOut",
    when: "beforeChildren",
    staggerChildren: 1,
  }
},
closed: {
  display: "none",
},
};

useEffect(() => {
  document.title = "About Us";
}, []);

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);

const [scrollStart, setScrollStart] = useState(false);

const { scrollYProgress, scrollY } = useViewportScroll();
const scrollAmount = 550;
const scrollAmount1 = 650;
const opacity = useTransform(scrollY, [100, scrollAmount], [0, 1]);
const opacity1 = useTransform(scrollY, [500, scrollAmount1], [0, 1]);

  return (
    <>
    <Header />
    { vw > 800 ? 
    <>
    <Container fluid className="aboutScreenMain">

    <div className="itemA">
    <motion.h1
    className="aboutHeader"
    initial="hidden"
    animate="active"
    variants={headerState}
    >
    {title}
    </motion.h1>
    <motion.span
    className="indicateAction"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 2, delay: 1 }}
    >Click to cast your answer below.</motion.span>
 
    </div>


    <motion.div
    className="fortuneDiv"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.8 }}
    variants={buttonState}
    initial="hidden"
    animate="open"
    onClick={() => {
        setNiceAnswer(niceanswer => 'You are right. Life is an unparalleled opportunity for joy, love and many other kinds of fulfilling lived experiences.');
        setFortuneAnswer(fortuneAnswer => true);
        setClickCount(prevCount => prevCount + 1);
      }}>

    <h1 style={{fontSize: "26px"}}>An extremely fortuitous experience.</h1>
    </motion.div>

    <motion.div
    className="fortuneAnswerDiv"
    initial="hidden"
    variants={hiddenDivState}
    animate={ fortuneAnswer ? "open" : "hidden" }>
    <h1
    >You are correct!</h1>
    <h6
    >Life is an unparalleled opportunity for joy, love and many other kinds of fulfilling lived experiences.</h6>
    </motion.div>


    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.8 }}
      variants={buttonState}
      initial="hidden"
      animate="open"
      className="itemC"
      onClick={() => {
          setToughAnswer(toughanswer => 'You are right. Life can be a crushing, crippling confiscation of a whole world of anxiety, stress, pain and tragedy.');
          setDifficultAnswer(difficultAnswer => true);
          setClickCount(prevCount => prevCount + 1);
        }}>
      <h1 style={{fontSize: "26px"}}>A difficult, complicated, confusing experience</h1>
    </motion.div>

    <motion.div
    className="difficultDiv"
    initial="hidden"
    variants={hiddenDivState}
    animate={ difficultAnswer ? "open" : "hidden" }>
    <h1
    >You are correct!</h1>
    <h6>Life can be crushing, destructive and tragic where your world can feel overrun by anxiety, stress and pain.</h6>
    </motion.div>

    <motion.div
    className="missionContainer"
    initial="hidden"
    variants={hiddenMissionState}
    animate={ clickCount > 1 ? "open" : "hidden" }>
    <motion.span className="existStatement">NWD exists because both of these responses are correct.</motion.span>
    <motion.h1 className="missionHeader">Our mission is to unconditionally support people with being alive.</motion.h1>
    <motion.div
    animate={ clickCount > 1 ? "open" : "hidden" }
    variants={hiddenScrollState}>
    <FontAwesomeIcon
    className="scrollDownIcon"
    icon={faChevronDown} />
        </motion.div>
    </motion.div>

       

    </Container>
    <section className="aboutSection">

    <motion.div 
    className="whatIsNwd"
    style={{ opacity: opacity }}
    >
      <h1 className="aboutHeader">NWD is a digital mindfulness journal and daily planner with a difference.</h1>
          
        </motion.div>

        <motion.div 
        className="aboutOne" 
        style={{ opacity: opacity1 }}>
          <div className="explanationLeft">
          <h1 className="aboutPageHeader">Plan your day simply and smartly using our unique format designed for productivity and peace of mind.</h1>
          </div>
          
          <FontAwesomeIcon
            className="planningIcon"
          icon={faSolarPanel}/>
        </motion.div>


        <motion.div className="aboutTwo"
            style={{ opacity: opacity1 }}>
          
          <FontAwesomeIcon
            className="planningIcon"
          icon={faPlugCircleBolt}/>
        <div className="explanationRight">
        <h1 className="aboutPageHeader">Guarantee the dedication of a day matches the meaning of your life using our interactive experiences and year mapping.</h1>
        </div>
        </motion.div>

        <motion.div className="aboutThree"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}>
        <div className="explanationLeft">
        <h1 className="aboutPageHeader">Immerse yourself in your diary through playback and insights to unlock deeper self-understanding.</h1>
        </div>
        <FontAwesomeIcon
            className="planningIcon"
          icon={faRepeat}/>
</motion.div>
</section>
<Footer />
</>
    :  <><section className="aboutSection">

    <motion.div 
    className="whatIsNwd"
    >
      <h1 className="aboutHeader"
      style={{fontSize: "36px"}}>NWD is a digital mindfulness journal and daily planner with a difference.</h1>
          
        </motion.div>

        <motion.div 
        className="aboutOne">
          <div className="explanationLeft">
          <h1 className="aboutPageHeader">Plan your day simply and smartly using our unique format designed for productivity and peace of mind.</h1>
          </div>
          
          <FontAwesomeIcon
            className="planningIcon"
          icon={faSolarPanel}/>
        </motion.div>


        <motion.div className="aboutTwo">
          
        <FontAwesomeIcon
            className="planningIcon"
          icon={faSolarPanel}/>
        <div className="explanationRight">
        <h1 className="aboutPageHeader">Guarantee the dedication of a day matches the meaning of your life using our interactive experiences and year mapping.</h1>
        </div>
        </motion.div>

        <motion.div className="aboutThree"
            initial="hidden"
>
        <div className="explanationLeft">
        <h1 className="aboutPageHeader">Immerse yourself in your diary through playback and insights to unlock deeper self-understanding.</h1>
        </div>
        <FontAwesomeIcon
            className="planningIcon"
          icon={faSolarPanel}/>
</motion.div>
</section> 
<ReducedFooter />
   </>
}
    

        </>
  );
}

export default AboutScreen;
