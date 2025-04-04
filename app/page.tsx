'use client'

import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"
import { motion } from "framer-motion"
import XLogo from "./components/XLogo"
import { useEffect, useRef } from "react"

export default function Home() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const handleResize = () => {
      if (iframeRef.current) {
        // Keep the iframe working but don't adjust its size
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Social Media Icons */}
      <div className="fixed top-6 right-6 flex gap-4 z-20">
        <Link href="https://x.com/agenticaicorp" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
          <XLogo size={24} />
        </Link>
        <Link href="https://www.linkedin.com/company/106804912/admin/dashboard/" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
          <Linkedin size={24} />
        </Link>
      </div>

      {/* Background Text */}
      <div className="fixed top-[35%] left-1/2 transform -translate-x-1/2 z-0 w-full text-center pointer-events-none">
        <h2 className="text-[#f5e9d3] text-[15vw] leading-none font-light opacity-30 whitespace-nowrap tracking-tighter">
          Web of Agents
        </h2>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-32 relative z-10">
        {/* Main Title */}
        <motion.h1 
          className="text-center text-6xl md:text-8xl font-light tracking-tighter mb-32 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Agentic AI Corporation
        </motion.h1>

        {/* Navigation */}
        <div className="flex justify-center gap-16 mb-96 mt-96">
          <Link href="#try-cogni" className="bg-[#5a5a58] text-white hover:bg-[#6d6d6b] px-6 py-2 rounded-full font-medium transition-colors">
            Try Cogni
          </Link>
          <Link href="#contact" className="bg-[#5a5a58] text-white hover:bg-[#6d6d6b] px-6 py-2 rounded-full font-medium transition-colors">
            Contact Us
          </Link>
        </div>

        {/* Content Sections Container with Dark Overlay */}
        <div className="relative bg-black/90 mt-64 w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
          {/* About Section */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 relative z-10 min-h-[70vh] flex items-center container mx-auto px-4">
          <div className="md:col-span-1">
            <h2 className="text-4xl font-light tracking-tighter mb-8">About Us</h2>
          </div>
          <div className="md:col-span-2 space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              Welcome to Agentic AI Corporation (AAIC). We are creating web of AI Agents, a giant web of AI Agents where
              each agent is specialized in one particular niche and the agents can communicate to each other, can
              collaborate among themselves, can share relevant data if needed and can do the given work in a highly
              efficient manner.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Currently AI is limited to ideation and information retrieval. Now, we are pioneering a
              new era—one where AI doesn't just think, it acts. We are driving the shift from
              passive intelligence to active execution, enabling AI to carry out tasks with real world
              impact.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              It has endless possibilities- from personal assistants to business automation, the AI
              web works like a global AI workforce.
            </p>
          </div>
          </motion.div>

          {/* Introduction Video Section */}
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="min-h-[80vh] flex flex-col items-center justify-center relative z-10 py-4 mt-[-5vh]">
          <h2 className="text-4xl font-light tracking-tighter mb-16 text-center">Introduction Video</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8 text-center max-w-3xl mx-auto">
            This video will give a feel of what a Web of Agents will look like
          </p>
          <div className="w-full max-w-4xl aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl relative group">
            <iframe
              src="https://www.youtube.com/embed/sRHw6fOsgvM"
              title="Agentic AI Vision"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
            <a
              href="https://www.youtube.com/watch?v=sRHw6fOsgvM"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 bg-black/70 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
          </motion.div>

          {/* Try Cogni Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="min-h-[50vh] flex flex-col items-center justify-center relative z-10 py-4"
            id="try-cogni"
          >
            <div className="flex justify-center items-center mb-16">
              <div className="relative w-[280px] h-[100px] flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/4.png"
                  alt="Cogni"
                  width={240}
                  height={80}
                  className="object-contain hover:opacity-80 transition-opacity duration-300"
                  priority
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-4">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Ask anything—formal or informal. Inquire about people, places, travel, top movies, business, stocks, science, or budget planning. Cogni knows everything and learns more about you as you use it. The more you ask, the smarter it gets. Keep exploring—ask anything!
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  And don't forget to use the Collaboration feature! Your Cogni can team up with others' Cogni agents to streamline tasks and make work effortless. Work smarter, together!
                </p>

                <div className="mt-8">
                  <Link
                    href="http://cogni.agenticaicorporation.com/"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-white hover:bg-gray-100 transition-colors duration-300"
                  >
                    Try Now
                  </Link>
                </div>
              </div>
              
              {/* Neural Network Animation - Without background */}
              <div className="w-full h-[495px] rounded-lg overflow-hidden shadow-xl border-none ml-64 -mr-32 -mt-12">
                <iframe 
                  ref={iframeRef}
                  src="/neural-network.html"
                  className="w-full h-full"
                  title="Neural Network" 
                  style={{ backgroundColor: 'transparent' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Us Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="min-h-[50vh] flex flex-col items-center justify-center relative z-10 py-4"
            id="contact"
          >
            <h2 className="text-4xl font-light tracking-tighter mb-8 text-center">Contact Us</h2>
            <div className="flex flex-col items-center max-w-6xl mx-auto w-full">
              {/* Names - Horizontal Row */}
              <div className="flex flex-wrap justify-center gap-8 mb-6">
                <div className="text-lg text-gray-300 leading-relaxed hover:text-white transition-colors">
                  <a 
                    href="https://www.linkedin.com/in/manglamkartik/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Manglam Kartik
                  </a>
                </div>
                <div className="text-lg text-gray-300 leading-relaxed hover:text-white transition-colors">
                  <a 
                    href="https://www.linkedin.com/in/neelshah020604/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Neel Shah
                  </a>
                </div>
                <div className="text-lg text-gray-300 leading-relaxed hover:text-white transition-colors">
                  <a 
                    href="https://www.linkedin.com/in/sajjad-nakhwa-801707285/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Sajjad Nakhwa
                  </a>
                </div>
              </div>
              
              {/* Address */}
              <div className="text-center mb-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  H5, IIT Bombay<br />
                  Powai, Mumbai 400076
                </p>
              </div>

              {/* Email */}
              <div className="text-center mb-8">
                <a 
                  href="mailto:main@agenticaicorporation.com"
                  className="text-lg text-gray-300 leading-relaxed hover:text-white transition-colors"
                >
                  main@agenticaicorporation.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative w-full text-center text-gray-500 text-sm py-4">
        <p>© {new Date().getFullYear()} Agentic AI Corporation. All rights reserved.</p>
      </div>
    </div>
  )
}

