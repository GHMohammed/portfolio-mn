import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, Lock, ArrowRight } from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { getFeaturedProjects } from "../data/projects";

const Projects: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const featuredProjects = getFeaturedProjects();

  const handleViewDetails = (projectId: string) => {
    navigate(`/projects/${projectId}`);
  };

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* تحسينات SEO: إضافة structured data للقسم */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: featuredProjects.map((project, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "CreativeWork",
                name: t(`projects.${project.id}.title`),
                description: t(`projects.${project.id}.description`).substring(
                  0,
                  160
                ),
                url: window.location.origin + `/projects/${project.id}`,
              },
            })),
          })}
        </script>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* تحسينات SEO: استخدام هيكل عناوين مناسب */}
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            {t("projects.title")}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-500 to-blue-600 mx-auto"></div>
          {/* تحسينات SEO: إضافة وصف مختصر */}
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            {t("projects.metaDescription")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-slate-100 hover:border-sky-200 "
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              itemScope
              itemType="https://schema.org/CreativeWork"
            >
              {/* تحسينات SEO: إضافة itemprop للصورة */}
              <div
                className="relative overflow-hidden h-60"
                itemProp="image"
                itemScope
                itemType="https://schema.org/ImageObject"
              >
                <img
                  src={project.image}
                  alt={`شاشة من مشروع ${t(`projects.${project.id}.title`)}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 group-hover:brightness-90"
                  itemProp="url"
                  loading="lazy"
                />
                <meta itemProp="width" content="600" />
                <meta itemProp="height" content="400" />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-4">
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      aria-label={`عرض مشروع ${t(
                        `projects.${project.id}.title`
                      )} مباشرة`}
                      className="p-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-lg transition-all shadow-lg hover:shadow-xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    {project.isCodePrivate ? (
                      <motion.div
                        className="p-3 bg-slate-500 text-white rounded-lg shadow-lg cursor-not-allowed opacity-75"
                        title={t("projects.privateCodeTooltip")}
                        aria-label="كود المشروع غير متاح للعامة"
                      >
                        <Lock size={20} />
                      </motion.div>
                    ) : (
                      <motion.a
                        href={project.codeUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        aria-label={`عرض كود مشروع ${t(
                          `projects.${project.id}.title`
                        )} على GitHub`}
                        className="p-3 bg-slate-700 hover:bg-slate-800 text-white rounded-lg transition-all shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={20} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* تحسينات SEO: استخدام عناوين هرمية */}
                <h2
                  className="text-xl font-bold text-slate-900 mb-3"
                  itemProp="name"
                >
                  {t(`projects.${project.id}.title`)}
                </h2>
                <p
                  className="text-slate-600 mb-4 line-clamp-3"
                  itemProp="description"
                >
                  {t(`projects.${project.id}.description`)}
                </p>

                <div className="flex flex-wrap gap-2 mb-6" itemProp="keywords">
                  {(
                    t(`projects.${project.id}.tags`, {
                      returnObjects: true,
                    }) as string[]
                  ).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-sky-50  text-sky-700 rounded-full text-sm font-medium border border-sky-100 "
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <motion.button
                    onClick={() => handleViewDetails(project.id)}
                    aria-label={`عرض تفاصيل مشروع ${t(
                      `projects.${project.id}.title`
                    )}`}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800  text-white rounded-lg font-medium transition-all shadow-sm hover:shadow-md flex-1 justify-center"
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
                    aria-label={`تجربة مشروع ${t(
                      `projects.${project.id}.title`
                    )} مباشرة`}
                    className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-lg font-medium transition-all shadow-sm hover:shadow-md"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink size={16} />
                    {t("projects.viewLive")}
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Link to="/allprojectspage" aria-label="عرض جميع المشاريع">
            <motion.button
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white rounded-2xl font-medium transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("projects.viewAllProjects")}
              <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
