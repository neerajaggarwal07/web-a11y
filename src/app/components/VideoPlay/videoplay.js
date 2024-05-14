import React from "react";

import "./videoplay.css";
export default function VideoPlay() {
  return (
    <section className="container-xxl py-5">
    <div className="container ">
              <video autoplay controls loop="" muted="" className="w-100">
          <source src="https://static.twentyoverten.com/5d9df8d05baac31579427ac3/0-oWGJp1yL5/guide_fp_web_header_-_2023-1080p.mp4" type="video/mp4" /></video>
      </div>
   </ section>
  );
}
