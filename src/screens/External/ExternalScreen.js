import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import CentralHeader from '../../components/Header/CentralHeader';
import { Container, Button, Row, Col  } from 'react-bootstrap';
import './external.css';

export default function External({ history }) {
  const [state, setState] = useState('');


  return (
    <>
<CentralHeader />
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
          
                <h3 className="quizHeaderWhite">Thich Nhat Hanh</h3>
            </Col>
            <Col className="description text-start d-flex align-items-center">
                <p>Buddhism has hugely effectively, in my opinion, synthesised the human relationship to pain, and the transformation of pain - not with science and scientific tools - but with 
                    thought, sharing and story over thousands of years. Thich Nhat Hanh was a pioneer that continue this tradition by being able to communicate the teachings to new audiences, and have 
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
            <p>With wit and calmness, Eckhart Tolle is a super communicator of many lovely principles regarding the mind. Born from his own suffering, he was prompted to learn about the mind and its relationship to the world and has written a number of infamous books on the subject and many of his lectures and seminars also exist on YouTube.
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
            <p>Brene Brown has magnificently struck the balance between relatability and robustness of insight in a way few can match in modern society. So many of her insights into vulnerability, leadership, community and courage are right on the button, and you never feel as if you are being lectured at or talked down to. A high wire act that she handles with ease.
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
            <p>I have been thoroughly grateful to Tim Ferriss ever since I stumbled across his podcast and the 4 Hour Work Week almost a decade ago. It has served me very well as an antidote to some of the vicarious learnings of modern life - 9 to 5 drudgery, mortgages etc - and as an example of how to open with your pain and share it with the world so other people can do the same.
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
            <p>Few people in the world could be said to have embodied high social principles and been a prodigous winner in their domain of choice. This people are rare, and there may be no better example than John Wooden. As a communicator, example, teacher, sports wizard and human, he is an example to us all. 
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
