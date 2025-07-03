import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  MessageSquare,
  X,
  Linkedin,
  Github,
} from "lucide-react";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const contactInfo = [
    {
      icon: Mail,
      label: t("contact.info.email"),
      value: "contact@mohammednour.dev",
      href: "mailto:contact@mohammednour.dev",
    },
    {
      icon: Phone,
      label: t("contact.info.phone"),
      value: "+963 940 538 163",
      href: "https://wa.me/963940538163",
    },
    {
      icon: MapPin,
      label: t("contact.info.location"),
      value: "Damascus, Syria",
    },
  ];

  const socialMedia = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/mohammednour.dev?igsh=cXozYWRocnU2MWUz",
      color: "bg-gradient-to-br from-purple-500 via-pink-500 to-rose-500",
      hover: "hover:shadow-purple-500/30",
    },
    {
      icon: X,
      label: "Twitter",
      href: "https://x.com/MAbd_1_",
      color: "bg-gradient-to-br from-gray-800 via-gray-700 to-blue-600",
      hover: "hover:shadow-blue-500/30",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/GHMohammed",
      color: "bg-gradient-to-br from-gray-700 to-gray-900",
      hover: "hover:shadow-gray-500/30",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohammed-nour-aldeen-8a0432243",
      color: "bg-gradient-to-br from-blue-600 to-blue-800",
      hover: "hover:shadow-blue-500/30",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_ly2d5fk",
        "template_axoo95a",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "contact@mohammednour.dev",
        },
        "bqycRHNyUC9cQPMhQ"
      )
      .then(() => {
        // تمت إزالة response
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        // تمت إزالة err
        setSubmitStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 overflow-x-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t("contact.title")}
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            {t("contact.subtitle")}
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
          >
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                {t("contact.infoTitle")}
              </h3>

              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  className="flex items-start gap-5"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="p-3 bg-gray-100 rounded-lg text-indigo-600">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-medium text-gray-800 hover:text-indigo-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-base font-medium text-gray-800">
                        {info.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}

              {/* WhatsApp & QR Code Section */}
              <motion.h3
                className="text-xl font-semibold text-gray-800 mb-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                {t("contact.WhatsAppsocial")}
              </motion.h3>

              <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
                {/* WhatsApp Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-2"
                >
                  <motion.a
                    href="https://wa.me/963940538163"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center w-fit space-x-2 rtl:space-x-reverse text-green-600 hover:text-green-700 transition-colors duration-200 p-3 rounded-full hover:bg-green-50 group"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="WhatsApp"
                  >
                    <MessageSquare className="h-6 w-6 group-hover:scale-110 transition-transform" />
                    <span className="font-medium">WhatsApp</span>
                  </motion.a>
                  <span className="text-sm text-gray-500">
                    {t("contact.clickToChat")}
                  </span>
                </motion.div>

                {/* Divider - Visible only in horizontal layout */}
                <div className="hidden sm:block h-24 w-px bg-gray-200 mx-4"></div>

                {/* QR Code Section */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <img
                      src="/whatsapp-qr.png"
                      alt="QR Code للواتساب"
                      className="w-36 h-36 object-contain"
                    />
                  </div>
                  <span className="text-sm text-gray-500">
                    {t("contact.scanToChat")}
                  </span>
                </motion.div>
              </div>

              {/* Social Media */}
              <div className="pt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  {t("contact.socialTitle")}
                </h3>

                <div className="flex gap-4 flex-wrap">
                  {socialMedia.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
          flex items-center justify-center p-4 rounded-xl
          shadow-md hover:shadow-lg transition-all duration-300
          ${social.color} ${social.hover}
          text-white relative overflow-hidden
          group
        `}
                      whileHover={{ y: -5, scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.15 }}
                      viewport={{ once: true }}
                      aria-label={social.label}
                    >
                      {/* تأثير داخلي عند التحويم */}
                      <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>

                      {/* الأيقونة مع تأثير التحويم */}
                      <motion.span
                        className="relative z-10"
                        whileHover={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <social.icon className="h-6 w-6" />
                      </motion.span>

                      {/* تلميح يظهر عند التحويم */}
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full max-w-full"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                {t("contact.formTitle")}
              </h3>

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("contact.name")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                  placeholder={t("contact.namePlaceholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("contact.email")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 bg-gray-50 focus:bg-white"
                  placeholder={t("contact.emailPlaceholder")}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none bg-gray-50 focus:bg-white"
                  placeholder={t("contact.messagePlaceholder")}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                {isSubmitting ? t("contact.sending") : t("contact.send")}
              </motion.button>

              {submitStatus === "success" && (
                <motion.div
                  className="p-4 bg-green-50 text-green-700 rounded-lg border border-green-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {t("contact.successMessage")}
                </motion.div>
              )}
              {submitStatus === "error" && (
                <motion.div
                  className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {t("contact.errorMessage")}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
