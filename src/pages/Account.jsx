export default function Account() {
  return (
    <>
      <h2 className="title">Account Settings</h2>

      <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
        <img
          src="https://i.pravatar.cc/80"
          style={{ width: 55, height: 55, borderRadius: "50%" }}
        />

        <div>
          <strong>Marry Doe</strong>
          <p>Marry@gmail.com</p>
        </div>
      </div>

      <p style={{ marginTop: "15px", fontSize: "13px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor.
      </p>
    </>
  );
}
