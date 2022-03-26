import type { Resume, User } from "@/utils/types"

const relevantCoursesDal = [
  "Advanced Database Systems",
  "Cloud Computing",
  "Data Structures and Algorithms",
  "Design and Analysis of Algorithms",
  "Designing User Interfaces",
  "Intro to Computer Organization/Assembly Language",
  "Network Computing",
  "Network Security",
  "Operating Systems",
  "Principles of Programming Languages",
  "Software Development",
  "Technology Innovation",
]

const resume: Resume = {
  education: {
    title: "Education",
    items: [
      {
        title: "Bachelor of Computer Science",
        dateRanges: [
          {
            start: new Date("September 1, 2017"),
            end: new Date("September 1, 2021"),
          },
        ],
        description: "Dalhousie University, Halifax, NS",
        longDescriptions: [
          "GPA: 3.92/4.3",
          "Participated in the Cooperative program which consisted of three co-op placement terms.",
          `Completed relevant courses including ${relevantCoursesDal.join(", ")}.`,
        ],
      },
    ],
  },
  professionalExperience: {
    title: "Professional Experience",
    items: [
      {
        title: "Software Developer",
        dateRanges: [
          {
            start: new Date("September 1, 2021"),
          },
        ],
        description: "Nautel, Hackett's Cove, NS",
        longDescriptions: [],
      },
      {
        title: "Software Developer Co-op",
        dateRanges: [
          {
            start: new Date("May 1, 2019"),
            end: new Date("August 1, 2019"),
          },
          {
            start: new Date("January 1, 2020"),
            end: new Date("May 1, 2020"),
          },
          {
            start: new Date("September 1, 2020"),
            end: new Date("December 1, 2020"),
          },
        ],
        description: "Nautel, Hackett's Cove, NS",
        longDescriptions: [],
      },
    ],
  },
}

export const user: User = {
  firstName: "Jordan",
  lastName: "Shatford",
  profilePicUrl: "https://avatars.githubusercontent.com/u/37837288?v=4",
  jobTitle: "Software Developer",
  jobCompany: "Nautel",
  jobDescription:
    "Development on a full project utilizing Vue.js, Typescript, SCSS, and C++. Performing code reviews on others work. Refactoring code to reduce duplication, increase code quality and ensure easier maintainability.",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet quam id hendrerit consequat. Sed nec orci venenatis, mollis mauris et, fermentum lorem. In sit amet tellus est. Curabitur pretium neque sed sem lacinia ullamcorper. Maecenas eget metus sollicitudin.",
  dateOfBirth: new Date("November 21, 1998"),
  location: "Halifax, NS, Canada",
  degree: "Bachelor Comp Sci",
  primaryEmail: "jordanshatford@live.com",
  primaryLanguage: "English",
  resume: resume,
  resumeLink: "/files/resume.pdf",
  socialLinks: {
    github: "https://github.com/jordanshatford",
    linkedin: "https://www.linkedin.com/in/jordan-shatford",
  },
  attributes: [
    {
      title: "Skills",
      values: [
        "Git",
        "TypeScript",
        "Vue.js",
        "JavaScript",
        "Python",
        "HTML5",
        "Django",
        "Svelte",
        "Node.js",
        "FastAPI",
        "Docker",
        "Sass",
        "CSS3",
        "C++",
        "Linux",
      ],
    },
    {
      title: "Experience Using",
      values: [
        "Prettier",
        "ESLint",
        "pnpm",
        "TailwindCSS",
        "Bootstrap",
        "Sentry",
        "pre-commit",
        "Vercel",
        "Heroku",
        "Codecov",
        "Atlassian",
        "p5.js",
      ],
    },
  ],
}

export default user
