import React, { useState } from "react";

function SubmissionList() {
  const [submissions, setSubmissions] = useState([]); // Initialize an empty array
  const [newSubmission, setNewSubmission] = useState(""); // Track the input value

  const handleInputChange = (event) => {
    setNewSubmission(event.target.value); // Update the input value
  };

  const handleAddSubmission = () => {
    if (newSubmission.trim()) {
      setSubmissions((prevSubmissions) => [
        ...prevSubmissions,
        { id: Date.now(), text: newSubmission }
      ]); // Add new item
      setNewSubmission(""); // Clear input field
    }
  };

  return (
    <div>
      <h1>Submission List</h1>
      <input
        type="text"
        value={newSubmission}
        onChange={handleInputChange}
        placeholder="Enter a new submission"
      />
      <button onClick={handleAddSubmission}>Add Submission</button>

      <ul>
        {submissions.map((submission) => (
          <li key={submission.id}>{submission.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default SubmissionList;