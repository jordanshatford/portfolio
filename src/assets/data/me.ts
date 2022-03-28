import type { Experience, MyInfo } from "."
import { experiences } from "./experience"

const UNEMPLOYED = {
  title: "Software Developer",
  organization: "",
  location: "",
  dateRanges: [],
  descriptions: [],
}

function isUnemployed(experiences: Experience[]): boolean {
  for (const experience of experiences) {
    for (const dateRange of experience.dateRanges) {
      if (dateRange.start && !dateRange.end) {
        return false
      }
    }
  }
  return true
}

export const me: MyInfo = {
  name: {
    first: "Jordan",
    last: "Shatford",
  },
  bio: "I am a full stack developer with a passion for learning and building things. I enjoy discovering simple solutions to complex problems. Currently exploring my extended interest in building responsive frontend applications using Vue.js and Svelte.",
  degree: "Bachelor of Computer Science",
  dob: new Date("November 21, 1998"),
  email: "jordanshatford@live.com",
  location: "Halifax, NS, Canada",
  language: "English",
  job: isUnemployed(experiences) ? UNEMPLOYED : experiences[0],
  socials: {
    github: "https://github.com/jordanshatford",
    linkedin: "https://www.linkedin.com/in/jordan-shatford",
  },
  pictureUrl: "https://avatars.githubusercontent.com/u/37837288?v=4",
}

export default me
