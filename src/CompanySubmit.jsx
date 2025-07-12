import React, { useState } from 'react';
import './Company.css'

function SubmitJob() {
  const [form, setForm] = useState({
    jobID: '',
    jobName: '',
    jobDesc: '',
    jobOpen: '',
    jobClose: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
  
    const payload = {
      JOBNAME: form.jobName,
      JOBDESC: form.jobDesc,
      CLOSE_DATE: form.jobClose
    };
  
    try {
      const response = await fetch('http://localhost:5000/company', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        alert('Error: ' + errorData.error);
      } else {
        const result = await response.json();
        console.log('Server response:', result);
        alert('Job successfully submitted!');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit job. Check the console or try again later.');
    }
  };
  


  return (
    <div className="containerStyle">
      <h1>Submit a Job Poster</h1>

      <label className="labelStyle" >Job ID</label>
      <input className="inputStyle" name="jobID" value={form.jobID} onChange={handleChange} />

      <label className="labelStyle">Job Name</label>
      <input className="inputStyle" name="jobName" value={form.jobName} onChange={handleChange} />

      <label className="labelStyle">Job Description</label>
      <textarea className="inputStyle" name="jobDesc" value={form.jobDesc} onChange={handleChange} rows="4" />

      <label className="labelStyle">Opening Date</label>
      <input type="date" className="inputStyle" name="jobOpen" value={form.jobOpen} onChange={handleChange} />

      <label className="labelStyle">Closing Date</label>
      <input type="date" className="inputStyle" name="jobClose" value={form.jobClose} onChange={handleChange} />

      <button className="buttonStyle" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default SubmitJob;
