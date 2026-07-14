import {
  FaUtensils,
  FaEye,
  FaWallet,
  FaLeaf,
} from "react-icons/fa";

export const projects = [
  {
    id: 1,
    title: "CampusCrave",
    subtitle: "Full Stack Food Ordering Platform",
    category: "Full Stack",
    icon: FaUtensils,
    image: "/projects/campuscrave.png",


    description:
      "CampusCrave is a full-stack food ordering platform designed for college canteens. Students can browse menus, place orders, create group orders, and split payments through an intuitive and responsive interface.",

    features: [
      "Online Food Ordering",
      "Group Ordering",
      "Split Payment",
      "Responsive Dashboard",
      "REST API Integration",
    ],

    technologies: [
      "React.js",
      "Flask",
      "MySQL",
      "Tailwind CSS",
      "Git",
    ],

    github: "https://github.com/mayuri-turkane/CampusCrave.git",
  },

  {
    id: 2,
    title: "Roommate Expense Splitter",
    subtitle:"Roommate Expense & Bill Splitting Platform",
    category: "Web Application",
    icon: FaWallet,
    image: "/projects/roommate.png",

    description:
      "Expense management application that simplifies bill splitting, balance tracking, and payment records among roommates.",

    features: [
      "Expense Tracking",
      "Balance Calculation",
      "Payment History",
      "Split Bills",
      "User Friendly Interface",
    ],

    technologies: [
      "React.js",
      "Java",
      "SQLite",
      "Git",
    ],

    github: "https://github.com/mayuri-turkane/roommate-expense-splitter.git",
  },

  {
    id: 3,
    title: "Human Detection & Counting",
    subtitle: "Real-Time Computer Vision System",
    category: "Computer Vision",
    icon: FaEye,
    image: "/projects/human.png",

    description:
      "Computer Vision application capable of detecting and counting people in real time using OpenCV and image processing techniques.",

    features: [
      "Real-Time Detection",
      "Person Counting",
      "Live Camera",
      "OpenCV",
      "Optimized Performance",
    ],

    technologies: [
      "Python",
      "OpenCV",
      "NumPy",
    ],

    github: "#",
  },

  {
    id: 4,
    title: "Nutrition Analysis APK",
    subtitle: "Android Nutrition Application",
    category: "Android",
    icon: FaLeaf,
    image: "/projects/nutrition.png",

    description:
      "Android application that recognizes food images and provides nutritional analysis using image processing.",

    features: [
      "Image Recognition",
      "Nutrition Analysis",
      "SQLite Database",
      "Android UI",
      "Simple Navigation",
    ],

    technologies: [
      "Java",
      "SQLite",
      "Android Studio",
    ],

    github: "https://github.com/mayuri-turkane/Nutrition-Analysis.git",
  },
];