import { Chart, Tooltip, Axis, Legend, SmoothLine, Point } from 'viser-react';
import * as React from 'react';
import * as d3 from "d3";


const TICKS = ["2016-11-30", "2017-02-20", "2017-07-29", "2018-01-20", "2018-08-20", "2019-01-19", "2019-05-30", "2020-05-09", "2020-06-12"];

const scale = [{
    dataKey: 'date',
    ticks: TICKS
  }];

class TestChart extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };

        
    }

    async componentDidMount() {
        /*fetch(
          "https://raw.githubusercontent.com/rachelombok/BlackpinkDSProject/master/data/facebook/blackpink_facebook_data_history.csv"
        ).then(data => data.text())
          .then((d) => {
              console.log(d);
              const csvData = [];
              let newData = [];
              const lines = d.split("\n");

            for (let i = 1; i < lines.length; i++) {
                csvData[i] = lines[i].split(",");
                //console.log("csvdata i ", csvData[i]);
                //console.log("lines i ", lines[i]);
                csvData[i][1] = +csvData[i][1];
                csvData[i][2] = +csvData[i][2];

                newData[i] = {
                    date: csvData[i][0],
                    likes: +csvData[i][1],
                    difference: +csvData[i][2]
                }
            }

            //console.log(newData);
            this.setState({ data: newData });
            console.log(this.state);
            console.log(newData);

          })
          .catch(function (err) {
            throw err;
          });*/
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


      render(){
        const { data } = this.state;
        console.log(data);
        return(

            <div>whatuuuuup

        <Chart forceFit height={400} data={data} scale={scale}>
            <Tooltip />
            <Axis />
            <SmoothLine position="date*likes" />
            
        </Chart>

        
            </div>
            

        );

      }
    

}


export default TestChart;