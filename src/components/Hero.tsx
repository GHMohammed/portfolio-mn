import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/GHMohammed",
      label: "GitHub",
      color: "hover:bg-gray-800/90 hover:text-white",
      bg: "bg-gray-800/20",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mohammed-nour-aldeen-8a0432243/",
      label: "LinkedIn",
      color: "hover:bg-blue-700/90 hover:text-white",
      bg: "bg-blue-700/20",
    },
    {
      icon: Mail,
      href: "mailto:contact@mohammednour.dev",
      label: "Email",
      color: "hover:bg-red-600/90 hover:text-white",
      bg: "bg-red-600/20",
    },
    {
      icon: Phone,
      href: "tel:+963940538163",
      label: "Phone",
      color: "hover:bg-green-600/90 hover:text-white",
      bg: "bg-green-600/20",
    },
  ];

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden  bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
    >
      <Helmet>
        <title>{"محمد نور الدين - مطور واجهات ومواقع ويب"}</title>
        <meta
          name="description"
          content={
            "موقعي الرسمي لعرض مشاريعي كمطور مواقع باستخدام React و Next.js"
          }
        />
        <meta
          name="keywords"
          content="React, Web Developer, Mohammad Nour, Portfolio"
        />
        <meta name="author" content="Mohammad Nour Aldeen" />
        <link rel="canonical" href="https://www.mohammednour.dev/" />
      </Helmet>
      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(30)].map((_, i) => {
          const randomSize = Math.random() * 20 + 10;
          const randomLeft = Math.random() * 100;
          const randomTop = Math.random() * 100;
          const randomOpacity = Math.random() * 0.3 + 0.1;
          const symbols = ["</>", "{}", "() =>", "/", "|", "const", "function"];
          const symbol = symbols[Math.floor(Math.random() * symbols.length)];

          return (
            <motion.div
              key={`tech-${i}`}
              className="absolute text-blue-400/30 font-mono pointer-events-none"
              style={{
                fontSize: `${randomSize}px`,
                left: `${randomLeft}%`,
                top: `${randomTop}%`,
                opacity: randomOpacity,
              }}
              animate={{
                y: [0, Math.random() * 40 - 20],
                x: [0, Math.random() * 40 - 20],
                rotate: [0, Math.random() * 360],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              {symbol}
            </motion.div>
          );
        })}
      </div>

      {/* Circuit Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600/20 to-transparent"></div>
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center ">
          {/* Profile Image */}
          <motion.div
            className="mb-8 mt-20"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.2,
            }}
          >
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-1 shadow-xl shadow-blue-500/60">
              <div className="w-full h-full rounded-full bg-slate-100 overflow-hidden border-4 border-white/10 relative">
                <img
                  className="w-full h-full object-cover"
                  src="/my/my1.webp"
                  alt="Profile"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.p
              className="text-xl md:text-2xl mb-4 text-blue-300 font-medium"
              whileHover={{ scale: 1.02 }}
            >
              {t("hero.greeting")}
            </motion.p>

            <motion.h1
              className="text-5xl leading-loose md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
              whileHover={{ scale: 1.01 }}
            >
              <div className="leading-normal">{t("hero.name")}</div>
            </motion.h1>

            <motion.div className="mb-6" whileHover={{ scale: 1.02 }}>
              <span className="inline-block px-4 py-2 bg-blue-900/30 rounded-full backdrop-blur-sm border border-blue-700/30 text-blue-100 text-2xl font-medium">
                {t("hero.title")}
              </span>
            </motion.div>

            <motion.p
              className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed"
              whileHover={{ scale: 1.01 }}
            >
              {t("hero.subtitle")}
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/30 flex items-center gap-2 group"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{t("hero.cta")}</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className="h-5 w-5" />
              </motion.div>
            </motion.button>

            <motion.button
              onClick={scrollToProjects}
              className="px-8 py-4 border-2 border-blue-400/50 hover:bg-blue-900/30 text-white rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm flex items-center gap-2 group"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{t("hero.viewProjects")}</span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              >
                <ArrowDown className="h-5 w-5" />
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6 mb-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-4 ${social.bg} backdrop-blur-sm rounded-full border border-slate-600/30 transition-all duration-300 shadow-lg ${social.color} flex items-center justify-center`}
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon size={24} className="text-blue-100" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
