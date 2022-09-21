import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { updateYearAction, listYears } from '../../actions/yearActions';
import { listDays } from '../../actions/dayActions';
import Header from '../../components/Header/Header';
import Loading from '../../components/Loading/Loading';
import PageLoading from '../../components/Loading/PageLoading';
import { ErrorMessage } from '../../components/Error/ErrorMessage';
import { Button, Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faEraser, faQuestion } from '@fortawesome/free-solid-svg-icons'
import { compareAsc, format } from 'date-fns'
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import axios from "axios";
import './year.css';

export default function ViewYearScreen({ history }) {
  const [yourName, setYourName] = useState("");
  const [inputName, setInputName] = useState("");
  const [myValues_1, setMyValues_1] = useState("");
  const [inputValues_1, setInputValues_1] = useState("");
  const [myValues_1_Text, setMyValues_1_Text] = useState("");
  const [inputValues_1_Text, setInputValues_1_Text] = useState("");
  const [myValues_2, setMyValues_2] = useState("");
  const [inputValues_2, setInputValues_2] = useState("");
  const [myValues_2_Text, setMyValues_2_Text] = useState("");
  const [inputValues_2_Text, setInputValues_2_Text] = useState("");
  const [myValues_3, setMyValues_3] = useState("");
  const [inputValues_3, setInputValues_3] = useState("");
  const [myValues_3_Text, setMyValues_3_Text] = useState("");
  const [inputValues_3_Text, setInputValues_3_Text] = useState("");
  const [myValues_4, setMyValues_4] = useState("");
  const [inputValues_4, setInputValues_4] = useState("");
  const [myValues_4_Text, setMyValues_4_Text] = useState("");
  const [inputValues_4_Text, setInputValues_4_Text] = useState("");
  const [myValues_5, setMyValues_5] = useState("");
  const [inputValues_5, setInputValues_5] = useState("");
  const [myValues_5_Text, setMyValues_5_Text] = useState("");
  const [inputValues_5_Text, setInputValues_5_Text] = useState("");
  const [myVision_1, setMyVision_1] = useState("");
  const [inputVision_1, setInputVision_1] = useState("");
  const [myVision_2, setMyVision_2] = useState("");
  const [inputVision_2, setInputVision_2] = useState("");
  const [myVision_3, setMyVision_3] = useState("");
  const [inputVision_3, setInputVision_3] = useState("");
  const [myVision_4, setMyVision_4] = useState("");
  const [inputVision_4, setInputVision_4] = useState("");
  const [myVision_5, setMyVision_5] = useState("");
  const [inputVision_5, setInputVision_5] = useState("");
  const [whyNWD, setWhyNWD] = useState("");
  const [rememberToday, setRememberToday] = useState("");
  const [inputWhy, setInputWhy] = useState("");
  const [myIkigai, setMyIkigai] = useState("");
  const [inputIkigai, setInputIkigai] = useState("");
  const [navigationalQuote, setNavigationalQuote] = useState("");
  const [inputQuote, setInputQuote] = useState("");

  const [birthDate, setBirthDate] = useState("09/03/1992");
  const [inputBirthDate, setInputBirthDate] = useState();

  const [videoDisplay, setVideoDisplay] = useState(true);
  const [videoLink, setVideoLink] = useState('TpLVtoE6bFg');

  const [pageLoading, setPageLoading] = useState(true);

  const [show, setShow] = useState(false);
  const target = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const yearList = useSelector((state) => state.yearList);
  const { loading, error, years } = yearList;

  const yearUpdate = useSelector((state) => state.yearUpdate);
  const { success: successUpdate } = yearUpdate;

  useEffect(() => {
    dispatch(listYears());
  }, [dispatch, userInfo, history]);

  const dayList = useSelector((state) => state.dayList);
  const { days } = dayList;

  useEffect(() => {
    dispatch(listDays());
  }, [dispatch, userInfo, history]);




  const valueState = {
    hide: {
      display: "none",
    },
    show: {
      display: "block",
    },
  };

useEffect(() => {
  const fetching = async () => {

    try {
      const { data } = await axios.get(`/api/years/year/${id}`);
      setYourName(data.yourName);
  setBirthDate(data.birthDate);
  setMyValues_1(data.myValues_1);
  setMyValues_1_Text(data.myValues_1_Text);
  setMyValues_2(data.myValues_2);
  setMyValues_2_Text(data.myValues_2_Text);
  setMyValues_3(data.myValues_3);
  setMyValues_3_Text(data.myValues_3_Text);
  setMyValues_4(data.myValues_4);
  setMyValues_4_Text(data.myValues_4_Text);
  setMyValues_5(data.myValues_5);
  setMyValues_5_Text(data.myValues_5_Text);
  setMyVision_1(data.myVision_1);
  setMyVision_2(data.myVision_2);
    setMyVision_3(data.myVision_3);
  setMyVision_4(data.myVision_4);
  setMyVision_5(data.myVision_5);
  setWhyNWD(data.whyNWD);
  setMyIkigai(data.myIkigai);
  setNavigationalQuote(data.navigationalQuote);
} catch(error) {
  console.log(error);
}
    }
  
  const dateValid = async () =>{
    await fetching();
     setBirthDate(birthDate.replace(/-/g,"/"));
  }

  dateValid();
   

}, [id]);

   const resetHandler = () => {
     setYourName("");
 setBirthDate("");
 setMyValues_1("");
 setMyValues_1_Text("");
 setMyValues_2("");
 setMyValues_2_Text("");
 setMyValues_3("");
 setMyValues_3_Text("");
 setMyValues_4("");
 setMyValues_4_Text("");
 setMyValues_5("");
 setMyValues_5_Text("");
 setMyVision_1("");
 setMyVision_2("");
   setMyVision_3("");
 setMyVision_4("");
 setMyVision_5("");
 setWhyNWD("");
 setMyIkigai("");
 setNavigationalQuote("");
};

const updateHandler = (e) => {
  e.preventDefault();
  dispatch(updateYearAction(id,
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
    navigationalQuote));
    if (!yourName ||
        !birthDate ||
        !myValues_1 ||
        !myValues_1_Text ||
        !myValues_2 ||
        !myValues_2_Text ||
        !myValues_3 ||
        !myValues_3_Text ||
        !myValues_4 ||
        !myValues_4_Text ||
        !myValues_5 ||
        !myValues_5_Text ||
        !myVision_1 ||
        !myVision_2 ||
        !myVision_3 ||
        !myVision_4 ||
        !myVision_5 ||
        !whyNWD ||
        !myIkigai ||
        !navigationalQuote ) return;
        
    resetHandler();

};


let birthday = years && years.map((year) => year.birthDate);
// birthday[0].toString();

// let birthYear = Array.isArray(years) === false ? '1990' :  birthday[0].substring(0,4);

// let birthDay = Array.isArray(years) && birthday !== undefined ? birthday[0].substring(5,7) : '01';

// let birthMonth = Array.isArray(years) && birthday !== undefined ? birthday[0].substring(8,10) - 1 : '01';

let day1 = new Date(birthday);
console.log(day1);

let day2 = new Date();
console.log(day2);

let diff = Math.abs(day2-day1);
  console.log(diff);
let daysCalc = diff / (1000 * 3600 * 24)
  console.log(daysCalc);
let days1 = Math.floor(daysCalc);
    console.log(days1);

const [continuation, setContinuation] = useState(80000);

const loadingTimeout = () => {
  setTimeout(()=> {
    setPageLoading(false)
  }, 3000)
}

useEffect(()=> {
  loadingTimeout();
   setContinuation(days1);
})

useEffect(() => {
  document.title = "Year | Update";
}, []);

  return (

<>
<Header />
<form onSubmit={updateHandler}>

  { !years && !days && pageLoading ? <div className="pageLoading"><PageLoading /></div> :
    <main id="yearContainer">
      <div className="yearTopRow">

    <DropdownButton
      id="helpButton"
      drop="end"
      title="Help">
    <Dropdown.Item className="helpItem" eventKey="1" href="/values">
      Values
    </Dropdown.Item>
    <Dropdown.Item className="helpItem" eventKey="2" href="https://youtu.be/zpzZumZCdWA">Vision</Dropdown.Item>
    <Dropdown.Item className="helpItem" eventKey="3" href="https://youtu.be/4LE5bel_GvU">Ikigai</Dropdown.Item>
    <Dropdown.Item className="helpItem" eventKey="4" href="https://youtu.be/TUDy6Rc81a4">Why NWD?</Dropdown.Item>
    <Dropdown.Item className="helpItem" eventKey="5" href="https://youtu.be/eqGenb4UHlE">Navigational Quote</Dropdown.Item>

  </DropdownButton>
<Button className="explainerButton d-none d-sm-flex"
onClick={()=> {
  setVideoLink('N-lf8NgD6-o');
  setVideoDisplay(videoDisplay => !videoDisplay);
}}>
Learn About Your Year Page
</Button>

  <Button
  className="submitYearButton"
  type="submit"
  ref={target}
  onClick={() => setShow(!show)}
  >
    Update
  </Button>
  <Overlay target={target.current} show={show} placement="left">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              position: 'absolute',
              backgroundColor: 'green',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              marginRight: "6px",
              transform: "all",
              transition: "2s",
              fontFamily: 'Koulen, monospace',
              ...props.style,
            }}
          >
            Updated
          </div>
        )}
      </Overlay>


    </div>
    <motion.div
    animate={videoDisplay ? "hide" : "show"}
    variants={valueState}
    className="videoContainer"
    style={{backgroundColor: "none"}}>
      <div className="videoContainerDiv" style={{backgroundColor: "none"}}>
        <motion.h1 className="videoExit" onClick={() => setVideoDisplay(videoDisplay => true) }>X</motion.h1>
        <iframe className='videoPlayer'
          title='Youtube player'
          sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation all-fullscreen'
          src={`https://youtube-nocookie.com/embed/${videoLink}?start=0`}>
          </iframe>
        </div>
    </motion.div>


      <motion.section className="yearMap" onReturn{...updateHandler}>

        <motion.div
        className="nameBox">
          <motion.span className="myNameIs">My name is</motion.span>
          <motion.div className="outputButtons">

            {years && years.map((year) =>

                <motion.h4
                  key={year._id}
                  className="name"
                  animate={ inputName ? "hide": "show"}
                  variants={valueState}>{year.yourName}</motion.h4>
                     )}

                <motion.input
                  type="text"
                  value={yourName}
                  wrap="soft"
                  autoComplete="off"
                  animate={ inputName ? "show": "hide"}
                  variants={valueState}
                  onChange={(e) => setYourName(e.target.value)}></motion.input>



              <motion.div
              className="editDeleteName">
                  <FontAwesomeIcon
                    className="editIcon"
                    icon={faPenToSquare}
                    onClick={()=> {
                      setInputName(inputName => !inputName);
                    }}/>
                    <FontAwesomeIcon
                        className="questionIcon"
                      icon={faQuestion}
                      onClick={() => {
                        setVideoLink('J1M7AMG9z98');
                        setVideoDisplay(videoDisplay => !videoDisplay);
                      }} />
                </motion.div>
              </motion.div>
          </motion.div>

      <motion.div
        className="dobBox">
          <span>I was born on...</span>
            <motion.div className="outputButtons">
        
                <div>
           
              {years && years.map((year) =>
                  <>
                <motion.h4 key={year._id}
                  className="dobText"
                  animate={ inputBirthDate ? "hide": "show"}
                  variants={valueState}
                  >{year.birthDate.substring(0,10)}</motion.h4>
                  <hr className="dividingLine"/>
                  <div className="contDiv">
                    <span className="contText">Today is
                    <br/>day <span className="dobText2">{continuation}</span> in my life.</span>
                  </div>
           </>
 )}
                

                  {years && years.map((year) =>
                  <>
                <motion.input
                  key={year._id}
                  type="date"
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  animate={ inputBirthDate ? "show": "hide"}
                  variants={valueState}
                ></motion.input>
                </>
                )}


                  </div>
            
      <motion.div className="editDeleteDOB">
          <FontAwesomeIcon
            className="editIcon"
            icon={faPenToSquare}
            onClick={()=> {
              setInputBirthDate(inputBirthDate => !inputBirthDate);
            }}/>
            <FontAwesomeIcon
                className="questionIcon"
              icon={faQuestion}
              onClick={() => {
                setVideoLink('J1M7AMG9z98');
                setVideoDisplay(videoDisplay => !videoDisplay);
              }} />
        </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
      className="valuesBox">
      <span className="valuesTitle">My personal values are...</span>


      <div className="valuesIntBoxView1">
      <motion.div className="editDeleteValues1">
          <FontAwesomeIcon
            className="editIcon"
            icon={faPenToSquare}
            onClick={()=> {
              setInputValues_1(inputValues_1 => !inputValues_1);
            }}/>
            <FontAwesomeIcon
                className="questionIcon"
              icon={faQuestion}
              onClick={() => {
                setVideoLink('HtKEwNHXLC8');
                setVideoDisplay(videoDisplay => !videoDisplay);
              }} />
        </motion.div>

        <motion.input
          type="text"
          value={myValues_1}
          animate={ inputValues_1 ? "show": "hide"}
          variants={valueState}
          onChange={(e) => setMyValues_1(e.target.value)}
          ></motion.input>
      {years && years.map((year) =>


            <motion.span
            key={year._id}
            id="firstValue"
            className="valueName"
            animate={ inputValues_1 ? "hide": "show"}
            variants={valueState}>{year.myValues_1}: </motion.span>
    )}

    {years && years.map((year) =>
            <motion.span
            key={year._id}
            className="valueExplanation"
            animate={ inputValues_1_Text ? "hide": "show"}
            variants={valueState}
            >{year.myValues_1_Text}</motion.span>
  )}
  <motion.input
    type="text"
    value={myValues_1_Text}
    animate={ inputValues_1_Text ? "show": "hide"}
    variants={valueState}
    onChange={(e) => setMyValues_1_Text(e.target.value)}></motion.input>

        <motion.div className="editDeleteValuesText1">
            <FontAwesomeIcon
              className="editIcon"
              icon={faPenToSquare}
              onClick={()=> {
                setInputValues_1_Text(inputValues_1_Text => !inputValues_1_Text);
              }}/>
              <FontAwesomeIcon
                  className="questionIcon"
                icon={faQuestion}
                onClick={() => {
                  setVideoLink('HtKEwNHXLC8');
                  setVideoDisplay(videoDisplay => !videoDisplay);
                }} />

          </motion.div>
        </div>

          <hr className="dividingLine"/>

          <div className="valuesIntBoxView2">
          <motion.div className="editDeleteValues2">
              <FontAwesomeIcon
                className="editIcon"
                icon={faPenToSquare}
                onClick={()=> {
                  setInputValues_2(inputValues_2 => !inputValues_2);
                }}/>
                <FontAwesomeIcon
                    className="questionIcon"
                  icon={faQuestion}
                  onClick={() => {
                    setVideoLink('TDBQ3qMxpOk');
                    setVideoDisplay(videoDisplay => !videoDisplay);
                  }} />
            </motion.div>

            <motion.input
              type="text"
              value={myValues_2}
              animate={ inputValues_2 ? "show": "hide"}
              variants={valueState}
              onChange={(e) => setMyValues_2(e.target.value)}></motion.input>
          {years && years.map((year) =>


                <motion.span
                key={year._id}
                id="firstValue"
                className="valueName"
                animate={ inputValues_2 ? "hide": "show"}
                variants={valueState}>{year.myValues_2}: </motion.span>
        )}

        {years && years.map((year) =>
                <motion.span
                key={year._id}
                className="valueExplanation"
                animate={ inputValues_2_Text ? "hide": "show"}
                variants={valueState}
                >{year.myValues_2_Text}</motion.span>
      )}
      <motion.input
        type="text"
        value={myValues_2_Text}
        animate={ inputValues_2_Text ? "show": "hide"}
        variants={valueState}
        onChange={(e) => setMyValues_2_Text(e.target.value)}></motion.input>

            <motion.div className="editDeleteValuesText2">
                <FontAwesomeIcon
                  className="editIcon"
                  icon={faPenToSquare}
                  onClick={()=> {
                    setInputValues_2_Text(inputValues_2_Text => !inputValues_2_Text);
                  }}/>
                  <FontAwesomeIcon
                      className="questionIcon"
                    icon={faQuestion}
                    onClick={() => {
                      setVideoLink('HtKEwNHXLC8');
                      setVideoDisplay(videoDisplay => !videoDisplay);
                    }} />

              </motion.div>
            </div>

          <hr className="dividingLine"/>

          <div className="valuesIntBoxView3">
          <motion.div className="editDeleteValues3">
              <FontAwesomeIcon
                className="editIcon"
                icon={faPenToSquare}
                onClick={()=> {
                  setInputValues_3(inputValues_3 => !inputValues_3);
                }}/>
                <FontAwesomeIcon
                    className="questionIcon"
                  icon={faQuestion}
                  onClick={() => {
                    setVideoLink('HtKEwNHXLC8');
                    setVideoDisplay(videoDisplay => !videoDisplay);
                  }} />
            </motion.div>

            <motion.input
              type="text"
              value={myValues_3}
              animate={ inputValues_3 ? "show": "hide"}
              variants={valueState}
              onChange={(e) => setMyValues_3(e.target.value)}></motion.input>
          {years && years.map((year) =>


                <motion.span
                key={year._id}
                id="firstValue"
                className="valueName"
                animate={ inputValues_3 ? "hide": "show"}
                variants={valueState}>{year.myValues_3}: </motion.span>
        )}

        {years && years.map((year) =>
                <motion.span
                key={year._id}
                className="valueExplanation"
                animate={ inputValues_3_Text ? "hide": "show"}
                variants={valueState}
                >{year.myValues_3_Text}</motion.span>
      )}
      <motion.input
        type="text"
        value={myValues_3_Text}
        animate={ inputValues_3_Text ? "show": "hide"}
        variants={valueState}
        onChange={(e) => setMyValues_3_Text(e.target.value)}></motion.input>

            <motion.div className="editDeleteValuesText3">
                <FontAwesomeIcon
                  className="editIcon"
                  icon={faPenToSquare}
                  onClick={()=> {
                    setInputValues_3_Text(inputValues_3_Text => !inputValues_3_Text);
                  }}/>
                  <FontAwesomeIcon
                      className="questionIcon"
                    icon={faQuestion}
                    onClick={() => {
                      setVideoLink('HtKEwNHXLC8');
                      setVideoDisplay(videoDisplay => !videoDisplay);
                    }} />

              </motion.div>
            </div>






  <div className="valuesIntBoxView4">
  <motion.div className="editDeleteValues4">
      <FontAwesomeIcon
        className="editIcon"
        icon={faPenToSquare}
        onClick={()=> {
          setInputValues_4(inputValues_4 => !inputValues_4);
        }}/>
        <FontAwesomeIcon
            className="questionIcon"
          icon={faQuestion}
          onClick={() => {
            setVideoLink('HtKEwNHXLC8');
            setVideoDisplay(videoDisplay => !videoDisplay);
          }} />
    </motion.div>

    <motion.input
      type="text"
      value={myValues_4}
      animate={ inputValues_4 ? "show": "hide"}
      variants={valueState}
      onChange={(e) => setMyValues_4(e.target.value)}></motion.input>
  {years && years.map((year) =>

        <motion.span
        key={year._id}
        id="firstValue"
        className="valueName"
        animate={ inputValues_4 ? "hide": "show"}
        variants={valueState}>{year.myValues_4}: </motion.span>
)}

