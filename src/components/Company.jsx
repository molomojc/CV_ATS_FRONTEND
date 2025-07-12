import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Company.css';

function Company() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/company.csv')
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error('Failed to load jobs:', err));
  }, []);

  const handleApply = (jobID) => {
    navigate(`/apply/${jobID}`);
  };

  return (
    <div className="company-container">
      <h3>Available Job Posts</h3>
      {jobs.length === 0 ? (
        <p>No jobs available yet.</p>
      ) : (
        <table className="job-table">
          <thead>
            <tr>
              <th>Job ID</th>
              <th>Job Name</th>
              <th>Description</th>
              <th>Created At</th>
              <th>Close Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job.JOBID}>
                <td>{job.JOBID}</td>
                <td>{job.JOBNAME}</td>
                <td>{job.JOBDESC}</td>
                <td>{job.CREATED_AT}</td>
                <td>{job.CLOSE_DATE}</td>
                <td>
                  <button onClick={() => handleApply(job.JOBID)}>Apply</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Company;
