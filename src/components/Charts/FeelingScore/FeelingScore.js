import React, { useEffect, useRef, useLayoutEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { listDays } from '../../../actions/dayActions';
import * as d3 from 'd3';
import './feelingscorechart.css';

export default function FeelingScore({ history }) {
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

    const startScoreData = days && days.map(each => {
      return {date: parseDate(each.logDate.slice(0,10)), es: each.endScore}});

	  
    const ssDataFinal = startScoreData.sort((a,b) => a.date - b.date);
	 ssDataFinal.pop();

//Load as Default Props
	const margin = {top: 20, right: 30, bottom: 30, left: 30}
    const width = parseInt(d3.select('#d3demo').style('width')) - margin.left - margin.right
    const height = parseInt(d3.select('#d3demo').style('height')) - margin.top - margin.bottom

// Set up svg - make specific loading for feeling score graph
//Amend width calls to refer to props
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
					.style("font-family", "Futura")
					.style("font-size", "8px")
					.style("color", "#004a22")
					
				// Get the max value of feeling
				const max = d3.max(ssDataFinal, function(d){return d.es})

				// y axis scale
				const y = d3.scaleLinear()
							.domain([0, 5])
							.range([height,0])

				svg.append('g')
					.call(d3.axisLeft(y))
					.style("font-family", "Futura")
					.style("font-size", "8px")
					.style("color", "#004a22")
					

				// Draw line
				svg.append('path')
					.datum(ssDataFinal)
					.attr('fill', 'none')
					.attr('stroke','#004a22')
						.style('opacity', "0.3")
					.attr('stroke-width', 4)
					.attr('d', d3.line()
								.x(function(d){return x(d.date)})
								.y(function(d){return y(d.es)})
								.curve(d3.curveBasis)
						)

						var Tooltip = d3.select('#d3demo')
							.append("div")
							.style("opacity", 0)
							.attr("class", "tooltip")
							.style("background-color", "white")
							.style("border", "solid")
							.style("border-width", "2px")
							.style("border-radius", "5px")
							.style("padding", "5px")
							.style("font-size", "8px")
					
					  var mouseover = function(d) {
						Tooltip
						  .style("opacity", 1)
						  
						d3.select(this)
						  .style("stroke", "black")
						  .style("opacity", 1)
					  }

				
					  const mousemove = (event, d) => {

						const [x, y] = d3.pointer(event);
						Tooltip
							.text(`Date: ${d.date} Feeling Score: ${d.es}`)
							.style("left", (x + 400) + "px")
							.style("top", (y + 100) + "px")
							.style("font-family", "Futura")
							.style("font-size", "8px")
							.style("color", "#004a22")
					};

					  var mouseleave = function(d) {
						Tooltip
						  .style("opacity", 0)

						d3.select(this)
						  .style("stroke", "none")
						  .style("opacity", 0.8)
					  }

						svg
						.append("g")
						.selectAll("dot")
						.data(ssDataFinal)
						.enter()
						.append("circle")
						  .attr("cx", function(d) { return x(d.date) } )
						  .attr("cy", function(d) { return y(d.es) } )
						  .attr("r", 4)
						  .attr("fill", "#004a22")
						.on("mouseover", mouseover)
						.on("mousemove", mousemove)
						.on("mouseleave", mouseleave)

},[]);


	return (

		<div id='d3demo'>
			<svg ref={d3Chart}></svg>
		</div>

	)
}
