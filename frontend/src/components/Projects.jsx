import { useState, useEffect } from 'react';
import axios from 'axios';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/projects')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the projects!", error);
            });
    }, []);

    return (
        <div>
            <h2>My Projects</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <p>Tech Stack: {project.tech_stack.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;
