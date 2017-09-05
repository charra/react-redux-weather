import React from 'react';
import './Loader.css';

export default function Loader(props) {
  console.log(props, 'loaderBlock')
  let loader = [];
  if (props.loading.loading) {
    loader.push(
      <div className="loadme-circlePoint">
        <div className="loadme-circlePoint1 loadme-circlePoint-child"></div>
        <div className="loadme-circlePoint2 loadme-circlePoint-child"></div>
        <div className="loadme-circlePoint3 loadme-circlePoint-child"></div>
        <div className="loadme-circlePoint4 loadme-circlePoint-child"></div>
        <div className="loadme-circlePoint5 loadme-circlePoint-child"></div>
        <div className="loadme-circlePoint6 loadme-circlePoint-child"></div>
        <div className="loadme-circlePoint7 loadme-circlePoint-child"></div>
        <div className="loadme-circlePoint8 loadme-circlePoint-child"></div>
        <div className="loadme-circlePoint9 loadme-circlePoint-child"></div>
        <div className="loadme-circlePoint10 loadme-circlePoint-child"></div>
        <div className="loadme-circlePoint11 loadme-circlePoint-child"></div>
        <div className="loadme-circlePoint12 loadme-circlePoint-child"></div>
      </div>
    )
  }
  return (
    <div>
      {loader}
    </div>
  )
}

