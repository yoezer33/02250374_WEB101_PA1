// RepoCard.jsx
// Reusable card component for displaying a single repository.
// Follows single responsibility principle — only renders repo data.

import styles from "./RepoCard.module.css";

function LanguageDot({ color }) {
  return (
    <span
      className={styles.langDot}
      style={{ backgroundColor: color }}
      aria-hidden="true"
    />
  );
}

function RepoCard({ repo }) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span>📁</span>
        <a href="#" className={styles.repoName}>{repo.name}</a>
      </div>
      <p className={styles.description}>{repo.description}</p>
      <footer className={styles.footer}>
        {repo.language && (
          <span className={styles.language}>
            <LanguageDot color={repo.languageColor} />
            {repo.language}
          </span>
        )}
        <span>⭐ {repo.stars}</span>
        <span>🍴 {repo.forks}</span>
      </footer>
    </article>
  );
}

export default RepoCard;