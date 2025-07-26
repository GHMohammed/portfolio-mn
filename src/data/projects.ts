export interface Project {
  id: string;
  image: string;
  demoUrl: string;
  codeUrl: string;
  isCodePrivate: boolean;
  featured: boolean;
  gallery?: string[];
  challenges?: string[];
  features?: string[];
}

export const projects: Project[] = [
  {
    id: "justice-legal-portfolio",
    image: "/project/legal/image11.webp",
    demoUrl: "https://legal-portfolio-mn.netlify.app/",
    codeUrl: "https://github.com/GHMohammed/",
    isCodePrivate: true,
    featured: true,
    challenges: ["challenge1", "challenge2", "challenge3", "challenge4"],
    features: [
      "feature1",
      "feature2",
      "feature3",
      "feature4",
      "feature5",
      "feature6",
    ],
  },
  {
    id: "al-baheej",
    image: "/project/al-baheej/image1.jpg",
    demoUrl: "https://al-baheej-mn.netlify.app/",
    codeUrl: "https://github.com/GHMohammed/",
    isCodePrivate: true,
    featured: true,
    challenges: ["challenge1", "challenge2", "challenge3"],
    features: ["feature1", "feature2", "feature3", "feature4"],
  },
  {
    id: "al-aswad-real-estate",
    image: "/project/al-aswad-real-estate/image1.webp",
    demoUrl: "https://al-aswad.netlify.app/",
    codeUrl: "https://github.com/GHMohammed/",
    isCodePrivate: true,
    featured: true,
    challenges: ["challenge1", "challenge2", "challenge3"],
    features: ["feature1", "feature2", "feature3", "feature4"],
  },
  {
    id: "home-fix",
    image: "/project/home-fix/image1.webp",
    demoUrl: "https://home-fix-mn.netlify.app/",
    codeUrl: "https://github.com/GHMohammed/",
    isCodePrivate: true,
    featured: true,
    challenges: ["challenge1", "challenge2", "challenge3"],
    features: ["feature1", "feature2", "feature3"],
  },
  {
    id: "part-time",
    image: "/project/part-time/image1.webp",
    demoUrl: "https://part-time-job-mn.netlify.app/",
    codeUrl: "https://github.com/GHMohammed/",
    isCodePrivate: true,
    featured: true,
    challenges: ["challenge1", "challenge2", "challenge3"],
    features: ["feature1", "feature2", "feature3", "feature4"],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};

export const getAllProjects = (): Project[] => {
  return projects;
};
