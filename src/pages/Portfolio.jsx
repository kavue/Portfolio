import AutoREADME from '../assets/AutoREADME.jpg';
import EmployeeTracker from '../assets/EmployeeTracker.jpg';
import VehicleBuilder from '../assets/VehicleBuilder.jpg';
import WeatherDashboard from '../assets/WeatherDashboard.jpg';
import CosmicQuest from '../assets/CosmicQuest.png';
import CandidateSearch from '../assets/CandidateSearch.jpg';
import { FaGithub } from 'react-icons/fa';

const Portfolio = () => {
    const projects = [
      { title: 'Auto README', image: AutoREADME, repo: 'https://github.com/kavue/AutoREADME' },
      { title: 'Employee Tracker', image: EmployeeTracker, repo: 'https://github.com/kavue/EmployeeTracker' },
      { title: 'Vehicle Builder', image: VehicleBuilder, repo: 'https://github.com/kavue/VehicleBuilder' },
      { title: 'Weather Dashboard', image: WeatherDashboard, live: 'https://weatherdashboard-ywp8.onrender.com/', repo: 'https://github.com/kavue/WeatherDashboard' },
      { title: 'Cosmic Quest', image: CosmicQuest, live: 'https://xfigueroa.github.io/CosmicQuest-Project/', repo: ' https://github.com/xfigueroa/CosmicQuest-Project' },
      { title: 'Candidate Search', image: CandidateSearch, repo: 'https://github.com/' },
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
                <a href={project.live} target="_blank" rel="noopener noreferrer" className="live-app">
                  Live App
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  };
  
  export default Portfolio;
  