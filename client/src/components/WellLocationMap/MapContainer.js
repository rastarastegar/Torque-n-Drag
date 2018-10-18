import React, { Component } from "react";
import { render } from "react-dom";
import Map from "./Map";
import InfoWindow from "./InfoWindow";

//code from http://cuneyt.aliustaoglu.biz/en/using-google-maps-in-react-without-custom-libraries/


class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.createInfoWindow = this.createInfoWindow.bind(this);
  }
  createInfoWindow(e, map, wellName) {
    const infoWindow = new window.google.maps.InfoWindow({
      content: '<div id="infoWindow" />',
      position: { lat: e.latLng.lat(), lng: e.latLng.lng() }
    });
    infoWindow.addListener("domready", e => {
      render(
        <InfoWindow wellName={wellName} />,
        document.getElementById("infoWindow")
        );
      });
    infoWindow.open(map);
  }

  createMarker(map, wellLat, wellLng, wellName) {
    const marker = new window.google.maps.Marker({
      // position: { lat: 41.0082, lng: 28.9784 },
      position: { lat: wellLat, lng: wellLng },
      map: map,
      title: "Well Locations"
    });
    marker.addListener("click", e => {
      this.createInfoWindow(e, map, wellName);
    });
  }
  
  render() {
    // const testMarker= [
    //   { lat: 25.652180, lng: -93.438261, wellName: "B" },
    //   { lat: 27.037750, lng: -92.246405, wellName: "C" },
    //   { lat: 27.590521, lng: -87.458051, wellName: "A" }
    // ];
    {(this.props.wellData === null || this.props.wellData === undefined)
return <div></div>
    }
    
    console.log(typeof this.props.wellData[0].latitude, typeof this.props.wellData[0].longitude)
    return (
      <Map
        id="myMap"
        options={{
          center: { lat: this.props.wellData[0].latitude, lng: this.props.wellData[0].longitude },
          zoom: 8
        }}
        onMapLoad={map => {
          this.props.wellData.forEach(marker =>
            // console.log(marker.latitude)
            this.createMarker(map, marker.latitude, marker.longitude, marker.wellName)
          );
        }}
      />
    );
  }
}

export default MapContainer;
