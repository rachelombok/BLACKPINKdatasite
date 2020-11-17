import React from "react";
//import { Container, Col, Image, Badge, Jumbotron, Button, Row } from 'react-bootstrap';
import styled from 'styled-components';
import '../extra/css/about.css'
import * as d3 from "d3";
import { GridRows, GridColumns } from '@vx/grid';
import { AxisLeft, AxisBottom } from "@vx/axis";
import { scaleTime, scaleLinear, scaleThreshold } from "@vx/scale";
import { AreaClosed, LinePath, Bar, Line } from "@vx/shape";
import { LegendThreshold, LegendOrdinal } from '@vx/legend';
import { LinearGradient } from "@vx/gradient";
import { Group } from "@vx/group";
import { localPoint } from "@vx/event";
import { withTooltip, Tooltip, defaultStyles } from "@vx/tooltip";
import { extent, max, bisector } from "d3-array";
import { timeFormat } from 'd3-time-format';
import "../extra/css/chart.css";
import Ordinal from "@vx/legend/lib/legends/Ordinal";
const AboutWrapper = styled.div`
margin-top: 5rem;
  margin-left: 5rem;
  margin-right: 5rem;

  flex-direction: column;
  width: 90%;
  max-width: 100%;
  p{
    text-align: left;
  }
  h2 {
    margin: 2rem 0;
    color: white;
    text-align: left;
    margin-bottom: 2rem;
  }
  h3 {
    
    margin: 2rem 0;
    color: white;
    text-align: left;
  }
  small {
    font-size: 1rem;
    line-height: 1rem;
  }
  a {
    position: relative;
    z-index: 5;
    text-decoration: none;
    color: white;
    transition: all 0.3s ease;
    padding: 0.25rem 0.5rem 0.15rem 0.5rem;
    &:hover {
      color: #ffb3df;
      &::before {
        height: 2px;
        width: 100%;
        opacity: 1;
      }
    }
    &::before {
      z-index: -5;
      content: '';
      position: absolute;
      height: 100%;
      width: 100%;
      bottom: -1px;
      left: 0;
      opacity: 1;
      transition: all 0.3s ease;
      background: linear-gradient(90deg, #121212, #ffb3df);
    }
  }
  
  small {
    a {
      position: relative;
      z-index: 5;
      text-decoration: none;
      color: white;
      transition: all 0.3s ease;
      padding: 0.25rem 0.5rem 0.15rem 0.5rem;
      &:hover {
        color: #ffb3df;
        &::before {
          height: 2px;
          width: 100%;
          opacity: 1;
        }
      }
      &::before {
        z-index: -5;
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        bottom: -1px;
        left: 0;
        opacity: 1;
        transition: all 0.3s ease;
        background: linear-gradient(180deg, #000000, #ffb3df);
      }
    }
  }
}
`;
const y = (d) => d.likes;
const x = (d) => new Date(d.date);
const bisectDate = bisector(x).left;

const thousands_separators = (num) => {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}

const threshold = scaleThreshold({
  domain: [0.02, 0.04, 0.06, 0.08, 0.1],
  range: ['#f2f0f7', '#dadaeb', '#bcbddc', '#9e9ac8', '#756bb1', '#54278f'],
});
const background = '#de87cb';
const background2 = '#1b1b1c';
const accentColor = '#7ab4eb';
const accentColorDark = '#7ab4eb';
const formatDate = timeFormat("%b %d, '%y");

const tooltipStyles = {
  ...defaultStyles,
  backgroundColor: 'black',
  border: '1px solid white',
  color: 'white',
};

class HomepageChart extends React.Component {
  state = {
    data: []
  };

  async componentDidMount() {
    d3.csv(
      "https://raw.githubusercontent.com/rachelombok/BlackpinkDSProject/master/data/facebook/blackpink_facebook_data_history.csv"
    )
      .then((data) => {
        data.forEach((d) => {
          return (
            (d.date = d.date),
            (d.likes = +d.likes),
            (d.difference = +d.difference)
          );
        });
        this.setState({ data: data });
      })
      .catch(function (err) {
        throw err;
      });

     
  }

  handleTooltip = ({ event, data, xScale, yScale }) => {
    const { showTooltip } = this.props;
    const point = localPoint(event);
    const x0 = xScale.invert(point.x);
    const index = bisectDate(data, x0, 1);
    const d0 = data[index - 1];
    const d1 = data[index];
    let d = d0;
    if (d1 && d1.date) {
      d = x0 - x(d0) > x(d1) - x0 ? d1 : d0;
    }
    showTooltip({
      tooltipData: d,
      tooltipLeft: point.x,
      tooltipTop: yScale(d.likes),
    });
  };

