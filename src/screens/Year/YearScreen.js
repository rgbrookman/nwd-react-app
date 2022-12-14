import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { createYearAction, listYears } from '../../actions/yearActions';
import Loading from '../../components/Loading/Loading';
import PageLoading from '../../components/Loading/PageLoading';
import Header from '../../components/Header/Header';
import { ErrorMessage } from '../../components/Error/ErrorMessage';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faEraser, faQuestion } from '@fortawesome/free-solid-svg-icons'
import './createyear.css';

export default function YearScreen({ history }) {
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
    navigate('/');
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



  return (
    <>
    <Header />
      { pageLoading ? <div className="pageLoading"><PageLoading /></div> :
<form onSubmit={submitHandler}>


 <motion.div
 animate={videoDisplay ? "hide" : "show"}
 variants={valueState}
 className="videoContainer">
 <div className="videoContainerDiv">
<motion.h1 className="videoExit" onClick={() => setVideoDisplay(videoDisplay => true) }>X</motion.h1>
<iframe className='videoPlayer'
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/${videoLink}?start=0`}>
</iframe>
</div>
 </motion.div>
    <main id="yearContainer">
    <div className="yearTopRow">


    <DropdownButton
    id="helpButton"
    drop="end"
    title="Help"
  >
    <Dropdown.Item className="helpItem" eventKey="1" href="/values">
      Values
    </Dropdown.Item>
    <Dropdown.Item className="helpItem" eventKey="2" href="https://youtu.be/zpzZumZCdWA">Vision</Dropdown.Item>
    <Dropdown.Item className="helpItem" eventKey="3" href="https://youtu.be/4LE5bel_GvU">Ikigai</Dropdown.Item>
    <Dropdown.Item className="helpItem" eventKey="4" href="https://youtu.be/TUDy6Rc81a4">Why NWD?</Dropdown.Item>
    <Dropdown.Item className="helpItem" eventKey="5" href="https://youtu.be/eqGenb4UHlE">Navigational Quote</Dropdown.Item>

  </DropdownButton>
  <Button className="explainerButton"
  onClick={()=> {
    setVideoLink('N-lf8NgD6-o');
    setVideoDisplay(videoDisplay => !videoDisplay);
  }}>
  Learn About Your Year Page
  </Button>
  <Button
  className="submitYearButton"
  type="submit"
  >
    Create
  </Button>


    </div>

    <div className="yearMap">
    <div className="nameBox">
    <span>My Name is...</span>

       <input
       className="nameInput"
        type="text"
        value={yourName}
        onChange={(e) => setYourName(e.target.value)}
      />
           <FontAwesomeIcon
            className="questionIcon"
          icon={faQuestion}
          onClick={() => {
            setVideoLink('J1M7AMG9z98');
            setVideoDisplay(videoDisplay => !videoDisplay);
          }} />
    </div>

    <div className="visionBox">
    <span>My vision for 2022 is...</span>
    <input
      type="text"
      value={myVision_1}
      placeholder="Vision 1"
      onChange={(e) => setMyVision_1(e.target.value)}
    />
    <input
      type="text"
      value={myVision_2}
      placeholder="Vision 2"
      onChange={(e) => setMyVision_2(e.target.value)}
    />
    <input
      type="text"
      value={myVision_3}
      placeholder="Vision 3"
      onChange={(e) => setMyVision_3(e.target.value)}
    />
    <input
      type="text"
      value={myVision_4}
      placeholder="Vision 4"
      onChange={(e) => setMyVision_4(e.target.value)}
    />
    <input
      type="text"

      value={myVision_5}
      placeholder="Vision 5"
      onChange={(e) => setMyVision_5(e.target.value)}
    />
         <FontAwesomeIcon
            className="questionIcon"
          icon={faQuestion}
          onClick={() => {
            setVideoLink('RJiCSvHdSmo');
            setVideoDisplay(videoDisplay => !videoDisplay);
          }} />
</div>

    <div className="quoteBox">
    <span>This weeks navigational quote is...</span>
    <input
      type="text"
      value={navigationalQuote}
      placeholder=""
      onChange={(e) => setNavigationalQuote(e.target.value)}
    />
         <FontAwesomeIcon
              className="questionIcon"
            icon={faQuestion}
            onClick={() => {
              setVideoLink('eTbICJoQrsM');
              setVideoDisplay(videoDisplay => !videoDisplay);
            }} />
    </div>

    <div className="dobBox">
    <span>I was born on...</span>
    <input
    className="dobInput"
      type="date"
      value={birthDate}
      placeholder=""
      onChange={(e) => setBirthDate(e.target.value)}
    />
     <FontAwesomeIcon
            className="questionIcon"
          icon={faQuestion}
          onClick={() => {
            setVideoLink('TDBQ3qMxpOk');
            setVideoDisplay(videoDisplay => !videoDisplay);
          }} />
    </div>
    <div className="whyBox">
    <span>I want to have No Wasted Days because...</span>
    <textarea
    className="whyInput"
      type="text"
      value={whyNWD}
      rows="8"
      cols="40"
      placeholder=""
      onChange={(e) => setWhyNWD(e.target.value)}
    />
     <FontAwesomeIcon
            className="questionIcon"
          icon={faQuestion}
          onClick={() => {
            setVideoLink('8_y_yKKAJIE');
            setVideoDisplay(videoDisplay => !videoDisplay);
          }} />
    </div>
    <div className="valuesBox">
    <span>My personal values are...</span>
    <div className="valuesIntBox">
    <input
      type="text"
      value={myValues_1}
      placeholder=""
      onChange={(e) => setMyValues_1(e.target.value)}
    />
    <input
      type="text"
      value={myValues_1_Text}
      placeholder=""
      onChange={(e) => setMyValues_1_Text(e.target.value)}
    />
      </div>
          <hr className="dividingLine"/>
        <div className="valuesIntBox">
    <input
      type="text"
      value={myValues_2}
      placeholder=""
      onChange={(e) => setMyValues_2(e.target.value)}
    />
    <input
      type="text"
      value={myValues_2_Text}
      placeholder=""
      onChange={(e) => setMyValues_2_Text(e.target.value)}
    />
</div>
          <hr className="dividingLine"/>
      <div className="valuesIntBox">
    <input
      type="text"
      value={myValues_3}
      placeholder=""
      onChange={(e) => setMyValues_3(e.target.value)}
    />
    <input
      type="text"
      value={myValues_3_Text}
      placeholder=""
      onChange={(e) => setMyValues_3_Text(e.target.value)}
    />
</div>
          <hr className="dividingLine"/>
      <div className="valuesIntBox">
    <input
      type="text"
      value={myValues_4}
      placeholder=""
      onChange={(e) => setMyValues_4(e.target.value)}
    />
    <input
      type="text"
      value={myValues_4_Text}
      placeholder=""
      onChange={(e) => setMyValues_4_Text(e.target.value)}
    />
</div>
          <hr className="dividingLine"/>
      <div className="valuesIntBox">
    <input
      type="text"
      value={myValues_5}
      placeholder=""
      onChange={(e) => setMyValues_5(e.target.value)}
    />
    <input
      type="text"
      value={myValues_5_Text}
      placeholder=""
      onChange={(e) => setMyValues_5_Text(e.target.value)}
    />
       
</div>
<FontAwesomeIcon
            className="questionIcon"
          icon={faQuestion}
          onClick={() => {
            setVideoLink('HtKEwNHXLC8');
            setVideoDisplay(videoDisplay => !videoDisplay);
          }} />
    </div>
    <div className="ikigaiBox">
    <span>My ikigia is...</span>
    <input
      type="text"
      value={myIkigai}
      placeholder=""
      onChange={(e) => setMyIkigai(e.target.value)}
    />
     <FontAwesomeIcon
            className="questionIcon"
          icon={faQuestion}
          onClick={() => {
            setVideoLink('_tcpDxI5LbQ');
            setVideoDisplay(videoDisplay => !videoDisplay);
          }} />
    </div>
        <div className="buttonBox">
          </div>
    </div>

    </main>

    </form>
    }
  </>
  );
}
