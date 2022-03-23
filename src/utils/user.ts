interface Attributes {
  title: string
  values: string[]
}

interface User {
  firstName: string
  lastName: string
  profilePicUrl: string
  jobTitle: string
  jobDescription: string
  bio: string
  dateOfBirth: Date
  age: number
  location: string
  degree: string
  primaryEmail: string
  primaryLanguage: string
  socialLinks: Record<string, string>
  attributes: Attributes[]
}

function ageFromDate(date: Date) {
  const ageDiffMs = Date.now() - date.getTime()
  const age = Math.abs(new Date(ageDiffMs).getUTCFullYear() - 1970)
  return age
}

export const user: User = {
  firstName: "Jordan",
  lastName: "Shatford",
  profilePicUrl: "https://avatars.githubusercontent.com/u/37837288?v=4",
  jobTitle: "Software Developer",
  jobDescription: "This is a description of my current position.",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet quam id hendrerit consequat. Sed nec orci venenatis, mollis mauris et, fermentum lorem. In sit amet tellus est. Curabitur pretium neque sed sem lacinia ullamcorper. Maecenas eget metus sollicitudin.",
  dateOfBirth: new Date("1998-11-21T04:00:00.000Z"),
  age: ageFromDate(new Date("1998-11-21T04:00:00.000Z")),
  location: "Halifax, NS, Canada",
  degree: "Bachelor Comp Sci",
  primaryEmail: "jordanshatford@live.com",
  primaryLanguage: "English",
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
      ],
    },
  ],
}

export default user
