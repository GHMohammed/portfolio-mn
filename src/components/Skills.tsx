import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Wrench,
  BookOpen,
  MessageCircle,
  Users,
} from "lucide-react";

const Skills: React.FC = () => {
  const { t } = useTranslation();

  // إعدادات الحركة المشتركة
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  const skillCategories = [
    {
      icon: Code2,
      title: t("skills.frontend"),
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "WordPress",
      ],
      color: "from-blue-400 to-blue-600",
      iconColor: "text-blue-400",
    },
    {
      icon: Database,
      title: t("skills.programming"),
      skills: ["Java", "Python", "JavaScript", "C++", "TypeScript"],
      color: "from-purple-500 to-purple-700",
      iconColor: "text-purple-500",
    },
    {
      icon: Globe,
      title: t("skills.networking"),
      skills: ["CCNA Basics", "Cisco Packet Tracer", "Network Fundamentals"],
      color: "from-emerald-500 to-emerald-700",
      iconColor: "text-emerald-500",
    },
    {
      icon: Wrench,
      title: t("skills.tools"),
      skills: ["Git", "GitHub", "GitLab", "VS Code", "NPM", "Vite"],
      color: "from-indigo-500 to-indigo-700",
      iconColor: "text-indigo-500",
    },
    {
      icon: BookOpen,
      title: t("skills.productivity"),
      skills: ["ICDL Certified", "Microsoft Office", "Project Management"],
      color: "from-amber-500 to-amber-700",
      iconColor: "text-amber-500",
    },
    {
      icon: MessageCircle,
      title: t("skills.languages"),
      skills: ["Arabic (Native)", "English (Intermediate - A4)"],
      color: "from-cyan-500 to-cyan-700",
      iconColor: "text-cyan-500",
    },
    {
      icon: Users,
      title: t("skills.soft"),
      skills: [
        "Teamwork",
        "Communication",
        "Problem-solving",
        "Adaptability",
        "Time Management",
      ],
      color: "from-pink-500 to-pink-700",
      iconColor: "text-pink-500",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 relative overflow-hidden bg-slate-900"
    >
      {/* الخلفية المعدلة */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-800"></div>
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 60 - 30],
              x: [0, Math.random() * 40 - 20],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("skills.title")}
          </h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "anticipate" }}
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-800/60 backdrop-blur-md rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-400/30 transition-all duration-300"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className={`h-1 bg-gradient-to-r ${category.color}`}></div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className={`p-2.5 rounded-lg bg-gradient-to-br ${category.color}`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <category.icon className="text-white" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <motion.div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      variants={skillVariants}
                      className="px-3 py-1 bg-slate-700/50 text-slate-100 text-sm rounded-full border border-slate-600/50"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(56, 182, 255, 0.2)",
                        borderColor: "rgba(56, 182, 255, 0.5)",
                      }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