{years && years.map((year) =>
        <motion.span
        key={year._id}
        className="valueExplanation"
        animate={ inputValues_4_Text ? "hide": "show"}
        variants={valueState}
        >{year.myValues_4_Text}</motion.span>
)}
<motion.input
type="text"
value={myValues_4_Text}
animate={ inputValues_4_Text ? "show": "hide"}
variants={valueState}
onChange={(e) => setMyValues_4_Text(e.target.value)}></motion.input>

    <motion.div className="editDeleteValuesText4">
        <FontAwesomeIcon
          className="editIcon"
          icon={faPenToSquare}
          onClick={()=> {
            setInputValues_4_Text(inputValues_4_Text => !inputValues_4_Text);
          }}/>
          <FontAwesomeIcon
              className="questionIcon"
            icon={faQuestion}
            onClick={() => {
              setVideoLink('HtKEwNHXLC8');
              setVideoDisplay(videoDisplay => !videoDisplay);
            }} />
      </motion.div>
    </div>    





  <div className="valuesIntBoxView5">
  <motion.div className="editDeleteValues5">
      <FontAwesomeIcon
        className="editIcon"
        icon={faPenToSquare}
        onClick={()=> {
          setInputValues_5(inputValues_5 => !inputValues_5);
        }}/>
        <FontAwesomeIcon
            className="questionIcon"
          icon={faQuestion}
          onClick={() => {
            setVideoLink('HtKEwNHXLC8');
            setVideoDisplay(videoDisplay => !videoDisplay);
          }} />
    </motion.div>

    <motion.input
      type="text"
      value={myValues_5}
      animate={ inputValues_5 ? "show": "hide"}
      variants={valueState}
      onChange={(e) => setMyValues_5(e.target.value)}></motion.input>
  {years && years.map((year) =>


        <motion.span
        key={year._id}
        id="firstValue"
        className="valueName"
        animate={ inputValues_5 ? "hide": "show"}
        variants={valueState}>{year.myValues_5}: </motion.span>
)}

