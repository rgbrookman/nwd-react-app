import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Button, Row, Col  } from 'react-bootstrap';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2'
import './contact.css';

export default function Contact({ history }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [enquiry, setEnquiry] = useState('');
  const [subjectLine, setSubjectLine] = useState('');
  const [body, setBody] = useState('');

  const navigate = useNavigate();
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

  useEffect(() => {
    document.title = "Contact Us";
  }, []);



  return (
    <Container className="contactContainer" fluid>

      <form id="contactForm" className="contact-form" ref={form} onSubmit={sendEmail}>
    <Row>
    <Col sm={12} md={6} lg={6} xl={6} className="formColumn">
    <Row>
    <Col>
    <div className="senderContainer">
    <label className="contactLabel" for="contactName">Name:</label>
    <input
      id="contactName"
      type="text"
      value={name}
      name="from_name"
      placeholder="Your Name"
      onChange={(e) => setName(e.target.value)}
      />
      </div>
    </Col>
    <Col>
    <div className="senderEmailContainer">
  <label className="contactLabel"  for="email">Email</label>
  <input
  id="email"
  type="text"
  value={email}
    name="from_email"
  placeholder="Email"
  onChange={(e) => setEmail(e.target.value)}
  />
    </div>
    </Col>
    </Row>
    <Row>
    <div className="enquiryContainer">
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
    </Row>
    <Row>


      </Row>

    <Row>
    <div className="messageDiv">
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


    </Row>

    <Button className="sendButton" type="submit" value="Send">
      Send Message
    </Button>

      </Col>
      <Col sm={12} md={6} lg={6} xl={6}  className="explainerCol ">
      <h1 className="quizHeaderWhite">Get in touch!</h1>
      <span className="contactSpan">Share, enquire, report away! </span>
      </Col>
    </Row>
      </form>
    </Container>
  );
}
