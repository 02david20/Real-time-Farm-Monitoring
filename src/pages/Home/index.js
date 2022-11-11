import React from "react";
import ReactDOM from "react-dom";
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-supported";
import mapboxgl from "mapbox-gl";
// import "./styles.css";
// npm cache clean --force
// document: https://github.com/amaurym/react-mapbox-gl-draw
// polygon https://codesandbox.io/s/mapbox-polygon-forked-qcu4om?file=/src/index.js

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoibmh0aHVuZzEwMTIiLCJhIjoiY2w5NWEzbHczMmJlbjNucGMydGhnNHNheCJ9.CaiZuHejM4TIVmh4KnMpaw",
});
const onDrawCreate = ({ features }) => {
  console.log(features);
  let k = features[0].geometry.coordinates;
  console.log(k[0]);
};

const onDrawUpdate = ({ features }) => {
  console.log(features);
};

function HomePage() {
  return (
    <div>
      <Map
        style="mapbox://styles/mapbox/satellite-v9" // eslint-disable-line
        center={[-91.874, 42.76]}
        containerStyle={{
          height: "600px",
          // width: "100vw"
        }}
        zoom={[12]}
      >
        <DrawControl onDrawCreate={onDrawCreate} onDrawUpdate={onDrawUpdate} />
      </Map>
    </div>
  );
}

export default HomePage;
