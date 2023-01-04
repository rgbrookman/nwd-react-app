import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { listYears } from '../../actions/yearActions';
import { listWeeks } from '../../actions/weekActions';
import { listDays } from '../../actions/dayActions';
import Loading from '../Loading/Loading';
import DropdownLoading from '../Loading/DropdownLoading';
import PageLoading from '../Loading/PageLoading';
import PropagateLoader from "react-spinners/PropagateLoader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faSignature, faLandmarkDome, faDna, faQuoteLeft, faBars  } from '@fortawesome/free-solid-svg-icons'
import logo from '../../NWD_Logo_White.png';
import greenlogo from '../../green_logo.png';
import { logout } from '../../actions/userActions';
import * as d3 from 'd3';
import './centralheader.css';

const CentralHeader = () => {
  const [homepage, setHomepage] = useState(window.location.href === '/' ? true : false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let { id } = useParams();
  const [loadingSpinner, setLoadingSpinner ] = useState(false);

    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const yearList = useSelector((state) => state.yearList);
    const { years } = yearList;

    const weekList = useSelector((state) => state.weekList);
    const { weeks } = weekList;

    const dayList = useSelector((state) => state.dayList);
    const { loading, error,  days } = dayList;

    useEffect(() => {
  dispatch(listYears());
    }, [dispatch, userInfo])

    useEffect(() => {
      dispatch(listWeeks());
    }, [dispatch, userInfo]);

    useEffect(() => {
      dispatch(listDays());
    }, [dispatch, userInfo]);

    const logoutHandler = () => {
      dispatch(logout());
      navigate('/');
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

        const [pageLoading, setPageLoading] = useState(true);

        const loadingTimeout = () => {
          setTimeout(()=> {
            setPageLoading(false)
          }, 10000)
        }

        const [menuState, setMenuState] = useState('menu');
        const [navMenu, setNavMenu] = useState('navMenu');
        const [navDock, setNavDock] = useState('navDock');

        const openMenu = () => {
          if (menuState === 'menu') {
            setMenuState(menuState => 'menu active');
            setNavMenu(navMenu => 'navMenu active');
            setNavDock(navDock => 'navDock');
          } else {
            setMenuState(menuState => 'menu');
            setNavMenu(navMenu => 'navMenu');
            setNavDock(navDock => 'navDock');
          }
        }
        
        const openDock = () => {
          if (menuState === 'menu') {
            setMenuState(menuState => 'menu active');
            setNavDock(navDock => 'navDock active');
            setNavMenu(navMenu => 'navMenu');
          } else {
            setMenuState(menuState => 'menu');
            setNavDock(navDock => 'navDock');
            setNavMenu(navMenu => 'navMenu');
          }
        }

        const vw = Math.max(document.documentElement.clientWidth);

        useEffect(()=> {
          loadingTimeout();
        })

  return (


    <> 
{ vw > 500 ? 
 <>
  <nav className="nav central">
  <div className="box">
  <a id="nava" 
  href={'https://www.nowasteddays.org/'} target="_blank">
    NoWastedDays
    <div id="underline"></div>
    </a>

  <a id="nava" 

  href={'https://www.nowasteddays.org/about'} target="_blank">
   About
    <div id="underline"></div>
    </a>
  </div>
  <div className="box centre">
  <img id="brand" src={greenlogo} height={24} onClick={openDock} />
      </div>
  <div className="box">
  <a id="nava"
  href={"/login"}>Login
  <div id="underline"></div></a>
  <a id="nava"
  href={"/register"}>Free Sign Up
  <div id="underline"></div></a>
  </div>
</nav>
</>
:
<>
  <nav className="nav mobile">
  { pageLoading ? <a id="nava"><DropdownLoading /></a> :
<a id="nava" onClick={logoutHandler} href={'https://www.nowasteddays.org'} target="_blank">
  NoWastedDays
<div id="underline"></div>
</a>
}
    <img id="brand" src={greenlogo} height={24} onClick={openDock} />
    <div onClick={openMenu}>
      <FontAwesomeIcon
        id="burgerMenu"
        className="burger"
        icon={faBars}/>
    </div>
  </nav>

<div className={menuState}>

  <ul className={navMenu}>
    <li className="listItem">
      { pageLoading ? <a id="nava"><DropdownLoading /></a> : 
  <a id="nava" 
  style={{color: 'whitesmoke'}}
  href={'/login'}>
    Login
    <div id="underline"></div></a>
  }
  </li>
    <li className="listItem">
      { pageLoading ? <a id="nava"><DropdownLoading /></a> : 
  <a id="nava" 
  style={{color: 'whitesmoke'}}
  href={'/register'}>
    Register
    <div id="underline"></div></a>
  }
  </li>

  </ul>
</div>
</>





}
</>
  )
}

export default CentralHeader;
