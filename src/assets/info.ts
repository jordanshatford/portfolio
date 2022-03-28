import about from "@/assets/json/about.json"
import attributes from "@/assets/json/attributes.json"
import educations from "@/assets/json/educations.json"
import experiences from "@/assets/json/experiences.json"
import projects from "@/assets/json/projects.json"

const UNEMPLOYED_JOB = {
  title: "Software Developer",
  organization: "",
  location: "",
  dateRanges: [],
  descriptions: [],
}

function isEmployed() {
  return experiences.some(experience => {
    return experience.dateRanges.some(range => {
      return range.start && !range.end
    })
  })
}

export const info = {
  ...about,
  attributes,
  educations,
  experiences,
  projects,
  job: isEmployed() ? experiences[0] : UNEMPLOYED_JOB,
}
