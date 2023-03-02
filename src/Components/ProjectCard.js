// Project Card Component:
// Display project name, description, image, and other details.
// Update and delete buttons to modify the project.
import React from 'react';

function ProjectCard({ name, description, onDelete, onUpdate }) {
  return (
    <div className="card">
      <h2>{name}Project</h2>
      <p>{description} this is my project</p>
      <div className="actions">
        <button onClick={onUpdate}>Update</button>
        <button onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
}

export default ProjectCard;
