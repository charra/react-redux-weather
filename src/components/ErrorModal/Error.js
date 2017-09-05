import React from 'react';
import './Error.css';

export default function Error(props) {
  if (props.error) {
    return (
    <div className="modal-wrapper">
      <div className="modal">
        <h1>Error</h1>
        <p>Please check intetnet connection</p>
      </div>
    </div>
    )
  }
  else return <div> </div>;
}

