# 02250374_WEB101_PA1

**WEB101 Practical Assignment 1 — GitHub Profile Page Recreation**  
Tandin Yoezer Wangmo
Student ID: 02250374  
College of Science and Technology, Phuentsholing 
Royal University of Bhutan

---
## GitHub User Profile Page** — "https://github.com/yoezer33/02250374_WEB101_PA1"

# Page Recreated

The GitHub user profile page was selected for this assignment because it demonstrates a well-structured and component-based layout that is good  for recreating using React. It includes multiple reusable UI components such as profile cards, navigation tabs, contribution heatmaps, and activity feeds. These elements allow for effective practice of component design, state management, and props usage.

Additionally, the page follows a clear and responsive design system, making it suitable for implementing responsive layouts across desktop, tablet, and mobile devices. By recreating this page, I was able to gain practical experience in structuring components, styling layouts, and replicating real-world user interfaces using modern web development techniques.


# Functionality Achieved
The recreated page successfully implements all the required functionalities, including a fully responsive layout that adapts seamlessly across mobile, tablet, and desktop devices. It also features a dark and light theme toggle, enhancing user accessibility and experience. The interface includes tab navigation for sections such as Overview, Repositories, Projects, and Stars, along with a well-structured profile sidebar displaying the avatar, bio, statistics, and other metadata. In addition, the page contains pinned repository cards with language indicators and key statistics, a 52-week contribution heatmap, and a recent activity feed to reflect user interactions. A global header with a search input is also implemented, providing consistent and intuitive navigation throughout the page.



# Component Architecture
The application follows a clear and modular component-based architecture. The main App component (page.tsx) manages the overall state, including the active tab selection and the dark/light theme toggle. It renders the Header, which contains the search input, navigation links, and theme toggle button, ensuring consistent global navigation.

Below the header, the NavTabs component controls the tab-based navigation, with individual TabItem components representing the sections: Overview, Repositories, Projects, and Stars. The layout is then divided into two main sections: a ProfileSidebar and a Content Area. The sidebar includes reusable StatItem components for displaying follower, following, and star counts, along with MetaItem components that present additional profile details such as company, location, website, and year.

The main content area dynamically changes based on the selected tab and includes components such as the ContributionGraph, which renders a 52-week activity grid using SVG cells, RepoCard components that are generated using the .map() function to display multiple repositories with language indicators, and an ActivityFeed that contains multiple ActivityItem components to represent recent user activities. This structured approach enhances reusability, maintainability, and scalability of the application.

# React Concept Demonstrated
1. Component-Based Architecture
Each user interface element is implemented as a separate component with a single responsibility. For example, the RepoCard component is responsible only for rendering repository data and does not handle data fetching or state management, making the application more modular and maintainable.

2. Props & Data Flow
Data flows in a unidirectional manner from profileData.js → page.tsx → child components via props. No component independently fetches data, which ensures that components remain reusable, predictable, and easy to test.

3. State Management (useState)
The application uses React’s useState hook to manage key states, including:
activeTab — controls which content panel is displayed
isDark — manages the theme and updates CSS variables
searchFocused — handles local UI state for the search input focus effect in the Header component

4. Side Effects (useEffect)
The page.tsx component utilizes the useEffect hook to synchronize the isDark state with a data-theme attribute on document.documentElement. This approach enables global theme changes using CSS variables throughout the application.

5. Conditional Rendering
Different content sections are rendered dynamically based on the value of activeTab. The && operator is used to conditionally display the relevant components, improving performance and user experience.

6. List Rendering (.map())
Components such as RepoCard, ActivityItem, TabItem, and the contribution graph cells are rendered dynamically using the .map() method on arrays. Each item is assigned a unique key prop to ensure efficient rendering and updates.

7. CSS Modules
The application uses CSS Modules to scope styles locally to each component. This prevents style conflicts and promotes better organization by keeping styles co-located with their respective components.
# Design Decisions
Dark-first theme — The application adopts a dark-first design, similar to GitHub’s default interface, while also allowing users to toggle between dark and light modes for improved accessibility and user preference.
CSS Custom Properties — All colors are defined using CSS variables, enabling efficient and seamless theme switching across the entire application.
SVG for Contribution Graph — The contribution graph is implemented using SVG elements instead of a traditional grid of div elements, ensuring precise rendering, scalability, and better accessibility.
CSS Grid Layout — A CSS Grid system is used to create the two-column layout, which gracefully adapts to a single-column layout on smaller screen sizes for responsive design.

# Technologies Used
next.js 
react component 
react dom