import React from "react";

function Footer() {
  return (
    <div className="footer">
      <h2>Our Social Media Handles</h2>
      <div className="footerIcons">
        <img src="https://cdn-icons-png.flaticon.com/512/20/20673.png" />
        <img src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png" />
        <img src="https://cdn-icons.flaticon.com/png/512/2168/premium/2168336.png?token=exp=1652012905~hmac=64d396017dd2e0217075213d5531d216" />
      </div>
      <div className="links">
        <div>
          <a href="#">Info</a>
          <a href="#">Support</a>
          <a href="#">Marketing</a>
        </div>
        <div>
          {" "}
          <a href="#">Terms of use</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <p>@ 2022 all rights reserved</p>
    </div>
  );
}

export default Footer;
