import React from "react";
import L from "leaflet";
import statesData from '../extra/us-states.json';
import countriesData from '../extra/countries.json';
//import './map.css'
import 'leaflet/dist/leaflet.css';
const style = {
  width: "75%",
  height: "500px",
  margin: "auto",
  display: 'block'
};

const mapStyle = (feature) => {
  return ({
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7,
    fillColor: "#FFEDA0"

  });
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

    this.geojson = L.geoJson(statesData, {
      style: mapStyle,
      onEachFeature: this.onEachFeature
    }).addTo(this.map);

    this.countries = L.geoJson(countriesData, {
		style: mapStyle,
		onEachFeature: this.onEachFeature
    }).addTo(this.map);
    
    var overlay = {
			"Countries": this.countries,
			"States" : this.geojson
	};
  L.control.layers(overlay).addTo(this.map);


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
      window.alert(layer.feature.id);
  });
  }
  highlightFeature = (e) => {
    var layer = e.target;

    layer.setStyle({
      fillColor: "#FFEDA0",
      weight: 5,
      color: "#666",
      dashArray: "",
      fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
      layer.bringToFront();
    }
    //layer.bringToFront();

  
  }
  resetHighlight = (event) => {
	this.geojson.resetStyle(event.target);
	this.countries.resetStyle(event.target);
  }

  render() {
    return <div id="map" style={style} />;
  }
}

export default Mapportal;
