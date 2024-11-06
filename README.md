# Portfolio Project

This is a personal portfolio project built with **React** on the frontend and **Flask** on the backend. The portfolio showcases my skills, projects, and experience in web development.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Future Improvements](#future-improvements)
- [License](#license)

## Project Overview
The purpose of this project is to build a fully functional portfolio website. The backend, built with Flask, serves data to the frontend, which is developed using React. This setup allows me to showcase my projects, technical skills, and other relevant information in a dynamic and interactive way.

## Features
- **Projects Showcase**: Displays a list of projects with descriptions, technologies used, and links.
- **Responsive Design**: Works well on desktops, tablets, and mobile devices.
- **Contact Form**: Allows users to send messages that get stored in the backend.
- **Dynamic Data Fetching**: Project data is fetched from the backend using API requests.

## Technologies Used
### Frontend
- **React**: JavaScript library for building the user interface.
- **Axios**: For making API requests to the backend.
- **CSS**: Basic styling, with plans to add Tailwind CSS or Bootstrap for enhanced design.

### Backend
- **Flask**: Python framework for creating the backend API.
- **Flask-CORS**: Allows cross-origin requests from the React frontend.
- **SQLite/PostgreSQL** (optional): For storing project details and contact form submissions.

## Setup and Installation

### Prerequisites
- **Node.js** and **npm** installed for the frontend.
- **Python 3** and **pip** installed for the backend.

### Installation Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/portfolio-project.git
   cd portfolio-project

2. **Set Up the Backend**
- Navigate to the backend folder:
  ```
  cd backend
  ```
- Create a virtual environment and activate it:
  ```
  python3 -m venv venv
  source venv/bin/activate  # Windows: venv\Scripts\activate
  ```
- Install required Python packages:
  ```
  pip install -r requirements.txt
  ```

3. **Set Up the Frontend**
- Navigate to the frontend folder:
  ```
  cd ../frontend
  ```
- Install frontend dependencies:
  ```
  npm install
  ```

## Running the Project

1. **Start the Backend**:
- In the `backend` folder, run:
  ```
  flask run
  ```
- Backend will start at `http://127.0.0.1:5000`.

2. **Start the Frontend**:
- In the `frontend` folder, run:
  ```
  npm start
  ```
- Frontend will start at `http://localhost:3000`.

## API Endpoints

- **GET /api/projects** - Retrieves a list of portfolio projects.

## Future Improvements
- Add an admin area with authentication.
- Switch to a database like PostgreSQL for more robust data storage.
- Enhance styling with animations.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
