import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { updateProfile } from '../../actions/userActions';
import { Card, Button, Row, Col, Container, Form } from 'react-bootstrap';
import CentralHeader from '../../components/Header/CentralHeader';
import TileLoading from '../../components/Loading/TileLoading';
import { ErrorMessage } from '../../components/Error/ErrorMessage';
import Footer from '../../components/Footer/Footer';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faEraser } from '@fortawesome/free-solid-svg-icons'
import './profile.css';

export default function ProfileScreen({ history }) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const [paycPicker, setPaycPicker] = useState('');
  const [paycName, setPaycName] = useState('');
  const [paymentMessage, setPaymentMessage] = useState('');


const dispatch = useDispatch();
const navigate = useNavigate();

const userLogin = useSelector((state) => state.userLogin);
const { userInfo } = userLogin;

const userUpdate = useSelector((state) => state.userUpdate);
const { loading, error, success } = userUpdate;

useEffect(() => {
  if (!userInfo) {
    navigate("/");
  } else {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }
}, [history, userInfo]);

const submitHandler = (e) => {
  e.preventDefault();
  dispatch(updateProfile({
name,
email,
password,
confirmPassword
  }
  ));
  navigate('/today');
};

const paycMessage = () => {
  if (paycPicker === 'https://www.patreon.com/join/nowasteddays/checkout?rid=6044424' || paycPicker === 'https://www.patreon.com/join/nowasteddays/checkout?rid=5772336') {
    setPaymentMessage(paymentMessage => 'Thank you so much. As a symbol of love and support, the lower tier subscriptions are still immensely valuable. ');
    setPaycName(paycName => "£1.20 - £1.49")
  } else if (paycPicker === 'https://www.patreon.com/join/nowasteddays/checkout?rid=6044426' || paycPicker === 'https://www.patreon.com/join/nowasteddays/checkout?rid=9142294' || paycPicker === 'https://www.patreon.com/join/nowasteddays/checkout?rid=6044435') {
    setPaymentMessage(paymentMessage => 'Thank you so much! This kind of donation is at a level where I can start to cover the costs per individual user and that provides a lot of stability to what I am trying to do. Thank you so much! ');
    setPaycName(paycName => "£2.49 - £4.00");
  } else if (paycPicker === 'https://www.patreon.com/join/nowasteddays/checkout?rid=9142277' || paycPicker === 'https://www.patreon.com/join/nowasteddays/checkout?rid=6044452' || paycPicker === 'https://www.patreon.com/join/nowasteddays/checkout?rid=6044447' || paycPicker === 'https://www.patreon.com/join/nowasteddays/checkout?rid=6044447') {
    setPaymentMessage(paymentMessage => 'Thank you so much! Donations at this level take care of server hosting, database requirements etc required to run your own login for the month but also a bit of someone elses. For the people who cannot afford a login, these donations makes it possible to provide the tool to them, so on their behalf, thank you so much!');
    setPaycName(paycName => "£4.99 - £7.00");
  } else if (paycPicker === 'https://www.patreon.com/join/nowasteddays/checkout?rid=9142280' || paycPicker === 'https://www.patreon.com/join/nowasteddays/checkout?rid=9142278') {
    setPaymentMessage(paymentMessage => 'Thank you so much! This donation is very generous and really helps cover you and a whole other person!');
    setPaycName(paycName => "£8.00 - £8.99");
  } else if (paycPicker === 'https://www.patreon.com/join/nowasteddays/checkout?rid=9142285' || paycPicker === 'https://www.patreon.com/join/nowasteddays/checkout?rid=9142284' || paycPicker === 'https://www.patreon.com/join/nowasteddays/checkout?rid=9142282') {
    setPaymentMessage(paymentMessage => 'Thank you for being a straight Up G! This donation is massively influential and really helps move the needle month on month.');
    setPaycName(paycName => "£10.00 - £12.00");
  }
}

const [senderName, setSenderName] = useState('');
const [senderEmail, setSenderEmail] = useState('');
const [enquiry, setEnquiry] = useState('');
const [subjectLine, setSubjectLine] = useState('');
const [body, setBody] = useState('');

const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_rt1yckn', 'template_4oxlqrh', form.current, '1YKVv6BHraqDPites')
    .then((result) => {
        console.log(result.text);
        e.target.reset();
    }, (error) => {
        console.log(error.text);
    });
    navigate('/');
};

const [pageLoading, setPageLoading] = useState(true);

const loadingTimeout = () => {
  setTimeout(()=> {
    setPageLoading(false)
  }, 5000)
}

