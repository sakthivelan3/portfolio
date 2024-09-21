import React from 'react';
import styles from './ProjectCard.module.css'
import { useTheme } from './ThemeContext.jsx';

function ProjectCard({ src, link, h3, p, techniques }) {
  const { theme } = useTheme();
  return (
    <a href={link} target="_blank">
     <div className={`${styles.flipCard} ${theme === 'light' ? styles.light : styles.dark}`}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <img className="hover" src={src} alt={`${h3} logo`} />
          <h3>{h3}</h3>
          <p>{p}</p>
        </div>
        <div className={styles.flipCardBack}>
          <h3>Techniques Used</h3>
          <p>{techniques}</p>
        </div>
      </div>
    </div>
    </a>
  );
}

export default ProjectCard;
