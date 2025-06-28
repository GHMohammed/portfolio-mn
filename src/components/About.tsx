import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  MapPin,
  GraduationCap,
  Code,
  Award,
  Lightbulb,
  Briefcase,
  Cpu,
  LayoutDashboard,
  Code2,
  Smartphone,
} from "lucide-react";

const About: React.FC = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      y: -5,
      boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 },
    },
  };

  const stats = [
    {
      number: "2+",
      label: t("about.stats.experience"),
      icon: Briefcase,
      delay: 0.5,
      color: "text-purple-600", // تغيير اللون إلى بنفسجي
      hoverColor: "text-purple-500",
    },
    {
      number: "10+",
      label: t("about.stats.projects"),
      icon: Code,
      delay: 0.7,
      color: "text-green-600", // تغيير اللون إلى أخضر
      hoverColor: "text-green-500",
    },
    {
      number: "100%",
      label: t("about.stats.dedication"),
      icon: Award,
      delay: 0.9,
      color: "text-red-600", // تغيير اللون إلى أحمر
      hoverColor: "text-red-500",
    },
  ];

  const skills = [
    { name: t("about.skills.react"), icon: Cpu, color: "text-blue-500" },
    {
      name: t("about.skills.nextjs"),
      icon: LayoutDashboard,
      color: "text-gray-800",
    },
    { name: t("about.skills.tailwind"), icon: Code2, color: "text-cyan-500" },
    {
      name: t("about.skills.responsive"),
      icon: Smartphone,
      color: "text-purple-500",
    },
  ];

  const personalInfo = [
    {
      icon: MapPin,
      title: t("about.personal.location"),
      desc: t("about.personal.locationValue"),
      iconColor: "text-red-600", // أحمر لـ MapPin
      bgColor: "bg-red-100",
      hoverBgColor: "bg-red-200",
    },
    {
      icon: GraduationCap,
      title: t("about.personal.education"),
      desc: t("about.personal.educationValue"),
      iconColor: "text-gray-800", // أسود لـ GraduationCap
      bgColor: "bg-gray-100",
      hoverBgColor: "bg-gray-200",
    },
    {
      icon: Lightbulb,
      title: t("about.personal.specialization"),
      desc: t("about.personal.specializationValue"),
      iconColor: "text-yellow-500", // أصفر لـ Lightbulb
      bgColor: "bg-yellow-100",
      hoverBgColor: "bg-yellow-200",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-cyan-200/30 rounded-full blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <motion.h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                {t("about.title")}
              </motion.h2>
              <motion.div
                className="text-lg text-gray-700 leading-relaxed space-y-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <p>{t("about.description.p1")}</p>
                <p>{t("about.description.p2")}</p>
                <p>{t("about.description.p3")}</p>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              {personalInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="flex items-center space-x-4 rtl:space-x-reverse p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 cursor-pointer group"
                >
                  <motion.div
                    className={`p-3 ${item.bgColor} rounded-lg group-hover:${item.hoverBgColor} transition-colors`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Skills and Stats */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Skills Section */}
            <motion.div
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50"
              variants={cardVariants}
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                {t("about.skillsTitle")}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <skill.icon className={`w-5 h-5 ${skill.color}`} />
                    <span className="font-medium text-gray-800">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    delay: stat.delay,
                    duration: 0.6,
                    type: "spring",
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                  }}
                  className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 cursor-pointer group text-center"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="flex justify-center mb-2"
                  >
                    <stat.icon
                      className={`w-6 h-6 ${stat.color} group-hover:${stat.hoverColor} transition-colors`}
                    />
                  </motion.div>
                  <motion.div
                    className={`text-3xl font-bold ${stat.color} group-hover:${stat.hoverColor} transition-colors`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
