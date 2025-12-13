"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";
import MagneticButton from "@/components/ui/MagneticButton";

export default function ContactForm() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <motion.div
            variants={fadeIn}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-gray-900">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600">
              Section description lorem ipsum placeholder.
            </p>
          </motion.div>

          <motion.form
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.div
              variants={fadeIn}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <Input placeholder="Name Placeholder" />
              <Input placeholder="Email Placeholder" type="email" />
            </motion.div>

            <motion.div variants={fadeIn}>
              <Input placeholder="Subject Placeholder" />
            </motion.div>

            <motion.div variants={fadeIn}>
              <TextArea placeholder="Message Placeholder" rows={6} />
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="text-center"
            >
              <MagneticButton>
                Send Message
              </MagneticButton>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}