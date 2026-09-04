const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const withBasePath = (path: string) => `${basePath}${path}`;

export const projects = [
  { name: "WeatherWise", type: "Full Stack", desc: "An AI-powered weather planner with activity and safety recommendations.", tech: ["React", "FastAPI", "scikit-learn", "Open-Meteo"], image: withBasePath("/projects/weatherwise.png"), url: "https://github.com/fatima448/weatherwise" },
  { name: "Explain-This-AI", type: "Artificial Intelligence", desc: "An NLP application that rewrites complex English into clearer language.", tech: ["Python", "FastAPI", "React", "BART"], image: withBasePath("/projects/explain-this-ai.png"), url: "https://github.com/fatima448/explainthis-ai" },
  { name: "Brain Tumor Detection", type: "Machine Learning", desc: "A deep-learning project for classifying MRI images in tumor-detection workflows.", tech: ["Python", "TensorFlow", "Keras", "OpenCV"], image: withBasePath("/projects/brain-tumor-cover.png"), url: "https://github.com/fatima448/ML-projects/tree/main/brain-tumor-detection" },
  { name: "Heart Disease Prediction", type: "Machine Learning", desc: "A model that predicts heart-disease likelihood from clinical attributes.", tech: ["Python", "Pandas", "scikit-learn", "Jupyter"], image: withBasePath("/projects/heart-disease-cover.png"), url: "https://github.com/fatima448/ML-projects/tree/main/heart-disease-prediction" },
  { name: "Emotion Recognition", type: "Machine Learning", desc: "A CNN classifier for Angry, Happy, Neutral, and Sad facial expressions.", tech: ["Python", "TensorFlow", "OpenCV", "CNN"], image: withBasePath("/projects/emotion-recognition-cover.png"), url: "https://github.com/fatima448/ML-projects/tree/main/emotion-recognition" },
];
