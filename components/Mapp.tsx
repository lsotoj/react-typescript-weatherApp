import * as React from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import Form from './Form';

export default function Mapp({ lat, lon }) {
  const newLat = lat ?? 14.6297081;
  const newLon = lon ?? -90.5232878;
  const [layer, setLayer] = React.useState(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  );

  function manageSelectLayer(actionLayer) {
    console.log(actionLayer);
    setLayer(actionLayer);
  }
  return (
    <div>
      <div className='selectContainer'>
      <label>
        Layer:
        <Form className="inputSelect" action={manageSelectLayer} />
      </label>
      </ div>
      <MapContainer center={{ lat, lon }} zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={layer}
        />
      </MapContainer>
    </div>
  );
}
