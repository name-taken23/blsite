"use client";

import PageShell from "@/components/layout/PageShell";
import TextReveal from "@/components/ui/TextReveal";
import SmartCard from "@/components/ui/SmartCard";
import TechDivider from "@/components/ui/TechDivider";
import MagneticButton from "@/components/ui/MagneticButton";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn, staggerContainer, scaleInSpring } from "@/lib/motion";
import { 
  Cloud, Brain, Layers, MapPin, Briefcase, Calendar, 
  ArrowRight, Code2, Database, Cpu, GitBranch, Terminal,
  CheckCircle2, Zap
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const expertise = [
  {
    icon: Cloud,
    title: "Cloud Architecture",
    description: "Deep experience with GCP (BigQuery, Pub/Sub, Cloud Functions, Vertex AI) and AWS. Infrastructure-as-code with Terraform.",
    tools: ["GCP", "AWS", "Terraform", "Docker", "K8s"],
  },
  {
    icon: Brain,
    title: "Applied AI",
    description: "RAG pipelines, LangChain, vector databases, and production ML deployments. Real AI solutions, not chatbot wrappers.",
    tools: ["Vertex AI", "LangChain", "Pinecone", "OpenAI"],
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    description: "React, React Native, Next.js, TypeScript. Real-time systems with Kafka. Mobile and web, deployed and maintained.",
    tools: ["React", "Next.js", "TypeScript", "Kafka"],
  },
];

const techStack = [
  { icon: Code2, name: "TypeScript", category: "Language" },
  { icon: Database, name: "BigQuery", category: "Data" },
  { icon: Cpu, name: "Vertex AI", category: "ML" },
  { icon: GitBranch, name: "Terraform", category: "IaC" },
  { icon: Terminal, name: "Python", category: "Language" },
  { icon: Cloud, name: "GCP", category: "Cloud" },
];

const experience = [
  {
    role: "Founder & Lead Engineer",
    company: "BlackLake",
    period: "2024 – Present",
    description: "Boutique engineering studio focused on cloud architecture, applied AI, and full-stack development for complex technical challenges.",
    highlights: ["Independent consulting", "Direct client relationships", "End-to-end delivery"],
    current: true,
  },
  {
    role: "Software Engineer",
    company: "PredictX (via ECS)",
    period: "2021 – 2024",
    description: "Built predictive analytics infrastructure processing 1M+ agricultural market records. Achieved 20x BigQuery performance improvement.",
    highlights: ["20x query speedup", "1M+ daily records", "65% cost reduction"],
    current: false,
  },
  {
    role: "Software Engineer",
    company: "Telecommunications R&D",
    period: "2020 – 2021",
    description: "Contributed to V2X 5G network systems. Sub-10ms latency requirements for vehicle-to-everything communication.",
    highlights: ["<8ms latency", "10K+ connections", "99.99% uptime"],
    current: false,
  },
];

const values = [
  {
    title: "Direct Communication",
    description: "You talk to the person writing the code. No project managers, no handoffs, no translation layers.",
  },
  {
    title: "Production Focus",
    description: "I build systems that ship and scale. No throwaway prototypes—every line of code is production-ready.",
  },
  {
    title: "Honest Assessment",
    description: "I'll tell you if something won't work or if there's a better approach. Clear expectations from day one.",
  },
];

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <PageShell>
      {/* Hero Section - Immersive */}
      <section ref={heroRef} className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
        {/* Animated mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-white" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3rem_3rem]" />
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-32 left-1/4 w-72 h-72 bg-accent-electric/8 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-3xl"
          animate={{ y: [0, -25, 0], x: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />

        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="container mx-auto px-6 relative z-10"
        >
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Left: Text content */}
              <div>
                <motion.div variants={fadeIn} className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-accent-electric/10 rounded-full">
                    <MapPin className="w-4 h-4 text-accent-electric" />
                    <span className="text-sm font-medium text-accent-electric">London, UK</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-green-700">Available Q1 2025</span>
                  </div>
                </motion.div>

                <TextReveal
                  text="James Reed"
                  className="text-5xl md:text-7xl font-bold mb-4 text-gray-900"
                />
                
                <motion.p variants={fadeIn} className="text-2xl text-gray-600 mb-6">
                  Senior Software Engineer
                </motion.p>

                <motion.p variants={fadeIn} className="text-lg text-gray-600 leading-relaxed mb-8">
                  I build production systems that handle real complexity—from data pipelines 
                  processing millions of records to real-time 5G network infrastructure. 
                  4+ years of engineering experience, now available as a boutique studio.
                </motion.p>

                <motion.div variants={fadeIn} className="flex flex-wrap gap-4">
                  <MagneticButton href="/contact">
                    Work With Me
                  </MagneticButton>
                  <Link href="/work">
                    <motion.button
                      className="px-6 py-3 text-gray-700 font-medium flex items-center gap-2 hover:text-accent-electric transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      View My Work
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </motion.div>
              </div>

              {/* Right: Visual element */}
              <motion.div variants={scaleInSpring} className="relative">
                <div className="relative">
                  {/* Tech stack floating cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {techStack.map((tech, i) => (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 flex items-center gap-3 cursor-default"
                      >
                        <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                          <tech.icon className="w-5 h-5 text-gray-700" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{tech.name}</div>
                          <div className="text-xs text-gray-500">{tech.category}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Decorative elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-20 h-20 bg-accent-electric/10 rounded-full blur-xl"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
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

      {/* Story Section - Bento style */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-16"
          >
            <motion.p variants={fadeIn} className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-electric mb-4">
              The Approach
            </motion.p>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why a Boutique Studio?
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={scaleInSpring}
                transition={{ delay: index * 0.1 }}
              >
                <SmartCard className="h-full p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-accent-electric/10 rounded-xl flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6 text-accent-electric" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </SmartCard>
              </motion.div>
            ))}
          </div>

          {/* Quote block */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mt-16 max-w-3xl mx-auto text-center"
          >
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 leading-relaxed">
              "Most agencies are built around project management, not engineering. 
              I built BlackLake to offer the opposite—
              <span className="text-accent-electric"> direct access to senior engineering</span>, 
              without the overhead."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline - Modern */}
      <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent hidden md:block" />

        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeIn} className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-electric mb-4">
              Career Path
            </motion.p>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-gray-900">
              Experience
            </motion.h2>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={scaleInSpring}
                transition={{ delay: index * 0.1 }}
                className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-auto'}`}
              >
                <SmartCard className={`p-6 md:p-8 ${exp.current ? 'border-accent-electric/30 bg-accent-electric/5' : ''}`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        {exp.current && (
                          <span className="px-2 py-0.5 bg-accent-electric text-white text-xs font-semibold rounded-full">
                            Current
                          </span>
                        )}
                        <span className="text-sm text-gray-500 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                      <p className="text-accent-electric font-medium">{exp.company}</p>
                    </div>
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center shrink-0">
                      <Briefcase className="w-6 h-6 text-gray-600" />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full flex items-center gap-1"
                      >
                        <Zap className="w-3 h-3 text-accent-electric" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </SmartCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Grid - Enhanced */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.p variants={fadeIn} className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-electric mb-4">
              Specializations
            </motion.p>
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-gray-900">
              Core Expertise
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={scaleInSpring}
                transition={{ delay: index * 0.1 }}
              >
                <SmartCard className="h-full p-8 group hover:shadow-xl transition-all duration-300">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-accent-electric/20 to-accent-electric/5 rounded-2xl flex items-center justify-center mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <item.icon className="w-8 h-8 text-accent-electric" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-accent-electric transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full group-hover:bg-accent-electric/10 group-hover:text-accent-electric transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </SmartCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Dark */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        {/* Glowing orb */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-electric/10 rounded-full blur-3xl"
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
              className="text-4xl md:text-6xl font-bold mb-6 text-white"
            >
              Let's Build Something
              <span className="block text-accent-electric">Together</span>
            </motion.h2>
            <motion.p 
              variants={fadeIn}
              className="text-xl text-gray-400 mb-10 leading-relaxed"
            >
              I'm currently accepting projects for Q1 2025. 
              If you have a complex technical challenge that needs senior engineering—let's talk.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton href="/contact">
                Start a Conversation
              </MagneticButton>
              <Link href="/work">
                <motion.button
                  className="px-8 py-4 bg-transparent text-white font-medium rounded-lg border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Selected Work
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageShell>
  );
}