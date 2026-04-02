// page.tsx
// Root page — composes all components into the full GitHub profile layout.
// Manages activeTab and isDark state, passes data down via props.

"use client";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import NavTabs from "./components/NavTabs";
import ProfileSidebar from "./components/ProfileSidebar";
import RepoCard from "./components/RepoCard";
import ContributionGraph from "./components/ContributionGraph";
import ActivityFeed from "./components/ActivityFeed";
import { profile, pinnedRepos, generateContributions, recentActivity, tabs } from "./data/profileData";
import styles from "./page.module.css";

import { useRef } from "react";
const contributions = generateContributions();

export default function Home() {
  const [activeTab, setActiveTab] = useState("Overview");
  const [isDark, setIsDark] = useState(true);

  // Sync theme with HTML data-theme attribute
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className={styles.app}>
      <Header onThemeToggle={() => setIsDark(p => !p)} isDark={isDark} />

      <div className={styles.tabBar}>
        <div className={styles.tabBarInner}>
          <NavTabs tabs={tabs} active={activeTab} onChange={setActiveTab} />
        </div>
      </div>

      <main className={styles.main}>
        <div className={styles.layout}>
          {/* Sidebar */}
          <aside className={styles.sidebarCol}>
            <ProfileSidebar profile={profile} />
          </aside>

          {/* Content */}
          <div className={styles.contentCol}>
            {activeTab === "Overview" && (
              <div className={styles.overview}>
                <ContributionGraph weeks={contributions} />
                <section>
                  <h2 className={styles.sectionTitle}>📌 Pinned Repositories</h2>
                  <div className={styles.reposGrid}>
                    {pinnedRepos.map(repo => <RepoCard key={repo.id} repo={repo} />)}
                  </div>
                </section>
                <ActivityFeed activities={recentActivity} />
              </div>
            )}

            {activeTab === "Repositories" && (
              <div className={styles.overview}>
                <h2 className={styles.sectionTitle}>All Repositories</h2>
                <div className={styles.reposGrid}>
                  {pinnedRepos.map(repo => <RepoCard key={repo.id} repo={repo} />)}
                </div>
              </div>
            )}

            {activeTab === "Projects" && (
              <div className={styles.emptyState}>
                <span className={styles.emptyIcon}>📋</span>
                <p>No projects yet.</p>
                <p className={styles.emptyHint}>Projects help you organise and prioritise your work.</p>
              </div>
            )}

            {activeTab === "Stars" && (
              <div className={styles.emptyState}>
                <span className={styles.emptyIcon}>⭐</span>
                <p>No starred repositories shown.</p>
                <p className={styles.emptyHint}>Stars help you keep track of interesting repositories.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}