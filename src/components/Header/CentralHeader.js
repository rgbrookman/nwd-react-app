import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from 'react-router-dom';
import { listYears } from '../../actions/yearActions';
import { listWeeks } from '../../actions/weekActions';
import { listDays } from '../../actions/dayActions';
import Loading from '../Loading/Loading';
import DropdownLoading from '../Loading/DropdownLoading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faSignature, faLandmarkDome, faDna, faQuoteLeft, faBars  } from '@fortawesome/free-solid-svg-icons';
import PageLoading from '../Loading/PageLoading';
import PropagateLoader from "react-spinners/PropagateLoader";
import { DropdownButton, Dropdown, Nav, Navbar, Container  } from 'react-bootstrap';
import logo from '../../NWD_Logo_White.png';
import greenlogo from '../../green_logo.png';
import { logout } from '../../actions/userActions';
import * as d3 from 'd3';
import './centralheader.css';

const CentralHeader = ( props ) => {
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

        const [yearMap, setYearMap]=useState();
        const [weeksMap, setWeeksMap]=useState();
        const [daysMap, setDaysMap]=useState();

        const yearMapChange = () => {
          const id = years && years
          .filter((year, i, years) => years.indexOf(year) === years.length - 1)
          .map((year) => year._id);

          if(years && years.length >= 1) {
            setYearMap(yearMap => `/year/${id}`);
          } else {
            setYearMap(yearMap => `/year/create`);
          }
        }; 

        const weekMapChange = () => {
          const id = weeks && weeks
          .filter((week, i, weeks) => weeks.indexOf(week) === weeks.length -1 )
          .map((week) => week._id);
          if(weeks && weeks.length > 0) {
            setWeeksMap(weeksMap => `/week/${id}`);
          } else {
            setWeeksMap(weeksMap => `/week/create`);
          }
        }; 

        const dayMapChange = () => {
          let id; 
          
          if(Array.isArray(days) === true) {
            id = days && days.filter((day, i, days) => days.indexOf(day) === days.length -1 )
          .map((day) => day._id);
          } else {
            id = '';
          }
          

          if(days && days.length > 0) {
            setDaysMap(daysMap => `/today/${id}`);
          } else {
            setDaysMap(daysMap => `/today`);
          }
        };

        const loadingTimeout = () => {
          setTimeout(()=> {
            setPageLoading(false)
          }, 5000)
        }

        const CustomToggle = React.forwardRef(({ onClick }, ref) => (
          <a
          id="nava"
            href=""
            ref={ref}
            onClick={(e) => {
              e.preventDefault();
              onClick(e);
            }}
          >
        
        <div id="underline"></div></a>
        ));

        const currentWindow = window.location.href;

        useEffect(()=> {
          loadingTimeout();
          yearMapChange();
          weekMapChange();
          dayMapChange();
        });

        const vw = Math.max(document.documentElement.clientWidth);
        const vw2 = Math.max(window.innerWidth);
        console.log(vw);
        console.log(vw2);

  

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



     

  return (
   <>
{
  vw > 500 ? 

<nav className="nav central">
  <div className="box">

{ pageLoading ? <a id="nava"><DropdownLoading /></a> : 
  <a id="nava" 
  href={yearMap}>
    Year
    <div id="underline"></div></a>
  }

{ pageLoading ? <a id="nava"><DropdownLoading /></a> : 
    <a id="nava" 
  href={weeksMap}>
    Week
    <div id="underline"></div></a>
    }

{/* { pageLoading ? <a id="nava"><DropdownLoading /></a> : 
 Array.isArray(days) === true ?  days && days
  .filter((day, i, days) => days.indexOf(day) === days.length -1 )
  .map((day) => {  
    <a id="nava" 
    key={day._id}
  href={days && days.length > 0 ? `/today/${day._id}` : `/today`}>
    Today
    <div id="underline"></div>
    </a>
    }) :  <a id="nava" 
  href={`/today`}>Today
    <div id="underline"></div>
    </a>
  } */}

{ pageLoading ? <a id="nava"><DropdownLoading /></a> : 

Array.isArray(days) === true ? 
    <a id="nava" 
  href={daysMap}>
    Today
    <div id="underline"></div></a>
    :
    <a id="nava" 
    href={'/today'}>
      Today
      <div id="underline"></div></a>
    }

  </div>

  <div className="box centre">
  <a id="nava" href={"/"}>
    <img src={greenlogo}   width="20"
      height="20" style={{borderRadius: "50%"}}></img></a>
      </div>
  <div className="box">

    { pageLoading ? <a id="nava"><DropdownLoading /></a> : days && days.length > 7 ?  
  <a id="nava"
  href={"/insight"}>Insights
    <div id="underline">
    </div> 
    </a>:
    <a id="nava"
  href={"/"}><s>Insights</s>
    <div id="underline">
    </div>
  </a>
}
{ pageLoading ? <a id="nava"><DropdownLoading /></a> : 
  <a id="nava"
  onClick={localStorage.setItem('quiz_start',1)}
  href={"/insight/quiz"}>Art of Looking
   <div id="underline"></div></a>
  }

{ pageLoading ? <a id="nava"><DropdownLoading /></a> : !currentWindow.endsWith('/profile') ?
<a id="nava" href="/profile">
{userInfo?.name}
<div id="underline"></div>
</a>
: 
<a id="nava" onClick={logoutHandler}>
  Log out
<div id="underline"></div>
</a>
}

  </div>
</nav>

: 
<>
  <nav className="nav mobile">
  { pageLoading ? <a id="nava"><DropdownLoading /></a> : !currentWindow.endsWith('/profile') ?
<a id="nava" href="/profile">
{userInfo?.name}
<div id="underline"></div>
</a>
: 
<a id="nava" onClick={logoutHandler}>
  Log out
<div id="underline"></div>
</a>
}
<a href={'/'}>
    <img id="brand" src={greenlogo} height={30} />
    </a>
    <div onClick={openMenu} style={{marginRight: '12px'}}>
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
  href={yearMap}>
    Year
   </a>
  }
  </li>
  <li className="listItem">
  { pageLoading ? <a id="nava"><DropdownLoading /></a> : 
    <a id="nava" 
    style={{color: 'whitesmoke'}}
  href={weeksMap}>
    Week
   </a>
    }
  </li>
  <li className="listItem">
  { pageLoading ? <a id="nava"><DropdownLoading /></a> : 

Array.isArray(days) === true ? 
    <a id="nava" 
    style={{color: 'whitesmoke'}}
  href={daysMap}>
    Today
   </a>
    :
    <a id="nava" 
    style={{color: 'whitesmoke'}}
    href={'/today'}>
      Today
      </a>
    }
  </li>
  <li className="listItem">
      { pageLoading ? <a id="nava"><DropdownLoading /></a> : 
  <a id="nava" 
  style={{color: 'whitesmoke'}}
  href={'/insight'}>
    Insight
    </a>
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
