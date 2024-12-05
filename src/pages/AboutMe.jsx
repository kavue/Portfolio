import myImage from '../assets/developer.jpg';
import '../App.css';

const AboutMe = () => (
  <section className="about-me">
    <h1>About Me</h1>
    <img src={myImage} alt="Developer" className="avatar" />
    <p>Hello! I'm a beginner programmer with a passion for learning and growing in the tech world. I recently embarked on my coding 
      journey and am excited to expand my skills in web development, programming languages, and creating meaningful applications. I enjoy 
      solving problems and embracing challenges, and I am always eager to learn new technologies and techniques to enhance my coding knowledge.</p>
  </section>
);

export default AboutMe;
