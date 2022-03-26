export interface GithubLanguage {
  size: number
  node: {
    id: string
    name: string
  }
}

export interface GithubLanguages {
  totalSize: number
  edges: GithubLanguage[]
}

export interface GithubRepositoryTopic {
  node: {
    topic: {
      id: string
      name: string
    }
  }
}

export interface GithubRepository {
  createdAt: string
  description?: string
  homepageUrl: string
  openGraphImageUrl: string
  isPrivate: boolean
  languages: GithubLanguages
  name: string
  repositoryTopics: {
    edges: GithubRepositoryTopic[]
  }
  url: string
}

export interface GithubUser {
  repositories: {
    nodes: GithubRepository[]
  }
}

export interface Attributes {
  title: string
  values: string[]
}

export interface DateRange {
  start: Date
  end?: Date
}

export interface ResumeSectionItem {
  title: string
  dateRanges: DateRange[]
  description: string
  longDescriptions: string[]
}

export interface ResumeSection {
  title: string
  items: ResumeSectionItem[]
}

export interface Resume {
  education: ResumeSection
  professionalExperience: ResumeSection
}

export interface User {
  firstName: string
  lastName: string
  profilePicUrl: string
  jobTitle: string
  jobCompany: string
  jobDescription: string
  bio: string
  dateOfBirth: Date
  location: string
  degree: string
  primaryEmail: string
  primaryLanguage: string
  resume: Resume
  resumeLink: string
  socialLinks: Record<string, string>
  attributes: Attributes[]
}
