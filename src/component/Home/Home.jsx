import React from 'react';
import { Sparkles } from 'lucide-react';
import TestVideo from '../../assets/TestVideo.mp4'
import ReactPlayer from 'react-player'
import AboutSection from '../About/About';
export default function HeroSection() {
  return (
    <>
     <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="flex items-center gap-2 text-sm">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-700 font-medium">Elevate Your Brand With Us</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Empowering Your Success with Digital Expertise
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">
              Our digital marketing agency helps businesses grow and succeed online through innovative SEO, social media, content creation, and targeted ad campaigns that drive results and maximize ROI.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 pt-4">
              <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors">
                Read More 
              </button>
              <button className="bg-transparent border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-900 hover:text-white transition-all">
                View All Services
              </button>
            </div>
          </div>

          {/* Right Content - Video/Image Area */}
          <div className="relative">
            <div className="relative    overflow-hidden  aspect-video">
              {/* Video Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
              <video width="750" height="700"  autoPlay loop muted>
  <source src={TestVideo} type="video/mp4"/>
</video>
              </div>
              
              {/* Pink Gradient Overlay at bottom */}
              {/* <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-pink-200/60 to-transparent"></div> */}
            </div>

            {/* Certified Badge */}
            <div className="absolute -bottom-6 -right-6 bg-yellow-400 rounded-full w-24 h-24 flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="text-2xl mb-1">⭐</div>
                <div className="text-xs font-bold text-gray-900">CERTIFIED</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Ticker */}
      <div className="bg-gray-900 text-white py-5   overflow-hidden">
        <div className="flex items-center animate-scroll whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center">
              <span className="px-8 text-sm font-medium">Search Engine Optimization</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="px-8 text-sm font-medium">Email Marketing</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="px-8 text-sm font-medium">Digital Marketing</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="px-8 text-sm font-medium">Content Marketing</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
              <span className="px-8 text-sm font-medium">Social Media Marketing</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
    <AboutSection/>
    </>
   
  );
}