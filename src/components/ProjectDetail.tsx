import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle,
  AlertTriangle,
  Lock,
} from "lucide-react";
import { getProjectById } from "../data/projects";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const project = id ? getProjectById(id) : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            {t("projectDetail.notFound")}
          </h1>
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            aria-label={t("projectDetail.backHome")}
          >
            {t("projectDetail.backHome")}
          </button>
        </div>
      </div>
    );
  }

  const projectTitle = t(`projects.${project.id}.title`);
  const projectDescription = t(`projects.${project.id}.description`);

  return (
    <>
      <Helmet>
        <title>{`${projectTitle} - Mohammad Nour Aldeen`}</title>
        <meta name="description" content={projectDescription} />
        <meta
          property="og:title"
          content={`${projectTitle} - Mohammad Nour Aldeen`}
        />
        <meta property="og:description" content={projectDescription} />
        <meta
          name="twitter:title"
          content={`${projectTitle} - Mohammad Nour Aldeen`}
        />
        <meta name="twitter:description" content={projectDescription} />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <motion.header
          className="bg-slate-900 text-white py-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <motion.button
              type="button"
              onClick={() => navigate("/")}
              className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-6"
              whileHover={{ x: -5 }}
              aria-label={t("projectDetail.backToPortfolio")}
            >
              <ArrowLeft size={20} />
              {t("projectDetail.backToPortfolio")}
            </motion.button>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {projectTitle}
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-3xl">
              {projectDescription}
            </p>
          </div>
        </motion.header>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Project Info Sidebar */}
            <motion.div
              className="lg:w-1/3 order-2 lg:order-1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Action Buttons */}
              <div className="space-y-4 mb-8">
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-4 sm:px-6 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg sm:rounded-xl font-semibold transition-colors shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink size={20} />
                  {t("projects.viewLive")}
                </motion.a>

                {project.isCodePrivate ? (
                  <motion.button
                    disabled
                    className="flex items-center justify-center gap-3 w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-400 text-slate-200 rounded-lg sm:rounded-xl font-semibold cursor-not-allowed opacity-75"
                    title={t("projects.privateCodeTooltip")}
                  >
                    <Lock size={20} />
                    {t("projects.privateCode")}
                  </motion.button>
                ) : (
                  <motion.a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full px-4 sm:px-6 py-3 sm:py-4 border-2 border-slate-300 hover:bg-slate-50 text-slate-700 rounded-lg sm:rounded-xl font-semibold transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github size={20} />
                    {t("projects.viewCode")}
                  </motion.a>
                )}
              </div>

              {/* Technologies */}
              <div className="bg-slate-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-8">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4">
                  {t("projectDetail.technologies")}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(
                    t(`projects.${project.id}.tags`, {
                      returnObjects: true,
                    }) as string[]
                  ).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 sm:px-3 py-1 sm:py-2 bg-blue-100 text-blue-800 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium border border-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              {project.features && (
                <div className="bg-green-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-8">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4 flex items-center gap-2">
                    <CheckCircle className="text-green-600" size={20} />
                    {t("projectDetail.keyFeatures")}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 sm:gap-3"
                      >
                        <CheckCircle
                          className="text-green-600 mt-0.5 flex-shrink-0"
                          size={16}
                        />
                        <span className="text-slate-700 text-sm sm:text-base">
                          {t(`projects.${project.id}.features.${feature}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges */}
              {project.challenges && (
                <div className="bg-orange-50 rounded-xl sm:rounded-2xl p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 sm:mb-4 flex items-center gap-2">
                    <AlertTriangle className="text-orange-600" size={20} />
                    {t("projectDetail.challenges")}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 sm:gap-3"
                      >
                        <AlertTriangle
                          className="text-orange-600 mt-0.5 flex-shrink-0"
                          size={16}
                        />
                        <span className="text-slate-700 text-sm sm:text-base">
                          {t(`projects.${project.id}.challenges.${challenge}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>

            {/* Project Description */}
            <motion.div
              className="lg:w-2/3 order-1 lg:order-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="bg-white rounded-xl sm:rounded-2xl p-6 shadow-sm">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6">
                  {t("projectDetail.aboutProject")}
                </h2>
                <div className="prose prose-sm sm:prose-lg prose-slate max-w-none">
                  <p className="text-slate-700 leading-relaxed">
                    {t(`projects.${project.id}.fullDescription`)}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
