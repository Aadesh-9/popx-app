import "./css/login.css";

const Login = () => {
  return (
    <div className="page-shell">
      <div className="profile-card">
        <div className="login-container">
          <h2 className="login-title">
            Signin to your <br /> PopX account
          </h2>

          <p className="login-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>

          {/* Email */}
          <fieldset className="outlined-field">
            <legend className="outlined-legend">Email Address</legend>
            <input
              className="outlined-input"
              placeholder="Enter email address"
              type="email"
            />
          </fieldset>

          {/* Password */}
          <fieldset className="outlined-field">
            <legend className="outlined-legend">Password</legend>
            <input
              className="outlined-input"
              placeholder="Enter password"
              type="password"
            />
          </fieldset>

          <button className="login-btn">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
