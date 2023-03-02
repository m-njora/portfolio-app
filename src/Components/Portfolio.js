// Portfolio Component:
// List of all the user's projects, with each project displayed in a Project Card Component.
// Form to add, update and delete projects, contained in a Project Form Component.
import React from 'react'
import ProjectCard from '../Components/ProjectCard';


function Portfolio() {
    return (
        
              <div>
                {/* Your portfolio content goes here */}
                <h1>Portfolio</h1>
                <p>This is my portfolio page.</p>
                <ProjectCard/>
              </div>
            );
 }
          


  
    


export default Portfolio
