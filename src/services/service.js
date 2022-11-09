import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
// import mapboxgl from '!mapbox-gl';
import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken = 'pk.eyJ1Ijoibmh0aHVuZzEwMTIiLCJhIjoiY2w5NWEzbHczMmJlbjNucGMydGhnNHNheCJ9.CaiZuHejM4TIVmh4KnMpaw';

const map = new mapboxgl.Map({
    container: 'content',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [106.65319992158422, 10.77540515209438],
    zoom: 15
});

map.on('load', () => {});