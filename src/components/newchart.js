/*
import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import ReactFC from "react-fusioncharts";

// Resolves charts dependancy
charts(FusionCharts);

const dataSource = {
  chart: {
    caption: "Reach of Social Media Platforms amoung youth",
    yaxisname: "% of youth on this platform",
    subcaption: "2012-2016",
    showhovereffect: "1",
    numbersuffix: "%",
    drawcrossline: "1",
    plottooltext: "<b>$dataValue</b> of youth were on $seriesName",
    theme: "fusion"
  },
  categories: [
    {
      category: [
        {
          label: "2012"
        },
        {
          label: "2013"
        },
        {
          label: "2014"
        },
        {
          label: "2015"
        },
        {
          label: "2016"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "Facebook",
      data: [
        {
          value: "62"
        },
        {
          value: "64"
        },
        {
          value: "64"
        },
        {
          value: "66"
        },
        {
          value: "78"
        }
      ]
    },
    {
      seriesname: "Instagram",
      data: [
        {
          value: "16"
        },
        {
          value: "28"
        },
        {
          value: "34"
        },
        {
          value: "42"
        },
        {
          value: "54"
        }
      ]
    },
    {
      seriesname: "LinkedIn",
      data: [
        {
          value: "20"
        },
        {
          value: "22"
        },
        {
          value: "27"
        },
        {
          value: "22"
        },
        {
          value: "29"
        }
      ]
    },
    {
      seriesname: "Twitter",
      data: [
        {
          value: "18"
        },
        {
          value: "19"
        },
        {
          value: "21"
        },
        {
          value: "21"
        },
        {
          value: "24"
        }
      ]
    }
  ]
};

class ChartViewer extends React.Component {
  render() {
    return (
      <ReactFusioncharts
        type="msline"
        width="50%"
        height="100%"
        dataFormat="JSON"
        dataSource={dataSource}
      />
    );
  }
}

export default ChartViewer;
*/

import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { csv } from 'd3';
import { VictoryLine, VictoryChart, VictoryTooltip, VictoryVoronoiContainer, VitctoryAxis, VictoryAxis } from 'victory';


const y = (d) => d.likes;
const x = (d) => new Date(d.date);

const row = d => {
  d.date = d.date;
  d.likes = +d.likes;
  d.difference = +d.difference;
  return d;
};

const ChartViewer = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    csv('https://raw.githubusercontent.com/rachelombok/BlackpinkDSProject/master/data/facebook/blackpink_facebook_data_history.csv', row)
    .then(data => {
      setData(data)
      console.log(data);
    });
      
    }, []);
    
  
  return (
    
<VictoryChart
    style={{
      tickLabels: {fontSize: 120},
      
    }}
    scale={{x: "time"}}
    containerComponent={
      <VictoryVoronoiContainer
        labels={({ datum }) => `Likes: ${datum.likes}
          Difference: ${datum.difference}
          Date: ${datum.date}`}
        labelComponent={
        <VictoryTooltip  
            dy={-7} 
            constrainToVisibleArea 
            cornerRadius='0'
            flyoutStyle={{
              fill: "green",
              stroke: "tomato", 
              strokeWidth: 2,
              fontSize:'300px' }}
              flyoutHeight={35}
              style={{
                fontSize: 10
              }}
        />
      }
      voronoiDimension="x"
      
      
       />
      }
    width='1200'
    height='500'
    
    domainPadding={50}
    padding={{ top: 50, bottom: 90, left: 150, right: 140 }}
    >
      <VictoryAxis
    padding={{left:600}}
    tickCount={4}
    
    style={{
      fontSize: 30,
    
    }}
    tickFormat={t => new Date(t).getFullYear()}
    label="Years"

/>
<VictoryAxis dependentAxis
label='Followers'

fixLabelOverlap={true}
/>
<VictoryLine
  x='date'
  y='likes'
  
  style = {{
    data: { stroke: "#c43a31" }
    
  }}
  
  data={data}
  
/>


</VictoryChart>

/*
<VictoryChart
      style={{
        tickLabels: {fontSize: 120},
        
      }}
      labels={({ datum }) => `Name: ${datum.date} score: ${datum.likes}`}
      labelComponent={<VictoryTooltip />}
      containerComponent={<VictoryVoronoiContainer />}
      width='960'
      height='500'
      domainPadding={50}
      padding={{ top: 10, bottom: 40, left: 80, right: 10 }}
      
    >
      <VictoryLine 
      data={data} 
      x="date" 
      y="likes"
      labelComponent={<VictoryTooltip/>}
      
      interpolation='natural'
      style = {{
        data: { stroke: "#c43a31" },
        labels: { fontSize: 7 }
      }}
      />
    </VictoryChart>
    
*/
  );
}

//const rootElement = document.getElementById('root');
//ReactDOM.render(<ChartViewer />, rootElement);
export default ChartViewer;

/*
const jsonify = res => res.json();
const dataFetch = fetch(
    "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/data/line-chart-with-time-axis-data.json"
  ).then(jsonify);
  const schemaFetch = fetch(
    "https://s3.eu-central-1.amazonaws.com/fusion.store/ft/schema/line-chart-with-time-axis-schema.json"
  ).then(jsonify);


  const row = d => {
    d.date = d.date;
    d.likes = +d.likes;
    d.difference = +d.difference;
  return d;
};

const ChartViewer = () => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    csv('https://raw.githubusercontent.com/rachelombok/BlackpinkDSProject/master/data/facebook/blackpink_facebook_data_history.csv', row).then(setData);
  }, []);
  
  return (
    <VictoryChart
      style={{tickLabels: {fontSize: 120}}}
      width='960'
      height='500'
      domainPadding={50}
      padding={{ top: 10, bottom: 40, left: 80, right: 10 }}
    >
      <VictoryBar data={data} x="xey" y="yey" />
    </VictoryChart>
  );
};
*/