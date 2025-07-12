import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Company.css';

function Company() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/Home')
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error('Failed to load jobs:', err));
  }, []);

  const handleApply = (jobID) => {
    navigate(`/apply/${jobID}`);
  };

  return (
    <div className="company-container">
      <h2>Available Job Posts</h2>

      {jobs.length === 0 ? (
        <p>No jobs available yet.</p>
      ) : (
        jobs.map((job) => (
          <div key={job.JOBID} className="job-card">
            <h3>{job.JOBNAME}</h3>
            <p className="job-description">{job.JOBDESC}</p>
            <div className="job-meta">
              <span><strong>Posted:</strong> {job.CREATED_AT}</span>
              <span><strong>Closes:</strong> {job.CLOSE_DATE}</span>
            </div>
            <button onClick={() => handleApply(job.JOBID)}>Apply</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Company;
