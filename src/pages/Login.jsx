import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <h2 className="title">Signin to your PopX account</h2>

      <p className="subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>

      <label>Email Address</label>
      <input className="text-input" placeholder="Enter email address" />

      <label>Password</label>
      <input
        className="text-input"
        type="password"
        placeholder="Enter password"
      />

      <Link to="/account">
        <button className="secondary-btn">Login</button>
      </Link>
    </>
  );
}
