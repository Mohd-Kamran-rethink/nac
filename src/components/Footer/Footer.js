import React from "react";

const Footer = () => {
  const publicUrl = process.env.PUBLIC_URL;

  return (
    <>
      <section className="footer">
        <div className="top">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 ">
            <img src={`${publicUrl}/footer/color-of-change.png`} alt="nac" />
            <img src={`${publicUrl}/footer/higher-heights.png`} alt="nac" />
            <img src={`${publicUrl}/footer/vote-org.png`} alt="nac" />
            <img src={`${publicUrl}/footer/ballotpedia.png`} alt="nac" />
            <img src={`${publicUrl}/footer/reach-vote.png`} alt="nac" />
            <img src={`${publicUrl}/footer/icon6.png`} alt="nac" />
          </div>
        </div>
        <div className="bottom">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xl-12 float-left">
            <div style={{ textAlign: "center" }}>
              Copyright © 2020{" "}
              <span style={{ color: "blue" }}>New Athens Creative NAC.</span>
            </div>
            <div style={{ textAlign: "center" }}>All rights reserved.</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
