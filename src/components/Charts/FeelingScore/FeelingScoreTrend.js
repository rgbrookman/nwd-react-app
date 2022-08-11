import React, { useEffect, useRef, useLayoutEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { listDays } from '../../../actions/dayActions';
import * as d3 from 'd3';
import './feelingscorechart.css';

export default function FeelingScoreTrend({ history }) {
const [data, setData] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dayList = useSelector((state) => state.dayList);
  const { loading, error, days } = dayList;

//Load in Insight Page
	const parseDate = d3.timeParse('%Y-%m-%d')

const avgArray = [];


    days && days.map(each => avgArray.push(each.endScore));


const recentView = avgArray.length - 1 === 0 ? avgArray.slice(avgArray.length - 14) :  avgArray.slice(-15, -1) 





const zeroRemove = (array) => {
  let lastItem = array.length - 1;

  if (array[lastItem] === 0) {
    return array.pop();
  } else {
    return array;
  }

  
}

zeroRemove(avgArray);
console.log(avgArray);
console.log(recentView);


const avg = Math.round(d3.mean(avgArray) * 10) / 10;
console.log(avg);
const recent = Math.round(d3.mean(recentView) * 10) / 10;
console.log(recent);



const newIndex = Number(recent / avg - 1).toLocaleString(undefined,{style: 'percent', minimumFractionDigits:2}); 


	return (

			<span className="statSpan">{newIndex}</span>

	)
}
