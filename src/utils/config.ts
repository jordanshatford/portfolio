export const config = {
  GITHUB_GRAPHQL_API_ENDPOINT: "https://api.github.com/graphql",
  GITHUB_PERSONAL_ACCESS_TOKEN: import.meta.env.VITE_GITHUB_PERSONAL_ACCESS_TOKEN as string
}

export default config
