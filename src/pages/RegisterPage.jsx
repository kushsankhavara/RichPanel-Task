import React from "react";

const RegisterPage = () => {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <form className="box">
            <h2 style={{ fontSize: "20px", textAlign: "center" }}>
              Create Account
            </h2>
            <label className="inputLabel">Name</label>
            <input type="text" className="inputField" />
            <label className="inputLabel">Email</label>
            <input type="email" className="inputField" />
            <label className="inputLabel">Password</label>
            <input type="password" className="inputField" />
            <button className="inputBtn">Sign Up</button>
            <span
              className="inputLabel"
              style={{ textAlign: "center", marginTop: "20px" }}
            >
              Already have an account? <a href="/">Login</a>
            </span>
          </form>
        </header>
      </div>
    </div>
  );
};

export default RegisterPage;
