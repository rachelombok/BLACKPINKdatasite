import { Chart, Tooltip, Axis, Legend, SmoothLine, Point } from 'viser-react';
import * as React from 'react';
const DataSet = require('@antv/data-set');

const sourceData = [
  { month: 'Jan', Tokyo: 7.0, London: 3.9 },
  { month: 'Feb', Tokyo: 6.9, London: 4.2 },
  { month: 'Mar', Tokyo: 9.5, London: 5.7 },
  { month: 'Apr', Tokyo: 14.5, London: 8.5 },
  { month: 'May', Tokyo: 18.4, London: 11.9 },
  { month: 'Jun', Tokyo: 21.5, London: 15.2 },
  { month: 'Jul', Tokyo: 25.2, London: 17.0 },
  { month: 'Aug', Tokyo: 26.5, London: 16.6 },
  { month: 'Sep', Tokyo: 23.3, London: 14.2 },
  { month: 'Oct', Tokyo: 18.3, London: 10.3 },
  { month: 'Nov', Tokyo: 13.9, London: 6.6 },
  { month: 'Dec', Tokyo: 9.6, London: 4.8 },
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'fold',
  fields: ['Tokyo', 'London'],
  key: 'city',
  value: 'temperature',
});
//const data = dv.rows;

const TICKS = ["2016-11-30", "2017-01-30", "2017-06-30", "2017-12-30", "2018-04-30", "2018-12-30", "2019-06-30", "2020-01-30", "2020-05-30"];

const scale = [{
  dataKey: 'date',
  ticks: TICKS
}];

const label = {
    textStyle: {
      fill: '#000'
    }
  }

export default class GChart extends React.Component {
    state = {
        data:[]
      };

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/rachelombok/BlackpinkDSProject/master/data/facebook/blackpink_facebook_data_history.csv')
        .then(response => response.text())
        .then(text => {
            const lines = text.split('\n')
            const result = []
            const headers = lines[0].split(',')
            

            for (let i = 1; i < lines.length; i++) {        
                if (!lines[i])
                    continue
                const obj = {}
                const currentline = lines[i].split(',')
        
                for (let j = 0; j < headers.length; j++) {
                    obj[headers[j]] = currentline[j]
                }
                result.push(obj)
            }

            result.forEach((d) => {
                return (
                  (d.date = d.date),
                  (d.likes = +d.likes),
                  (d.difference = +d.difference)
                );
              });
            this.setState({ data: result });
            console.log(this.state.data);
            //Use CSV text
          });
      }
  render() {
    const { data } = this.state;
    return (
        <Chart forceFit height={400} data={data} scale={scale}>
        <Tooltip crosshairs={true} color="#fff"/>
        <Axis dataKey="likes" show={label}/>
        <Axis dataKey="date" label={false}/>
        <Legend  style={{color: '#fff'}}/>
        <SmoothLine position="date*likes" color="#2fc25b" />
        
    </Chart>
        
     
    );
  }
}




/*
 <Chart forceFit height={400} data={data} scale={scale}>
        <Tooltip />
        <Axis />
        <Legend />
        <Line position="month*temperature" color="city" />
        <Point position="month*temperature" color="city" size={4} style={{ stroke: '#fff', lineWidth: 1 }} shape="circle"/>
    </Chart>

    <Chart data={data} scale={[{dataKey: 'date'}]}>
            <Axis dataKey="likes" show={false}/>
            <Axis dataKey="date" label={label}/>
            <Line position="date*likes"/>
            <Point position="date*likes" color="date" size={4} style={{ stroke: '#fff', lineWidth: 1 }} shape="circle"/>
        </Chart>
*/
