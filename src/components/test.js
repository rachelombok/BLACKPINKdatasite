import React, { Component, useState } from "react";
import { Line, Bar, LinePath } from "@vx/shape";
import { withTooltip, Tooltip } from "@vx/tooltip";
import { localPoint } from "@vx/event";
import { scaleTime, scaleLinear } from "@vx/scale";

import { extent, max, bisector } from "d3-array";
import { timeFormat } from "d3-time-format";
import * as d3 from 'd3';
import { render } from "react-dom";

const width = 1070;
const height = 500;

const formatDate = timeFormat("%b %d, '%y");
const xSelector = d => new Date(d.date);
const ySelector = d => d.likes;

const bisectDate = bisector(xSelector).left;

class Chart extends Component {
    
  state = {
    data: []
  };
  /*constructor(props){
    super(props);
    this.state = {
      data: null
    };
  }*/
  
  //const [data, setData] = useState();

  async componentDidMount() {
    /*const res = await fetch(
      "https://raw.githubusercontent.com/rachelombok/BlackpinkDSProject/master/rawdata/chartmetricdata/bp_facebookdata_history.json"
    );*/
    
    /*
    const data = await res.json();

    this.setState({
      data: Object.keys(data.obj.likes).map(date => {
        return {
          date,
          likes: data.value
        };
      })
    });*/
    d3.csv("https://raw.githubusercontent.com/rachelombok/BlackpinkDSProject/master/data/facebook/blackpink_facebook_data_history.csv").then((data) => {
    
    //this.setState({ data: d})
    data.forEach((d) => {
          return (
          d.date = d.date,
          d.likes = +d.likes,
          d.difference = +d.difference)
         
        })
    this.setState({data})
      
    console.log(data)
    
    }).catch(function(err) {
        throw err;
    })

    /*this.setState({
      data: Object.keys(data).map(date => {
        return {
          date,
          likes: data.value
        };
      })
    });*/
  }

  handleTooltip = ({ event, data, xSelector, xScale, yScale }) => {
    const { showTooltip } = this.props;
    const { x } = localPoint(event);
    const x0 = xScale.invert(x);
    const index = bisectDate(data, x0, 1);
    const d0 = data[index - 1];
    const d1 = data[index];
    let d = d0;
    if (d1 && d1.date) {
      d = x0 - xSelector(d0) > xSelector(d1) - x0 ? d1 : d0;
    }
    showTooltip({
      tooltipData: d,
      tooltipLeft: xScale(xSelector(d)),
      tooltipTop: yScale(ySelector(d))
    });
  };

  render() {
    const { data } = this.state;
    const {
      hideTooltip,
      tooltipData,
      tooltipTop,
      tooltipLeft
    } = this.props;

    if (!data) return null;

    const padding = 100;
    const xMax = width - padding;
    const yMax = height - padding;

    const xScale = scaleTime({
      range: [padding, xMax],
      domain: extent(data, xSelector)
    });

    const dataMax = max(data, ySelector);
    const yScale = scaleLinear({
      range: [yMax, padding],
      domain: [0, dataMax + dataMax / 3]
    });

    return (
      <div>
        <svg width={width} height={height}>
          <rect x={0} y={0} width={width} height={height} fill="#76508f" />
          <LinePath
            data={data}
            xScale={xScale}
            yScale={yScale}
            x={xSelector}
            y={ySelector}
            strokeWidth={5}
            stroke="#FFF"
            strokeLinecap="round"
            fill="transparent"
          />
          <Bar
            x={0}
            y={0}
            width={width}
            height={height}
            fill="transparent"
            data={data}
            onMouseMove={data => event =>
              this.handleTooltip({
                event,
                data,
                xSelector,
                xScale,
                yScale
              })}
            onMouseLeave={data => event => hideTooltip()}
            onTouchEnd={data => event => hideTooltip()}
            onTouchMove={data => event =>
              this.handleTooltip({
                event,
                data,
                xSelector,
                xScale,
                yScale
              })}
          />
          {tooltipData && (
            <g>
              <Line
                from={{ x: tooltipLeft, y: 0 }}
                to={{ x: tooltipLeft, y: yMax }}
                stroke="#FFFFFF"
                strokeWidth={4}
                style={{ pointerEvents: "none" }}
                strokeDasharray="4,6"
              />
              <circle
                cx={tooltipLeft}
                cy={tooltipTop}
                r={4}
                fill="#FFFFFF"
                stroke="white"
                strokeWidth={2}
                style={{ pointerEvents: "none" }}
              />
            </g>
          )}
        </svg>
        {tooltipData && (
          <div>
            <Tooltip
              top={tooltipTop - 12}
              left={tooltipLeft + 12}
              style={{
                backgroundColor: "#5C77EB",
                color: "#FFF"
              }}
            >
              {`${ySelector(tooltipData)} likes`}
            </Tooltip>
            <Tooltip
              top={yMax - 30}
              left={tooltipLeft}
              style={{
                transform: "translateX(-50%)"
              }}
            >
              {formatDate(xSelector(tooltipData))}
            </Tooltip>
          </div>
        )}
      </div>
    );
  }
}

export default withTooltip(Chart);
