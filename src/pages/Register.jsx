import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <h2 className="title">Create your PopX account</h2>

      <input className="text-input" placeholder="Full Name" />
      <input className="text-input" placeholder="Phone number" />
      <input className="text-input" placeholder="Email address" />
      <input className="text-input" placeholder="Password" />
      <input className="text-input" placeholder="Company name" />

      <p>Are you an Agency?</p>

      <Link to="/account">
        <button className="primary-btn">Create Account</button>
      </Link>
    </>
  );
}
