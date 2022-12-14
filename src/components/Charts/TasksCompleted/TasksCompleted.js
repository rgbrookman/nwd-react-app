import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { listDays } from '../../../actions/dayActions';
import * as d3 from 'd3';
import './tc.css';

const TasksCompleted = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
	const d3Chart1 = useRef();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dayList = useSelector((state) => state.dayList);
  const { loading, error, days } = dayList;

	const parseDate = d3.timeParse('%Y-%m-%d')

const getDataTransform = () => {

  days && days.forEach(day => {
    let sum = (day.momentOneScore) + (day.momentTwoScore) + (day.momentThreeScore ) + (day.momentFourScore) + (day.momentFiveScore);
    day.total = sum;
  });

  const tasksCompletedData = days && days.map(each => {
    return {date: parseDate(each.logDate.slice(0,10)), total: each.total}});

  const tcDataFinal = tasksCompletedData.sort((a,b) => a.date - b.date);
  return tcDataFinal;
  


};







  useEffect(() => {
let tcData = getDataTransform();
tcData.pop();
        const margin = {top: 20, right: 30, bottom: 30, left: 30}
        const width = parseInt(d3.select('#d3demo5').style('width')) - margin.left - margin.right
        const height = parseInt(d3.select('#d3demo5').style('height')) - margin.top - margin.bottom

        // Set up chart
        const svg = d3.select(d3Chart1.current)
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                  .attr('transform', 'translate('+ margin.left + ',' + margin.top + ')');

        // x axis scale
        const x = d3.scaleTime()
              .domain(d3.extent(tcData, function(d){return d.date}))
              .range([0,width])

              const xAxis2 = d3.axisBottom(x).tickFormat(d3.timeFormat("%-m/%Y"));

        svg.append('g')
          .attr('transform', 'translate(0,' + height + ')')
          .call(xAxis2.ticks(d3.timeMonth))
          .style("font-family", "Futura")
					.style("font-size", "8px")
					.style("color", "#004a22")

        // Get the max value of counts
        const max = d3.max(tcData, function(d){return d.total})

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
          .datum(tcData)
          .attr('fill', 'none')
          .attr('stroke','#004a22')
						.style('opacity', "0.3")
					.attr('stroke-width', 4)
          .attr('d', d3.line()
                .x(function(d){return x(d.date)})
                .y(function(d){return y(d.total)})
                .curve(d3.curveBasis)
            )

            const Tooltip4 = d3.select('#d3demo5')
            .append("div")
            .style("opacity", 0)
            .attr("class", "tooltip")
            .style("background-color", "whitesmoke")
            .style("border", "solid")
            .style("border-width", "2px")
            .style("border-radius", "5px")
            .style("padding", "5px")
            .style("font-size", "8px")
        
          const mouseover = function(d) {
            Tooltip4
              .style("opacity", 1)
              
            d3.select(this)
              .style("stroke", "black")
              .style("opacity", 1)
            }

      
          const mousemove = (event, d) => {

          const [x, y] = d3.pointer(event);

          Tooltip4
            .text(`Date: ${d.date.toLocaleDateString()} Total: ${d.total} `)
            .style("left", (x + 500) + "px")
            .style("top", (y + 200) + "px")
            .style("font-family", "Futura")
            .style("font-size", "8px")
            .style("color", "#004a22")
        };

          const mouseleave = function(d) {
          Tooltip4
            .style("opacity", 0)

          d3.select(this)
            .style("stroke", "none")
            .style("opacity", 0.8)
          }

            svg
						.append("g")
						.selectAll("dot")
						.data(tcData)
						.enter()
						.append("circle")
						  .attr("cx", function(d) { return x(d.date) } )
						  .attr("cy", function(d) { return y(d.total) } )
						  .attr("r", 4)
						  .attr("fill", "#004a22")
            .on("mouseover", mouseover)
            .on("mousemove", mousemove)
            .on("mouseleave", mouseleave)

  }, []);

	return (
		<div id='d3demo5'>
      <svg ref={d3Chart1}></svg>
		</div>
	)
}

export default TasksCompleted;
