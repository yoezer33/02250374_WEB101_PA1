// ActivityFeed.jsx
// Renders a list of recent activity events from an array using .map()

import styles from "./ActivityFeed.module.css";

const TYPE_ICONS = { push: "⬆️", pr: "🔀", star: "⭐", issue: "🐛" };
const TYPE_LABELS = { push: "Pushed to", pr: "Opened PR in", star: "Starred", issue: "Issue in" };

function ActivityItem({ activity }) {
  return (
    <div className={styles.item}>
      <span className={styles.icon}>{TYPE_ICONS[activity.type] || "📌"}</span>
      <div className={styles.content}>
        <p className={styles.message}>
          <span className={styles.label}>{TYPE_LABELS[activity.type]} </span>
          <a href="#" className={styles.repoLink}>{activity.repo}</a>
        </p>
        <p className={styles.commit}>{activity.message}</p>
        <span className={styles.time}>{activity.time}</span>
      </div>
    </div>
  );
}

function ActivityFeed({ activities }) {
  return (
    <section className={styles.feed}>
      <h3 className={styles.title}>Recent Activity</h3>
      <div className={styles.list}>
        {activities.map(a => (
          <ActivityItem key={a.id} activity={a} />
        ))}
      </div>
    </section>
  );
}

export default ActivityFeed;