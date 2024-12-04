import React, { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log(`Search Term: ${event.target.value}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Simple Search Input</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        style={{ width: "300px", padding: "10px" }}
      />
      <p>Current Search Term: {searchTerm}</p>
    </div>
  );
}

export default App;
