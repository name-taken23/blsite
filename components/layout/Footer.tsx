"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Mail, href: "/contact", label: "Contact" },
  ];

  return (
    <footer className="relative border-t border-gray-200 bg-gradient-to-b from-gray-50 to-white">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-accent-electric/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start gap-3"
          >
            <div className="text-lg font-bold text-gray-900">BLACKLAKE</div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MapPin className="w-3 h-3" />
              <span>Made in London</span>
            </div>
            <div className="text-sm text-gray-500">
              © {currentYear} BlackLake. All rights reserved.
            </div>
          </motion.div>

          {/* Availability Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <p className="text-sm text-gray-600">
              Currently accepting projects for{" "}
              <span className="font-semibold text-accent-electric">Q1 2025</span>
            </p>
            <Link 
              href="/contact"
              className="text-sm font-medium text-accent-electric hover:underline"
            >
              Check availability →
            </Link>
          </motion.div>

          {/* Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="flex gap-8 text-sm text-gray-600"
          >
            <Link 
              href="/work" 
              className="hover:text-accent-electric transition-colors duration-200 relative group"
            >
              Work
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-electric transition-all duration-200 group-hover:w-full" />
            </Link>
            <Link 
              href="/services" 
              className="hover:text-accent-electric transition-colors duration-200 relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-electric transition-all duration-200 group-hover:w-full" />
            </Link>
            <Link 
              href="/contact" 
              className="hover:text-accent-electric transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent-electric transition-all duration-200 group-hover:w-full" />
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex gap-3"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-accent-electric hover:text-white transition-colors duration-200"
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}