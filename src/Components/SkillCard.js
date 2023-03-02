// Skill Card Component:
// Display skill name, description, and level of proficiency.
// Update and delete buttons to modify the skill.
import React from 'react'

function SkillCard({ name, description, onDelete, onUpdate }) {
    return (
        <div className="card">
        <h2>{name}Skill</h2>
        <p>{description} this is my skill</p>
        <div className="actions">
          <button onClick={onUpdate}>Update</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      </div>
  
    )
}

export default SkillCard
