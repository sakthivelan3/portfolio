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
          link="https://github.com/sriramkrish68/notes-from-youtube-video.git"
          h3="YouTube Notes Maker"
          p="Advanced Video Summarizer"
          techniques="Python, Streamlit, Gemini"
        />
        <ProjectCard
          src={cineVista}
          link="https://cine-vista.vercel.app/"
          h3="CineVista"
          p="Movie Management System"
          techniques="ReactJS, Firebase DB & Auth"
        />
        <ProjectCard
          src={railway}
          link="https://www.figma.com/design/A9SAjFG6OO71ibyfL2BAHY/Train-AR-App?node-id=0-1&t=7T5tXIDOvb6JQG4m-1"
          h3="Railway AR"
          p="UI Design on AR App"
          techniques="Figma, Adobe After Effects"
        />
        <ProjectCard
          // src={}
          link=""
          h3="Tour Page"
          p = "UI Design for Tour Details"
          techniques="Figma"
        />
        <ProjectCard
          link="https://www.figma.com/design/vJyNLTwSOzAnx8GtR5WhJp/Tamil-Notes?node-id=0-1&t=sQdmHelyNlpJxpBA-1"
          h3="Bilingual Notes App: English to Tamil Translation"
          p = "Notes app"
          techniques="Figma, Open-Source Illustrators"
        />
        <ProjectCard
          src={imagewizard}
          link="https://imagewizard.streamlit.app/"
          h3="Image Wizard"
          p="Image Enhancement Website"
          techniques="Python, Streamlit"
        />
        <ProjectCard
          src={typemaster}
          link="https://github.com/sakthivelan3/Typing_Test.git"
          h3="TypeMaster: Speed Typing Test"
          p="Measure your speed"
          techniques="HTML, CSS, JS"
        />
      </div>
    </section>
  );
}

export default Projects;
