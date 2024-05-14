import React from 'react';

const Project = ({ projects }) => (
  <div>
    {projects.map((project, index) => (
      <div key={index}>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
        {/* Add more project details here */}
      </div>
    ))}
  </div>
);

export default Project;