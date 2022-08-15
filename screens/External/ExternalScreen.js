import React, { useState, useEffect, useRef } from 'react';
import Header from "../../components/Header/Header";
import emailjs from '@emailjs/browser';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Button, Row, Col  } from 'react-bootstrap';
import './external.css';

export default function External({ history }) {
  const [state, setState] = useState('');


  return (
    <>
    <Header />
    <Container className="externalContainer" fluid>
        <Row>
            <Col className="name text-start d-flex align-items-center" lg={4}>
                <h3 className="quizHeaderWhite">School of Life</h3>
            </Col>
            <Col className="description text-start d-flex align-items-center" >
                <span>xyz</span>
            </Col>
        </Row>
        <hr className="dividingLine" />
        <Row>
            <Col className="name text-start d-flex align-items-center" lg={4}>
                <h3 className="quizHeaderWhite">Daily Stoic</h3>
            </Col>
            <Col className="description text-start d-flex align-items-center">
                <span>xyz</span>
            </Col>
        </Row>
        <hr className="dividingLine" />
        <Row>
            <Col className="name text-start d-flex align-items-center" lg={4}>
          
                <h3 className="quizHeaderWhite">Ticht Naht Hanh</h3>
            </Col>
            <Col className="description text-start d-flex align-items-center">
                <span>xyz</span>
            </Col>
        </Row>
        <hr className="dividingLine" />
        <Row>
            <Col className="name text-start d-flex align-items-center" lg={4}>
    
                <h3 className="quizHeaderWhite">Tao of Seneca</h3>
            </Col>
            <Col className="description text-start d-flex align-items-center">
                <span>xyz</span>
            </Col>
        </Row>
        <hr className="dividingLine" />
        <Row>
            <Col className="name text-start d-flex align-items-center" lg={4}>
          
                <h3 className="quizHeaderWhite">NWD Blog & Podcast</h3>
            </Col>
            <Col className="description text-start d-flex align-items-center">
                <span>xyz</span>
            </Col>
        </Row>
        <hr className="dividingLine" />
    </Container>
    </>
  );
}
