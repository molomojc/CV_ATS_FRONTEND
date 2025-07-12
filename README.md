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

