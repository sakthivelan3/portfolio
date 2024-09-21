import styles from './ProjectsStyles.module.css';

import chatbot from '../../assets/chatbot-logo.png'
import youtube from '../../assets/youtubenotes-logo.png'
import cineVista from '../../assets/cinveVista-logo.png'
import railway from '../../assets/railway-logo.png'
import imagewizard from '../../assets/imagewizard-logo.png'
import typemaster from '../../assets/typemaster-logo.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={chatbot}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Sidhha Chatbot"
          p="Tamil language Chatbot"
          techniques="Python, Tesseract, Pytesseract, Fasttext"
        />
        <ProjectCard
          src={youtube}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="YouTube Notes Maker"
          p="Advanced Video Summarizer"
          techniques="Python, Streamlit, Gemini"
        />
        <ProjectCard
          src={cineVista}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="CineVista"
          p="Movie Management System"
          techniques="ReactJS, Firebase DB & Auth"
        />
        <ProjectCard
          src={railway}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Railway AR"
          p="UI Design on AR App"
          techniques="Figma, Adobe After Effects"
        />
        <ProjectCard
          src={imagewizard}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Image Wizard"
          p="Image Enhancement Website"
          techniques="Python, Streamlit"
        />
        <ProjectCard
          src={typemaster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="TypeMaster: Speed Typing Test"
          p="Measure your speed"
          techniques="HTML, CSS, JS"
        />
      </div>
    </section>
  );
}

export default Projects;
