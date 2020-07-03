
import React, { useState, createRef, useEffect } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import {
  Map,
  Marker,
  Popup,
  TileLayer,
  } from 'react-leaflet';

const initCenter = [33.0, 3.0]

const MainPageMap = () => {

  const [center, setCenter] = useState(initCenter);
  const [hasLocation, setHasLocation] = useState(false);
  const mapRef = createRef();

  useEffect(() => {
    const map = mapRef.current
    if (map != null) {
      map.leafletElement.locate();
    }});
  
  const handleLocationFound = (e) => {
    setHasLocation(true);
    setCenter(e.latlng);
  }

  const marker = hasLocation ? (
    <Marker position={center}>
      <Popup>You are here</Popup>
    </Marker>
  ) : null

  return (
    <Grid item xs={12}
      style={{ textAlign: "center", padding: "1rem" }}
    >
      <Paper>
        <Map center={center} 
             zoom={8}
             onLocationfound={handleLocationFound}
             ref={mapRef}
             >
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {marker}
        </Map>
      </Paper>
    </Grid>
  )
}

export default MainPageMap;