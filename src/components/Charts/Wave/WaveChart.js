import React, { useEffect, useRef, useLayoutEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { listDays } from '../../../actions/dayActions';
import * as d3 from 'd3';
import './wavechart.css';

export default function WaveChart({ history }) {
  const [data, setData] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const d3Chart = useRef();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dayList = useSelector((state) => state.dayList);
  const { loading, error, days } = dayList;

	const parseDate = d3.timeParse('%Y-%m-%d')


useEffect(() => {

	days && days.forEach(day => {
		let sum = ((day.momentOneScore + day.momentTwoScore + day.momentThreeScore + day.momentFourScore + day.momentFiveScore) / 20) * 3;
		day.total = sum;
	
		let count = (day.momentOneScore / day.momentOneScore === 1 || day.momentOneScore == 0 ? 1 : 0) + (day.momentTwoScore / day.momentTwoScore == 1 || day.momentTwoScore == 0 ? 1 : 0) + (day.momentThreeScore / day.momentThreeScore == 1 || day.momentThreeScore == 0? 1 : 0) + (day.momentFourScore / day.momentFourScore === 1 || day.momentFourScore == 0 ? 1 : 0) + (day.momentFiveScore / day.momentFiveScore === 1 || day.momentFiveScore == 0 ? 1 : 0);
		day.tasksAttempted = count;
	
		let tcr = ((day.total) / day.tasksAttempted) * 15;
	day.taskCompletionRate = tcr;

	let feelingWave = day.endScore * 3;
	day.feelingWaveScore = feelingWave ;

	let wave = (day.total / 3) + (day.taskCompletionRate / 3) + day.endScore;
	day.waveScore = wave;
	
	  });

    const startScoreData = days && days.map(each => {
      return {date: parseDate(each.logDate.slice(0,10)), fWS: each.feelingWaveScore, tcr: each.taskCompletionRate, tc: each.total, wave: each.waveScore}});


    const ssDataFinal = startScoreData.sort((a,b) => a.date - b.date);
	 ssDataFinal.pop();

	const margin = {top: 20, right: 30, bottom: 30, left: 30}
    const width = parseInt(d3.select('#d3demo').style('width')) - margin.left - margin.right
    const height = parseInt(d3.select('#d3demo').style('height')) - margin.top - margin.bottom


    const svg = d3.select(d3Chart.current)
				.attr('width', width + margin.left + margin.right)
				.attr('height', height + margin.top + margin.bottom)
				.append('g')
					.attr('transform', 'translate('+ margin.left + ',' + margin.top + ')');

				// x axis scale
				const x = d3.scaleTime()
							.domain(d3.extent(ssDataFinal, function(d){return d.date}))
							.range([0,width])

				const xAxis2 = d3.axisBottom(x).tickFormat(d3.timeFormat("%-m/%Y"));

				svg.append('g')
					.attr('transform', 'translate(0,' + height + ')')
					.call(xAxis2.ticks(d3.timeMonth))
					.style("font-family", "'caveat', cursive")
					.style("opacity", "0.3")
					.style("font-size", "12px")
	


				// Get the max value of feeling
				const max = d3.max(ssDataFinal, function(d){return d.fWS})

				// y axis scale
				const y = d3.scaleLinear()
							.domain([0, max])
							.range([height,0])

			

				svg
				.append("g")
				.selectAll("dot")
				.data(ssDataFinal)
				.enter()
				.append("circle")
					.attr("cx", function(d) { return x(d.date) } )
					.attr("cy", function(d) { return y(d.fWS) } )
					.attr("r", 6)
					.attr("fill", "yellow")
					.attr("opacity", "0.25")

				svg
				.append("g")
				.selectAll("dot")
				.data(ssDataFinal)
				.enter()
				.append("circle")
				.attr("cx", function(d) { return x(d.date) } )
				.attr("cy", function(d) { return y(d.tcr) } )
				.attr("r", 6)
				.attr("fill", "red")
				.attr("opacity", "0.25")

				svg
				.append("g")
				.selectAll("dot")
				.data(ssDataFinal)
				.enter()
				.append("circle")
					.attr("cx", function(d) { return x(d.date) } )
					.attr("cy", function(d) { return y(d.tc) } )
					.attr("r", 6)
					.attr("fill", "blue")
					.attr("opacity", "0.25")

				svg.append('path')
				.datum(ssDataFinal)
				.attr('fill', 'none')
				.attr('stroke','white')
				.attr('stroke-width', 5)
				.attr('d', d3.line()
							.x(function(d){return x(d.date)})
							.y(function(d){return y(d.wave)})
					)

},[]);


	return (
<>
		<div id='d3demo6'>
			<svg ref={d3Chart}></svg>
		</div>
<div id="legend"></div>
</>
	)
}
