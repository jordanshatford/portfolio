export { default as attributes } from "./attributes/index"
export { default as educations } from "./education/index"
export { default as experiences } from "./experience/index"
export { default as me } from "./me"

export interface Attribute {
  title: string
  values: string[]
}

export interface Experience {
  title: string
  organization: string
  location: string
  dateRanges: Array<{ start: Date; end?: Date }>
  descriptions: string[]
}

export interface MyInfo {
  name: { first: string; last: string }
  bio: string
  degree: string
  dob: Date
  email: string
  location: string
  language: string
  job: Experience
  socials: Record<string, string>
  pictureUrl: string
  resumeUrl: string
}
