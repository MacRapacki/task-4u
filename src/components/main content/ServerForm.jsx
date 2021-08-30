import React from "react";

const ServerForm = () => {
  return (
    <div className="formWrapper">
      <h1 className="formWrapper_title">
        GET YOUR <span>FREE</span> RADIO SERVER
      </h1>
      <p className="formWrapper_subtitle">
        No Card - 100% Free. Start Your Online Radio Station Today!
      </p>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" />

        <label htmlFor="confPassword">Confirm Password</label>
        <input type="password" id="confPassword" />
        <div className="formTerms">
          <input type="checkbox" id="checkbox" />{" "}
          <label htmlFor="checkbox">
            I Agree To The <a href="#">Terms Of Service</a>{" "}
          </label>
        </div>
        <button className="formButton">REGISTER NOW</button>
      </form>

      <p className="provider">
        Free Service Provided by <a href="#">Fastcast4u.com</a>{" "}
      </p>
    </div>
  );
};

export default ServerForm;
