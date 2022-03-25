interface Attributes {
  title: string
  values: string[]
}

interface DateRange {
  start: Date
  end?: Date
}

interface ResumeSectionItem {
  title: string
  dateRanges: DateRange[]
  description: string
  longDescriptions: string[]
}

export interface ResumeSection {
  title: string
  items: ResumeSectionItem[]
}

interface Resume {
  education: ResumeSection
  professionalExperience: ResumeSection
}

interface User {
  firstName: string
  lastName: string
  profilePicUrl: string
  jobTitle: string
  jobCompany: string
  jobDescription: string
  bio: string
  dateOfBirth: Date
  age: number
  location: string
  degree: string
  primaryEmail: string
  primaryLanguage: string
  resume: Resume
  resumeLink: string
  socialLinks: Record<string, string>
  attributes: Attributes[]
}

function ageFromDate(date: Date) {
  const ageDiffMs = Date.now() - date.getTime()
  const age = Math.abs(new Date(ageDiffMs).getUTCFullYear() - 1970)
  return age
}

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
          "GPA: 3.88/4.3",
          "Participated in the Cooperative program which consisted of three co-op placement terms.",
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
  dateOfBirth: new Date("1998-11-21T04:00:00.000Z"),
  age: ageFromDate(new Date("1998-11-21T04:00:00.000Z")),
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
