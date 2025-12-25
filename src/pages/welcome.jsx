import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <>
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
    </>
  );
}
