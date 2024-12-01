import myImage from '../assets/developer.jpg';
import '../App.css';

const AboutMe = () => (
  <section className="about-me">
    <img src={myImage} alt="Developer" className="avatar" />
    <p>Hello! I'm a web developer passionate about creating dynamic and responsive applications.</p>
  </section>
);

export default AboutMe;