useEffect(()=> {
  loadingTimeout();
  paycMessage();
})

  return (
    <>
    <CentralHeader />
    <>
   
<main className="mainProfileScreen">
{ pageLoading ? <TileLoading /> : 
<div className="tabContainer">
<Tabs id="uncontrolled-tab-example" defaultActiveKey="payc" className="tabs profile">
      <Tab className="tab" eventKey="payc" title="Update Subscription">
        <div className="container payc">
          <div className="payc message">
            <h4>Your current subscription: {paycName}</h4>
            <p>{paymentMessage}</p>
          </div>
          <div className="payc selector">
            <select 
              name="paycPicker" 
              defaultValue="https://www.patreon.com/join/nowasteddays/checkout?rid=5772336" 
              onChange={(e) => {
                setPaycPicker(e.target.value);
              }}>
            <option value="https://www.instagram.com/nowasteddays">Free</option>
            <option value="https://www.patreon.com/join/nowasteddays/checkout?rid=5772336">£1.20</option>
            <option value="https://www.patreon.com/join/nowasteddays/checkout?rid=6044424">£1.49</option>
            <option value="https://www.patreon.com/join/nowasteddays/checkout?rid=6044426">£2.49</option>
            <option value="https://www.patreon.com/join/nowasteddays/checkout?rid=6044435">£3.00</option>
            <option value="https://www.patreon.com/join/nowasteddays/checkout?rid=9142294">£4.00</option>
            <option value="https://www.patreon.com/join/nowasteddays/checkout?rid=6044447">£4.99</option>
            <option value="https://www.patreon.com/join/nowasteddays/checkout?rid=6044452">£6.99</option>
            <option value="https://www.patreon.com/join/nowasteddays/checkout?rid=9142277">£7.00</option>
            <option value="https://www.patreon.com/join/nowasteddays/checkout?rid=9142278">£8.00</option>
            <option value="https://www.patreon.com/join/nowasteddays/checkout?rid=9142280">£8.99</option>
            <option value="https://www.patreon.com/join/nowasteddays/checkout?rid=9142282">£10.00</option>
            <option value="https://www.patreon.com/join/nowasteddays/checkout?rid=9142284">£11.00</option>
            <option  value="https://www.patreon.com/join/nowasteddays/checkout?rid=9142285">£12.00</option>
            </select>
            <button className="updateProfileButton"><a href={paycPicker} target="_blank">Update Subscription</a></button>
          </div>
        </div>
        <div className="coffee">
            <a href={'/'}>or just buy me a coffee :)</a>
          </div>
        </Tab>
        <Tab className="tab" eventKey="update" title="Update Profile">
        <div className="container profile">
          <form className="updateProfileForm" onSubmit={submitHandler} >
<div className="container name">
<label htmlFor="updateName">Name</label>
<input
  id="updateName"
  type="text"
  className="textInput"
  value={name}
  placeholder="name"
  onChange={(e) => setName(e.target.value)}
  />
  </div>
  <div className="container email">
<label htmlFor="email">Email</label>
<input
id="email"
className="textInput"
type="text"
value={email}
placeholder="email"
onChange={(e) => setEmail(e.target.value)}
/>
  </div>
  <div className="container password">
<label htmlFor="password">Password</label>
<input
id="password"
className="textInput"
type="password"
value={password}
placeholder="password"
onChange={(e) => setPassword(e.target.value)}
/>
  </div>
    <div className="container confirmPassword">
<label htmlFor="confPassword">Confirm Password</label>
<input
id="confPassword"
className="textInput"
type="password"
value={confirmPassword}
placeholder=" Confirm password"
onChange={(e) => setConfirmPassword(e.target.value)}
/>
</div>
<div className="profileButtonDiv">
<Button className="updateProfileButton" type="submit">
  Update
</Button>
</div>
</form>
</div>
        </Tab>
        <Tab className="tab" eventKey="contact" title="Contact Us">
        <div className="container contact">
        <form id="contactForm" className="contact-form" ref={form} onSubmit={sendEmail}>
    <div className="sender row">
    <label className="contactLabel" for="contactName">Name:</label>
    <input
      id="contactName"
      type="text"
      value={senderName}
      name="from_name"
      placeholder="Your Name"
      onChange={(e) => setSenderName(e.target.value)}
      />
      </div>
    <div className="sender row">
  <label className="contactLabel"  for="email">Email</label>
  <input
  id="email"
  type="text"
  value={senderEmail}
    name="from_email"
  placeholder="Email"
  onChange={(e) => setSenderEmail(e.target.value)}
  />
    </div>
    <div className="sender row">
      <label htmlFor="contactEnquirySelect">Enquiry Type: </label>
    <select
    id="contactEnquirySelect"
      className="enquirySelect"
      form="contactForm"
      name="enquiry_type">
      <option value="Bug Found">Report a Bug</option>
      <option value="Question">Ask a Question</option>
      <option value="Suggestion">Recommend a New Feature</option>
      <option value="Suggestion">Volunteer Your Skills</option>
      <option value="Complaint">Leave a Complaint</option>
      <option value="Other">Something Else</option>
    </select>
    </div>

    <div className="message row">
  <label className="contactLabel"  for="messageArea">Message</label>
  <textarea
  id="messageArea"
  type="password"
  value={body}
    name="message"
  rows="8"
  placeholder="Message"
  onChange={(e) => setBody(e.target.value)}
  />
  </div>

    <Button className="sendButton" type="submit" value="Send">
      Send Message
    </Button>

 
      </form>
      </div>
        </Tab>
        </Tabs>
        </div>

}
</main>

</>
</>
  );
}
