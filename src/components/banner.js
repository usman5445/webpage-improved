import React from "react";

function Banner() {
  return (
    <div className="banner">
      <img
        className="bnrImg"
        src="https://cdn.pixabay.com/photo/2015/10/29/14/38/web-1012467__340.jpg"
      />
      <h1>A Website That Thinks About You!</h1>
      <p>
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to demonstrate the visual form of a document or a typeface
        without relying on meaningful content. Lorem ipsum may be used as a
        placeholder before final copy is available.
      </p>
      <button>Join Now</button>
    </div>
  );
}

export default Banner;
