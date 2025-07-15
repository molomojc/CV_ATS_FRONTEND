import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './index.css';

function Apply() {
  const { jobID } = useParams();
  const [cvFile, setCvFile] = useState(null);
  const [transcriptFile, setTranscriptFile] = useState(null);
  const [matricFile, setMatricFile] = useState(null);
  const [userID, setUserID] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [subjects, setSubjects] = useState([{ name: '', percentage: '' }]);

  const handleSubjectChange = (index, key, value) => {
    const newSubjects = [...subjects];
    newSubjects[index][key] = value;
    setSubjects(newSubjects);
  };

  const addSubject = () => {
    setSubjects([...subjects, { name: '', percentage: '' }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!cvFile || !userID || !email || !contactNumber) {
      alert("Please complete all required fields.");
      return;
    }

    const formData = new FormData();
    formData.append('cv_file', cvFile);
    formData.append('transcript_file', transcriptFile);
    formData.append('matric_file', matricFile);
    formData.append('user_id', userID);
    formData.append('job_id', jobID);
    formData.append('email', email);
    formData.append('contact_number', contactNumber);
    formData.append('subjects', JSON.stringify(subjects));

    try {
      const response = await fetch('http://localhost:5000/application', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        alert("Error: " + result.error);
      } else {
        alert("✅ Application submitted successfully! ");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("❌ Failed to submit application.");
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Apply for Job #{jobID}</h2>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Personal Details</legend>
          <label>Full Name:</label>
          <input type="text" value={userID} onChange={(e) => setUserID(e.target.value)} required />

          <label>Contact Number:</label>
          <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />

          <label>Email Address:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </fieldset>

        <fieldset>
          <legend>Documents</legend>

          <label>Upload CV:</label>
          <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setCvFile(e.target.files[0])} required />

          <label>Upload Academic Transcript:</label>
          <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setTranscriptFile(e.target.files[0])} />

          <label>Upload Matric Results:</label>
          <input type="file" accept=".pdf,.doc,.docx" onChange={(e) => setMatricFile(e.target.files[0])} />
        </fieldset>

        <fieldset>
          <legend>Subjects & Marks</legend>
          {subjects.map((subj, index) => (
            <div key={index} style={{ display: 'flex', gap: '1rem', marginBottom: '0.5rem' }}>
              <input
                type="text"
                placeholder="Subject"
                value={subj.name}
                onChange={(e) => handleSubjectChange(index, 'name', e.target.value)}
              />
              <input
                type="number"
                placeholder="Percentage"
                value={subj.percentage}
                onChange={(e) => handleSubjectChange(index, 'percentage', e.target.value)}
              />
            </div>
          ))}
          <button type="button" onClick={addSubject}>➕ Add Subject</button>
        </fieldset>

        <button id="submitBtn" type="submit">Submit Application</button>
      </form>
    </div>
  );
}

export default Apply;
