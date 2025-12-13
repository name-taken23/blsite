"use client";

import PageShell from "@/components/layout/PageShell";
import TextReveal from "@/components/ui/TextReveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import MagneticButton from "@/components/ui/MagneticButton";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from "lucide-react";

export default function Contact() {
  return (
    <PageShell>
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <TextReveal 
              text="Let's Start a Conversation" 
              className="text-5xl md:text-7xl font-bold mb-6 text-gray-900" 
            />
            <AnimatedDivider className="mx-auto mb-8 w-32" />
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed"
            >
              Ready to accelerate your AI roadmap? Let&apos;s discuss your data strategy.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50/50 to-transparent -z-10" />
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="space-y-12"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent-electric/10 rounded-full flex items-center justify-center text-accent-electric shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-1">Email</p>
                      <a href="mailto:hello@blacklake.com" className="text-lg text-gray-600 hover:text-accent-electric transition-colors">
                        hello@blacklake.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent-electric/10 rounded-full flex items-center justify-center text-accent-electric shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-1">Office</p>
                      <p className="text-lg text-gray-600">
                        123 Innovation Drive<br />
                        Tech City, TC 90210
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-accent-electric/10 rounded-full flex items-center justify-center text-accent-electric shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-1">Phone</p>
                      <p className="text-lg text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Direct Booking</h3>
                <p className="text-gray-600 mb-4">Skip the email and book a 15-minute discovery call directly with our engineering team.</p>
                <MagneticButton className="bg-white border border-gray-200 hover:border-accent-electric text-gray-900">
                    Book Discovery Call
                </MagneticButton>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Follow Us</h3>
                <div className="flex gap-4">
                  {[Linkedin, Twitter, Github].map((Icon, i) => (
                    <a key={i} href="#" className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-accent-electric hover:text-white hover:border-accent-electric transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input placeholder="Name" />
                  <Input placeholder="Email" type="email" />
                </div>
                
                <div className="relative">
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-electric focus:border-transparent transition-all duration-200 bg-white appearance-none text-gray-600">
                        <option value="" disabled selected>Select Project Type</option>
                        <option value="ai-strategy">AI Strategy & Consulting</option>
                        <option value="cloud-migration">Cloud Migration</option>
                        <option value="custom-dev">Custom Development</option>
                        <option value="other">Other</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                </div>

                <Input placeholder="Subject" />
                <TextArea placeholder="Message" rows={6} />
                <div className="pt-4">
                  <MagneticButton className="w-full justify-center">
                    Send Message
                  </MagneticButton>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}