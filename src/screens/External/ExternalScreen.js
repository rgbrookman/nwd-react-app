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
<main className="resource main">
    <section className="resource table">
    <h2 className="resource name">
        Helpful Resources Table
        </h2>
 
    <div className="resource row">
        <h3 className="resource name">
        School of Life & Alain de Boton
        </h3>
        <p className="resource description">I have found the School of Life content, particularly their YouTube videos, extraordinarily helpful in understanding my own trauma. I could hardly recommend them more highly.</p>
        <div className="linkRow">
        <a href="https://www.youtube.com/c/theschooloflifetv" target="_blank">YouTube</a> | <a href="" target="_blank">The Video's That Have Helped Me Most</a> | <a href="" target="_blank">My Favourite Alain de Boton Book</a>
        </div>
    </div>
    <hr className="dividingLine" />
    <div className="resource row">
        <h3 className="resource title">
            The Daily Stoic / Ryan Holiday
        </h3>
        <p className="resource description">Stoic philosophy has been a treasure trove of human insight for thousands of years and Ryan has been 
                    a fantastic force behind making it more available and practically useful for people in the present day.
                </p>
        <div className="linkRow">
        <a href="https://www.youtube.com/c/DailyStoic" target="_blank">YouTube Channel</a> | <a href="https://www.instagram.com/dailystoic/" target="_blank">Instagram</a> | <a href="https://dailystoic.com/" target="_blank">Newsletter</a>
        </div>
    </div>
    <hr className="dividingLine" />
    <div className="resource row">
        <h3 className="resource title">
        Thich Nhat Hanh
        </h3>
        <p className="resource description">Buddhism has hugely effectively, in my opinion, synthesised the human relationship to pain and the transformation of pain - not with science and scientific tools - but with 
                    thought, observation and story telling over thousands of years. Thich Nhat Hanh was a pioneer that continued this tradition by being able to communicate the teachings to new audiences. 
                    His version of the Buddhas teaching is very accessible and thought provoking.
                </p>
        <div className="linkRow">
        <a href="https://www.audible.co.uk/pd/The-Heart-of-the-Buddhas-Teaching-Audiobook/B079CDLCC4?action_code=ASSGB149080119000H&share_location=pdp" target="_blank">Audiobook</a> | <a href="" target="_blank">YouTube Lecture</a>
        </div>
    </div>
    <hr className="dividingLine" />
    <div className="resource row">
        <h3 className="resource title">Eckhart Tolle</h3>
        <p className="resource description">With wit and calmness, Eckhart Tolle is a super communicator of many lovely principles regarding the mind. Born from his own suffering, he was prompted to learn about the mind and its relationship to the world and has written a number of infamous books on the subject and many of his lectures and seminars also exist on YouTube.
                </p>
        <div className="linkRow">
        <a href="https://youtu.be/aBISYSQjpUg" target="_blank">Lecture</a> | <a href="https://youtu.be/M00VLswZdyc" target="_blank">In Conversation</a> | <a href="https://www.amazon.co.uk/Power-Now-Guide-Spiritual-Enlightenment/dp/0340733500/ref=sr_1_1?crid=1SFM2WW6VDE7M&keywords=the+power+of+now&qid=1672908691&sprefix=the+power+of+now%2Caps%2C111&sr=8-1" target="_blank">The Power of Now</a>
        </div>
    </div>
    <hr className="dividingLine" />
    <div className="resource row">
        <h3 className="resource title">Brené Brown</h3>
        <p className="resource description">Brene Brown has magnificently struck the balance between relatability and robustness of insight in a way few can match in modern society. So many of her insights into vulnerability, leadership, community and courage are right on the button, and you never feel as if you are being lectured at or talked down to. A high wire act that she handles with ease.
                </p>
        <div className="linkRow">
        <a href="" target="_blank">TED Talk</a> | <a href="" target="_blank">Podcast with Tim Ferriss</a> | <a href="" target="_blank">Podcast with Russell Brand</a> | | <a href="" target="_blank">Podcast with Chase Jarvis</a>
        </div>
    </div>
    <hr className="dividingLine" />
    <div className="resource row">
        <h3 className="resource title">Tim Ferriss</h3>
        <p className="resource description">I have been thoroughly grateful to Tim Ferriss ever since I stumbled across his podcast and the 4 Hour Work Week almost a decade ago. It has served me very well as an antidote to some of the vicarious learnings of modern life - 9 to 5 drudgery, mortgages etc - and as an example of how to open with your pain and share it with the world so other people can do the same.
                </p>
        <div className="linkRow">
        <a href="" target="_blank">Podcast</a> | <a href="" target="_blank">4 Hour Book Series</a> | <a href="" target="_blank">My Favourite Podcast Episode</a> | <a href="" target="_blank">Tao of Seneca</a>
        </div>
    </div>
    <hr className="dividingLine" />
    <div className="resource row">
        <h3 className="resource title">John Wooden</h3>
        <p className="resource description">Few people in the world could be said to have embodied high social principles and been a prodigous winner in their domain of choice. This people are rare, and there may be no better example than John Wooden. As a communicator, example, teacher, sports wizard and human, he is an example to us all. 
                </p>
        <div className="linkRow">
        <a href="p" target="_blank">On Leadership</a> |  <a href="p" target="_blank">Academy of Achievement</a> | <a href="p" target="_blank">Rare Lecture</a> | <a href="p" target="_blank">"They call me Coach" </a> | <a href="" target="_blank">TED Talk</a>
        </div>
    </div>
    <hr className="dividingLine" />
    <div className="resource row">
        <h3 className="resource title">Documentaries</h3>
        <p className="resource description">The documentary format is so captivating allowing the issues and emotion at the heart of a time, group or singular moment to play themselves out on screen. Find below a list of documentaries that have made a really lasting impression on me.</p>
        <div className="linkList">
        <span><a href="" target="_blank">The Lady at Number 9</a>: abc</span>
        <span><a href="" target="_blank">Game Changers</a>: abc </span>
        <span><a href="" target="_blank">ESPN 30 for 30: Survive & Advance</a>: abc</span>
        </div>
    </div>
    <hr className="dividingLine" />
    <div className="resource row">
        <h3 className="resource title">Stuart Sandeman & Breathing Books</h3>
        <p className="resource description">I attended a Stuart Sandeman 'Breathpod' session right in the middle of the stressed out moment that prompted me to create the NWD format. It couldn't be more of what I needed; a complete emotional and visceral release encouraged by himself and his facilitators. I have followed him ever since and he is making real waves in the health and wellness community.</p>
        <div className="linkRow">
        <a href="" target="_blank">Book</a> | <a href="" target="_blank">Instagram</a>
        </div>
    </div>
    <hr className="dividingLine" />
    <div className="resource row">
        <h3 className="resource title">Hans Rosling</h3>
        <p className="resource description">Hans Rosling was a pioneering Swedish physician that sought to reduce our misconceptions about the world. His TED talks, books and website demonstrate not only his commitment to global change but also his wit and ability to communicate complex ideas simply and engagingly.</p>
        <div className="linkRow">
        <a href="" target="_blank">TED Talk</a> | <a href="" target="_blank">Book</a> | <a href="" target="_blank">Gapminder</a>
        </div>
    </div>
    <hr className="dividingLine" />
    <div className="resource row">
        <h3 className="resource title">Behavioural Economics</h3>
        <p className="resource description">The revolution in understanding of our brain that has been underway in the past 50 years and how many of these learnings have been simply distilled...</p>
        <div className="linkRow">
        <a href="" target="_blank">List of Cognitive Biases</a> | <a href="" target="_blank">Daniel Kahneman Lecture</a> | <a href="" target="_blank">Richard Thaler Lecture</a> | <a href="" target="_blank">Daniel Kahneman Lecture</a> | <a href="" target="_blank">Rory Sutherland Lecture</a>
        </div>
    </div>
    <hr className="dividingLine" />
    <div className="resource row">
        <h3 className="resource title">Steve Peters</h3>
        <p className="resource description">Working in conjunction with the british cycling, Steve Peters**</p>
        <div className="linkRow">
        <a href="" target="_blank">The Chimp Paradox</a> | 
        </div>
    </div>
    <hr className="dividingLine" />
    <div className="resource row">
        <h3 className="resource title">Books</h3>
        <p className="resource description">I haven't always been the most voracious reader, but driven by certain .</p>
        <div className="linkList">
        <span> <a href="https://www.youtube.com/c/DailyStoic" target="_blank">"The Art of Learning" - Josh Waitzkin</a>: </span>
        <span><a href="https://www.youtube.com/c/DailyStoic" target="_blank">"Letters of a Stoic" - Seneca</a>: </span>
        <span><a href="https://www.youtube.com/c/DailyStoic" target="_blank">"Signal & the Noise" - Nate Silver</a>: </span>
        <span><a href="https://www.youtube.com/c/DailyStoic" target="_blank">"Man's Search for Meaning" - Victor Frankel</a>: </span>
        <span><a href="https://www.youtube.com/c/DailyStoic" target="_blank">"The Alchemist" - Paulo Choelo</a>: </span>
        <span><a href="https://www.youtube.com/c/DailyStoic" target="_blank">"Long Walk to Freedom" - Nelson Mandela</a>: </span>
        <span><a href="https://www.youtube.com/c/DailyStoic" target="_blank">"Freedom" - Tara Westover</a>: </span>
        <span><a href="https://www.youtube.com/c/DailyStoic" target="_blank">"The Bluest Eye" - Toni Morrison</a>: </span>
        <span><a href="https://www.youtube.com/c/DailyStoic" target="_blank">"The Vegetarian" - </a>: </span>
        </div>
    </div>
    <hr className="dividingLine" />
    <div className="resource row">
        <h3 className="resource title">Mr Money Moustache</h3>
        <p className="resource description"></p>
        <div className="linkRow">
        <a href="" target="_blank"></a> | 
        </div>
    </div>
    <hr className="dividingLine" />
 
    </section>
</main>
    </>
  );
}
