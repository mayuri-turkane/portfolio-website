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
      "Built secure JWT-authenticated ordering system with dynamic cart, combo logic, and menu items; integrated Razorpay for end-to-end payment flow. Developed ML demand prediction model improving inventory planning with ~85% accuracy; exposed all features via RESTful Flask APIs.",

    features: [
      "JWT Authentication & Dynamic Cart",
      "Razorpay End-to-End Payment",
      "ML Demand Prediction Model (~85% Accuracy)",
      "RESTful Flask APIs",
      "Responsive React Dashboard",
    ],

    technologies: [
      "React.js",
      "Flask",
      "MySQL",
      "Python",
      "Razorpay API",
      "JWT Auth",
      "Tailwind CSS",
    ],

    github: "https://github.com/mayuri-turkane/CampusCrave.git",
  },

  {
    id: 2,
    title: "Real-Time Human Detection & Counting",
    subtitle: "Computer Vision App",
    category: "Computer Vision",
    icon: FaEye,
    image: "/projects/human.png",

    description:
      "Engineered a real-time people detection and tracking system using YOLOv8 and ByteTrack with unique ID tracking to eliminate duplicate counts, deployed via an interactive Streamlit web interface; applicable for crowd monitoring and retail footfall analysis.",

    features: [
      "Real-Time Detection & Tracking",
      "YOLOv8 & ByteTrack",
      "Unique ID Tracking",
      "Interactive Streamlit Web Interface",
      "Crowd & Retail Footfall Analytics",
    ],

    technologies: [
      "Python",
      "OpenCV",
      "YOLOv8",
      "ByteTrack",
      "Streamlit",
    ],

    github: "https://github.com/mayuri-turkane/Real-Time-Human-Detection-and-Counting",
  },

  {
    id: 3,
    title: "Nutrition Analysis App",
    subtitle: "Android Application",
    category: "Android",
    icon: FaLeaf,
    image: "/projects/nutrition.png",

    description:
      "Developed an AI-powered app that analyzes food items using image recognition and provides nutritional insights.",

    features: [
      "AI Image Recognition",
      "Google Vision API Integration",
      "OpenAI API Analysis",
      "Nutritional Insights",
      "SQLite Database Storage",
    ],

    technologies: [
      "Java",
      "Android Studio",
      "Google Vision API",
      "OpenAI API",
      "SQLite",
    ],

    github: "https://github.com/mayuri-turkane/Nutrition-Analysis.git",
  },

  {
    id: 4,
    title: "Roommate Expense Splitter",
    subtitle: "Roommate Expense & Bill Splitting Platform",
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
];