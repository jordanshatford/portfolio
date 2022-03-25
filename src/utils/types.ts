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
