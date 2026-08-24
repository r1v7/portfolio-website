export type Project = {
  slug: string;
  title: string;
  category: "Design" | "AI & Data";
  summary: string;
  cover: string;
  gallery: string[];
  tags: string[];
  overview: string[];
  process?: string[];
  stack: string[];
  year: string;
};

export const projects: Project[] = [
  {
    slug: "gymtech",
    title: "GymTech App",
    category: "Design",
    summary:
      "A fitness and nutrition planning app delivering personalized workout routines, tracking, and analytics through an intuitive, purple-themed interface.",
    cover: "/img/gymtech-app.png",
    gallery: ["/img/gymtech-app.png", "/img/gymtech-app2.png"],
    tags: ["UI/UX", "Figma", "Mobile Design"],
    overview: [
      "GymTech is a comprehensive fitness application designed to transform how users approach their health journey. The app provides personalized workout routines, detailed nutrition tracking, and comprehensive health analytics through an intuitive interface.",
      "The distinctive purple-themed design combines modern aesthetics with functional elements to enhance user engagement and motivation. The UI/UX was carefully crafted to ensure accessibility and ease of use while maintaining a visually appealing experience.",
    ],
    process: [
      "The design process began with extensive user research to understand the pain points of existing fitness applications. User personas were created to guide the design decisions, ensuring the final product met the needs of various user types.",
      "Wireframes established the basic structure and flow of the application, followed by high-fidelity mockups incorporating the visual design system. User testing at multiple stages refined the interface and improved the overall experience.",
    ],
    stack: ["Figma", "UI/UX Design", "Prototyping"],
    year: "2025",
  },
  {
    slug: "strayhaven",
    title: "Stray Haven",
    category: "Design",
    summary:
      "A compassionate pet adoption platform connecting stray animals with loving homes through an accessible, green-themed mobile experience.",
    cover: "/img/strayhaven-app.png",
    gallery: ["/img/strayhaven-app.png"],
    tags: ["UI/UX", "Mobile App"],
    overview: [
      "Stray Haven is a mobile application designed to connect stray animals with loving homes. The app provides a seamless experience for users to browse adoptable pets, track adoption status, receive notifications about rescued animals, and manage their adoption journey.",
      "The compassionate green-themed design symbolizes growth and care, creating an emotional connection with users while maintaining a clean and intuitive interface. The UI/UX was carefully crafted for accessibility across diverse user groups.",
    ],
    process: [
      "The design process began with extensive user research, including interviews with pet adopters and shelter staff, to understand pain points in the current adoption process. User personas guided every subsequent decision.",
      "Wireframes established the app's information architecture and core user flows, followed by high-fidelity mockups. User testing at various stages refined the interface and improved the overall user experience.",
    ],
    stack: ["Figma", "UI/UX Design", "Mobile App Design"],
    year: "2025",
  },
  {
    slug: "movie-recommendation",
    title: "Movie Recommendation System",
    category: "AI & Data",
    summary:
      "A hybrid recommendation engine combining collaborative and content-based filtering, achieving 82.71% weighted accuracy on a 129,890-entry dataset.",
    cover: "/img/movie-recommendation.png",
    gallery: ["/img/movie-recommendation.png", "/img/Accuracy.png", "/img/Genres.png"],
    tags: ["Python", "Machine Learning", "PySpark", "AWS"],
    overview: [
      "This project aimed to develop a personalized movie recommendation system using machine learning to address the challenge of content overload on streaming platforms. By leveraging collaborative filtering (user ratings) and content-based filtering (metadata like genres and descriptions), the team built a hybrid model to deliver accurate and diverse recommendations.",
      "The system utilized a Kaggle dataset of 129,890 entries, focusing on enhancing user experience through tailored suggestions while mitigating common biases found in recommendation systems, achieving 82.71% weighted accuracy.",
    ],
    stack: ["Python", "PySpark", "AWS", "Scikit-Learn"],
    year: "2025",
  },
];

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
