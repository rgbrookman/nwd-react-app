import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { listDays } from '../../../actions/dayActions';
import * as d3 from 'd3';
import './tcr.css';

const TasksCompletionRate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
	const d3Chart3 = useRef();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dayList = useSelector((state) => state.dayList);
  const { loading, error, days } = dayList;

	const parseDate = d3.timeParse('%Y-%m-%d')

  useEffect(() => {

  //Data Transformations
  days && days.forEach(day => {
    let sum = day.momentOneScore + day.momentTwoScore + day.momentThreeScore + day.momentFourScore + day.momentFiveScore;
    day.total = sum;

    let count = (day.momentOneScore / day.momentOneScore === 1 || day.momentOneScore == 0 ? 1 : 0) + (day.momentTwoScore / day.momentTwoScore == 1 || day.momentTwoScore == 0 ? 1 : 0) + (day.momentThreeScore / day.momentThreeScore == 1 || day.momentThreeScore == 0? 1 : 0) + (day.momentFourScore / day.momentFourScore === 1 || day.momentFourScore == 0 ? 1 : 0) + (day.momentFiveScore / day.momentFiveScore === 1 || day.momentFiveScore == 0 ? 1 : 0);
    day.tasksAttempted = count;

    let tcr = ((day.total / 10) / day.tasksAttempted)
day.taskCompletionRate = tcr;

  });

  //Getting Dates
    const taskCompletionRateData = days && days.map(each => {
      return {date: parseDate(each.logDate.slice(0,10)), tcr: each.taskCompletionRate}});


    const tcrDataFinal = taskCompletionRateData.sort((a,b) => a.date - b.date);
    tcrDataFinal.pop();


  //Getting
        const margin = {top: 20, right: 30, bottom: 30, left: 30}
        const width = parseInt(d3.select('#d3demo4').style('width')) - margin.left - margin.right
        const height = parseInt(d3.select('#d3demo4').style('height')) - margin.top - margin.bottom

        // Set up chart

        const svg = d3.select(d3Chart3.current)
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                  .attr('transform', 'translate('+ margin.left + ',' + margin.top + ')');

        // x axis scale
        const x = d3.scaleTime()
              .domain(d3.extent(tcrDataFinal, function(d){return d.date}))
              .range([0,width])

              const xAxis2 = d3.axisBottom(x).tickFormat(d3.timeFormat("%-m/%Y"));

        svg.append('g')
          .attr('transform', 'translate(0,' + height + ')')
          .call(xAxis2.ticks(d3.timeMonth))
          .style("font-family", "Futura")
					.style("font-size", "8px")
					.style("color", "#004a22")

        // Get the max value of counts
        const max = d3.max(tcrDataFinal, function(d){return d.tcr})

        // y axis scale
        const y = d3.scaleLinear()
              .domain([0, max])
              .range([height,0])

        svg.append('g')
          .call(d3.axisLeft(y))
          .style("font-family", "Futura")
					.style("font-size", "8px")
					.style("color", "#004a22")

        // Draw line
        svg.append('path')
          .datum(tcrDataFinal)
          .attr('fill', 'none')
          .attr('stroke','#004a22')
						.style('opacity', "0.3")
					.attr('stroke-width', 4)
          .attr('d', d3.line()
                .x(function(d){return x(d.date)})
                .y(function(d){return y(d.tcr)})
                .curve(d3.curveBasis)
            )

            const Tooltip1 = d3.select('#d3demo4')
              .append("div")
              .style("opacity", 0)
              .attr("class", "tooltip")
              .style("background-color", "whitesmoke")
              .style("border", "solid")
              .style("border-width", "2px")
              .style("border-radius", "5px")
              .style("padding", "5px")
              .style("font-size", "8px")
        
          var mouseover = function(d) {
          Tooltip1
            .style("opacity", 1)
            
          d3.select(this)
            .style("stroke", "black")
            .style("opacity", 1)
          }

      
          const mousemove = (event, d) => {

          const [x, y] = d3.pointer(event);

          Tooltip1
            .text(`Date: ${d.date.toLocaleDateString()} MRR: ${d.tcr} `)
            .style("left", (x + 500) + "px")
            .style("top", (y + 200) + "px")
            .style("font-family", "Futura")
            .style("font-size", "8px")
            .style("color", "#004a22")
        };

          var mouseleave = function(d) {
          Tooltip1
            .style("opacity", 0)

          d3.select(this)
            .style("stroke", "none")
            .style("opacity", 0.8)
          }

            svg
						.append("g")
						.selectAll("dot")
						.data(tcrDataFinal)
						.enter()
						.append("circle")
						  .attr("cx", function(d) { return x(d.date) } )
						  .attr("cy", function(d) { return y(d.tcr) } )
						  .attr("r", 4)
						  .attr("fill", "#004a22")
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave)
              


  }, []);

	return (
		<div id='d3demo4'>
      <svg ref={d3Chart3}></svg>
		</div>
	)
}

export default TasksCompletionRate;
