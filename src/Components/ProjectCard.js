// Project Card Component:
// Display project name, description, image, and other details.
// Update and delete buttons to modify the project.
import React from 'react';

function ProjectCard({ name, description, image, url, githubUrl, onDelete, onUpdate }) {
  return (
    <div className="project-card">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{description}</p>
      <div className="project-links">
        <a href={url} target="_blank" rel="noopener noreferrer">View project</a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">View code on GitHub</a>
      </div>
      <div className="project-actions">
        <button onClick={onUpdate}>Update</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default ProjectCard;