  render() {
    const { data } = this.state;
    const width = 1200;
    const height = 690;

    const {
      hideTooltip,
      tooltipData,
      tooltipTop,
      tooltipLeft,
      showTooltip,
      tooltipOpen,
    } = this.props;

    // Bounds
    const margin = {
      top: 0,
      bottom: 60,
      left: 0,
      right: 0,
    };

    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    const xScale = scaleTime({
      range: [0, xMax],
      domain: extent(data, x),
    });

    const yScale = scaleLinear({
      range: [yMax, 0],
      domain: [0, max(data, y)],
    });

    return (
      <div>
       
        <svg width={width} height={height}>
        <rect
            x={0}
            y={0}
            width={width}
            height={height}
            fill="url(#area-background-gradient)"
            rx={14}
          />
          <LinearGradient id="area-background-gradient" from={background} to={background2} />
          <LinearGradient id="area-gradient" from={accentColor} to={accentColor} toOpacity={0.1} />
          <Ordinal
        scale={threshold}
        direction="row"
        
        shapeHeight={70}
        
        itemDirection="row-reverse"
        labelMargin="10 15px 10 10"
        shapeMargin="1px 0 0"
      />
          <GridRows
            scale={yScale}
            width={xMax}
            strokeDasharray="3,3"
            stroke={accentColor}
            strokeOpacity={0.3}
            pointerEvents="none"
          />
          <GridColumns
            scale={xScale}
            height={yMax}
            strokeDasharray="3,3"
            stroke={accentColor}
            strokeOpacity={0.3}
            pointerEvents="none"
          />
          <Group top={margin.top} left={margin.left}>
              
            <AreaClosed
              data={data}
              yScale={yScale}
              x={(d) => xScale(x(d))}
              y={(d) => yScale(y(d))}
              strokeWidth={1}
              stroke="url(#area-gradient)"
              fill="url(#area-gradient)"
            />
            {/*<AxisLeft
              scale={yScale}
              top={margin.top}
              left={margin.left}
              label={"Likes"}
              stroke={"#ffffff"}
              tickStroke={"#fff"}
              numTicks={5}
              fill={"white"}
              labelClassName='axistext'
              tickClassName='axistext'
              tickLabelProps={
                () => ({
                  fill: "white",
                  fontSize: 9,
                  fontFamily: 'Cousine',
                  textAnchor: "end",
                })
              }
              labelProps={{
                fill: "white",
                fontSize: 18,
                strokeWidth: 0,
                stroke: "#fff",
                paintOrder: "stroke",
                fontFamily: 'Cousine',
                textAnchor: "inherit",
              }}
            />*/}
            <LinePath
              data={data}
              x={(d) => xScale(x(d))}
              y={(d) => yScale(y(d))}
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
              onMouseMove={(event) =>
                this.handleTooltip({ event, data, xScale, yScale })
              }
              onMouseLeave={(event) => hideTooltip()}
              onTouchEnd={(event) => hideTooltip()}
              onTouchMove={(event) =>
                this.handleTooltip({ event, data, xScale, yScale })
              }
            />
            
            <AxisBottom
              scale={xScale}
              xMax={67}
              top={yMax}
              label={"Years"}
              stroke={"#ffffff"}
              tickStroke={"#fff"}
              numTicks={5}
              tickLabelProps={
                (/* value, index */) => ({
                  fill: "white",
                  fontSize: 12,
                  fontFamily: "Cousine",
                  textAnchor: "middle",
                })
              }
              labelProps={{
                fill: "white",
                fontSize: 18,
                strokeWidth: 0,
                stroke: "#fff",
                paintOrder: "stroke",
                fontFamily: "Cousine",
                textAnchor: "middle",
              }}
            />
          </Group>

          {tooltipOpen && (
            <g>
            <Line
              from={{ x: tooltipLeft, y: 0 }}
              to={{ x: tooltipLeft, y: yMax }}
              stroke={accentColorDark}
              strokeWidth={2}
              pointerEvents="none"
              strokeDasharray="5,2"
            />
            <circle
              cx={tooltipLeft}
              cy={tooltipTop+0}
              r={4}
              fill="red"
              fillOpacity={0.1}
              stroke="black"
              strokeOpacity={0.1}
              strokeWidth={2}
              pointerEvents="none"
            />
            
            <circle
              cx={tooltipLeft}
              cy={tooltipTop + 0}
              r={4}
              fill={accentColor}
              stroke="white"
              strokeWidth={2}
              pointerEvents="none"
            />
          </g>
          )}
        </svg>
        {tooltipOpen && (
          <div>
          <Tooltip
            top={tooltipTop - 90}
            left={tooltipLeft + 150}
            style={tooltipStyles}
          >
            <div>
              <strong>likes</strong>
              <p>{thousands_separators(tooltipData.likes)}</p>
            </div>
            <div>
              <strong>difference</strong>
              <p>{thousands_separators(tooltipData.difference)}</p>
            </div>
            {/*{Object.entries(tooltipData).map(([key, value], i) => {
              return (
                <React.Fragment key={`${key}-${i}`}>
                  <div>
                    <strong>{key}</strong>
                    <p>{tooltipData.date}</p>
                  </div>
                  <div>{thousands_separators(value)}</div>
                </React.Fragment>
              );
            })}*/}
          </Tooltip>
          <Tooltip
              top={yMax }
              left={tooltipLeft + 200}
              style={{
                ...defaultStyles,
                border: '1px solid white',
                textAlign: 'center',
                position: "absolute",
                minWidth: 60,
                backgroundColor: "rgba(0,0,0,0.9)",
                color: "white",
                pointerEvents: "none",
              }}
            >
              {formatDate(new Date(tooltipData.date))}
            </Tooltip>
          </div>
        )}
        
      </div>
    );
  }
}

export default withTooltip(HomepageChart);