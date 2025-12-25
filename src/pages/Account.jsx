import "./css/account.css";

const Account = () => {
  return (
    <div className="page-shell">
      <div className="profile-card">
        <h2 className="account-title">Account Settings</h2>

        <div className="profile-section">
          <div className="profile-row">
            <div className="avatar-wrap">
              <img
                src="https://i.imgur.com/6VBx3io.png"
                className="avatar"
                alt="avatar"
              />
              <span className="camera-badge">📷</span>
            </div>

            <div>
              <p className="name">Marry Doe</p>
              <p className="email">Marry@Gmail.Com</p>
            </div>
          </div>

          <p className="desc">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>

        <div className="card-empty-space" />
      </div>
    </div>
  );
};

export default Account;