{years && years.map((year) =>
        <motion.span
        key={year._id}
        className="valueExplanation"
        animate={ inputValues_5_Text ? "hide": "show"}
        variants={valueState}
        >{year.myValues_5_Text}</motion.span>
)}
<motion.input
type="text"
value={myValues_5_Text}
animate={ inputValues_5_Text ? "show": "hide"}
variants={valueState}
onChange={(e) => setMyValues_5_Text(e.target.value)}></motion.input>

    <motion.div className="editDeleteValuesText5">
        <FontAwesomeIcon
          className="editIcon"
          icon={faPenToSquare}
          onClick={()=> {
            setInputValues_5_Text(inputValues_5_Text => !inputValues_5_Text);
          }}/>
          <FontAwesomeIcon
              className="questionIcon"
            icon={faQuestion}
            onClick={() => {
              setVideoLink('HtKEwNHXLC8');
              setVideoDisplay(videoDisplay => !videoDisplay);
            }} />

      </motion.div>
    </div>              


      </motion.div>

      <motion.div className="quoteBox">
      <span className="quoteTitle">This weeks navigational quote is...</span>

      {years && years.map((year) =>
            <motion.h6 key={year._id}
              className="quoteText"
              animate={ inputQuote ? "hide": "show"}
              variants={valueState}
            >{year.navigationalQuote}</motion.h6>
      )}

      <motion.textarea
        type="text"
        rows="8"
        cols="30"
        wrap="soft"
        autoComplete="off"
        value={navigationalQuote}
              animate={ inputQuote ? "show": "hide"}
        variants={valueState}
        onChange={(e) => setNavigationalQuote(e.target.value)}></motion.textarea>
          <motion.div className="outputButtons">
      <motion.div
      className="editDeleteQuote"
      >   <FontAwesomeIcon
          className="editIcon"
          icon={faPenToSquare}
          onClick={()=> {
            setInputQuote(inputQuote => !inputQuote);
          }}/>
          <FontAwesomeIcon
              className="questionIcon"
            icon={faQuestion}
            onClick={() => {
              setVideoLink('eTbICJoQrsM');
              setVideoDisplay(videoDisplay => !videoDisplay);
            }} />

        </motion.div>
      </motion.div>
      </motion.div>

       <motion.div className="visionBox">
      <span className="visionTitle">My vision for 2022 is...</span>
      
      <motion.div className="visionDiv1">

      {years && years.map((year) =>
          <motion.h4
          key={year._id}
          className="visionheader"
          animate={ inputVision_1 ? "hide": "show"}
          variants={valueState}
          >{year.myVision_1}</motion.h4>
            )}

          <motion.input
            type="text"
                animate={ inputVision_1 ? "show": "hide"}
            variants={valueState}
            value={myVision_1}
            onChange={(e) => setMyVision_1(e.target.value)}></motion.input>

              <motion.div className="outputButtons">
          
          <motion.div
          className="editDeleteVision1"
          >   <FontAwesomeIcon
              className="editIcon"
              icon={faPenToSquare}
              onClick={()=> {
                setInputVision_1(inputVision_1 => !inputVision_1);
              }}/>
              <FontAwesomeIcon
                  className="questionIcon"
                icon={faQuestion}
                onClick={() => {
                  setVideoLink('RJiCSvHdSmo');
                  setVideoDisplay(videoDisplay => !videoDisplay);
                }} />

            </motion.div>
          </motion.div>
