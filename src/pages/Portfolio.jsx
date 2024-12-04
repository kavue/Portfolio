const Portfolio = () => {
    const projects = [
      { title: 'Project 1', image: 'image1.jpg', live: '#', repo: '#' },
      // Add more projects
    ];
  
    return (
      <section className="portfolio">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              Live App
            </a>
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
              GitHub Repo
            </a>
          </div>
        ))}
      </section>
    );
  };
  
  export default Portfolio;
  