import { Question } from "./types";

const questions: Question[] = [
  {
    id: 1,
    text: "Which specific areas within education does your organization focus on?",
    options: [
      "K-12 Education",
      "Higher Education (Colleges, Universities)",
      "Vocational Training and Skill Development",
      "Online Education Platforms and e-Learning",
      "Test Preparation (e.g., SAT, GRE, JEE)",
    ],
  },
  {
    id: 2,
    text: "What are the primary goals you aim to achieve by integrating AI into your test preparation services?",
    options: [
      "Enhancing personalized learning experiences for students",
      "Improving the accuracy of student performance assessments",
      "Providing predictive insights into student success rates",
      "Developing adaptive testing systems that adjust to student proficiency",
      "Increasing student engagement through interactive learning tools",
    ],
    multiple: true,
  },
  {
    id: 3,
    text: "Which specific student performance metrics would be most valuable for AI to analyze and optimize?",
    options: [
      "Accuracy in answering different question types (e.g., conceptual, analytical)",
      "Time taken per question or section",
      "Frequency of revisiting certain topics or questions",
      "Student engagement level in interactive tools",
      "Error patterns (e.g., repeated mistakes in specific topics)",
    ],
    multiple: true,
  },
  {
    id: 4,
    text: "What types of content or learning resources do you want AI to optimize or recommend to students based on their performance?",
    options: [
      "Practice quizzes or tests tailored to weak areas",
      "Explanatory videos and tutorials for difficult concepts",
      "Summaries or cheat sheets for quick review",
      "Interactive problem-solving sessions or simulations",
      "Real-time feedback on practice questions",
    ],
    multiple: true,
  },
  {
    id: 5,
    text: "How would you like AI to enhance the assessment and feedback process for students?",
    options: [
      "Provide instant, detailed feedback on each answer",
      "Generate periodic progress reports with insights on strengths and weaknesses",
      "Offer predictive insights on potential scores based on current performance",
      "Benchmark student performance against peers",
      "Track improvement in specific topics over time",
    ],
    multiple: true,
  },
  {
    id: 6,
    text: "What kind of interactive features would you like AI to incorporate to boost student engagement?",
    options: [
      "Gamified challenges or quizzes with levels and rewards",
      "AI-driven mock tests that adapt in difficulty based on responses",
      "Virtual study groups or discussion forums",
      "Real-time Q&A support or tutoring assistance",
      "Personalized achievement badges and progress milestones",
    ],
    multiple: true,
  },
];

export default questions;
