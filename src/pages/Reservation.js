import React from 'react';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import Reserve from '../components/Reserve';

function Reservation(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh",overflow:"auto" }}>
    <Menu />
    <div style={{ flex: 1 }}>
        <Reserve />
      </div>

 
  </div>
  );
}

export default Reservation;