</motion.div>

          <hr className="dividingLine"/>
          <motion.div className="visionDiv2">
          {years && years.map((year) =>
              <motion.h4
              key={year._id}
              className="visionheader"
              animate={ inputVision_2 ? "hide": "show"}
              variants={valueState}
              >{year.myVision_2}</motion.h4>
                )}

              <motion.input
                type="text"

                    animate={ inputVision_2 ? "show": "hide"}
                variants={valueState}
                value={myVision_2}
                onChange={(e) => setMyVision_2(e.target.value)}></motion.input>

                  <motion.div className="outputButtons">
              <motion.div
              className="editDeleteVision2"
              >   <FontAwesomeIcon
                  className="editIcon"
                  icon={faPenToSquare}
                  onClick={()=> {
                    setInputVision_2(inputVision_2 => !inputVision_2);
                  }}/>
                  <FontAwesomeIcon
                      className="questionIcon"
                    icon={faQuestion}
                    onClick={() => {
                      setVideoLink('RJiCSvHdSmo');
                      setVideoDisplay(videoDisplay => !videoDisplay);
                    }} />

                </motion.div>
              </motion.div>
        </motion.div>
          <hr className="dividingLine"/>
          <motion.div className="visionDiv3">
          {years && years.map((year) =>
              <motion.h4
              key={year._id}
              className="visionheader"
              animate={ inputVision_3 ? "hide": "show"}
              variants={valueState}
              >{year.myVision_3}</motion.h4>
                )}

              <motion.input
                type="text"

                    animate={ inputVision_3 ? "show": "hide"}
                variants={valueState}
                value={myVision_3}
                onChange={(e) => setMyVision_3(e.target.value)}></motion.input>

                  <motion.div className="outputButtons">
              <motion.div
              className="editDeleteVision3"
              >   <FontAwesomeIcon
                  className="editIcon"
                  icon={faPenToSquare}
                  onClick={()=> {
                    setInputVision_3(inputVision_3 => !inputVision_3);
                  }}/>
                  <FontAwesomeIcon
                      className="questionIcon"
                    icon={faQuestion}
                    onClick={() => {
                      setVideoLink('RJiCSvHdSmo');
                      setVideoDisplay(videoDisplay => !videoDisplay);
                    }} />

                </motion.div>
              </motion.div>
        </motion.div>
          <hr className="dividingLine"/>
          <motion.div className="visionDiv4">
          {years && years.map((year) =>
              <motion.h4
              key={year._id}
              className="visionheader"
              animate={ inputVision_4 ? "hide": "show"}
              variants={valueState}
              >{year.myVision_4}</motion.h4>
                )}

              <motion.input
                type="text"

                    animate={ inputVision_4 ? "show": "hide"}
                variants={valueState}
                value={myVision_4}
                onChange={(e) => setMyVision_4(e.target.value)}></motion.input>

                  <motion.div className="outputButtons">
              <motion.div
              className="editDeleteVision3"
              >   <FontAwesomeIcon
                  className="editIcon"
                  icon={faPenToSquare}
                  onClick={()=> {
                    setInputVision_4(inputVision_4 => !inputVision_4);
                  }}/>
                  <FontAwesomeIcon
                      className="questionIcon"
                    icon={faQuestion}
                    onClick={() => {
                      setVideoLink('RJiCSvHdSmo');
                      setVideoDisplay(videoDisplay => !videoDisplay);
                    }} />

                </motion.div>
              </motion.div>
        </motion.div>
          <hr className="dividingLine"/>
          <motion.div className="visionDiv5">
          {years && years.map((year) =>
              <motion.h4
              key={year._id}
              className="visionheader"
              animate={ inputVision_5 ? "hide": "show"}
              variants={valueState}
              >{year.myVision_5}</motion.h4>
                )}

              <motion.input
                type="text"

                    animate={ inputVision_5 ? "show": "hide"}
                variants={valueState}
                value={myVision_5}
                onChange={(e) => setMyVision_5(e.target.value)}></motion.input>

                  <motion.div className="outputButtons">
              <motion.div
              className="editDeleteVision5"
              >   <FontAwesomeIcon
                  className="editIcon"
                  icon={faPenToSquare}
                  onClick={()=> {
                    setInputVision_5(inputVision_5 => !inputVision_5);
                  }}/>
                  <FontAwesomeIcon
                      className="questionIcon"
                    icon={faQuestion}
                    onClick={() => {
                      setVideoLink('RJiCSvHdSmo');
                      setVideoDisplay(videoDisplay => !videoDisplay);
                    }} />

                </motion.div>
              </motion.div>
        </motion.div>


  </motion.div>

      <motion.div className="whyBox">
      <span className="whyTitle">I want to have No Wasted Days because...</span>
      {years && years.map((year) =>
            <motion.h6 key={year._id} className="whyText"
            animate={ inputWhy ? "hide": "show"}
            variants={valueState}>{year.whyNWD}</motion.h6>
      )}

      <motion.textarea
        type="text"
        rows="8"
        cols="40"
        wrap="soft"
        autoComplete="off"
            animate={ inputWhy ? "show": "hide"}
        variants={valueState}
        value={whyNWD}
        onChange={(e) => setWhyNWD(e.target.value)}></motion.textarea>
      <motion.div className="outputButtons">
    <motion.div
    className="editDeleteWhy"
    > <FontAwesomeIcon
        className="editIcon"
        icon={faPenToSquare}
        onClick={()=> {
          setInputWhy(inputWhy => !inputWhy);
        }}/>
        <FontAwesomeIcon
            className="questionIcon"
          icon={faQuestion}
          onClick={() => {
            setVideoLink('8_y_yKKAJIE');
            setVideoDisplay(videoDisplay => !videoDisplay);
          }} />

      </motion.div>
    </motion.div>
      </motion.div>

      <motion.div className="ikigaiBox">
      <span className="ikigaiTitle">My ikigia is...</span>
      {years && years.map((year) =>
            <motion.h6 key={year._id} className="ikigaiText"
            animate={ inputIkigai ? "hide": "show"}
              variants={valueState}>{year.myIkigai}</motion.h6>
      )}
      <motion.textarea
        type="text"
        rows="8"
        cols="30"
        wrap="soft"
        autoComplete="off"
            animate={ inputIkigai ? "show": "hide"}
        variants={valueState}
        value={myIkigai}
        onChange={(e) => setMyIkigai(e.target.value)}></motion.textarea>
      <motion.div className="outputButtons">
    <motion.div
    className="editDeleteIkigai"
    > <FontAwesomeIcon
        className="editIcon"
        icon={faPenToSquare}
        onClick={()=> {
          setInputIkigai(inputIkigai => !inputIkigai);
        }}/>
        <FontAwesomeIcon
            className="questionIcon"
          icon={faQuestion}
          onClick={() => {
            setVideoLink('_tcpDxI5LbQ');
            setVideoDisplay(videoDisplay => !videoDisplay);
          }} />

      </motion.div>
    </motion.div>
      </motion.div>

      <div className="memoryBox">
      <span>Memory that you wanted to remember</span>
      { !days ? <Loading /> : days
        .filter((day, i, days) => days.indexOf(day) === Math.floor((Math.random() * days.length )))
        .filter((day, i, days) => days.indexOf(day) === 0 )
        .map((day, index, days) =>
        <h6 key={day._id[0]} className="ikigaiText">{day.rememberToday}</h6>)}
         <motion.div
    className="editDeleteMemory"
    > 
        <FontAwesomeIcon
            className="questionIcon"
          icon={faQuestion}
          onClick={() => {
            setVideoLink('XpzXR6oG8mA');
            setVideoDisplay(videoDisplay => !videoDisplay);
          }} />

      </motion.div>
      </div>


      <div className="buttonBox">

      </div>

              </motion.section>
       
    </main>
      }
          </form>

    </>

  );
}
