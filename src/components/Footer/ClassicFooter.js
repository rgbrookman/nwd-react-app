import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import PropagateLoader from "react-spinners/PropagateLoader";
import { DropdownButton, Dropdown, Nav, Navbar, Container  } from 'react-bootstrap';
import { logout } from '../../actions/userActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faFontAwesome, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faShareNodes, faGlobe } from '@fortawesome/free-solid-svg-icons';
import logo from '../../NWD_Logo_White.png';
import './footer.css';

const ClassicFooter = () => {

  const dispatch = useDispatch();

  const [loadingSpinner, setLoadingSpinner ] = useState(false);


    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const yearList = useSelector((state) => state.yearList);
    const { loading, error, years } = yearList;

    const logoutHandler = () => {
      dispatch(logout());
    }

    useEffect(() => {
      setLoadingSpinner(true);
      setTimeout(() => {
        setLoadingSpinner(false);
      }, 1500);
    }, [])

    const override = {
        display: "block",
        top: "50vh",
        left: "50%",
        margin: 0,
    };

    const vw = Math.max(document.documentElement.clientWidth);

  return (
    <>
    { vw > 500 ?
  
 <footer>
    <div className="footer-main">
        <div className="footerColumn product">
            <h4 className="footer-header">The App</h4>
            <a id="fava" className="footer-link" href="/register">Get Started<div id="funderline"></div></a>
            <a id="fava" className="footer-link" style={{opacity: "0.3"}}>Case Studies<div id="funderline"></div></a>
        </div>
        <div className="footerColumn company">
            <h4 className="footer-header">The Team</h4>
            <a id="fava" className="footer-link" href="https://www.nowasteddays.org/about" target="_blank">About Us<div id="funderline"></div></a>
            <a id="fava" className="footer-link" style={{opacity: "0.3"}}>Careers<div id="funderline"></div></a>
        </div>
        <div className="footerColumn about">
            <h4 className="footer-header">Need Some Help?</h4>
            <a id="fava" className="footer-link" href="https://www.nowasteddays.org/faqs">Frequently Asked Questions<div id="funderline"></div></a>
            <a id="fava" className="footer-link" href="/contact">Report a Bug<div id="funderline"></div></a>
        </div>
        <div className="footerColumn contact">
            <h4 className="footer-header">Contact</h4>
            <a id="fava" className="footer-link" href="/contact">Ask a Question<div id="funderline"></div></a>
            <a id="fava" className="footer-link" href="/contact">Media Request<div id="funderline"></div></a>
        </div>
         <div className="copyright">
          <img src={logo} height={30} alt={"logo"}></img>
        <hr/>
        <p>Copyright 2022 - All Rights Reserved</p>
    </div>
    </div>
</footer>


    : 
   
    <footer>
    <div className="footer-main">
        <div className="footerColumn product">
            <h4 className="footer-header">The App</h4>
            <a id="fava" className="footer-link" href="/register">Get Started<div id="funderline"></div></a>
            <a id="fava" className="footer-link" href="https://www.nowasteddays.org/how-it-works" target="_blank">How it Works<div id="funderline"></div></a>
        </div>
        <div className="footerColumn company">
            <h4 className="footer-header">The Team</h4>
            <a id="fava" className="footer-link" href="https://www.nowasteddays.org/about" target="_blank">About Us<div id="funderline"></div></a>
            <a id="fava" className="footer-link" href="https://www.nowasteddays.org/contact" target="_blank">Careers<div id="funderline"></div></a>
        </div>
    </div>
    <div className="footer-main">
        <div className="footerColumn contact">
            <h4 className="footer-header">Contact</h4>
            <a id="fava" className="footer-link" href="https://www.nowasteddays.org/contact" target="_blank">Ask a Question<div id="funderline"></div></a>
            <a id="fava" className="footer-link" href="https://www.nowasteddays.org/contact" target="_blank">Media Request<div id="funderline"></div></a>
        </div>
         <div className="copyright">
          <img src={logo} height={30} alt={"logo"}></img>
        <hr/>
        <p>Copyright 2022 - All Rights Reserved</p>
    </div>
    </div>
</footer>

    
    }
   



  
</>





  )
}

export default ClassicFooter;
