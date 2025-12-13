'use client';

import { motion } from 'framer-motion';
import { fadeIn, slideUp, staggerContainer } from '@/lib/motion';
import { CaseStudy } from '@/lib/case-studies';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import MagneticButton from '@/components/ui/MagneticButton';

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
        <div className="container-content">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link 
              href="/work" 
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-accent-electric transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Work
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
            >
              <motion.div variants={fadeIn} className="flex flex-wrap gap-2 mb-6">
                {caseStudy.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-accent-electric/10 text-accent-electric text-xs font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.h1
                variants={slideUp}
                className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6"
              >
                {caseStudy.title}
              </motion.h1>

              <motion.p
                variants={fadeIn}
                className="text-base md:text-lg leading-relaxed text-gray-600 mb-8"
              >
                {caseStudy.description}
              </motion.p>

              <motion.div variants={fadeIn} className="flex flex-wrap gap-8 text-sm">
                <div>
                  <div className="text-gray-500 mb-1">Industry</div>
                  <div className="font-semibold text-gray-900">{caseStudy.industry}</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Timeline</div>
                  <div className="font-semibold text-gray-900">{caseStudy.timeline}</div>
                </div>
                <div>
                  <div className="text-gray-500 mb-1">Team Size</div>
                  <div className="font-semibold text-gray-900">{caseStudy.teamSize}</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`h-96 rounded-2xl bg-gradient-to-br ${caseStudy.gradient} shadow-2xl relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Grid */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Results That Matter</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Measurable impact across key business metrics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caseStudy.results.map((result, index) => (
              <motion.div
                key={result.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent-electric mb-2">
                  {result.value}
                </div>
                <div className="text-lg font-semibold mb-2">{result.metric}</div>
                <div className="text-sm text-gray-400">{result.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="space-y-16">
            {/* Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-600">
                {caseStudy.challenge}
              </p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Solution</h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-8">
                {caseStudy.solution}
              </p>

              {/* Key Features */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h3>
                <div className="space-y-3">
                  {caseStudy.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent-electric flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-padding bg-gray-50">
        <div className="container-narrow">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Technology Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {caseStudy.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-white border border-gray-200 text-gray-700 font-medium rounded-lg shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      {caseStudy.testimonial && (
        <section className="section-padding">
          <div className="container-narrow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-accent-electric/5 to-blue-500/5 rounded-2xl p-8 md:p-12 border border-accent-electric/10"
            >
              <div className="text-4xl text-accent-electric mb-6">&ldquo;</div>
              <blockquote className="text-xl md:text-2xl font-medium text-gray-900 mb-6 leading-relaxed">
                {caseStudy.testimonial.quote}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-electric/20" />
                <div>
                  <div className="font-semibold text-gray-900">
                    {caseStudy.testimonial.author}
                  </div>
                  <div className="text-sm text-gray-600">{caseStudy.testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-narrow text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Something Similar?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve similar results for your business.
            </p>
            <Link href="/contact">
              <MagneticButton className="bg-accent-electric hover:bg-accent-electricDark">
                Start Your Project
              </MagneticButton>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
