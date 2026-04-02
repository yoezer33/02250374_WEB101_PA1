// Header.jsx
// Top navigation bar with logo, search and theme toggle.
// Uses local state (useState) to track search focus.

"use client";
import { useState } from "react";
import styles from "./Header.module.css";

function Header({ onThemeToggle, isDark }) {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo */}
        <div className={styles.logo}>
          <span className={styles.logoIcon}>.|.</span>
          <span className={styles.logoText}>GitFolio</span>
        </div>

        {/* Search bar */}
        <div className={`${styles.searchWrapper} ${searchFocused ? styles.focused : ""}`}>
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search or jump to..."
            className={styles.searchInput}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
            aria-label="Search"
          />
          <span className={styles.shortcut}>/</span>
        </div>

        {/* Nav links */}
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>Pull requests</a>
          <a href="#" className={styles.navLink}>Issues</a>
          <a href="#" className={styles.navLink}>Explore</a>
        </nav>

        {/* Theme toggle */}
        <button className={styles.themeBtn} onClick={onThemeToggle} aria-label="Toggle theme">
          {isDark ? "On" : "0ff"}
        </button>
      </div>
    </header>
  );
}

export default Header;