import React, { useState, useEffect } from 'react';
import { Code, Briefcase, GraduationCap, Award, Mail, Linkedin, Github, ExternalLink, BookOpen, Trophy, Users } from 'lucide-react';


// function ProjectCard({ project, index, bgOpacity, textColor, subTextColor }) {
//   const [visible, setVisible] = React.useState(false);
//   const ref = React.useRef(null);

//   React.useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//         }
//       },
//       { threshold: 0.6 }
//     );

//     if (ref.current) observer.observe(ref.current);
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={ref}
//       className={`
//         min-h-[80vh] flex items-center justify-center
//         transition-all duration-1000 ease-out
//         ${
//           visible
//             ? "opacity-100 translate-x-0 scale-100 blur-0"
//             : index % 2 === 0
//             ? "opacity-0 -translate-x-32 scale-95 blur-sm"
//             : "opacity-0 translate-x-32 scale-95 blur-sm"
//         }
//       `}
//     >
//       <div
//         className="max-w-3xl w-full p-10 rounded-3xl border-2 border-purple-500/30 shadow-2xl backdrop-blur-xl"
//         style={{
//           backgroundColor: `rgba(168, 85, 247, ${0.05 + (1 - bgOpacity) * 0.08})`,
//         }}
//       >
//         <ExternalLink className="text-purple-500 mb-6" size={40} />

//         <h3 className="text-4xl font-bold mb-4" style={{ color: textColor }}>
//           {project.title}
//         </h3>

//         <p className="text-purple-500 font-semibold mb-4 text-lg">
//           {project.tech}
//         </p>

//         <p className="text-lg leading-relaxed" style={{ color: subTextColor }}>
//           {project.description}
//         </p>
//       </div>
//     </div>
//   );
// }

function SplitProject({ project, index }) {
  const ref = React.useRef(null);
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const fromLeft = index % 2 === 0;

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* WHITE PANEL (slides in) */}
      <div
        className="absolute top-0 bottom-0 bg-white transition-all duration-1000 ease-out"
        style={{
          width: active ? "50%" : "0%",
          left: fromLeft ? "50%" : "0",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 h-screen flex items-center">
        <div
          className={`
            w-1/2 px-16 transition-all duration-1000 ease-out
            ${fromLeft ? "ml-auto" : "mr-auto"}
            ${
              active
                ? "translate-x-0 opacity-100"
                : fromLeft
                ? "translate-x-40 opacity-0"
                : "-translate-x-40 opacity-0"
            }
          `}
        >
          <h3 className="text-4xl font-bold mb-4 text-gray-900">
            {project.title}
          </h3>

          <p className="text-purple-600 font-semibold mb-4">
            {project.tech}
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </section>
  );
}

















