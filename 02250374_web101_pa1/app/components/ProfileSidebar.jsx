// ProfileSidebar.jsx
// Displays avatar, name, bio, stats and metadata.
// Pure presentational component — receives all data via props.

import styles from "./ProfileSidebar.module.css";

function StatItem({ count, label }) {
  return (
    <span className={styles.statItem}>
      <strong>{count}</strong>
      <span className={styles.statLabel}> {label}</span>
    </span>
  );
}

function MetaItem({ icon, text, isLink }) {
  return (
    <div className={styles.metaItem}>
      <span>{icon}</span>
      {isLink ? (
        <a href={text} target="_blank" rel="noreferrer" className={styles.metaLink}>{text}</a>
      ) : (
        <span>{text}</span>
      )}
    </div>
  );
}

function ProfileSidebar({ profile }) {
  return (
    <aside className={styles.sidebar}>
      {/* Avatar */}
      <div className={styles.avatarWrapper}>
        <img src={profile.avatarUrl} alt={`${profile.username} avatar`} className={styles.avatar} />
      </div>

      {/* Name & username */}
      <h1 className={styles.fullName}>{profile.fullName}</h1>
      <p className={styles.username}>@{profile.username}</p>

      {/* Bio */}
      <p className={styles.bio}>{profile.bio}</p>

      {/* Follow button */}
      <button className={styles.followBtn}>Follow</button>

      {/* Stats */}
      <div className={styles.stats}>
        <StatItem count={profile.followers} label="followers" />
        <span className={styles.dot}>·</span>
        <StatItem count={profile.following} label="following" />
        <span className={styles.dot}>·</span>
        <StatItem count={profile.stars} label="stars" />
      </div>

      {/* Metadata */}
      <div className={styles.meta}>
        {profile.company && <MetaItem icon="🏢" text={profile.company} />}
        {profile.location && <MetaItem icon="📍" text={profile.location} />}
        {profile.website && <MetaItem icon="🔗" text={profile.website} isLink />}
        <MetaItem icon="📅" text={`Joined ${profile.joinedYear}`} />
      </div>
    </aside>
  );
}

export default ProfileSidebar;