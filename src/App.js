import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    zip: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div style={{ margin: "50px", fontFamily: "Arial" }}>
      <h1>Simple React Form</h1>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", width: "250px" }}>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label>Zip Code:</label>
        <input type="text" name="zip" value={formData.zip} onChange={handleChange} required />

        <button type="submit" style={{ marginTop: "10px" }}>Submit</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px" }}>
          <h2>Submitted Data:</h2>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Zip Code:</strong> {submittedData.zip}</p>
        </div>
      )}
    </div>
  );
}

export default App;