export default function Portfolio() {
  const [scrollProgress, setScrollProgress] = useState(0);
const [activeProject, setActiveProject] = React.useState(-1);


  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const bgOpacity = Math.min(scrollProgress / 15, 1);
  const textColor = scrollProgress > 15 ? '#1f2937' : '#ffffff';
  const subTextColor = scrollProgress > 15 ? '#4b5563' : '#d1d5db';


  const experiences = [
  {
    title: "Research Intern",
    company: "Indian Institute of Technology Bombay",
    period: "January 2025 - Present",
    location: "Onsite",
    points: [
      "Built ATME-based biometric models with frequency-domain preprocessing, achieving a 22.3% SSIM improvement over DiT and superior FID scores of 25.12 on PolyU and 26.14 on TDFD.",
      "Developed a U-Net-based BioPix2Pix architecture for fingerprint super-resolution, achieving complete minutiae preservation and ridge integrity across test datasets. ",
      "Collaborated with UIDAI, Government of India, to develop a liveness detection system integrating gesture recognition, knuckle detection, and hand-tracking for robust anti-spoofing. ",
    ],
  },
  {
    title: "Research Intern",
    company: "SP Jain Institute of Management and Research",
    period: "February 2025 - Present",
    location: "Remote",
    points: [
      "Developed and implemented a flipped-classroom LMS for three courses and 75 students, integrating course-builder tools, multimedia learning content, and analytics dashboards.",
      "Implemented engagement tracking modules leveraging video-interaction analytics (clickstream, pause/rewind ratio) and quiz performance analysis, achieving a 28% increase in pre-class material completion rate. ",
      "Integrated an AI-based pre-class Q&A chatbot that resolved 41% of student queries, reduced instructor workload by 35%, and improved learning outcomes, with 60% of students demonstrating stronger self-regulated learning. ",
    ],
  },
  {
    title: "Teaching Assistant",
    company: "Sardar Patel Institute of Technology",
    period: "February 2025 - Present",
    location: "Onsite",
    points: [
      "Conducted and supervised 2 PSOOP lab batches, designing coding exercises, grading rubrics, and performance tracking; compiled the Course Attainment File for accreditation. ",
      "Provided academic support for Artificial Intelligence and Soft Computing by handling 4 laboratory batches and 2 theory classes. ",
      "Curated presentations, lab tasks, and laboratory experiments for Artificial Intelligence and Soft Computing. ",
    ],
  },
  {
    title: "IoT & Data Engineering Intern",
    company: "Sonicbolt Technologies LLP",
    period: "August 2025 - November 2025",
    location: "Remote",
    points: [
      "Engineered a Python-based load-profiling pipeline ingesting 25K+ hourly records per month to generate high-resolution consumption curves, improving energy insight accuracy by 40%.",
      "Standardized data models for 120+ field devices and implemented validation routines, reducing ingestion errors by 42% and significantly strengthening backend data quality.",
    ],
  },
  {
    title: "Research Assistant",
    company: "Sardar Patel Institute of Technology",
    period: "February 2025 - July 2025",
    location: "Onsite",
    points: [
      "Applied advanced NLP on 150K+ citizen feedback records, uncovering 30% awareness and accessibility gaps that informed targeted digital-governance interventions. ",
      "Designed STEM learning interventions for underprivileged children by combining literature review from 40+ studies and 200+ field responses. ",
    ],
  },
  {
    title: "SDE Intern",
    company: "ADN Fire Safety Pvt. Ltd.",
    period: "November 2024 - February 2025",
    location: "Hybrid",
    points: [
      "Formulated a high-efficiency data model restructuring 1,500+ historical transactions, improving analytical throughput by 35%.",
      "Devised an optimization-driven procurement model predicting cost-optimal sourcing points, enabling 12% projected savings per quarter.",
      "Improved analytical processing speed by 28% through optimized data structuring and feature extraction.",
    ],
  },
  {
    title: "Data Science Intern",
    company: "Evovastra Ventures (OPC) Pvt Limited",
    period: "July 2024 - August 2024",
    location: "Remote",
    points: [
      "Developed an NLP-based classification framework leveraging BERT, boosting customer response classification accuracy by 10 percent, with an F1-score of 0.80 and Precision of 84 percent. ",
      "Engineered a market trend-driven prioritization model using time-series forecasting with Prophet and feature engineering, improving prioritization outcomes by 10 percent and reducing RMSE from 14.1 to 12.4. ",
    ],
  },
  {
    title: "Data Analytics Intern",
    company: "OnEMI Technology Solutions Private Limited",
    period: "June 2024 - July 2024",
    location: "Onsite",
    points: [
      "Developed credit risk variables by integrating bureau data with SMS-based alternate data, improving AUC and K-S metrics by 8% and 5% in underwriting models for creditworthiness. ",
      "Formulated an ensemble model integrating DPD (Days Past Due), Repeatability, Bureau (CIBIL/Equifax), and DPD-agnostic analyses to evaluate customer behavior, achieving a 4% portfolio risk for 90+ NPA. ",
      "Applied Zero-Shot Classification with a large language model (LLM) to perform multi-class categorization of customer queries and sub-queries, achieving 80% classification accuracy.",
    ],
  },
];






  const projects = [
  {
    title: "A/V Translation in Indian Languages",
    tech: "PyTorch, Neural Machine Translation, GAN, Wav2Lip, ASR, TTS",
    description: "Built an end-to-end audiovisual translation and dubbing system. Leveraged Wav2Lip’s pretrained GAN for realistic lip-synchronization. Implemented a multilingual ASR→NMT→TTS pipeline for English→Indic translation and speech synthesis, achieving BLEU score of 31.5 and Lip-Sync Confidence of 0.92."
  },
  {
    title: "Adaptive Reinforcement Learning for Equity Markets",
    tech: "OpenAI Gym, PyTorch, StableBaselines3, A2C, DQN",
    description: "Constructed a Gym-based RL trading simulator for Indian stocks using OHLCV and technical indicators (RSI, ER, PVI). Trained A2C and DQN agents over 70,000+ timesteps. Achieved 26% superior returns for A2C vs. buy-and-hold. Validated via hyperparameter tuning and backtesting; DQN results were inconsistent."
  },
  {
    title: "SpectraScan: Early Detection of Parkinson’s Biomarkers",
    tech: "CSS, Flask, TensorFlow, Scikit-learn, CA-ViT, Google Firebase",
    description: "Modeled temporal progression of Parkinson’s biomarkers using sequential learning, achieving 88% early-stage detection accuracy and reducing false negatives by 30%. Designed a cross-attention fusion model (CA-ViT) integrating mammography and patient metadata, achieving 0.95 AUC and outperforming unimodal baselines by 6%."
  },
  
];


const publications = [
  "Authentic Fingerprint Reconstruction via Wavelet-ATME with Super-Resolution Verification (Under review at IEEE Transactions on Information Forensics and Security, 2025)",
  "Graph Neural Approaches to Credit Scoring: Interpretable Learning with GCN and GAT (2nd Asia Pacific Conference on Innovation in Technology, 2025)",
  "Hybrid Optimization and Explainability-Driven Framework for Creditworthiness Assessment (IEEE 4th International Conference for Advancement in Technology, 2025)",
  "Comparative Analysis of Optimized Machine Learning and Deep Learning Models for Credit Risk Prediction (1st IEEE International Conference on Data Science and Intelligent Network Computing, 2025)",
  "Uncertainty-Aware Osteoporosis Classification with Calibrated Transformer and OOD Detection (7th International Conference on Innovative Data Communication Technologies and Application, 2025)",
  "Evaluating Graph Neural Network Architectures for Credit Scoring: A Comparative Analysis (2nd International Conference on Computational Intelligence and Computing Applications, 2025)",
  "Comparative Analysis of Transformer Models for Skin Lesion Detection (IEEE 4th International Conference on Computer Vision and Machine Intelligence, 2025)",
  "Memory Augmented Transformers for Scalable Urban Traffic Forecasting (International Conference on Intelligent and Innovative Practices in Engineering & Management, 2025)",
];
  const skills = {
    languages: ["Python", "C++", "JavaScript", "SQL", "Java", "R", "MATLAB"],
    frameworks: ["TensorFlow", "PyTorch", "Django", "Flask", "NodeJS", "FastAPI", "OpenCV"],
    tools: ["Kubernetes", "Docker", "Git", "PostgreSQL", "MongoDB", "Neo4j"]
  };

  return (
    <div 
      className="min-h-screen transition-all duration-700" 
      style={{
        backgroundColor: `rgb(${255 * bgOpacity}, ${255 * bgOpacity}, ${255 * bgOpacity})`
      }}
    >
    
      <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 relative z-10">
         
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <div className="space-y-4">
              <h1 
                className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient"
                style={{
                  backgroundSize: '200% 200%',
                  animation: 'gradient 3s ease infinite'
                }}
              >
                Hi, I'm Purav
              </h1>
              <p className="text-2xl lg:text-4xl font-semibold transition-colors duration-700" style={{color: textColor}}>
                Machine Learning & AI Researcher
              </p>
            </div>
            
            <p className="text-lg lg:text-xl max-w-2xl mx-auto lg:mx-0 transition-colors duration-700" style={{color: subTextColor}}>
           
            </p>
            
            <p className="text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 transition-colors duration-700" style={{color: subTextColor}}>
              Passionate about Machine Learning, NLP, and building innovative solutions. 
              Published researcher with 8+ papers and multiple hackathon wins.
            </p>
            
            <div className="flex gap-4 justify-center lg:justify-start flex-wrap">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-2xl"
              >
                Get In Touch
              </a>
              <a 
                href="#projects" 
                className="px-8 py-4 border-2 rounded-full font-semibold hover:scale-105 transition-all shadow-lg"
                style={{
                  borderColor: scrollProgress > 15 ? '#3b82f6' : '#ffffff',
                  color: scrollProgress > 15 ? '#3b82f6' : '#ffffff'
                }}
              >
                View Projects
              </a>
            </div>
            
            <div className="flex gap-6 justify-center lg:justify-start pt-4">
              <a href="mailto:purav.ahya22@spit.ac.in" className="hover:scale-110 transition-transform">
                <Mail size={28} style={{color: textColor}} />
              </a>
              <a href="https://linkedin.com/in/purav-ahya" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <Linkedin size={28} style={{color: textColor}} />
              </a>
              <a href="https://github.com/PuravAhya" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                <Github size={28} style={{color: textColor}} />
              </a>
            </div>
          </div>
          
          
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-1 shadow-2xl">
                <img 
                  src="/profile.jpg" 
                  alt="Purav Ahya"
                  className="w-64 h-64 lg:w-96 lg:h-96 rounded-3xl object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-bold shadow-xl">
                
              </div>
            </div>
          </div>
        </div>
        
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{borderColor: textColor}}>
            <div className="w-1 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

    
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border-2 border-blue-500/20 hover:border-blue-500 transition-all hover:shadow-xl" style={{backgroundColor: `rgba(59, 130, 246, ${0.05 + (1 - bgOpacity) * 0.1})`}}>
              <GraduationCap className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-2" style={{color: textColor}}>Education</h3>
              <p style={{color: subTextColor}}>B.Tech in Computer Engineering from SPIT Mumbai with 9.78 GPA</p>
            </div>
            <div className="p-6 rounded-2xl border-2 border-purple-500/20 hover:border-purple-500 transition-all hover:shadow-xl" style={{backgroundColor: `rgba(168, 85, 247, ${0.05 + (1 - bgOpacity) * 0.1})`}}>
              <BookOpen className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2" style={{color: textColor}}>Research</h3>
              <p style={{color: subTextColor}}>8+ publications in IEEE and international conferences on AI/ML</p>
            </div>
            <div className="p-6 rounded-2xl border-2 border-pink-500/20 hover:border-pink-500 transition-all hover:shadow-xl" style={{backgroundColor: `rgba(236, 72, 153, ${0.05 + (1 - bgOpacity) * 0.1})`}}>
              <Trophy className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-bold mb-2" style={{color: textColor}}>Achievements</h3>
              <p style={{color: subTextColor}}>Multiple hackathon wins and NPTEL course topper certifications</p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 px-6" style={{backgroundColor: `rgba(249, 250, 251, ${bgOpacity})`}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{color: textColor}}>
                <Code className="text-blue-500" /> Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{color: textColor}}>
                <Code className="text-purple-500" /> Frameworks
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.frameworks.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{color: textColor}}>
                <Code className="text-pink-500" /> Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((skill, idx) => (
                  <span key={idx} className="px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-full font-semibold shadow-lg hover:scale-105 transition-transform">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section id="experience" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="p-6 rounded-2xl border-2 border-blue-500/20 hover:border-blue-500 transition-all hover:shadow-xl" style={{backgroundColor: `rgba(59, 130, 246, ${0.03 + (1 - bgOpacity) * 0.05})`}}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold" style={{color: textColor}}>{exp.title}</h3>
                    <p className="text-xl text-blue-500 font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold" style={{color: textColor}}>{exp.period}</p>
                    <p style={{color: subTextColor}}>{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex gap-2" style={{color: subTextColor}}>
                      <span className="text-blue-500 font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* <section id="experience" className="py-24 bg-black relative">
  <h2 className="text-4xl font-bold text-center text-cyan-400 mb-20">
    Experience
  </h2>

 
  <div className="absolute left-1/2 top-40 bottom-20 w-[2px] bg-gray-600"></div>

  <div className="max-w-7xl mx-auto space-y-32 px-6">
    {experiences.map((exp, index) => {
      const isRight = index % 2 === 0;

      return (
        <div key={index} className="relative flex items-start">

         
          {!isRight && (
            <div className="w-1/2 pr-16 text-right">
              <h3 className="text-2xl font-semibold text-green-400">
                {exp.title}
              </h3>

              <p className="text-lg text-white mt-1">
                {exp.company}
              </p>

              <p className="text-sm text-gray-400 mt-1">
                {exp.period} · {exp.location}
              </p>

              
              <ul className="mt-4 space-y-3 text-gray-300 text-sm leading-relaxed">
                {exp.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </div>
          )}

          
          <div className="absolute left-1/2 -translate-x-1/2 mt-2">
            <div className="w-4 h-4 rounded-full bg-green-400"></div>
          </div>

          
          {isRight && (
            <div className="w-1/2 pl-16 text-left">
              <h3 className="text-2xl font-semibold text-green-400">
                {exp.title}
              </h3>

              <p className="text-lg text-white mt-1">
                {exp.company}
              </p>

              <p className="text-sm text-gray-400 mt-1">
                {exp.period} · {exp.location}
              </p>

              
              <ul className="mt-4 space-y-3 text-gray-300 text-sm leading-relaxed">
                {exp.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </div>
          )}

        </div>
      );
    })}
  </div>
</section> */}

{/* 
<section id="experience" className="py-24 bg-black relative">
  <h2 className="text-4xl font-bold text-center text-cyan-400 mb-20">
    Experience
  </h2>

 
  <div className="absolute left-1/2 top-40 bottom-20 w-[2px] bg-gray-600"></div>

  <div className="max-w-7xl mx-auto space-y-32 px-6">
    {experiences.map((exp, index) => {
      const isLeft = index % 2 === 0;

      return (
        <div key={index} className="relative flex w-full">

          
          {isLeft && (
            <div className="w-1/2 pr-16">
              <h3 className="text-2xl font-semibold text-green-400">
                {exp.title}
              </h3>

              <p className="text-lg text-white mt-1">
                {exp.company}
              </p>

              <p className="text-sm text-gray-400 mt-1">
                {exp.period} · {exp.location}
              </p>

              <ul className="mt-4 space-y-3 text-gray-300 text-sm leading-relaxed">
                {exp.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </div>
          )}

         
          <div className="absolute left-1/2 -translate-x-1/2 top-2">
            <div className="w-4 h-4 rounded-full bg-green-400"></div>
          </div>

         
          {!isLeft && (
            <div className="w-1/2 pl-16 ml-auto">
              <h3 className="text-2xl font-semibold text-green-400">
                {exp.title}
              </h3>

              <p className="text-lg text-white mt-1">
                {exp.company}
              </p>

              <p className="text-sm text-gray-400 mt-1">
                {exp.period} · {exp.location}
              </p>

              <ul className="mt-4 space-y-3 text-gray-300 text-sm leading-relaxed">
                {exp.points.map((point, i) => (
                  <li key={i}>• {point}</li>
                ))}
              </ul>
            </div>
          )}

        </div>
      );
    })}
  </div>
</section> */}


      
      {/* <section id="projects" className="py-20 px-6" style={{backgroundColor: `rgba(249, 250, 251, ${bgOpacity})`}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="p-6 rounded-2xl border-2 border-purple-500/20 hover:border-purple-500 transition-all hover:shadow-xl hover:-translate-y-2" style={{backgroundColor: `rgba(168, 85, 247, ${0.05 + (1 - bgOpacity) * 0.08})`}}>
                <ExternalLink className="text-purple-500 mb-4" size={32} />
                <h3 className="text-2xl font-bold mb-2" style={{color: textColor}}>{project.title}</h3>
                <p className="text-sm text-purple-500 font-semibold mb-3">{project.tech}</p>
                <p style={{color: subTextColor}}>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}


      {/* <section
  id="projects"
  className="py-20 px-6"
  style={{ backgroundColor: `rgba(249, 250, 251, ${bgOpacity})` }}
>
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl lg:text-5xl font-bold mb-20 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
      Featured Projects
    </h2>

    <div className="space-y-32">
      {projects.map((project, idx) => (
        <ProjectCard
          key={idx}
          project={project}
          index={idx}
          bgOpacity={bgOpacity}
          textColor={textColor}
          subTextColor={subTextColor}
        />
      ))}
    </div>
  </div>
</section> */}


{/* <section
  id="projects"
  className="transition-colors duration-1000"
  style={{
    backgroundColor:
      activeIndex === -1
        ? "black"
        : `rgba(249, 250, 251, 1)`,
  }}
>
  <div className="max-w-6xl mx-auto px-6 py-32 space-y-32">
    <h2
      className={`text-4xl lg:text-5xl font-bold text-center mb-20 transition-colors duration-1000 ${
        activeIndex === -1 ? "text-white" : "text-gray-900"
      }`}
    >
      Featured Projects
    </h2>

    {projects.map((project, idx) => (
      <div
        key={idx}
        className={`
          min-h-[80vh] flex items-center justify-center
          transition-all duration-1000 ease-out
          ${
            activeIndex >= idx
              ? "opacity-100 translate-x-0"
              : idx % 2 === 0
              ? "opacity-0 -translate-x-40"
              : "opacity-0 translate-x-40"
          }
        `}
      >
        <div className="max-w-3xl p-10 rounded-3xl bg-white shadow-2xl">
          <h3 className="text-4xl font-bold mb-4">
            {project.title}
          </h3>
          <p className="text-purple-500 font-semibold mb-4">
            {project.tech}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</section> */}



{/* <section
  id="projects"
  className="transition-colors duration-1000"
  style={{
    backgroundColor: activeIndex === -1 ? "black" : "#f9fafb",
  }}
>
  <div className="max-w-6xl mx-auto px-6 py-32 space-y-40">
    <h2
      className={`text-4xl lg:text-5xl font-bold text-center transition-colors duration-1000 ${
        activeIndex === -1 ? "text-white" : "text-gray-900"
      }`}
    >
      Featured Projects
    </h2>

    {projects.map((project, idx) => (
      <ProjectItem
        key={idx}
        index={idx}
        project={project}
        setActiveIndex={setActiveIndex}
        activeIndex={activeIndex}
      />
    ))}
  </div>
</section> */}





<section id="projects">
  {projects.map((project, idx) => (
    <SplitProject
      key={idx}
      project={project}
      index={idx}
    />
  ))}
</section>












      
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Publications
          </h2>
          <div className="space-y-4">
            {publications.map((pub, idx) => (
              <div key={idx} className="p-6 rounded-2xl border-2 border-pink-500/20 hover:border-pink-500 transition-all hover:shadow-xl" style={{backgroundColor: `rgba(236, 72, 153, ${0.05 + (1 - bgOpacity) * 0.08})`}}>
                <p className="flex gap-3" style={{color: textColor}}>
                  <span className="text-pink-500 font-bold text-xl">{idx + 1}.</span>
                  <span>{pub}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/*       
      <section className="py-20 px-6" style={{backgroundColor: `rgba(249, 250, 251, ${bgOpacity})`}}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Leadership & Awards
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl border-2 border-blue-500/20 hover:border-blue-500 transition-all hover:shadow-xl" style={{backgroundColor: `rgba(59, 130, 246, ${0.05 + (1 - bgOpacity) * 0.08})`}}>
              <Users className="text-blue-500 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3" style={{color: textColor}}>Director of Professional Development</h3>
              <p className="font-semibold text-blue-500 mb-2">Rotaract Club of SPIT (2024-2025)</p>
              <p style={{color: subTextColor}}>Led flagship events engaging 250+ participants across departments</p>
            </div>
            <div className="p-6 rounded-2xl border-2 border-purple-500/20 hover:border-purple-500 transition-all hover:shadow-xl" style={{backgroundColor: `rgba(168, 85, 247, ${0.05 + (1 - bgOpacity) * 0.08})`}}>
              <Trophy className="text-purple-500 mb-4" size={40} />
              <h3 className="text-2xl font-bold mb-3" style={{color: textColor}}>Hackathon Achievements</h3>
              <ul className="space-y-2" style={{color: subTextColor}}>
                <li>🏆 Winner - DataHack 3.0 (Oct 2024)</li>
                <li>🏆 Winner - SPIT SE Hackathon (Apr 2024)</li>
                <li>🥈 Runner-up - Technovate 2.0 (Oct 2024)</li>
              </ul>
            </div>
          </div>
        </div>
      </section> */}





{/* <section className="py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
      Leadership & Awards
    </h2>

    <div className="relative w-full max-w-4xl mx-auto h-96">
      
      <div className="absolute inset-0 m-auto w-64 h-32 bg-blue-500 text-white rounded-2xl flex items-center justify-center font-bold shadow-2xl z-10">
        Rotaract Club of SPIT
      </div>

    
      <div className="absolute top-0 left-0 w-56 p-4 bg-pink-500/20 rounded-2xl border-2 border-pink-500 shadow-xl flex flex-col items-center text-center">
        <Trophy className="text-pink-500 mb-2" size={28} />
        <p className="font-semibold text-pink-600">Winner - DataHack 3.0</p>
        <p className="text-sm text-gray-700">Oct 2024</p>
      </div>

      <div className="absolute top-0 right-0 w-56 p-4 bg-purple-500/20 rounded-2xl border-2 border-purple-500 shadow-xl flex flex-col items-center text-center">
        <Trophy className="text-purple-500 mb-2" size={28} />
        <p className="font-semibold text-purple-600">Winner - SPIT SE Hackathon</p>
        <p className="text-sm text-gray-700">Apr 2024</p>
      </div>

      <div className="absolute bottom-0 left-0 w-56 p-4 bg-green-500/20 rounded-2xl border-2 border-green-500 shadow-xl flex flex-col items-center text-center">
        <Trophy className="text-green-500 mb-2" size={28} />
        <p className="font-semibold text-green-600">Runner-up - Technovate 2.0</p>
        <p className="text-sm text-gray-700">Oct 2024</p>
      </div>

      <div className="absolute bottom-0 right-0 w-56 p-4 bg-yellow-500/20 rounded-2xl border-2 border-yellow-500 shadow-xl flex flex-col items-center text-center">
        <Trophy className="text-yellow-500 mb-2" size={28} />
        <p className="font-semibold text-yellow-600">Samwad Award - UIDAI</p>
        <p className="text-sm text-gray-700">2025</p>
      </div>
    </div>
  </div>
</section> */}

{/* <section className="py-20 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
      Leadership & Awards

    </h2>

    <div className="relative w-full max-w-5xl mx-auto h-[28rem] lg:h-[32rem]">
      
      <div className="absolute inset-0 m-auto w-72 lg:w-80 h-40 lg:h-48 bg-blue-500/40 text-blue-10 rounded-3xl flex items-center justify-center font-bold shadow-2xl z-10 transform transition-all duration-700 hover:scale-105 animate-fadeIn">
        Rotaract Club of SPIT
        <p className="font-semibold text-pink-600">
    Winner - DataHack 3.0
  </p>
  <p className="text-sm text-gray-700">
    <span className="block">Apr 2024</span>
  </p>
      </div>
      



      <div className="absolute top-0 left-0 w-64 lg:w-72 p-6 bg-pink-500/20 rounded-3xl border-2 border-pink-500 shadow-xl flex flex-col items-center text-center transform transition-all duration-700 hover:scale-105 animate-fadeIn"
  style={{ animationDelay: '0.2s' }}
>
  <Trophy className="text-pink-500 mb-3" size={32} />
  <p className="font-semibold text-pink-600">
    Winner - DataHack 3.0
  </p>
  <p className="text-sm text-gray-700">
    <span className="block">Apr 2024</span>
  </p>
</div>


    
      <div className="absolute top-0 right-0 w-64 lg:w-72 p-6 bg-purple-500/20 rounded-3xl border-2 border-purple-500 shadow-xl flex flex-col items-center text-center transform transition-all duration-700 hover:scale-105 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
        <Trophy className="text-purple-500 mb-3" size={32} />
        <p className="font-semibold text-purple-600">Winner - SPIT SE Hackathon</p>
        <p className="text-sm text-gray-700">Apr 2024</p>
      </div>

   
      <div className="absolute bottom-0 left-0 w-64 lg:w-72 p-6 bg-green-500/20 rounded-3xl border-2 border-green-500 shadow-xl flex flex-col items-center text-center transform transition-all duration-700 hover:scale-105 animate-fadeIn" style={{ animationDelay: '0.6s' }}>
        <Trophy className="text-green-500 mb-3" size={32} />
        <p className="font-semibold text-green-600">Runner-up - Technovate 2.0</p>
        <p className="text-sm text-gray-700">Oct 2024</p>
      </div>

    
      <div className="absolute bottom-0 right-0 w-64 lg:w-72 p-6 bg-yellow-500/20 rounded-3xl border-2 border-yellow-500 shadow-xl flex flex-col items-center text-center transform transition-all duration-700 hover:scale-105 animate-fadeIn" style={{ animationDelay: '0.8s' }}>
        <Trophy className="text-yellow-500 mb-3" size={32} />
        <p className="font-semibold text-yellow-600">Samwad Award - UIDAI</p>
        <p className="text-sm text-gray-700">2025</p>
      </div>
    </div>
  </div>

  <style>{`
    @keyframes fadeIn {
      0% { opacity: 0; transform: translateY(20px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn {
      animation: fadeIn 0.8s ease forwards;
    }
  `}</style>
</section> */}



<section className="py-24 px-6 relative overflow-hidden bg-black">
  {/* Floating dots background */}
  <div className="absolute inset-0 pointer-events-none">
    {[...Array(80)].map((_, i) => (
      <span
        key={i}
        className="absolute w-1 h-1 bg-white/20 rounded-full"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
      />
    ))}
  </div>

  <div className="relative z-10 max-w-7xl mx-auto">
    <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-cyan-400">
      Leadership & Awards
    </h2>
    <p className="text-center text-gray-400 mb-16">
      Some of my achievements that I am proud of
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      
      {/* Card 1 */}
      <div className="bg-orange-500 rounded-2xl p-8 text-white shadow-xl hover:scale-105 transition">
        <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center mb-4">
          <Trophy size={24} />
        </div>
        <h3 className="text-xl font-bold mb-2">DataHack 3.0 Winner</h3>
        <p className="text-sm text-white/90">
          Winner of DataHack 3.0 held by DJ Sanghavi College of Engineering in Oct 2024 among 300+ teams.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-red-500 rounded-2xl p-8 text-white shadow-xl hover:scale-105 transition">
        <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center mb-4">
          <Trophy size={24} />
        </div>
        <h3 className="text-xl font-bold mb-2">Runner up at Technovate 2.0 Hackathon</h3>
        <p className="text-sm text-white/90">
        Runner up at Technovate 2.0 Hackathon organized by SPIT in Oct 2024 among 300+ teams.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-blue-500 rounded-2xl p-8 text-white shadow-xl hover:scale-105 transition">
        <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center mb-4">
          <Trophy size={24} />
        </div>
        <h3 className="text-xl font-bold mb-2">Winner at SPIT SE Hackathon</h3>
        <p className="text-sm text-white/90">
          Winner at SE Hackathon held by Sardar Patel Institute of Technology in Apr 2024 among 150+ teams.
        </p>
      </div>
 {/* Card 5 */}
      <div className="bg-green-500 rounded-2xl p-8 text-white shadow-xl hover:scale-105 transition">
        <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center mb-4">
          <Trophy size={24} />
        </div>
        <h3 className="text-xl font-bold mb-2">Samvaad Award by UIDAI in April 2025</h3>
        <p className="text-sm text-white/90">
          Solved 1000+ problems on CodeChef, LeetCode & Codeforces with 15+ badges.
        </p>
      </div>
      {/* Card 4 */}
      <div className="bg-purple-500 rounded-2xl p-8 text-white shadow-xl hover:scale-105 transition">
        <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center mb-4">
          <Users size={24} />
        </div>
        <h3 className="text-xl font-bold mb-2">Director of Professional Development</h3>
        <p className="text-sm text-white/90">
          Director of Professional Development at Rotaract Club of SPIT (2024–25) where I Directed initiatives such as Technovate, career-oriented workshops and MUN, engaging over 250 participants.
        </p>
      </div>

     

      {/* Card 6 */}
      <div className="bg-pink-500 rounded-2xl p-8 text-white shadow-xl hover:scale-105 transition">
        <div className="w-12 h-12 bg-black/30 rounded-full flex items-center justify-center mb-4">
          <GraduationCap size={24} />
        </div>
        <h3 className="text-xl font-bold mb-2">Head of events</h3>
        <p className="text-sm text-white/90">
          Head of Events, Forum for Aspiring Computer Engineers, SPIT where I organized World Cup 2023 auction event engaging 100+ participants and successfully raised Rs. 55,000 in funds.

        </p>
      </div>

    </div>
  </div>
</section>




































      
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl mb-8" style={{color: subTextColor}}>
            Interested in collaborating or discussing research opportunities?
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="mailto:purav.ahya22@spit.ac.in" className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold hover:scale-105 transition-transform shadow-2xl">
              <Mail size={24} />
              purav.ahya22@spit.ac.in
            </a>
            <a href="tel:+918291092036" className="flex items-center gap-3 px-8 py-4 border-2 border-blue-500 text-blue-500 rounded-full font-semibold hover:scale-105 transition-transform shadow-lg">
              +91 82910 92036
            </a>
          </div>
          <div className="flex gap-8 justify-center mt-8">
            <a href="https://linkedin.com/in/purav-ahya" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Linkedin size={36} className="text-blue-500" />
            </a>
            <a href="https://github.com/PuravAhya" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
              <Github size={36} className="text-purple-500" />
            </a>
          </div>
        </div>
      </section>

      
      <footer className="py-8 text-center border-t" style={{borderColor: `rgba(156, 163, 175, ${bgOpacity})`, color: subTextColor}}>
        <p>© 2025 Purav Ahya.</p>
      </footer>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
