export interface Project {
  id: number
  title: string
  description: string[]
  image: string
  imageAlt: string
  liveUrl?: string
  githubUrl?: string
  tags: string[]
  gradient: string
}

export const projectsData: Project[] = [
  {
    id: 1,
    title: "Project 1 – Your Main Project",
    description: [
      "Briefly describe what this project is about",
      "Mention the problem it solves or the goal of the project",
      "Highlight the main features or technical challenges",
      "Explain what makes this project interesting or unique"
    ],
    image: "/images/project.jpg",
    imageAlt: "Project 1 preview image",
    liveUrl: "https://your-live-demo.com",
    githubUrl: "https://github.com/yourusername/project-1",
    tags: ["Your Tech", "Your Stack", "Feature 1", "Feature 2"],
    gradient: "from-emerald-500 to-cyan-500"
  },

  {
    id: 2,
    title: "Project 2 – Secondary Project",
    description: [
      "Short explanation of the project",
      "What technologies were used",
      "What you learned while building it",
      "How it was deployed or used"
    ],
    image: "/images/project.jpg",
    imageAlt: "Project 2 preview image",
    liveUrl: "https://your-live-demo.com",
    githubUrl: "https://github.com/yourusername/project-2",
    tags: ["Frontend", "Backend", "API", "Deployment"],
    gradient: "from-cyan-500 to-blue-500"
  },

  {
    id: 3,
    title: "Project 3 – Side or Learning Project",
    description: [
      "Describe the idea behind this project",
      "Mention any experiments or learning goals",
      "Explain the core functionality",
      "Share how this project helped you grow as a developer"
    ],
    image: "/images/project.jpg",
    imageAlt: "Project 3 preview image",
    githubUrl: "https://github.com/yourusername/project-3",
    tags: ["Side Project", "Learning", "Experiment"],
    gradient: "from-pink-500 to-rose-500"
  }
]
