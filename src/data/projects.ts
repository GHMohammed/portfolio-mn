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
    id: "al-baheej",
    image: "/project/al-baheej/image1.png",
    demoUrl: "https://al-baheej-mn.netlify.app/",
    codeUrl: "https://github.com/GHMohammed/",
    isCodePrivate: true,
    featured: true,
    gallery: [
      "/project/al-baheej/image3.png",
      "/project/al-baheej/image4.png",
      "/project/al-baheej/image5.png",
    ],
    challenges: ["challenge1", "challenge2", "challenge3"],
    features: ["feature1", "feature2", "feature3", "feature4"],
  },
  {
    id: "al-aswad-real-estate",
    image: "/project/al-aswad-real-estate/image1.png",
    demoUrl: "https://al-aswad.netlify.app/",
    codeUrl: "https://github.com/GHMohammed/",
    isCodePrivate: true,
    featured: true,
    gallery: [
      "/project/al-aswad-real-estate/image2.png",
      "/project/al-aswad-real-estate/image3.png",
      "/project/al-aswad-real-estate/image4.png",
      "/project/al-aswad-real-estate/image5.png",
    ],
    challenges: ["challenge1", "challenge2", "challenge3"],
    features: ["feature1", "feature2", "feature3", "feature4"],
  },
  {
    id: "home-fix",
    image: "/project/home-fix/image1.png",
    demoUrl: "https://home-fix-mn.netlify.app/",
    codeUrl: "https://github.com/GHMohammed/",
    isCodePrivate: true,
    featured: true,
    gallery: [
      "/project/home-fix/image2.png",
      "/project/home-fix/image3.png",
      "/project/home-fix/image4.png",
      "/project/home-fix/image5.png",
      "/project/home-fix/image6.png",
    ],
    challenges: ["challenge1", "challenge2", "challenge3"],
    features: ["feature1", "feature2", "feature3"],
  },
  {
    id: "part-time",
    image: "/project/part-time/image1.png",
    demoUrl: "https://part-time-job-mn.netlify.app/",
    codeUrl: "https://github.com/GHMohammed/",
    isCodePrivate: true,
    featured: true,
    gallery: [
      "/project/part-time/image2.png",
      "/project/part-time/image3.png",
      "/project/part-time/image4.png",
    ],
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
