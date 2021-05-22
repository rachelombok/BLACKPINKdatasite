import React from "react";
import { render } from "react-dom";
import { Pie } from "@vx/shape";
import { Group } from "@vx/group";
import { GradientPinkBlue } from "@vx/gradient";
import { Container, Col, Image, Badge, Jumbotron, Button, Row, Table } from 'react-bootstrap';
import styled from 'styled-components';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import * as d3 from "d3";
import { extent, max, bisector } from "d3-array";
import { timeFormat } from 'd3-time-format';

const textStyle = {
  fontFamily: 'Cousine, monospace',
  fontWeight: 'bold'
}

const titleStyle = {
  fontFamily: 'Cousine, monospace',
  fontWeight: 'bold',
  fill: 'white',
  marginLeft: '500px',
  display: 'block',
  textAlign: 'center',
  position: 'absolute'
}

function Label({ x, y, children }) {
    return (
      <text
        fontFamily={"Arial"}
        fill="white"
        textAnchor="middle"
        x={x}
        y={y}
        dy=".33em"
        fontSize={14}
      >
        {children}
      </text>
    );
  }
  const percentor = (num) => {
    var res = (num/3845) * 100;
    
    return res.toFixed(2) + '%';
  }

class BoombayahPieChart extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            data: [], percentage: '', currentlabel: ''
        }
      }


    async componentDidMount() {
        d3.csv(
          "https://raw.githubusercontent.com/rachelombok/BlackpinkDSProject/master/data/music_videos/boombayah_mvdata.csv"
        )
          .then((data) => {
            data.forEach((d) => {
              return (
                (d.label = d.label),
                (d.frequency = +d.frequency)
                
                
              );
            });
            this.setState({ data: data });
          })
          .catch(function (err) {
            throw err;
          });
    
         
      }

      changeText(newtext) {
        this.setState({percentage : newtext})
      }

      changeLabel(newlabel){
        this.setState({currentlabel : newlabel})
      }

      

      render(){
        const width = 400;
        const height = 380;
        const margin = {
          top: 0,
          left: 20,
          right: 20,
          bottom: 110
        }
        const radius = Math.min(width, height) - 150;
        const text = this.state.percentage;
        const currlabel = this.state.currentlabel;
        const {
            hideTooltip,
            tooltipData,
            tooltipTop,
            tooltipLeft,
            showTooltip,
            tooltipOpen,
        } = this.props;
          return(
            
              <svg width={width} height={height}>
                  <GradientPinkBlue id="gradients" />
            <rect
                x={0}
                y={0}
                rx={14}
                width={width}
                height={height}
                fill="url('#gradients')"
            />
            <Group top={height / 2 - margin.top} left={width / 2}>
            
                <Pie
                
                data={this.state.data}
                pieValue={(d) => {
                    if (d.frequency < 100) return 0;
                    return d.frequency;
                }}
                outerRadius={radius - 150}
                innerRadius={radius - 50}
                fill="black"
                fillOpacity={d => 90}
                
                onMouseEnter={data => event => {
                    console.log("mouse enter", data.data.frequency);
                }}
                cornerRadius={3}
                padAngle={0.002}
                
                >
                 
                    {(pie) => {
                    return pie.arcs.map((arc, i) => {
                    const opacity = (arc.data.frequency) / 350;
                    const [centroidX, centroidY] = pie.path.centroid(arc);
                    return (
                        <g>
                          <text
                          style={titleStyle}
                          >Boombayah</text>
                        <path
                            d={pie.path(arc)}
                            onMouseEnter={() => {
                                if (arc.data.frequency > 100){
                                    this.changeText(arc.data.frequency);
                                    this.changeLabel(arc.data.label)
                                }
                                
                            }
                            }
                            onMouseOut={() => {
                                this.setState({percentage: '', currlabel: ''})
                            }}
                            fill={"#000000"}
                    fillOpacity={opacity}
                        />
                        
                        <text
                            fill="white"
                            textAnchor="middle"
                            x={centroidX}
                            y={centroidY}
                            dy=".33em"
                            fontSize={12}
                            style={textStyle}
                        >
                            {arc.data.frequency > 100 ? arc.data.label : null}
                            {arc.data.frequency == text & arc.data.label == currlabel ? 
                            `\n\n ${percentor(text)}` : null}

                        </text>
                        </g>
                    );
                    });
                }}
             
                
                    </Pie> 
                    
            </Group>

              </svg>

          );
      }

}

/*
centroid={(centroid, arc) => {
                    const [x, y] = centroid;
                    if (arc.data.frequency < 100) return null;
                    return (
                    <Label x={x} y={y}>
                        {arc.data.label}
                    </Label>
                    );
                }}
*/

export default BoombayahPieChart;