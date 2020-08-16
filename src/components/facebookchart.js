import React from 'react';
import * as d3 from 'd3';
import { AxisLeft, AxisBottom } from '@vx/axis';
import { scaleTime, scaleLinear } from '@vx/scale';
import { AreaClosed, LinePath } from '@vx/shape';
import { LinearGradient } from '@vx/gradient';
import { Group } from '@vx/group';
import { extent, max } from 'd3-array';


class FacebookChart extends React.Component{
  state = {
    data: []
  };


  async componentDidMount() {
   
    d3.csv("https://raw.githubusercontent.com/rachelombok/BlackpinkDSProject/master/data/facebook/blackpink_facebook_data_history.csv").then((data) => {
    
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

    
  }

  
   

    render(){
      const { data } = this.state;
      const width = 750;
      const height = 400;

      const x = d => new Date(d.date);
      const y = d => d.likes;

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
          domain: extent(data, x)
      });

      const yScale = scaleLinear({
          range: [yMax, 0],
          domain: [0, max(data, y)],
      });
        return(
            <div>
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
          <LinePath
            data={data}
            xScale={xScale}
            yScale={yScale}
            x={d => xScale(x(d))}
            y={d => yScale(y(d))}
            strokeWidth={5}
            stroke="#FFF"
            strokeLinecap="round"
            fill="transparent"
          />

            <AreaClosed
            data={data}
            xScale={xScale}
            yScale={yScale}
            x={d => xScale(x(d))}
            y={d => yScale(y(d))}
            fill={"url(#gradient)"}
            />
       
        <AxisLeft
          scale={yScale}
          top={0}
          left={0}
          label={'Likes'}
          stroke={'#ffffff'}
          tickStroke={'#fff'}
          numTicks={5}

        />

        <AxisBottom
          scale={xScale}
          top={yMax}
          label={'Years'}
          stroke={'#ffffff'}
          
        />
        </Group>
            </svg>
        </div>
    );
}
    

}

export default FacebookChart;