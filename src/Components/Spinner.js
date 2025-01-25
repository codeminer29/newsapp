import React, { Component } from "react";
import "../ComponentsCSS/Spinner.css";

export class Spinner extends Component {
  render() {
    return (
      <div>
        <div id="box-container">
          <div className='boxes box1'></div>
          <div className='boxes box2'></div>
          <div className='boxes box3'></div>
        </div>
        <div className="text">
          <b>Loading...</b>
        </div>
      </div>
    );
  }
}

export default Spinner;