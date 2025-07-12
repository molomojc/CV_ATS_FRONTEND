# CV Applicant Tracking System (ATS)

A full-stack application designed to streamline the hiring process. This system provides a platform for companies to post job openings and a portal for candidates to apply. The backend leverages Natural Language Processing (NLP) to automatically score and rank applicant CVs based on their relevance to the job description.

# Table of Contents

Features
Tech Stack
Project Structure
Installation
Usage
API Endpoints
Contributing
License

Features

Company Portal: An interface for companies to create, post, and manage job listings.

Applicant Portal: A clean, user-friendly view for applicants to browse and apply for available jobs.

CV Uploading: Supports common CV formats (.pdf, .docx).

Automated CV Scoring: The backend uses TF-IDF and Cosine Similarity to analyze the text of an uploaded CV and compare it against the job description, generating a similarity score from 0 to 1.

RESTful API: A well-defined API that allows the frontend and backend to communicate efficiently.

Tech Stack

This project is separated into two main parts: the backend server and the frontend client.

Backend:

   Language: Python 3.9+ 
   Framework: Flask
   Libraries:pandas: For data manipulation and handling CSV    storage.scikit-learn: For TF-IDF vectorization and cosine similarity calculation.
   PyPDF2 & python-docx: For extracting text from CV files.
   
   Frontend:
       Framework: React.js
       Package Manager: npm
       
# Project Structure
The project is split into two separate repositories: one for the backend and one for the frontend.

# Backend: ATS_System/
├── app.py                  # Main Flask server
├── nlp_matcher.py          # Core NLP logic for scoring
├── requirements.txt        # Python dependencies
├── cv_uploads/             # Directory where uploaded CVs are stored
├── company.csv             # Database of job listings
└── applicants.csv          # Database of applications

# Frontend: CV_ATS_FRONTEND/
├── public/
├── src/
│   ├── components/
│   ├── App.js
│   └── index.js
├── package.json
└── ...

InstallationTo get the full application running locally, you will need to set up both the backend and frontend services.PrerequisitesGitPython 3.9 or newerNode.js (which includes npm)1. Backend Setup (Python Flask Server)First, clone the backend repository and install its dependencies.# Clone the backend repository
git clone https://github.com/molomojc/ATS_System

# Navigate into the project directory
cd ATS_System

# Create a virtual environment (recommended)
python -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`

# Install the necessary Python packages
pip install -r requirements.txt
2. Frontend Setup (React Client)In a new terminal window, clone the frontend repository and install its dependencies.# Clone the frontend repository
git clone https://github.com/molomojc/CV_ATS_FRONTEND

# Navigate into the project directory
cd CV_ATS_FRONTEND

# Install the necessary dependencies
npm install
UsageAfter completing the installation, you must run both the backend and frontend servers simultaneously.1. Start the Backend ServerIn your first terminal (inside the ATS_System directory), run the following command:python app.py
The backend API will now be running and listening for requests on http://127.0.0.1:5000.2. Start the Frontend ApplicationIn your second terminal (inside the CV_ATS_FRONTEND directory), run the following command:npm start
This will launch the React application, and it should automatically open in your web browser at http://localhost:3000.WorkflowPost a Job (Company): Navigate to http://localhost:3000/company to access the form for posting a new job. Fill it out and submit.View Jobs (Applicant): Navigate to http://localhost:3000/home to see a list of all available jobs.Apply for a Job:Click the "Apply" button for a job you are interested in.You will be taken to the application page (/apply).Fill in your name, upload your CV, and click "Submit".Your application will be sent to the backend, scored, and saved.API EndpointsThe backend provides the following API endpoints for the frontend to consume.POST /company.csvAdds a new job listing to the system.Request Body (JSON):{
  "JOBNAME": "Senior Python Developer",
  "JOB_DESCRIPTION": "Looking for an experienced Python developer to work on backend services...",
  "CLOSE_DATE": "2024-12-31"
}
Success Response (201 Created):{
  "status": "success",
  "message": "Job added successfully",
  "JOBID": 1
}
GET /company.csvRetrieves all available job listings.Success Response (200 OK):[
  {
    "JOBID": 1,
    "JOBNAME": "Senior Python Developer",
    "JOB_DESCRIPTION": "...",
    "OPEN_DATE": "2024-01-15",
    "CLOSE_DATE": "2024-12-31"
  }
]
POST /applicationSubmits a new job application.Request Body (multipart/form-data):JOB_ID: The ID of the job being applied for.USER_ID: The name or identifier of the applicant.cv: The applicant's CV file (.pdf, .docx).Success Response (201 Created):{
  "status": "success",
  "message": "Application submitted successfully.",
  "application_id": 1,
  "similarity_score": 0.8734
}
ContributingContributions are welcome! If you have suggestions for improvements or want to fix a bug, please feel free to open an issue or submit a pull request.Fork the repository.Create a new branch (git checkout -b feature/YourAmazingFeature).Make your changes.Commit your changes (git commit -m 'Add some AmazingFeature').Push to the branch (git push origin feature/YourAmazingFeature).Open a Pull Request.LicenseThis project is licensed under the MIT License. See the LICENSE file for more details.
