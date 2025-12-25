import "./css/login.css";

const Login = () => {
  return (
    <div className="login-container">
      <h2 className="login-title">Signin to your PopX account</h2>

      <p className="login-subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <label className="input-label">Email Address</label>
      <input
        className="login-input"
        type="email"
        placeholder="Enter email address"
      />

      <label className="input-label">Password</label>
      <input
        className="login-input"
        type="password"
        placeholder="Enter password"
      />

      <button className="login-btn">Login</button>
    </div>
  );
};

export default Login;
