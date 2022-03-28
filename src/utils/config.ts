export const config = {
  EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string,
  EMAILJS_USER_ID: import.meta.env.VITE_EMAILJS_USER_ID as string,
  EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
  COPYRIGHT: {
    YEAR: new Date().getFullYear(),
    CREATOR: "Jordan Shatford",
    REPO: "https://github.com/jordanshatford/portfolio",
  },
}

export default config
