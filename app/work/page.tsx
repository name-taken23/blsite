"use client";

import PageShell from "@/components/layout/PageShell";
import TextReveal from "@/components/ui/TextReveal";
import AnimatedDivider from "@/components/ui/AnimatedDivider";
import SmartCard from "@/components/ui/SmartCard";
import TechDivider from "@/components/ui/TechDivider";
import MagneticButton from "@/components/ui/MagneticButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn, staggerContainer, scaleInSpring } from "@/lib/motion";
import { ArrowUpRight, Clock, Users, Zap, TrendingUp } from "lucide-react";
import Link from "next/link";
import { getAllCaseStudies } from "@/lib/case-studies";
import { useRef } from "react";

export default function Work() {
  const caseStudies = getAllCaseStudies();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <PageShell>
      {/* Hero Section - Immersive */}
      <section ref={heroRef} className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
        {/* Animated background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
        
        {/* Floating gradient orbs */}
        <motion.div
          className="absolute top-20 left-1/4 w-96 h-96 bg-accent-electric/10 rounded-full blur-3xl"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="container mx-auto px-6 text-center relative z-10"
        >
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-gray-600 border border-gray-200 mb-8 shadow-sm"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Currently accepting projects for Q1 2025</span>
            </motion.div>

            <TextReveal 
              text="Selected Work" 
              className="text-6xl md:text-8xl font-bold mb-8 text-gray-900" 
            />
            
            <motion.p 
              variants={fadeIn}
              className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-12"
            >
              Real projects with measurable impact. From data pipelines processing 
              millions of records to real-time 5G systems—here's what I've built.
            </motion.p>

            {/* Quick stats row */}
            <motion.div 
              variants={fadeIn}
              className="flex flex-wrap justify-center gap-8 md:gap-16"
            >
              {[
                { icon: Zap, value: "20x", label: "Performance Gains" },
                { icon: TrendingUp, value: "1M+", label: "Records Daily" },
                { icon: Clock, value: "<8ms", label: "Latency Achieved" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent-electric/10 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-accent-electric" />
                  </div>
                  <div className="text-left">
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-1.5 bg-gray-400 rounded-full"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      <TechDivider />

      {/* Featured Project - Large Card */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.p variants={fadeIn} className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-electric mb-4">
              Featured Project
            </motion.p>
          </motion.div>

          <Link href={`/case-studies/${caseStudies[0].slug}`}>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={scaleInSpring}
              className="group"
            >
              <SmartCard className="overflow-hidden cursor-pointer">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Visual */}
                  <div className={`h-64 md:h-auto min-h-[400px] bg-gradient-to-br ${caseStudies[0].gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                    
                    {/* Floating metrics */}
                    <motion.div 
                      className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      <div className="text-3xl font-bold text-gray-900">{caseStudies[0].results[0].value}</div>
                      <div className="text-sm text-gray-600">{caseStudies[0].results[0].metric}</div>
                    </motion.div>

                    <motion.div 
                      className="absolute bottom-6 right-6 bg-white/20 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <ArrowUpRight className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="text-xs font-semibold text-accent-electric uppercase tracking-wider mb-4">
                      {caseStudies[0].industry} • {caseStudies[0].timeline}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 group-hover:text-accent-electric transition-colors">
                      {caseStudies[0].title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {caseStudies[0].description}
                    </p>
                    
                    {/* Results preview */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {caseStudies[0].results.slice(0, 4).map((result, i) => (
                        <div key={i} className="bg-gray-50 rounded-lg p-3">
                          <div className="text-lg font-bold text-gray-900">{result.value}</div>
                          <div className="text-xs text-gray-500">{result.metric}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {caseStudies[0].technologies.slice(0, 5).map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                          {tech}
                        </span>
                      ))}
                      {caseStudies[0].technologies.length > 5 && (
                        <span className="px-3 py-1 bg-accent-electric/10 text-accent-electric text-sm font-medium rounded-full">
                          +{caseStudies[0].technologies.length - 5} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </SmartCard>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Other Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.p variants={fadeIn} className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-electric mb-4">
              More Projects
            </motion.p>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-gray-900">
              Additional Work
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.slice(1).map((caseStudy, index) => (
              <Link key={caseStudy.slug} href={`/case-studies/${caseStudy.slug}`}>
                <motion.div
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  variants={scaleInSpring}
                  transition={{ delay: index * 0.1 }}
                >
                  <SmartCard className="group cursor-pointer overflow-hidden h-full hover:shadow-2xl transition-shadow duration-500">
                    {/* Visual */}
                    <div className={`h-56 w-full bg-gradient-to-br ${caseStudy.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                      
                      {/* Key metric badge */}
                      <motion.div 
                        className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-md"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="text-xl font-bold text-gray-900">{caseStudy.results[0].value}</div>
                        <div className="text-xs text-gray-500">{caseStudy.results[0].metric}</div>
                      </motion.div>

                      <motion.div 
                        className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </motion.div>

                      {/* Timeline badge */}
                      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white/90">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">{caseStudy.timeline}</span>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="text-xs font-semibold text-accent-electric uppercase tracking-wider mb-2">
                        {caseStudy.industry}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-accent-electric transition-colors">
                        {caseStudy.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                        {caseStudy.description}
                      </p>
                      
                      {/* Tech tags */}
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.tags.slice(0, 3).map((tag, i) => (
                          <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </SmartCard>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-accent-electric/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
            >
              Have a Similar Challenge?
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-gray-400 mb-10"
            >
              I work best with teams tackling complex technical problems. 
              If you need senior engineering—not just more hands—let's talk.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton href="/contact">
                Start a Conversation
              </MagneticButton>
              <Link href="/about">
                <motion.button
                  className="px-8 py-4 bg-transparent text-white font-medium rounded-lg border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn About Me
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}