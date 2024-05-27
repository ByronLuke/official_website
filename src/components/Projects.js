import React from 'react';

const projects = [
  {
    title: 'Project One',
    description: 'Description of project one.',
    link: 'https://github.com/yourusername/project-one'
  },
  {
    title: 'Project Two',
    description: 'Description of project two.',
    link: 'https://github.com/yourusername/project-two'
  },
  {
    title: 'Project Three',
    description: 'Description of project three.',
    link: 'https://github.com/yourusername/project-three'
  }
];

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link}>View Project</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;