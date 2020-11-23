import React from "react";
import { Container, Col, Image, Badge, Jumbotron, Button, Row, Table } from 'react-bootstrap';
import styled from 'styled-components';
import '../extra/css/tracktable.css'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import * as d3 from "d3";
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

class KpopTrackTable extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
      }


    async componentDidMount() {
        d3.csv(
          "https://raw.githubusercontent.com/rachelombok/BlackpinkDSProject/master/data/music/kpop_songs_data.csv"
        )
          .then((data) => {
            data.forEach((d) => {
              return (
                (d.index = +d.index),
                (d.artist_name = d.artist_name),
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

      rowStyleFormat(row, rowIdx) {
        
        return { color: rowIdx < 174 ? '#ce93fa' : 
        rowIdx < 244 ? "#ab001a" : 
        rowIdx < 314 ? '#c1e0e8' :
        rowIdx < 604 ? '#d94d02' :
        rowIdx < 861 ? '#5c5c5c' : '#ffc363'};
      }


      render(){
          return(
            <div className='tracktable'>
            <BootstrapTable 
            data={this.state.data} 
            hover condensed
            tableStyle={ { borderStyle: 'none' } }
            scrollTop={ 'Bottom' }
            height='500px'
            trStyle={this.rowStyleFormat}
            >
                <TableHeaderColumn dataField='index' isKey dataSort={ true } width='45px' dataAlign='center'>ID</TableHeaderColumn>
                <TableHeaderColumn dataField='artist_name' width='130px'>Artist Name</TableHeaderColumn>
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

export default KpopTrackTable;