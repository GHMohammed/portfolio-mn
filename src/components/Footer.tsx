import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  Twitter,
  Instagram,
  Facebook,
  Phone,
} from "lucide-react";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/GHMohammed",
      label: "GitHub",
      color: "hover:bg-gray-800",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mohammed-nour-aldeen-8a0432243/",
      label: "LinkedIn",
      color: "hover:bg-blue-700",
    },
    {
      icon: Mail,
      href: "mailto:contact@mohammednour.dev",
      label: "Email",
      color: "hover:bg-red-600",
    },
    {
      icon: Twitter,
      href: "https://x.com/MAbd_1_",
      label: "Twitter",
      color: "hover:bg-blue-400",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/mohammednour.dev?igsh=cXozYWRocnU2MWUz",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/1AkwVEwz9y/",
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      icon: Phone,
      href: "tel:+963940538163",
      label: "Phone",
      color: "hover:bg-green-600",
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16 relative overflow-hidden">
      {/* Floating Tech Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(15)].map((_, i) => {
          const randomSize = Math.random() * 15 + 5;
          const randomLeft = Math.random() * 100;
          const randomTop = Math.random() * 100;
          const symbols = ["</>", "{}", "() =>", "import", "export"];
          const symbol = symbols[Math.floor(Math.random() * symbols.length)];

          return (
            <motion.div
              key={`tech-${i}`}
              className="absolute text-blue-400/20 font-mono pointer-events-none"
              style={{
                fontSize: `${randomSize}px`,
                left: `${randomLeft}%`,
                top: `${randomTop}%`,
              }}
              animate={{
                y: [0, Math.random() * 20 - 10],
                x: [0, Math.random() * 20 - 10],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
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

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <motion.div
            className="text-3xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Mohammad<span className="text-blue-400">.</span>
          </motion.div>

          {/* Location */}
          <motion.div
            className="mb-8 text-lg text-blue-200 font-medium"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Front-End Developer | Damascus, Syria
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-slate-800/50 backdrop-blur-sm rounded-lg transition-all duration-300 border border-slate-700/50 ${social.color} text-white`}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="border-t border-slate-800 pt-8 w-full max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-slate-400 mb-2">
              © {new Date().getFullYear()} Mohammed Nour Aldeen.{" "}
              {t("footer.rights")}.
            </p>
            <p className="text-slate-500 flex items-center justify-center gap-2">
              {t("footer.built")}{" "}
              <Heart size={16} className="text-red-500 animate-pulse" />
            </p>
          </motion.div>

          {/* Location */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
