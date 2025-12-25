import { Link } from "react-router-dom";
import "./css/register.css";

const Register = () => {
  return (
    <div className="page-shell">
      <div className="profile-card register-container">
        <h2 className="register-title">
          Create your <br /> PopX account
        </h2>

        <div className="form-section">
          <div className="form-section">
            <fieldset className="reg-field">
              <legend className="reg-legend">
                Full Name <span className="req">*</span>
              </legend>
              <input className="reg-input" placeholder="Marry Doe" />
            </fieldset>

            <fieldset className="reg-field">
              <legend className="reg-legend">
                Phone number <span className="req">*</span>
              </legend>
              <input className="reg-input" placeholder="9876543210" />
            </fieldset>

            <fieldset className="reg-field">
              <legend className="reg-legend">
                Email address <span className="req">*</span>
              </legend>
              <input className="reg-input" placeholder="mary@example.com" />
            </fieldset>

            <fieldset className="reg-field">
              <legend className="reg-legend">
                Password <span className="req">*</span>
              </legend>
              <input
                type="password"
                className="reg-input"
                placeholder="*******"
              />
            </fieldset>

            <fieldset className="reg-field">
              <legend className="reg-legend">Company name</legend>
              <input className="reg-input" placeholder="PopX Pvt Ltd" />
            </fieldset>

            <p className="radio-title">Are you an Agency?*</p>

            <div className="radio-row">
              <label>
                <input type="radio" name="agency" /> Yes
              </label>
              <label>
                <input type="radio" name="agency" /> No
              </label>
            </div>
          </div>
        </div>

        <Link to="/account">
          <button className="create-btn">Create Account</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
