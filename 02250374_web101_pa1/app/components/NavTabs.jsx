// NavTabs.jsx
// Tab navigation — demonstrates controlled component pattern.
// Parent owns active state and passes onChange handler down.

import styles from "./NavTabs.module.css";

function TabItem({ label, isActive, onClick }) {
  return (
    <button
      className={`${styles.tab} ${isActive ? styles.active : ""}`}
      onClick={() => onClick(label)}
      aria-selected={isActive}
      role="tab"
    >
      {label}
    </button>
  );
}

function NavTabs({ tabs, active, onChange }) {
  return (
    <nav className={styles.nav} role="tablist">
      {tabs.map(tab => (
        <TabItem key={tab} label={tab} isActive={tab === active} onClick={onChange} />
      ))}
    </nav>
  );
}

export default NavTabs;