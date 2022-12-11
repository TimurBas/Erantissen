import React from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const containerStyle = {
  width: "65%",
  height: "400px",
};

const center = {
  lat: 56.09173178317564,
  lng: 9.757359211930163,
};

const position = {
  lat: 56.09173178317564,
  lng: 9.757359211930163,
};
function Map() {
  return (
    <div className="flex justify-center items-center mt-10 mb-10 flex-col">
      <h1 className="mb-10 font-bold text-4xl">Find os her!</h1>
      <LoadScript googleMapsApiKey="AIzaSyBZp72l6IhoUVzzT7XlmqjZQ9T3LhLni8o">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={19}>
          {}
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default React.memo(Map);
