import React from "react";

const LoginPage = () => {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <form className="box">
            <h2 style={{ fontSize: "20px", textAlign: "center" }}>
              Log in to your account
            </h2>
            <label className="inputLabel">Email</label>
            <input type="email" className="inputField" />
            <label className="inputLabel">Password</label>
            <input type="password" className="inputField" />
            <button className="inputBtn">Login</button>
            <span
              className="inputLabel"
              style={{ textAlign: "center", marginTop: "20px" }}
            >
              New to app? <a href="/register">Register</a>
            </span>
          </form>
        </header>
      </div>
    </div>
  );
};

export default LoginPage;
