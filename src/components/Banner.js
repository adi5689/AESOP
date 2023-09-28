import React from "react";
import "../css/banner.css"; // Import your banner CSS file

function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <div className="logo">
          <h2>Aēsop</h2>
        </div>
        <div className="banner-text">
          <div className="sub-title"><p>Bar Soaps</p></div>
          <div className="description">
            <h2>A body care classic,
            <br />
            reimagined.</h2>
          </div>
          <div className="benefits">
            <p>
              Breathing new life into the humble bar soap are Nurture, Polish
              and Refresh—three additions to the range, each imparting a unique
              constellation of benefits.
            </p>
          </div>
          <div className="btn-container">
            <button className="btn">
              Discover Bar Soaps              <span>&rarr;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;

