import React from "react";
import { Container, Col, Image, Badge, Jumbotron, Button, Row, Table } from 'react-bootstrap';
import styled from 'styled-components';
import '../extra/css/tracktable.css'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
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



const x = (d) => new Date(d.release_date);
const bisectDate = bisector(x).left;
const formatDate = timeFormat("%b %d, '%y");

const thousands_separators = (num) => {
  var num_parts = num.toString().split(".");
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return num_parts.join(".");
}

class BPTrackTable extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
      }


    async componentDidMount() {
        d3.csv(
          "https://raw.githubusercontent.com/rachelombok/BlackpinkDSProject/master/data/music/blackpink_track_data.csv"
        )
          .then((data) => {
            data.forEach((d) => {
              return (
                (d.index = +d.index),
                (d.track_name = d.track_name),
                (d.danceability = +d.danceability),
                (d.energy = +d.energy),
                (d.key = +d.key),
                (d.loudness = +d.loudness),
                (d.speechiness = +d.speechiness),
                (d.accousticness = +d.accousticness),
                (d.instrumentalness = +d.instrumentalness),
                (d.liveness = +d.liveness),
                (d.valence = +d.valence),
                (d.tempo = +d.tempo),
                (d.duration_ms = +d.duration_ms),
                (d.release_date = formatDate(new Date(d.release_date)))
                
              );
            });
            this.setState({ data: data });
          })
          .catch(function (err) {
            throw err;
          });
    
         
      }


      render(){
          return(
            <div className='tracktable'>
            <BootstrapTable 
            data={this.state.data} 
            hover condensed
            tableStyle={ { borderStyle: 'none' } }
            >
                <TableHeaderColumn dataField='index' isKey dataSort={ true } width='45px' dataAlign='center'>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='track_name' width='210px'>Track Name</TableHeaderColumn>
                <TableHeaderColumn dataField='danceability' dataSort={ true } width='120px'>Danceability</TableHeaderColumn>
                <TableHeaderColumn dataField='energy' dataSort={ true } width='75px'>Energy</TableHeaderColumn>
                <TableHeaderColumn dataField='key' dataSort={ true } width='55px'>Key</TableHeaderColumn>
                <TableHeaderColumn dataField='loudness' dataSort={ true } width='90px'>Loudness</TableHeaderColumn>
                <TableHeaderColumn dataField='speechiness' dataSort={ true } width='110px'>Speechiness</TableHeaderColumn>
                <TableHeaderColumn dataField='accousticness' dataSort={ true } width='130px'>Accousticness</TableHeaderColumn>
                <TableHeaderColumn dataField='instrumentalness' dataSort={ true } width='150px'>Instrumentalness</TableHeaderColumn>
                <TableHeaderColumn dataField='liveness' dataSort={ true } width='85px'>Liveness</TableHeaderColumn>
                <TableHeaderColumn dataField='valence' dataSort={ true } width='80px'>Valence</TableHeaderColumn>
                <TableHeaderColumn dataField='tempo' dataSort={ true } width='75px'>Tempo</TableHeaderColumn>
                <TableHeaderColumn dataField='duration_ms' dataSort={ true } width='130px'>Duration (MS)</TableHeaderColumn>
                <TableHeaderColumn dataField='release_date' width='110px'>Release Date</TableHeaderColumn>
            </BootstrapTable>
            </div>
          );
      }

}

export default BPTrackTable;