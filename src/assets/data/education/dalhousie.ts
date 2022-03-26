const courses = [
  "Advanced Database Systems",
  "Cloud Computing",
  "Data Structures and Algorithms",
  "Design and Analysis of Algorithms",
  "Designing User Interfaces",
  "Intro to Computer Organization/Assembly Language",
  "Network Computing",
  "Network Security",
  "Operating Systems",
  "Principles of Programming Languages",
  "Software Development",
  "Technology Innovation",
]

export default {
  title: "Bachelor of Computer Science",
  organization: "Dalhousie University",
  location: "Halifax, NS",
  dateRanges: [
    {
      start: new Date("September 1, 2017"),
      end: new Date("September 1, 2021"),
    },
  ],
  descriptions: [
    "GPA: 3.92/4.3",
    "Participated in the Cooperative program which consisted of three co-op placement terms.",
    `Completed relevant courses including ${courses.join(", ")}.`,
  ],
}
