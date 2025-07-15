import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import LogIn from "./LogIn.jsx";
import Apply from "./Apply.jsx";
import JobAdvert from "./CompanySubmit.jsx"; 
import RecruiterDashboard from './CompanyDashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/apply/:jobID" element={<Apply />} />
        <Route path="/recruiter" element={<RecruiterDashboard />} />
        <Route path="/company" element={<JobAdvert />} />
      </Routes>
    </Router>
  );
}

export default App;
