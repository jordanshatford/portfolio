import type { MyInfo } from "."
import { experiences } from "./experience"

export const me: MyInfo = {
  name: {
    first: "Jordan",
    last: "Shatford",
  },
  bio: "",
  degree: "Bachelor of Computer Science",
  dob: new Date("November 21, 1998"),
  email: "jordanshatford@live.com",
  location: "Halifax, NS, Canada",
  language: "English",
  job: experiences[0],
  socials: {
    github: "https://github.com/jordanshatford",
    linkedin: "https://www.linkedin.com/in/jordan-shatford",
  },
  pictureUrl: "https://avatars.githubusercontent.com/u/37837288?v=4",
  resumeUrl: "/files/resume.pdf",
}

export default me
