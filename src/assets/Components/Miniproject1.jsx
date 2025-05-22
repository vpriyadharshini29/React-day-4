function ProfileCard({ name = "Guest", age = "N/A", city = "Unknown" }) {
  return (
    <div style={cardStyle}>
      <h2>Profile Card</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>City:</strong> {city}</p>
    </div>
  );
}

// Inline card styling
const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "16px",
  width: "250px",
  backgroundColor: "#f9f9f9",
  fontFamily: "Arial",
};
export default ProfileCard;