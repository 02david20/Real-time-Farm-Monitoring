import {Routes, Route} from 'react-router-dom'

import './App.css';
import Global from './components/Global';
import {publicRoutes} from './routes'
import {DefaultLayout} from './components/Layouts'
import { Fragment } from 'react';
// import Navbar from './components/Navbar';


// function App() {

//   return (
//     <div className="App">
//       <Global>    
//           <Routes>
//             {publicRoutes.map((route,index) => {
//                 let Layout = DefaultLayout ;
//                 if (route.layout)
//                   Layout=route.layout
//                 else if(route.layout===null)
//                   Layout = Fragment
//               const Page = route.component
//               return <Route key={index} 
//                             path={route.path} 
//                             element={
//                               <Layout>
//                                 <Page></Page>
//                               </Layout>
//                             }
//               />
//             })}
//           </Routes>
//       </Global>
//     </div>
//   );
// }
import React from "react";
import ReactDOM from "react-dom";
import ReactMapboxGl from "react-mapbox-gl";
import DrawControl from "react-mapbox-gl-draw";
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-supported';
import mapboxgl from 'mapbox-gl';

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiZGFpbWsiLCJhIjoiY2ttbmt2dzc2MXZ1bjJwcGZsZndoaGdkbiJ9.KzEXKpaGb0yYkV8Npdg65g"
});

function App() {
  const onDrawCreate = ({ features }) => {
    console.log(features);
    //console.log(features[0].geometry.coordinates);
    let k = features[0].geometry.coordinates;
    console.log(k[0]);
  };

  const onDrawUpdate = ({ features }) => {
    console.log(features);
  };

  return (
    <div>
      <h2>Draw Polygon</h2>
      <Map
        style="mapbox://styles/mapbox/satellite-v9" // eslint-disable-line
        containerStyle={{
          height: "600px",
          width: "100vw"
        }}
        center={[-91.874, 42.76]}
      >
        <DrawControl onDrawCreate={onDrawCreate} onDrawUpdate={onDrawUpdate} />
      </Map>
    </div>
  );
}
export default App;
