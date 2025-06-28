import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Eye,
  Lock,
  ArrowLeft,
  ChevronDown,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { projects } from "../data/projects";

const AllProjectsPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleViewDetails = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <section className="bg-slate-50">
      {/* Enhanced Header Section */}
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-indigo-500 rounded-full filter blur-3xl"></div>
        </div>

        {/* Back Button at Top */}
        <div className="absolute top-6 left-6 z-10">
          <Link to="/">
            <motion.button
              className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/70 text-slate-50 rounded-lg font-medium transition-colors backdrop-blur-sm border border-slate-700/50"
              whileHover={{ x: -3, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft size={18} />
              {t("projects.backToHome")}
            </motion.button>
          </Link>
        </div>

        {/* Main Header Content */}
        <div className="text-center px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold text-slate-50 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-300"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className=" leading-loose">
                {t("projects.allProjectsTitle")}
              </div>
            </motion.h1>

            <motion.p
              className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t("projects.allProjectsSubtitle")}
            </motion.p>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Scrolling Indicator */}
        <motion.div
          className="absolute left-0 right-0 bottom-8 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="">
            <ChevronDown className="text-slate-400 h-6 w-6" />
          </div>
        </motion.div>
      </div>

      {/* Projects Container */}
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white  rounded-3xl shadow-xl overflow-hidden group border border-slate-100 "
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Mobile Layout (Stacked) */}
              <div className="lg:hidden">
                <div className="relative h-64 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={t(`projects.${project.id}.title`)}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end p-6">
                    {/* <div className="flex gap-3">
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="p-3 bg-white hover:bg-blue-600 text-blue-600 hover:text-white rounded-full shadow-lg flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                      {project.isCodePrivate ? (
                        <motion.div
                          className="p-3 bg-white text-slate-500 rounded-full shadow-lg cursor-not-allowed flex items-center justify-center"
                          title={t("projects.privateCodeTooltip")}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Lock size={18} />
                        </motion.div>
                      ) : (
                        <motion.a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="p-3 bg-white hover:bg-slate-800 text-slate-800 hover:text-white rounded-full shadow-lg flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={18} />
                        </motion.a>
                      )}
                    </div> */}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-900 ">
                      {t(`projects.${project.id}.title`)}
                    </h3>
                  </div>

                  <p className="text-slate-600 mb-5 text-sm leading-relaxed">
                    {t(`projects.${project.id}.description`)}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {(
                      t(`projects.${project.id}.tags`, {
                        returnObjects: true,
                      }) as string[]
                    ).map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-50 to-indigo-50  text-blue-700  rounded-full text-xs font-medium border border-blue-100 "
                        whileHover={{ scale: 1.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      onClick={() => handleViewDetails(project.id)}
                      className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800  text-white rounded-lg font-medium transition-all shadow-sm flex-1 justify-center text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Eye size={16} />
                      {t("projects.viewDetails")}
                    </motion.button>
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-lg font-medium transition-all shadow-sm text-sm"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={16} />
                      {t("projects.viewLive")}
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Desktop Layout (Side by Side) */}
              <div className="hidden lg:flex">
                <div className="w-1/2 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={t(`projects.${project.id}.title`)}
                    className="w-full h-full min-h-[400px] object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 to-transparent flex items-center justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="p-4 bg-white hover:bg-blue-600 text-blue-600 hover:text-white rounded-full shadow-xl flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={20} />
                      </motion.a>
                      {project.isCodePrivate ? (
                        <motion.div
                          className="p-4 bg-white text-slate-500 rounded-full shadow-xl cursor-not-allowed flex items-center justify-center"
                          title={t("projects.privateCodeTooltip")}
                          whileHover={{ scale: 1.05 }}
                        >
                          <Lock size={20} />
                        </motion.div>
                      ) : (
                        <motion.a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          className="p-4 bg-white hover:bg-slate-800 text-slate-800 hover:text-white rounded-full shadow-xl flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: -5 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-slate-900">
                        {t(`projects.${project.id}.title`)}
                      </h3>
                    </div>

                    <p className="text-slate-600  mb-6 text-base leading-relaxed">
                      {t(`projects.${project.id}.description`)}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {(
                        t(`projects.${project.id}.tags`, {
                          returnObjects: true,
                        }) as string[]
                      ).map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          className="px-3 py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50  text-blue-700  rounded-full text-xs font-medium border border-blue-100 "
                          whileHover={{ scale: 1.05 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <motion.button
                      onClick={() => handleViewDetails(project.id)}
                      className="flex items-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800  text-white rounded-xl font-medium transition-all shadow-sm flex-1 justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Eye size={18} />
                      {t("projects.viewDetails")}
                    </motion.button>
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl font-medium transition-all shadow-sm flex-1 justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink size={18} />
                      {t("projects.viewLive")}
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjectsPage;
