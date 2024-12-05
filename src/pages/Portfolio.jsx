import AutoREADME from '../assets/AutoREADME.jpg';
import EmployeeTracker from '../assets/EmployeeTracker.jpg';
import VehicleBuilder from '../assets/VehicleBuilder.jpg';
import WeatherDashboard from '../assets/WeatherDashboard.jpg';
import CosmicQuest from '../assets/CosmicQuest.png';
import { FaGithub } from 'react-icons/fa';

const Portfolio = () => {
    const projects = [
      { title: 'Auto README', image: AutoREADME, live: '#', repo: '#' },
      { title: 'Employee Tracker', image: EmployeeTracker, live: '#', repo: '#' },
      { title: 'Vehicle Builder', image: VehicleBuilder, live: '#', repo: '#' },
      { title: 'Weather Dashboard', image: WeatherDashboard, live: '#', repo: '#' },
      { title: 'Cosmic Quest', image: CosmicQuest, live: '#', repo: '#' },
    ];
  
    return (
      <section className="portfolio">
        {projects.map((project, index) => (
          <div key={index} className="portfolio-item">
            <div className="image-container">
              <img src={project.image} alt={project.title} />
              <div className="image-overlay">
                <h3>{project.title}</h3>
                <a href={project.repo} target="_blank" rel="noopener noreferrer" className="github-icon">
                  <FaGithub size={30} />
                </a>
              </div>
            </div>
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              Live App
            </a>
          </div>
        ))}
      </section>
    );
  };
  
  export default Portfolio;
  