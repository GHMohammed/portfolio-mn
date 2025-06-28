import React from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import { motion } from "framer-motion";

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    const newLang = currentLang === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-700/30 backdrop-blur-sm border border-slate-600/30 text-white hover:bg-slate-600/40 transition-all duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Globe size={18} />
      <span className="font-medium">
        {currentLang === "en" ? "العربية" : "English"}
      </span>
    </motion.button>
  );
};

export default LanguageToggle;
