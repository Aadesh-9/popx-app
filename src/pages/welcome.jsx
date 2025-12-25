import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome-wrap">
      <h2 className="title">Welcome to PopX</h2>

      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      </p>

      <Link to="/register">
        <button className="primary-btn">Create Account</button>
      </Link>

      <Link to="/login">
        <button className="secondary-btn">Already Registered? Login</button>
      </Link>
    </div>
  );
};

export default Welcome;
