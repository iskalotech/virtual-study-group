'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { GraduationCap, Users, Video, BookOpen } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-background">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Learn Together,{' '}
              <span className="text-primary">Grow Together</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Join thousands of students worldwide who are transforming their learning experience
              through collaborative study sessions and real-time interaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild>
                <Link href="/sign-up">Get Started Free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/product">See How It Works</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
                alt="Students collaborating"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-lg">
                <p className="font-bold text-2xl">50,000+</p>
                <p className="text-sm">Active Students</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}