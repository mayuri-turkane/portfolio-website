import {
  FaUtensils,
  FaEye,
  FaBook,
  FaLeaf,
  FaChartLine,
  FaShieldAlt,
  FaShoppingBag,
  FaTruck,
  FaRobot,
  FaMoneyBillWave,
  FaWarehouse,
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
    live: null,
  },

  {
    id: 2,
    title: "Real-Time Human Detection & Counting",
    subtitle: "Computer Vision & AI Tracking App",
    category: "AI & Computer Vision",
    icon: FaEye,
    image: "/projects/human.png",

    description:
      "Engineered a real-time people detection and tracking system using YOLOv8 and ByteTrack with unique ID tracking to eliminate duplicate counts, deployed via an interactive Streamlit web interface; applicable for crowd monitoring and retail footfall analysis.",

    features: [
      "Real-Time Detection & Tracking",
      "YOLOv8 & ByteTrack",
      "Unique ID Tracking (Eliminates Duplicate Counts)",
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
    live: null,
  },

  {
    id: 3,
    title: "Mayu's Library",
    subtitle: "Open Library & Book Discovery Platform",
    category: "Web Application",
    icon: FaBook,
    image: "/projects/library.png",

    description:
      "Open Library Platform designed for discovering, exploring, searching, and accessing books with an intuitive user interface, interactive catalog, and responsive web experience.",

    features: [
      "Book Discovery & Exploration",
      "Search & Category Filtering",
      "Interactive Book Catalog UI",
      "RESTful API Data Fetching",
      "Responsive Mobile-Friendly Layout",
    ],

    technologies: [
      "React.js",
      "TypeScript",
      "REST APIs",
      "Tailwind CSS",
      "Vite",
    ],

    github: "https://github.com/mayuri-turkane/Mayu-s-Library",
    live: "https://page-port-inky.vercel.app",
  },

  {
    id: 4,
    title: "Next.js Analytics Dashboard",
    subtitle: "Modern Financial & Admin Dashboard",
    category: "Full Stack",
    icon: FaChartLine,
    image: null,

    description:
      "A modern, responsive financial and administrative dashboard application built with Next.js App Router, TypeScript, and Tailwind CSS. Features interactive revenue charts, customer management, invoice workflows, and authenticated sessions.",

    features: [
      "Next.js App Router Architecture",
      "Real-Time Revenue & Invoice Analytics",
      "Customer Management & CRUD Workflows",
      "Server-Side Rendering & Optimization",
      "Mobile-Responsive Modern UI",
    ],

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Vercel",
    ],

    github: "https://github.com/mayuri-turkane/nextjs-dashboard",
    live: "https://nextjs-dashboard-sooty-gamma-91.vercel.app",
  },

  {
    id: 5,
    title: "Secure Portal",
    subtitle: "Role-Based Auth & Data Management",
    category: "Full Stack",
    icon: FaShieldAlt,
    image: null,

    description:
      "Secure Portal built with React.js and Supabase for robust user authentication, authorization, and secure role-based data management with real-time database synchronization.",

    features: [
      "Supabase Authentication & Authorization",
      "Role-Based Access Control (RBAC)",
      "Real-Time Database Sync",
      "Protected Route Architecture",
      "Clean Dashboard & Profile UI",
    ],

    technologies: [
      "React.js",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS",
      "JavaScript",
    ],

    github: "https://github.com/mayuri-turkane/Secure-portal",
    live: null,
  },

  {
    id: 6,
    title: "Roommate Expense Splitter",
    subtitle: "Smart Bill Splitting & Debt Simplification",
    category: "Web Application",
    icon: FaMoneyBillWave,
    image: "/projects/roommate.png",

    description:
      "Full-stack roommate expense management web application with smart bill splitting, algorithmic debt simplification to minimize transactions, and interactive debt settlement visualization.",

    features: [
      "Smart Expense & Bill Splitting",
      "Debt Simplification Algorithm",
      "Interactive Settlement Visualizations",
      "Multi-User Expense Tracking",
      "Exportable Expense Reports",
    ],

    technologies: [
      "React.js",
      "JavaScript",
      "Node.js",
      "Tailwind CSS",
      "Chart.js",
    ],

    github: "https://github.com/mayuri-turkane/roommate-expense-splitter",
    live: null,
  },

  {
    id: 7,
    title: "Nutrition Analysis App",
    subtitle: "AI-Powered Android Nutrition Tracker",
    category: "Mobile & AI",
    icon: FaLeaf,
    image: "/projects/nutrition.png",

    description:
      "Developed an AI-powered Android application that captures food images, utilizes Google Vision & OpenAI APIs to identify meal items, and delivers precise nutritional breakdowns and calorie insights.",

    features: [
      "AI Food Image Recognition",
      "Google Vision API & OpenAI Integration",
      "Nutritional Breakdown & Calorie Counts",
      "SQLite Local Database Storage",
      "Clean Native Android User Experience",
    ],

    technologies: [
      "Java",
      "Android Studio",
      "Google Vision API",
      "OpenAI API",
      "SQLite",
    ],

    github: "https://github.com/mayuri-turkane/Nutrition-Analysis.git",
    live: null,
  },

  {
    id: 8,
    title: "StorePlus",
    subtitle: "E-Commerce & Store Management Platform",
    category: "Full Stack",
    icon: FaShoppingBag,
    image: null,

    description:
      "Full-featured modern e-commerce storefront with dynamic product listings, category filters, interactive shopping cart, order checkout, and administrative inventory controls.",

    features: [
      "Dynamic Product Catalog & Filtering",
      "Persistent Shopping Cart & Checkout",
      "Order Management System",
      "Responsive E-Commerce UI",
      "RESTful API Integration",
    ],

    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "REST APIs",
      "Node.js",
    ],

    github: "https://github.com/mayuri-turkane/StorePlus",
    live: null,
  },

  {
    id: 9,
    title: "Tiffin Tracker",
    subtitle: "Meal Subscription & Delivery Management",
    category: "Full Stack",
    icon: FaTruck,
    image: null,

    description:
      "A complete Tiffin Management System built with React, Java, JDBC, and MySQL for managing customer meal subscriptions, daily dietary plans, kitchen operations, and delivery scheduling.",

    features: [
      "Customer Subscription Management",
      "Daily Meal Plan Customization",
      "Automated Delivery Scheduling",
      "JDBC & MySQL Database Layer",
      "Administrative Management Console",
    ],

    technologies: [
      "React.js",
      "Java",
      "JDBC",
      "MySQL",
      "Tailwind CSS",
    ],

    github: "https://github.com/mayuri-turkane/Tiffin-Tracker",
    live: null,
  },

  {
    id: 10,
    title: "BotLeague",
    subtitle: "Robotics Competition & Showcase Platform",
    category: "Web Application",
    icon: FaRobot,
    image: null,

    description:
      "A modern, responsive robotics competition platform built with React, TypeScript, and Vite. Features event showcases, competition categories, user registration journey, dynamic leaderboard, and sponsor highlights.",

    features: [
      "Event Showcases & Categorization",
      "Dynamic Competition Leaderboard",
      "Interactive User Journey & Registration",
      "Sponsor & Partner Highlights",
      "High-Performance Animations",
    ],

    technologies: [
      "React.js",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
    ],

    github: "https://github.com/mayuri-turkane/botleague",
    live: null,
  },

  {
    id: 11,
    title: "Inventory Dashboard",
    subtitle: "Stock & Warehouse Analytics Platform",
    category: "Web Application",
    icon: FaWarehouse,
    image: null,

    description:
      "Interactive warehouse inventory management dashboard that monitors stock levels, tracks incoming and outgoing shipments, generates low-stock alerts, and visualizes inventory trends.",

    features: [
      "Real-Time Stock Level Monitoring",
      "Shipment Inbound & Outbound Tracking",
      "Automated Low-Stock Alerts",
      "Interactive Trend Analytics Charts",
      "Data Export & Inventory Audits",
    ],

    technologies: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "Chart.js",
      "Vercel",
    ],

    github: "https://github.com/mayuri-turkane/Inventory-Dashboard",
    live: "https://inventory-dashboard-indol.vercel.app",
  },
];