export const config = {
  GITHUB_GRAPHQL_API_ENDPOINT: "https://api.github.com/graphql",
  GITHUB_PERSONAL_ACCESS_TOKEN: import.meta.env.VITE_GITHUB_PERSONAL_ACCESS_TOKEN as string,
  EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
  EMAILJS_USER_ID: import.meta.env.VITE_EMAILJS_USER_ID as string,
  EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
}

export default config
