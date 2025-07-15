import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Label } from 'recharts';

const RecruiterDashboard = () => {
  const [insights, setInsights] = useState(null);
  const navigate = useNavigate();
  
 useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/recruiter-insights')
      .then((res) => res.json())
      .then((data) => setInsights(data))
      .catch((err) => console.error("Failed to load recruiter insights", err));
  }, []);

  if (!insights) return <div>Loading insights...</div>;

  const {
    total_applications,
    applications_per_job,
    avg_score_per_job,
    shortlisted,
    rejected,
    job_names
  } = insights;

  const chartData = Object.keys(applications_per_job).map((jobId) => ({
    name: job_names[jobId] || `Job ${jobId}`,
    applications: applications_per_job[jobId],
    avgScore: avg_score_per_job[jobId]
  }));

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ marginBottom: '1rem' }}>📊 Recruiter Insights Dashboard</h1>

      {/* Overview Stats */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        {[
          { label: "Total Applications", value: total_applications, color: '#2563eb' },
          { label: "Shortlisted", value: shortlisted, color: '#22c55e' },
          { label: "Rejected", value: rejected, color: '#ef4444' },
        ].map((item) => (
          <div key={item.label} style={{
            flex: 1,
            background: item.color,
            color: '#fff',
            padding: '1rem',
            borderRadius: '10px',
            textAlign: 'center',
          }}>
            <h3>{item.label}</h3>
            <p style={{ fontSize: '2rem', margin: 0 }}>{item.value}</p>
          </div>
        ))}
      </div>

      {/* Chart Section */}
      <h2>📈 Applications per Job</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name">
            <Label value="Job Title" offset={-10} position="insideBottom" />
          </XAxis>
          <YAxis label={{ value: 'Applicants', angle: -90, position: 'insideLeft' }} />
          <Tooltip />
          <Bar dataKey="applications" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>

      {/* CTA Button */}
      <button
        onClick={() => navigate('/company')}
        style={{
          marginTop: '2rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#2563eb',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '16px'
        }}
      >
        ➕ Post a New Job
      </button>
    </div>
  );
};

export default RecruiterDashboard;
