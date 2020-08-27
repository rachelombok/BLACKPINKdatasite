import React from "react";
import * as d3 from "d3";
import { AxisLeft, AxisBottom } from "@vx/axis";
import { scaleTime, scaleLinear } from "@vx/scale";
import { AreaClosed, LinePath, Bar, Line } from "@vx/shape";
import { LinearGradient } from "@vx/gradient";
import { Group } from "@vx/group";
import { localPoint } from "@vx/event";
import { withTooltip, Tooltip } from "@vx/tooltip";
import { extent, max, bisector } from "d3-array";
import "../extra/chart.css";

const y = (d) => d.likes;
const x = (d) => new Date(d.date);
const bisectDate = bisector(x).left;

class TestChart extends React.Component {
  state = {
    data: [],
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

  
    render(){
      const { data } = this.state;
      const width = 1200;
      const height = 640;
      

      //const x = d => new Date(d.date);
      //const y = d => d.likes;
      //const bisectDate = bisector(xSelector).left;

      

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
        top: 60,
        bottom: 60,
        left: 80,
        right: 80,
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
        return(
            <div >
          <svg width={width} height={height}>
            {/*
            <AreaClosed
          data={data}
          x={d => xScale(x(d))}
          y={d => yScale(y(d))}
          yScale={yScale}
          fill={"green"}
        />
            */}
          <LinearGradient
        from='#fbc2eb'
        to='#a6c1ee'
        id='gradient'
        
      />

          <Group top={margin.top} left={margin.left}>
          <AreaClosed
              data={data}
              yScale={yScale}
              x={(d) => xScale(x(d))}
              y={(d) => yScale(y(d))}
              fill={"url(#gradient)"}
            />
          <LinePath
            data={data}
            //xScale={xScale}
            //yScale={yScale}
            x={d => xScale(x(d))}
            y={d => yScale(y(d))}
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
                this.handleTooltip({ event, data, xScale, yScale })}
                onMouseLeave={(event) => hideTooltip()}
                onTouchEnd={(event) => hideTooltip()}
                onTouchMove={(event) =>
                  this.handleTooltip({ event, data, xScale, yScale })
                }
          />

          

       
        <AxisLeft
          scale={yScale}
          top={0}
          left={0}
          label={'Likes'}
          stroke={'#ffffff'}
          tickStroke={'#fff'}
          numTicks={5}
          fill={'white'}
          
          tickLabelProps={
            (/* value, index */) => ({
              fill: 'white',
              fontSize: 9,
              fontFamily: 'sans-serif',
              textAnchor: 'end',
            })
          }
          labelProps={{
            
            fill: 'white',
            fontSize: 18,
            strokeWidth: 0,
            stroke: '#fff',
            paintOrder: 'stroke',
            fontFamily: 'sans-serif',
            textAnchor: 'inherit'
          }}

        />

        <AxisBottom
          scale={xScale}
          top={yMax}
          label={'Years'}
          stroke={'#ffffff'}
          tickStroke={'#fff'}
          numTicks={5}
          tickLabelProps={
            (/* value, index */) => ({
              fill: 'white',
              fontSize: 12,
              fontFamily: 'sans-serif',
              textAnchor: 'middle',
            })
          }
          labelProps={{
            
            fill: 'white',
            fontSize: 18,
            strokeWidth: 0,
            stroke: '#fff',
            paintOrder: 'stroke',
            fontFamily: 'sans-serif',
            textAnchor: 'middle',
          }}
        />
        
        </Group>
            </svg>
            {tooltipOpen && (
          <Tooltip
            top={tooltipTop}
            left={tooltipLeft}
            style={{
              minWidth: 60,
              backgroundColor: "rgba(0,0,0,0.9)",
              color: "white"
            }}
          >
            {Object.entries(tooltipData).map(([key, value], i) => {
              return (
                <React.Fragment key={`${key}-${i}`}>
                  <div>
                    <strong>{key}</strong>
                  </div>
                  <div>{value}</div>
                </React.Fragment>
              );
            })}
          </Tooltip>
        )}
        </div>
    );
}
    

}

export default withTooltip(TestChart);