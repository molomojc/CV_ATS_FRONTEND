import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function Apply() {
  const { jobID } = useParams();
  const [cvFile, setCvFile] = useState(null);
  const [userID, setUserID] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cvFile || !userID) {
      alert("Please provide both user ID and a CV file.");
      return;
    }

    const formData = new FormData();
    formData.append('cv_file', cvFile);       // Flask expects 'cv_file'
    formData.append('user_id', userID);
    formData.append('job_id', jobID);

    try {
      const response = await fetch('http://localhost:5000/application', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        alert("Error: " + result.error);
      } else {
        alert("Application submitted successfully!");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Failed to submit application.");
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Apply for Job #{jobID}</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
        <label>Name :</label>
        <input type="text" value={userID} onChange={(e) => setUserID(e.target.value)} required />

        <label>Upload CV:</label>
        <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setCvFile(e.target.files[0])} required />

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default Apply;
