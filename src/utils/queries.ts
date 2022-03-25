export const GetViewerReposQuery = `
  query GetViewerReposQuery {
    viewer {
      repositories(first: 100, isFork: false, privacy: PUBLIC) {
        nodes {
          name
          description
          url
          homepageUrl
          openGraphImageUrl
          isPrivate
          createdAt
          repositoryTopics(first: 5) {
            edges {
              node {
                topic {
                  id
                  name
                }
              }
            }
          }
          languages(first: 5) {
            totalSize
            edges {
              size
              node {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`
