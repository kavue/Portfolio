import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import '../App.css';

const Footer = () => (
  <footer className="footer">
    <a href="https://github.com/kavue" target="_blank" rel="noopener noreferrer">
      <FaGithub size={30} />
    </a>
    <a href="https://linkedin.com/in/kavue" target="_blank" rel="noopener noreferrer">
      <FaLinkedin size={30} />
    </a>
    <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer">
      <FaStackOverflow size={30} />
    </a>
  </footer>
);

export default Footer;
