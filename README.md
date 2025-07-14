# 📄 CV Applicant Tracking System (ATS)

A **full-stack application** designed to streamline the hiring process. This system provides a platform for companies to post job openings and a portal for candidates to apply. The backend uses **Natural Language Processing (NLP)** to automatically score and rank applicant CVs based on their relevance to the job description.

---

## 📚 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
  - [Backend Setup](#1-backend-setup-python-flask-server)
  - [Frontend Setup](#2-frontend-setup-react-client)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

- **Company Portal**: Interface for companies to create, post, and manage job listings.
- **Applicant Portal**: Clean, user-friendly UI for applicants to browse and apply for jobs.
- **CV Uploading**: Supports `.pdf` and `.docx` formats.
- **Automated CV Scoring**: Uses **TF-IDF** and **Cosine Similarity** to analyze and score CVs against job descriptions.
- **RESTful API**: Well-defined endpoints for communication between frontend and backend.

---

## 🛠 Tech Stack

### 🔙 Backend (Flask)

- **Language**: Python 3.9+
- **Framework**: Flask
- **Libraries**:
  - `pandas`: Data manipulation and CSV handling
  - `scikit-learn`: TF-IDF vectorization & cosine similarity
  - `PyPDF2`, `python-docx`: Extracting text from CVs

### 🔜 Frontend (React)

- **Framework**: React.js
- **Package Manager**: npm

---

## 🗂 Project Structure

### Backend: `ATS_System/`
├── app.py # Main Flask server


├── nlp_matcher.py # Core NLP logic


├── requirements.txt # Python dependencies


├── cv_uploads/ # Uploaded CVs


├── company.csv # Job listings database


└── applicants.csv # Applications database

### Frontend: `CV_ATS_FRONTEND/`

├── public/


├── src/


│ ├── components/


│ ├── App.js


│ └── index.js


├── package.json


└── ...


---

## ⚙️ Installation

### Prerequisites

- Git
- Python 3.9+
- Node.js + npm

---

### 1. Backend Setup (Python Flask Server) + FRONT-END

```bash
# Clone the backend repository
git clone https://github.com/molomojc/ATS_System
cd ATS_System

# Install dependencies
pip install -r requirements.txt

# Clone the frontend repository
git clone https://github.com/molomojc/CV_ATS_FRONTEND
cd CV_ATS_FRONTEND

# Install dependencies
npm install

# Inside ATS_System directory
python app.py
#Backend will run at: http://127.0.0.1:5000

# Inside CV_ATS_FRONTEND directory
npm start
Frontend will open at: http://localhost:3000
```
### USAGE 

1. Go to any browser
2. type [http](http://localhost:3000)
3. This will initially show no jobs available
4. Go to http://localhost:3000/company
5. enter the details of the jobs (particularly the job description)
6. Fo sake of demo stration i have included samples of the Job description in
7. /lib job_description.txt (copy it and paste it in the job description)
8. then click submit (in the back_end this is written as a dataframe and written in the data/Company.csv
9. go back to
10. http://localhost:3000 -> Now the job you listed should be available
11. Click apply
12. Enter your name and upload your CV
13. For sake of demostration
14. (upload 1. the Good CV also found in lib/Example.pdf) (This to test the model should give us 1.0 cosine similarity)
15. (uplaod 2. the Bad CV also found in lib/badCv.pdf) (This to test the model should give us 0.0 cosine similarity)
16. Then your done on the front end
17. in the back-end under data/applicant.csv you will find the two applicant that applied with the exact expected analysing results which is 1.0 for 100% on Good CV
18. and you get 0.0% which is 0% on the good cv
19. (For exampling how the similarity function works please visit https://github.com/molomojc/ATS_System and the Readme.txt explains this function very well.
20. 
   


### Demo link
https://drive.google.com/file/d/1cOm2YhtFZXSBuT2_FxtEYwsis2uI0OrV/view?usp=drive_link

