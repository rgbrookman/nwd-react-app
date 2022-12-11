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
import { DropdownButton, Dropdown, Nav, Navbar, Container  } from 'react-bootstrap';
import logo from '../../NWD_Logo_White.png';
import { logout } from '../../actions/userActions';
import * as d3 from 'd3';
import './sidebar.css';

const Sidebar = () => {
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


  
    

    

  
  return (

<> 
<div className="sidebar container">
  <div className="listDiv">
    <ul className="sidebar list">
      <li className="item" data-tooltip="Log Your First Day">
      <input className="sidebar input" type="radio" checked={Array.isArray(days) === true && days.length === 0 ? false : true} readOnly/>
      </li>
      <li className="item" data-tooltip="Start Your Year Map">
      <input className="sidebar input" type="radio" checked={Array.isArray(years) && years.length === 0 ? false : true} readOnly/>
      </li>
      <li className="item" data-tooltip="Add a Plan for the Week">
      <input className="sidebar input" type="radio" checked={Array.isArray(weeks) && weeks.length === 0  ? false : true} readOnly/>
      </li>
      <li className="item" data-tooltip="Start the 'Art of Looking'">
      <input className="sidebar input" type="radio" checked={localStorage.quiz_start === "1" ? true : false} readOnly/>
      </li>
      <li className="item" data-tooltip="Finish the 'Art of Looking'">
      <input className="sidebar input" type="radio" checked={localStorage.quiz_end === "1" ? true : false} readOnly/>
      </li>
      <li className="item" data-tooltip="Log a Week of Days">
      <input className="sidebar input" type="radio" checked={Array.isArray(days) === true && days.length > 7 ? true : false} readOnly/>
      </li>
      <li className="item" data-tooltip="Share with a Friend">
      <input className="sidebar input" type="radio" readOnly disabled/>
      </li>
      <li className="item" data-tooltip="Share a Learning">
      <input className="sidebar input" type="radio" readOnly disabled/>
      </li>
    <li className="item" data-tooltip="Total Days Logged">
      <input className="sidebar input num" type="number" placeholder={days && Array.isArray(days) ? days.length : 0 } readOnly/>
      </li>
      {/* <li className="item" data-tooltip="Streak">
      <input className="sidebar input num" type="number" placeholder="0" readOnly/>
      </li> */}
    </ul>
  </div>
</div>


</>
  )
}

export default Sidebar;
