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
            <Col className="description text-start d-flex-col align-items-center" >
                <p>I have found the School of Life content, particularly their books and videos, extraordinarily helpful in understanding my own trauma. I could hardly recommend them more highly.</p>
                <a href="https://www.youtube.com/c/theschooloflifetv" target="_blank">YouTube Link</a>
            </Col>
        </Row>
        <hr className="dividingLine" />
        <Row>
            <Col className="name text-start d-flex align-items-center" lg={4}>
                <h3 className="quizHeaderWhite">Daily Stoic</h3>
            </Col>
            <Col className="description text-start d-flex align-items-center">
                <p>Stoic philosophy has been a treasure trove of human insight for thousands of years and Ryan has been 
                    a fantastic force for making it more available and practically useful for people in the present day.
                </p>
                <a href="https://www.youtube.com/c/DailyStoic" target="_blank">YouTube Link</a>
            </Col>
        </Row>
        <hr className="dividingLine" />
        <Row>
            <Col className="name text-start d-flex align-items-center" lg={4}>
          
                <h3 className="quizHeaderWhite">Ticht Naht Hanh</h3>
            </Col>
            <Col className="description text-start d-flex align-items-center">
                <p>Buddhism has hugely effectively, in my opinion, synthesised the human relationship to pain, and the transformation of pain - not with science and scientific tools - but with 
                    thought, sharing and story over thousands of years. Ticht Naht Hanh was a pioneer that continue this tradition by being able to communicate the teachings to new audiences, and have 
                    thoughts of his own.
                </p>
                <a href="https://www.youtube.com/c/DailyStoic" target="_blank">YouTube Link</a>
            </Col>
        </Row>
        <hr className="dividingLine" />
        <Row>
            <Col className="name text-start d-flex align-items-center" lg={4}>
    
                <h3 className="quizHeaderWhite">Eckhart Tolle</h3>
            </Col>
            <Col className="description text-start d-flex align-items-center">
            <p>xyz
                </p>
                <a href="https://www.youtube.com/c/DailyStoic" target="_blank">YouTube Link</a>
            </Col>
        </Row>
        <hr className="dividingLine" />
        <Row>
            <Col className="name text-start d-flex align-items-center" lg={4}>
    
                <h3 className="quizHeaderWhite">Brene Brown</h3>
            </Col>
            <Col className="description text-start d-flex align-items-center">
            <p>xyz
                </p>
                <a href="https://www.youtube.com/c/DailyStoic" target="_blank">YouTube Link</a>
            </Col>
        </Row>
        <hr className="dividingLine" />
        <Row>
            <Col className="name text-start d-flex align-items-center" lg={4}>
    
                <h3 className="quizHeaderWhite">Tim Ferriss</h3>
            </Col>
            <Col className="description text-start d-flex align-items-center">
            <p>xyz
                </p>
                <a href="https://www.youtube.com/c/DailyStoic" target="_blank">YouTube Link</a>
            </Col>
        </Row>
        <hr className="dividingLine" />
        <Row>
            <Col className="name text-start d-flex align-items-center" lg={4}>
    
                <h3 className="quizHeaderWhite">John Wooden</h3>
            </Col>
            <Col className="description text-start d-flex align-items-center">
            <p>xyz
                </p>
                <a href="https://www.youtube.com/c/DailyStoic" target="_blank">YouTube Link</a>
            </Col>
        </Row>
        <hr className="dividingLine" />
        <Row>
            <Col className="name text-start d-flex align-items-center" lg={4}>
    
                <h3 className="quizHeaderWhite">Documentaries</h3>
            </Col>
            <Col className="description text-start d-flex align-items-center">
            <p>xyz
                </p>
                <a href="https://www.youtube.com/c/DailyStoic" target="_blank">YouTube Link</a>
            </Col>
        </Row>
        <hr className="dividingLine" />
        <Row>
            <Col className="name text-start d-flex align-items-center" lg={4}>

                <h3 className="quizHeaderWhite">Breathing Books</h3>
            </Col>
            <Col className="description text-start d-flex align-items-center">
            <p>xyz
                </p>
                <a href="https://www.youtube.com/c/DailyStoic" target="_blank">YouTube Link</a>
            </Col>
        </Row>
        <hr className="dividingLine" />
        <Row>
            <Col className="name text-start d-flex align-items-center" lg={4}>
    
                <h3 className="quizHeaderWhite">Hans Rosling</h3>
            </Col>
            <Col className="description text-start d-flex align-items-center">
            <p>xyz
                </p>
                <a href="https://www.youtube.com/c/DailyStoic" target="_blank">YouTube Link</a>
            </Col>
        </Row>
        <hr className="dividingLine" />
        <Row>
            <Col className="name text-start d-flex align-items-center" lg={4}>
    
                <h3 className="quizHeaderWhite">Behavioural Economics</h3>
            </Col>
            <Col className="description text-start d-flex align-items-center">
            <p>xyz
                </p>
                <a href="https://www.youtube.com/c/DailyStoic" target="_blank">YouTube Link</a>
            </Col>
        </Row>
        <hr className="dividingLine" />
        <Row>
            <Col className="name text-start d-flex align-items-center" lg={4}>
    
                <h3 className="quizHeaderWhite">Books</h3>
            </Col>
            <Col className="description text-start d-flex align-items-center">
                <a href="https://www.youtube.com/c/DailyStoic" target="_blank">"The Art of Learning" - Josh Waitzkin</a>
                <a href="https://www.youtube.com/c/DailyStoic" target="_blank">"Letters of a Stoic" - Seneca</a>
                <a href="https://www.youtube.com/c/DailyStoic" target="_blank">"Man's Search for Meaning" - Victor Frankel</a>
                <a href="https://www.youtube.com/c/DailyStoic" target="_blank">"The Alchemist" - Paulo Choelo</a>
                <a href="https://www.youtube.com/c/DailyStoic" target="_blank">"Long Walk to Freedom" - Nelson Mandela</a>
                <a href="https://www.youtube.com/c/DailyStoic" target="_blank">"Freedom" - Tara Westover</a>
                <a href="https://www.youtube.com/c/DailyStoic" target="_blank">"The Bluest Eye" - Toni Morrison</a>
                <a href="https://www.youtube.com/c/DailyStoic" target="_blank">"The Vegetarian" - </a>
                <a href="https://www.youtube.com/c/DailyStoic" target="_blank">"The Vegetarian" - </a>
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
