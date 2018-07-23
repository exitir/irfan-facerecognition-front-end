import React, { Component } from "react";
import Tilt from "react-tilt";
import './Logo.css'
import brain from './brain.png';
class Logo extends Component {
  render() {
    return (
      <div className="ma4 mt0">
        <Tilt
          className="Tilt br2 shadow-2 pa3"
          options={{ max: 75 }}
          style={{ height: 150, width: 150 }}
        >
          <div className="Tilt-inner"> <img src={brain} alt="Logo"/> </div>
        </Tilt>
      </div>
    );
  }
}

export default Logo;
