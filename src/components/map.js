import React from "react";
import L from "leaflet";
import countriesData from '../extra/data/countries.json';
import '../extra/css/map.css';
import 'leaflet/dist/leaflet.css';
const style = {
  width: "75%",
  height: "500px",
  margin: "auto",
  display: 'block'
};
/*
const mapStyle = (feature) => {
  return ({
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7,
    fillColor: getColor(feature.properties.igfollowers)

  });
}*/

const getColor = (d) =>{
  return d > 10000000 ? '#800026' :
        d > 50000000  ? '#BD0026' :
        d > 20000000  ? '#E31A1C' :
        d > 10000000  ? '#FC4E2A' :
        d > 500000   ? '#FD8D3C' :
        d > 200000   ? '#FEB24C' :
        d > 100000   ? '#FED976' :
                    '#FFEDA0';
}
const mapStyle = (feature) => {
  return ({
      weight: 1.5,
      opacity: 1,
      color: "white",
      dashArray: "0",
      fillOpacity: 0.7,
      fillColor: getColor(feature.properties.igfollowers)

    });
}

const thousands_separators = (num) => {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

class Mapportal extends React.Component {
    
  componentDidMount() {
    // create map
    this.map = L.map("map", {
      center: [16.5994, 2.6731],
      zoom: 2,
      layers: [
        L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmFjaGVsb21ib2siLCJhIjoiY2tjODZ6c3UzMTh3ZTJyb2JndHN0dXhlOSJ9.h8aubFClamI3kiUsjIgNTg",
        {
          maxZoom: 18,
          minZoom: 2,
          attribution:
            ' <a href="http://mapbox.com">Mapbox</a>',
          id: "dark-v10"
        })
      ]
    });

    

    this.countries = L.geoJson(countriesData, {
		style: mapStyle,
		onEachFeature: this.onEachFeature
    }).addTo(this.map);
    
    var overlay = {
			"Countries": this.countries
			
  };
  this.info = L.control();

  this.info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
  };
  this.info.update = function (props) {
    this._div.innerHTML = '<h4>Instagram Follower Data</h4>' +  
    (props ? '<b>' + props.name  + '</b><br>' + 
    (props.igfollowers ? 'Instagram Followers: ' + thousands_separators(props.igfollowers) : "There is no Instagram follower data")
    
    : 'Hover over a country</b>');
  };

  this.info.addTo(this.map);

  

    //L.control.layers(overlay).addTo(this.map);


    // add layer
    this.layer = L.layerGroup().addTo(this.map);
        
    // make map undraggable
    this.map.dragging.disable();
    this.map.touchZoom.disable();
    this.map.doubleClickZoom.disable();
    this.map.scrollWheelZoom.disable();
    this.map.boxZoom.disable();
    this.map.keyboard.disable();
    if (this.map.tap) this.map.tap.disable();
document.getElementById('map').style.cursor='default';
  }

  

  
  

  onEachFeature = (feature, layer) => {
	layer.bindTooltip(feature.properties.name.toString(),{noHide:true}).openTooltip();
    layer.on({
      mouseover: this.highlightFeature,
      mouseout: this.resetHighlight
    });
    layer.on("click",function(e){
      // this gets the id for each country, and we can use that to redirect to different pages since each 
      // json layer has different ids. the states are 1-50, and the countries are their official code
      window.alert(layer.feature.properties.igfollowers);
  });
  }
  highlightFeature = (e) => {
    var layer = e.target;

    layer.setStyle({
      fillColor: '#000',
      weight: 5,
      color: "#666",
      dashArray: "0",
      fillOpacity: 1
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
    this.info.update(layer.feature.properties);
    //layer.bringToFront();

  
  }
  resetHighlight = (event) => {
	//this.geojson.resetStyle(event.target);
  this.countries.resetStyle(event.target);
  this.info.update();
  }

  render() {
    return <div id="map" style={style} />;
  }
}

export default Mapportal;
