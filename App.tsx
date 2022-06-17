import * as React from 'react';
import './style.css';
import Dashboard from './components/Dashboard';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

export default function App() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
