import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, PanInfo, useMotionValue, useTransform } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  CheckCircle,
  AlertTriangle,
  Lock,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Move,
} from "lucide-react";
import { getProjectById } from "../data/projects";

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // حالات التكبير والتحريك
  const zoom = useMotionValue(1);
  const [isDragging, setIsDragging] = useState(false);
  const constraintsRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useMotionValue(0);

  // دالة مساعدة لتحديث قيمة zoom
  const setZoom = (value: number) => {
    zoom.set(value);
  };

  // دالة للتحقق من قيمة zoom الحالية
  const isZoomed = () => zoom.get() > 1;

  // تحويلات الحركة
  const scale = useTransform(zoom, [0.5, 5], [0.5, 5]);
  const opacity = useTransform(zoom, [0.5, 1], [0.5, 1]);

  const project = id ? getProjectById(id) : null;

  useEffect(() => {
    if (selectedImage !== null) {
      const handlePopState = () => {
        closeImage();
        window.history.pushState(null, "", window.location.pathname);
      };

      window.addEventListener("popstate", handlePopState);
      window.history.pushState(null, "", window.location.pathname);

      return () => {
        window.removeEventListener("popstate", handlePopState);
        if (window.history.state) {
          window.history.back();
        }
      };
    }
  }, [selectedImage]);

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
  const allImages = [project.image, ...(project.gallery || [])];

  const openImage = (index: number) => {
    setSelectedImage(index);
    setZoom(1);
    x.set(0);
    y.set(0);
    document.body.style.overflow = "hidden";
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;

    const newIndex =
      direction === "prev"
        ? selectedImage === 0
          ? allImages.length - 1
          : selectedImage - 1
        : (selectedImage + 1) % allImages.length;

    setSelectedImage(newIndex);
    setZoom(1);
    x.set(0);
    y.set(0);
  };

  // تعديل دوال التحكم في التكبير
  const handleZoomIn = () => {
    const currentZoom = zoom.get();
    setZoom(Math.min(currentZoom + 0.5, 5));
  };

  const handleZoomOut = () => {
    const currentZoom = zoom.get();
    setZoom(Math.max(currentZoom - 0.5, 0.5));
  };

  const handleResetZoom = () => {
    setZoom(1);
    x.set(0);
    y.set(0);
  };

  // معالج السحب للصورة المكبرة
  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => setIsDragging(false);

  // معالج التنقل بين الصور بالسحب (فقط عندما لا تكون الصورة مكبرة)
  const handleSwipeEnd = (
    event: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (isZoomed()) return;

    if (info.offset.x > 100) {
      navigateImage("prev");
    } else if (info.offset.x < -100) {
      navigateImage("next");
    }
  };

  // معالج التكبير/التصغير باللمس (للأجهزة التي تدعم اللمس)
  const handlePinch = (event: React.TouchEvent) => {
    if (event.touches.length === 2) {
      event.preventDefault();
      const touch1 = event.touches[0];
      const touch2 = event.touches[1];
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      );

      const newZoom = Math.min(Math.max(distance / 100, 0.5), 5);
      setZoom(newZoom);
    }
  };

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
        <meta property="og:image" content={project.image} />
        <meta
          name="twitter:title"
          content={`${projectTitle} - Mohammad Nour Aldeen`}
        />
        <meta name="twitter:description" content={projectDescription} />
        <meta name="twitter:image" content={project.image} />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <motion.header
          className="bg-slate-900 text-white py-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="container mx-auto px-6">
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

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {projectTitle}
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              {projectDescription}
            </p>
          </div>
        </motion.header>

        {/* Main Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Project Images */}
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-6">
                {/* Main Image with Zoom */}
                <div
                  className="relative overflow-hidden rounded-2xl shadow-2xl cursor-zoom-in"
                  onClick={() => openImage(0)}
                >
                  <img
                    src={project.image}
                    alt={projectTitle}
                    className="w-full h-96 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 hover:opacity-100 text-lg font-medium">
                      {t("projectDetail.clickToZoom")}
                    </span>
                  </div>
                </div>

                {/* Gallery Thumbnails */}
                {allImages.length > 1 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {allImages.slice(1).map((image, index) => (
                      <motion.div
                        key={index}
                        className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer aspect-square"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        onClick={() => openImage(index + 1)}
                      >
                        <img
                          src={image}
                          alt={`${projectTitle} ${index + 2}`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300" />
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Project Info Sidebar */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Action Buttons */}
              <div className="space-y-4">
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-colors shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ExternalLink size={20} />
                  {t("projects.viewLive")}
                </motion.a>

                {project.isCodePrivate ? (
                  <motion.button
                    disabled
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-slate-400 text-slate-200 rounded-xl font-semibold cursor-not-allowed opacity-75"
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
                    className="flex items-center justify-center gap-3 w-full px-6 py-4 border-2 border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl font-semibold transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github size={20} />
                    {t("projects.viewCode")}
                  </motion.a>
                )}
              </div>

              {/* Technologies */}
              <div className="bg-slate-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
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
                      className="px-3 py-2 bg-blue-100 text-blue-800 rounded-lg text-sm font-medium border border-blue-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              {project.features && (
                <div className="bg-green-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="text-green-600" size={24} />
                    {t("projectDetail.keyFeatures")}
                  </h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle
                          className="text-green-600 mt-0.5 flex-shrink-0"
                          size={16}
                        />
                        <span className="text-slate-700">
                          {t(`projects.${project.id}.features.${feature}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Challenges */}
              {project.challenges && (
                <div className="bg-orange-50 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <AlertTriangle className="text-orange-600" size={24} />
                    {t("projectDetail.challenges")}
                  </h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <AlertTriangle
                          className="text-orange-600 mt-0.5 flex-shrink-0"
                          size={16}
                        />
                        <span className="text-slate-700">
                          {t(`projects.${project.id}.challenges.${challenge}`)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </div>

          {/* Full Description */}
          <motion.div
            className="mt-16 max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              {t("projectDetail.aboutProject")}
            </h2>
            <div className="prose prose-lg prose-slate max-w-none">
              <p className="text-slate-700 leading-relaxed">
                {t(`projects.${project.id}.fullDescription`)}
              </p>
            </div>
          </motion.div>
        </div>

        {/* معرض الصور المعدل */}
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget && !isDragging) {
                closeImage();
              }
            }}
            ref={constraintsRef}
            onTouchMove={handlePinch}
          >
            {/* أزرار التحكم */}
            <button
              type="button"
              onClick={closeImage}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 bg-black bg-opacity-50 rounded-full p-2"
              aria-label={t("projectDetail.close")}
            >
              <X size={32} />
            </button>

            {/* أزرار التنقل بين الصور (تظهر فقط عندما لا تكون الصورة مكبرة) */}
            {isZoomed() && (
              <>
                <button
                  type="button"
                  onClick={() => navigateImage("prev")}
                  className="absolute left-4 md:left-8 text-white hover:text-gray-300 z-50 p-2 bg-black bg-opacity-50 rounded-full"
                  aria-label={t("projectDetail.previousImage")}
                >
                  <ChevronLeft size={40} />
                </button>
                <button
                  type="button"
                  onClick={() => navigateImage("next")}
                  className="absolute right-4 md:right-8 text-white hover:text-gray-300 z-50 p-2 bg-black bg-opacity-50 rounded-full"
                  aria-label={t("projectDetail.nextImage")}
                >
                  <ChevronRight size={40} />
                </button>
              </>
            )}

            {/* الصورة مع إمكانيات التكبير والتحريك */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              <motion.div
                drag={isZoomed()}
                dragConstraints={constraintsRef}
                dragElastic={0.1}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                onPanEnd={handleSwipeEnd}
                style={{
                  x,
                  y,
                  rotate,
                  scale,
                  opacity,
                  cursor: isZoomed()
                    ? isDragging
                      ? "grabbing"
                      : "grab"
                    : "default",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="relative"
              >
                <motion.img
                  key={selectedImage}
                  src={allImages[selectedImage]}
                  alt={`${projectTitle} ${selectedImage + 1}`}
                  className="max-w-full max-h-[90vh] object-contain select-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  onClick={(e) => {
                    if (isZoomed()) e.stopPropagation();
                  }}
                  draggable="false"
                />
              </motion.div>

              {/* مؤشر رقم الصورة */}
              <div className="absolute bottom-4 left-0 right-0 text-center text-white text-sm">
                {selectedImage + 1} / {allImages.length}
              </div>
            </div>

            {/* أزرار التحكم في التكبير */}
            <div className="absolute bottom-4 right-4 flex gap-2 z-50">
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={isZoomed()}
                className="text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-3 disabled:opacity-50"
                aria-label={t("projectDetail.zoomOut")}
              >
                <ZoomOut size={24} />
              </button>
              <button
                type="button"
                onClick={handleResetZoom}
                disabled={isZoomed()}
                className="text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-3 disabled:opacity-50"
                aria-label={t("projectDetail.resetZoom")}
              >
                <Move size={24} />
              </button>
              <button
                type="button"
                onClick={handleZoomIn}
                disabled={isZoomed()}
                className="text-white hover:text-gray-300 bg-black bg-opacity-50 rounded-full p-3 disabled:opacity-50"
                aria-label={t("projectDetail.zoomIn")}
              >
                <ZoomIn size={24} />
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default ProjectDetail;
