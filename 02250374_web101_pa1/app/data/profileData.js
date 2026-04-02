export const profile = {
  username: "tyw",
  fullName: "Tandin Yoezer Wangmo",
  bio: "Software Student at CST | Learning React & Next.js | Building one project at a time",
  avatarUrl: "https://api.dicebear.com/9.x/adventurer/svg?seed=Avery&backgroundColor=b6e3f4",
  website: "https://github.com/02250374",
  company: "College Of Science and Technology",
  followers: 1500,
  following: 1,
  stars: 8,
  joinedYear: 2024,
};

export const pinnedRepos = [
  {
    id: 1,
    name: "weather-api",
    description: "A deployed weather API that lets you search real-time weather of any city or place worldwide. Built with Next.js and OpenWeatherMap API.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 12,
    forks: 4,
  },
  {
    id: 2,
    name: "02250374_WEB105_PA1",
    description: "Next.js recreation of the GitHub profile page. Built for WEB101 Practical Assignment 1 at CST, RUB.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 3,
    forks: 1,
  },
  {
    id: 3,
    name: "02240374_web102_tiktok implementation",
    description: "A TikTok feed page recreation built with React. Features scrollable video feed, like, comment and share buttons.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 18,
    forks: 6,
  },
  {
    id: 4,
    name: "instagram-clone",
    description: "Instagram profile and feed page recreation using Next.js. Includes stories, posts grid and follow button.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 21,
    forks: 8,
  },
  {
    id: 5,
    name: "02250374_DSO_P1",
    description: "Data structures and algorithms practice in JavaScript — CST coursework.",
    language: "JavaScript",
    languageColor: "#f1e05a",
    stars: 6,
    forks: 3,
  },
  {
    id: 6,
    name: "02250374_DSO_P2",
    description: "My personal portfolio website built with Next.js and deployed on Vercel.",
    language: "TypeScript",
    languageColor: "#3178c6",
    stars: 7,
    forks: 2,
  },
];

export const generateContributions = () => {
  const seed = [0,1,0,2,1,0,1,3,2,1,0,1,2,0,1,0,2,1,3,4,2,1,0,1,2,3,1,0,1,2,0,1,3,2,1,0,2,1,0,1,2,3,1,0,2,1,0,3,2,1,0,2];
  const weeks = [];
  for (let w = 0; w < 52; w++) {
    const days = [];
    for (let d = 0; d < 7; d++) {
      days.push(seed[(w * 7 + d) % seed.length]);
    }
    weeks.push(days);
  }
  return weeks;
};

export const recentActivity = [
  { id: 1, type: "push", repo: "02250374_WEB101_PA1", message: "feat: add contribution graph component", time: "2 hours ago" },
  { id: 2, type: "push", repo: "grade-tracker", message: "fix: correct GPA calculation formula", time: "1 day ago" },
  { id: 3, type: "star", repo: "Weather api", message: "Starred vercel/next.js", time: "2 days ago" },
  { id: 4, type: "issue", repo: "02250374_DSO_P1", message: "Opened issue: Add dark mode support", time: "3 days ago" },
];

export const tabs = ["Overview", "Repositories", "Projects", "Stars"];