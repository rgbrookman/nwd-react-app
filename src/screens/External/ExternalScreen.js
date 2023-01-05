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
        <a href="https://www.youtube.com/c/theschooloflifetv" target="_blank">YouTube</a> | <a href="https://youtube.com/playlist?list=PLoCp1ejVsiqvkBpAyATd4OUnohy6YiqSE" target="_blank">The Video's That Have Helped Me Most</a> | <a href="https://www.amazon.co.uk/Status-Anxiety/dp/B008YZAX82/ref=sr_1_1?keywords=status+anxiety+by+alain+de+botton&qid=1672925099&sprefix=status+anx%2Caps%2C81&sr=8-1" target="_blank">My Favourite Alain de Boton Book</a>
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
        <a href="https://www.audible.co.uk/pd/The-Heart-of-the-Buddhas-Teaching-Audiobook/B079CDLCC4?action_code=ASSGB149080119000H&share_location=pdp" target="_blank">Audiobook</a> | <a href="https://youtu.be/9ogiYBmS2zE" target="_blank">YouTube Lecture & Meditation</a>
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
        <a href="https://youtu.be/iCvmsMzlF7o" target="_blank">TED Talk</a> | <a href="https://youtu.be/Wh5SUF0gPWQ" target="_blank">Podcast with Tim Ferriss</a> | <a href="https://youtu.be/SM1ckkGwqZI" target="_blank">Podcast with Russell Brand</a> | | <a href="https://youtu.be/kAk4cwjvJ0A" target="_blank">Podcast with Chase Jarvis</a>
        </div>
    </div>
    <hr className="dividingLine" />
    <div className="resource row">
        <h3 className="resource title">Tim Ferriss</h3>
        <p className="resource description">I have been thoroughly grateful to Tim Ferriss ever since I stumbled across his podcast and the 4 Hour Work Week almost a decade ago. It has served me very well as an antidote to some of the vicarious learnings of modern life - 9 to 5 drudgery, mortgages etc - and as an example of how to open with your pain and share it with the world so other people can do the same.
                </p>
        <div className="linkRow">
        <a href="https://tim.blog/podcast/" target="_blank">Podcast</a> | <a href="https://tim.blog/tim-ferriss-books/" target="_blank">4 Hour Book Series</a> | <a href="https://open.spotify.com/episode/1M2SsLRhA1IQHEHG7CbNjC?si=QvinTTn6RTqTCw0WnYuZzA" target="_blank">My Favourite Podcast Episode</a> | <a href="https://tim.blog/2017/07/06/tao-of-seneca/" target="_blank">Tao of Seneca</a>
        </div>
    </div>
    <hr className="dividingLine" />
    <div className="resource row">
        <h3 className="resource title">John Wooden</h3>
        <p className="resource description">Few people in the world could be said to have embodied high social principles and also been a prodigious winner in their domain of choice. This people are rare, and there may be no better example than John Wooden. As a communicator, example, teacher, sports wizard and human, he is an example to us all. 
                </p>
        <div className="linkRow">
        <a href="https://www.amazon.co.uk/Wooden-Leadership-Create-Winning-Organizaion/dp/0071453393/ref=sr_1_1?keywords=john+wooden+on+leadership&qid=1672925687&sprefix=john+wooden+on+%2Caps%2C90&sr=8-1" target="_blank">On Leadership</a> |  <a href="https://youtu.be/o-TTkwPSIaU" target="_blank">Academy of Achievement</a> | <a href="https://youtu.be/3xYDoa6FX_s" target="_blank">Rare Lecture</a> | <a href="https://www.amazon.co.uk/They-Call-Coach-Wooden-1972-12-03/dp/B01F7XHGUQ/ref=sr_1_2?crid=1SWA8SRKQLVH8&keywords=john+wooden+they+call+me+coach&qid=1672925779&sprefix=john+wooden+they+call+me+coach%2Caps%2C63&sr=8-2" target="_blank">"They call me Coach" </a> | <a href="https://youtu.be/0MM-psvqiG8" target="_blank">TED Talk</a>
        </div>
    </div>
    <hr className="dividingLine" />
    <div className="resource row">
        <h3 className="resource title">Documentaries</h3>
        <p className="resource description">The documentary format is so captivating allowing the issues and emotion at the heart of a time, group or singular moment to play themselves out on screen. Find below a list of documentaries that have made a really lasting impression on me.</p>
        <div className="linkList">
        <span><a href="https://en.wikipedia.org/wiki/The_Lady_in_Number_6" target="_blank">The Lady at Number 6 - Music Saved My Life</a>: The holocaust is not an easy subject to broach, however, this documentary strafes immaculately through it by telling the tale of Alice Herz-Sommer, a concert pianist who was taken to Auschwitz.</span>
        <span><a href="" target="_blank">ESPN 30 for 30: Survive & Advance</a>: An impeccably told underdog story drenched with big personalities and the wholehearted love they shared for one and other.</span>
        <span><a href="" target="_blank">Game Changers</a>: Great insight into the consumption of meat is not necessary for ultra high performance.</span>
        </div>
    </div>
    <hr className="dividingLine" />
    <div className="resource row">
        <h3 className="resource title">Stuart Sandeman & Breathing Books</h3>
        <p className="resource description">I attended a Stuart Sandeman 'Breathpod' session right in the middle of the stressed out moment that prompted me to create the NWD format. It couldn't be more of what I needed; a complete emotional and visceral release encouraged by himself and his facilitators. I have followed him ever since and he is making real waves in the health and wellness community.</p>
        <div className="linkRow">
        <a href="https://www.amazon.co.uk/dp/0008475377/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1643272821&tag=linkfire-smarturl-21&ie=UTF8&linkCode=as2&ascsubtag=13188bdfd1dbfb4d0dea82181f5b719f&ref=dmm_acq_soc_gb_u_lfire_lp_x_13188bdfd1dbfb4d0dea82181f5b719f" target="_blank">Book</a> | <a href="https://www.instagram.com/breathpod/" target="_blank">Instagram</a>
        </div>
    </div>
    <hr className="dividingLine" />
    <div className="resource row">
        <h3 className="resource title">Hans Rosling</h3>
        <p className="resource description">Hans Rosling was a pioneering Swedish physician that sought to reduce our misconceptions about the world. His TED talks, books and website demonstrate not only his commitment to global change but also his wit and ability to communicate complex ideas simply and engagingly.</p>
        <div className="linkRow">
        <a href="https://youtu.be/hVimVzgtD6w" target="_blank">TED Talk</a> | <a href="https://www.amazon.co.uk/Factfulness-Reasons-Wrong-Things-Better/dp/B0787RC6T7/ref=sr_1_1?keywords=factfulness+hans+rosling&qid=1672926146&s=books&sprefix=factful%2Cstripbooks%2C77&sr=1-1" target="_blank">Book</a> | <a href="https://www.gapminder.org/" target="_blank">Gapminder</a>
        </div>
    </div>
    <hr className="dividingLine" />
    <div className="resource row">
        <h3 className="resource title">Behavioural Economics</h3>
        <p className="resource description">The revolution in understanding of our brain that has been underway in the past 50 years has been phenomenal. We now have immense knowledge of the biases it adopts and shortcuts it takes, so we can consciously prevent ourselves from tripping up with greater ease than ever before.</p>
        <div className="linkRow">
        <a href="https://thedecisionlab.com/biases" target="_blank">List of Cognitive Biases</a> | <a href="https://youtu.be/CjVQJdIrDJ0" target="_blank">Daniel Kahneman Lecture</a> | <a href="https://youtu.be/A1M9VSgsSW4" target="_blank">Richard Thaler Lecture</a> | <a href="https://youtu.be/B2Bafx7xyRw" target="_blank">Rory Sutherland Lecture</a>
        </div>
    </div>
    <hr className="dividingLine" />
    <div className="resource row">
        <h3 className="resource title">Steve Peters</h3>
        <p className="resource description">Working in conjunction with the british cycling, Steve Peters pioneered a simple approach to managing your brain that can help anyone perform under duress or simply cope with the ups and downs of everyday life.</p>
        <div className="linkRow">
        <a href="https://www.amazon.co.uk/Chimp-Paradox-Management-Audio-Unabridged-Peters/dp/B01KWJ5J5E/ref=sr_1_3?keywords=the+chimp+paradox&qid=1672926371&sprefix=the+chimp+%2Caps%2C82&sr=8-3" target="_blank">The Chimp Paradox</a> | <a href="https://youtu.be/lDDNI3irZMg" target="_blank">Appearance on Diary of a CEO</a>
        </div>
    </div>
    <hr className="dividingLine" />
    <div className="resource row">
        <h3 className="resource title">Books</h3>
        <p className="resource description">I haven't always been the most voracious reader, but driven by certain .</p>
        <div className="linkList">
            <span> <a href="https://www.amazon.co.uk/Art-Learning-Journey-Optimal-Performance/dp/B00JAPNKV2/ref=sr_1_1?keywords=the+art+of+learning+by+josh+waitzkin&qid=1672926510&s=books&sprefix=the+art+of+learning%2Cstripbooks%2C64&sr=1-1" target="_blank">"The Art of Learning" - Josh Waitzkin</a></span>
            <span><a href="https://www.amazon.co.uk/Letters-Stoic-New-Translation-2022/dp/B09RNS7L15/ref=sr_1_3?crid=OQYF1U5T4WZ4&keywords=letters+of+a+stoic+seneca&qid=1672926540&s=books&sprefix=letters+of+a+stoic+seneca%2Cstripbooks%2C53&sr=1-3" target="_blank">"Letters from a Stoic" - Seneca</a></span>
            <span><a href="https://www.amazon.co.uk/Signal-Noise-Art-Science-Prediction/dp/0141975652/ref=sr_1_1?crid=1T4JMUOIB5EZJ&keywords=signal+and+the+noise+silver&qid=1672926572&s=books&sprefix=signal+and+the+noise+silver%2Cstripbooks%2C57&sr=1-1" target="_blank">"The Signal & the Noise" - Nate Silver</a></span>
            <span><a href="https://www.amazon.co.uk/Meaning-classic-tribute-Holocaust-Paperback/dp/B0B8P4G8VK/ref=sr_1_2?keywords=mans+search+for+meaning+by+viktor+e.+frankl&qid=1672926591&s=books&sprefix=man%27s+%2Cstripbooks%2C68&sr=1-2" target="_blank">"Man's Search for Meaning" - Victor Frankel</a></span>
            <span><a href="https://www.amazon.co.uk/Alchemist-Paulo-Coelho/dp/0062390627/ref=sr_1_3?keywords=the+alchemist+paulo+coelho&qid=1672926616&s=books&sprefix=the+alc%2Cstripbooks%2C67&sr=1-3" target="_blank">"The Alchemist" - Paulo Choelo</a></span>
            <span><a href="https://www.amazon.co.uk/Long-Walk-Freedom-Autobiography-Mandela/dp/0349106533/ref=sr_1_1?keywords=long+walk+to+freedom+nelson+mandela&qid=1672926633&s=books&sprefix=long+walk+to+%2Cstripbooks%2C62&sr=1-1" target="_blank">"Long Walk to Freedom" - Nelson Mandela</a></span>
            <span><a href="https://www.amazon.co.uk/Educated/dp/B079BZZ4NJ/ref=sr_1_1?crid=1MYF59WE51D7K&keywords=freedom+tara+westover&qid=1672926650&s=books&sprefix=freedom+tara+westover%2Cstripbooks%2C54&sr=1-1" target="_blank">"Educated" - Tara Westover</a></span>
            <span><a href="https://www.amazon.co.uk/Bluest-Eye-Toni-Morrison/dp/0099759918/ref=sr_1_1?keywords=the+bluest+eye+toni+morrison+hard+back&qid=1672926673&s=audible&sprefix=the+bluest+eye%2Caudible%2C58&sr=1-1-catcorr" target="_blank">"The Bluest Eye" - Toni Morrison</a></span>
            <span><a href="https://www.amazon.co.uk/The-Vegetarian/dp/B07CGGHB3N/ref=sr_1_1?keywords=the+vegetarian+han+kang&qid=1672926691&sprefix=the+vegetarian%2Caps%2C76&sr=8-1" target="_blank">"The Vegetarian" - Han Kang</a></span>
        </div>
    </div>
    {/* <hr className="dividingLine" />
    <div className="resource row">
        <h3 className="resource title">Mr Money Moustache</h3>
        <p className="resource description"></p>
        <div className="linkRow">
        <a href="" target="_blank"></a> | 
        </div>
    </div>
    <hr className="dividingLine" /> */}
 
    </section>
</main>
    </>
  );
}
