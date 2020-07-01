
import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import {
  Map,
  Marker,
  Popup,
  TileLayer,
  Tooltip,
} from 'react-leaflet';

const center = [33.0, 3.0]

const MainPageMap = () => {

  return (
    <Grid item xs={12}
      style={{ textAlign: "center", padding: "1rem" }}
    >
      <Paper>
        <Map center={center} zoom={5}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[36.60, 3.0]}>
            <Popup>Company</Popup>
            <Tooltip>Agence</Tooltip>
          </Marker>
        </Map>
      </Paper>
    </Grid>
  )
}

export default MainPageMap;