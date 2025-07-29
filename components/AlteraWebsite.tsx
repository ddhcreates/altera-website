'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar, Mail, Shield, Zap, Target, Settings, Users, ArrowRight } from 'lucide-react';

const AlteraWebsite = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-emerald-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-2xl font-light text-slate-800 tracking-wide">ALTERA</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('mission')} className="text-slate-600 hover:text-emerald-700 transition-colors">Mission</button>
              <button onClick={() => scrollToSection('services')} className="text-slate-600 hover:text-emerald-700 transition-colors">Services</button>
              <button onClick={() => scrollToSection('contact')} className="bg-emerald-700 text-white px-6 py-2 rounded-full hover:bg-emerald-800 transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span>🌿</span>
              <span>Quietly Empowering Visionaries</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-slate-800 mb-8 leading-tight">
              For Those Called<br />
              <span className="text-emerald-700 font-normal">to More</span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              We serve extraordinary leaders by solving their complex, unseen, or time-consuming challenges—so they can stay focused on what only they can do.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-emerald-700 text-white px-8 py-4 rounded-full text-lg hover:bg-emerald-800 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Book a Quiet Conversation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="border-2 border-emerald-700 text-emerald-700 px-8 py-4 rounded-full text-lg hover:bg-emerald-50 transition-colors"
              >
                Explore Our Work
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <button 
            onClick={() => scrollToSection('mission')}
            className="animate-bounce p-2 rounded-full hover:bg-emerald-100 transition-colors"
          >
            <ChevronDown className="w-6 h-6 text-emerald-700" />
          </button>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-700 text-sm font-semibold tracking-wide uppercase">Our Mission</span>
            <h2 className="text-4xl font-light text-slate-800 mt-4 mb-8">Built for Visionary Leaders</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-2xl font-light text-slate-800 mb-6">Who We Serve</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Leaders with bold visions. Founders, CXOs, change-makers in Fortune 500 companies or scaling enterprises—who are too valuable to be slowed down by operational weight or digital clutter.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-700 rounded-full"></div>
                  <span className="text-slate-700">Fortune 500 Executives</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-700 rounded-full"></div>
                  <span className="text-slate-700">Scaling Enterprise Founders</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-700 rounded-full"></div>
                  <span className="text-slate-700">Visionary Change-Makers</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-emerald-50 to-slate-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-light text-slate-800 mb-6">How We Work</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="w-6 h-6 text-emerald-700 mt-1" />
                  <div>
                    <h4 className="font-medium text-slate-800">Quiet & Discrete</h4>
                    <p className="text-slate-600 text-sm">High discretion, no noise</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Zap className="w-6 h-6 text-emerald-700 mt-1" />
                  <div>
                    <h4 className="font-medium text-slate-800">Sharp & Loyal</h4>
                    <p className="text-slate-600 text-sm">One trusted lead contact</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-emerald-700 mt-1" />
                  <div>
                    <h4 className="font-medium text-slate-800">Fully Human</h4>
                    <p className="text-slate-600 text-sm">Small team, fully remote</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-700 text-sm font-semibold tracking-wide uppercase">What We Offer</span>
            <h2 className="text-4xl font-light text-slate-800 mt-4 mb-8">Three Pillars of Support</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-xl font-medium text-slate-800 mb-4">Precision Executive Enablement</h3>
              <p className="text-slate-600 mb-6 italic">You focus on decisions only you can make. We do the rest.</p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>• Tech-savvy problem-solving</li>
                <li>• Strategic calendar and priority filtering</li>
                <li>• Inbox and document flow management</li>
                <li>• Research and data synthesis</li>
                <li>• Quiet crisis handling</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Settings className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-xl font-medium text-slate-800 mb-4">Custom Systems & Workflows</h3>
              <p className="text-slate-600 mb-6 italic">Build once. Run forever.</p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>• Internal task routing and delegation</li>
                <li>• Knowledge retention systems</li>
                <li>• Personal OKR tracking</li>
                <li>• Founder dashboards</li>
                <li>• AI and automation integration</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-emerald-100">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-xl font-medium text-slate-800 mb-4">Private Tech & Ops Advisory</h3>
              <p className="text-slate-600 mb-6 italic">You shouldn&apos;t have to know how—but someone on your side should.</p>
              <ul className="space-y-3 text-sm text-slate-600">
                <li>• Smart vendor/tool selection</li>
                <li>• AI tool deployment</li>
                <li>• Ghostwriting and comms support</li>
                <li>• Scalable remote team practices</li>
                <li>• Personal tech stack evolution</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="inline-block bg-emerald-50 p-6 rounded-2xl">
              <p className="text-slate-700 text-lg mb-2">
                <span className="font-medium">We operate like:</span>
              </p>
              <p className="text-emerald-700 font-medium text-xl">
                CTO + Chief of Staff + AI Whisperer in your back pocket
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="py-16 px-6 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-8">Current Availability</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-emerald-800/30 p-6 rounded-xl">
              <h3 className="text-xl font-medium mb-4">Executive Partnerships</h3>
              <p className="text-emerald-100">2 spots available for CXO-level, retainer-based relationships</p>
            </div>
            <div className="bg-emerald-800/30 p-6 rounded-xl">
              <h3 className="text-xl font-medium mb-4">Project Work</h3>
              <p className="text-emerald-100">3 short-term system design or rescue projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light text-slate-800 mb-6">Want to Explore This?</h2>
          <p className="text-xl text-slate-600 mb-12">
            We don&apos;t push. We listen. If it&apos;s a fit, we&apos;ll know within 15 minutes.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 to-slate-50 p-8 rounded-2xl">
              <Calendar className="w-8 h-8 text-emerald-700 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-slate-800 mb-4">Schedule a Call</h3>
              <p className="text-slate-600 mb-6">Book a quiet conversation to explore how we can support your vision.</p>
              <button className="w-full bg-emerald-700 text-white py-3 rounded-full hover:bg-emerald-800 transition-colors">
                Book Now
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-emerald-50 p-8 rounded-2xl">
              <Mail className="w-8 h-8 text-emerald-700 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-slate-800 mb-4">Write to Us</h3>
              <p className="text-slate-600 mb-6">Send us a private message about your specific challenges and goals.</p>
              <button className="w-full border-2 border-emerald-700 text-emerald-700 py-3 rounded-full hover:bg-emerald-50 transition-colors">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-emerald-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-2xl font-light tracking-wide">ALTERA</span>
            </div>
            <p className="text-slate-400 text-center md:text-right">
              For Those Called to More<br />
              <span className="text-sm">Quietly Empowering Visionaries</span>
            </p>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-500 text-sm">
              © 2025 Altera. All rights reserved. Designed for extraordinary leaders.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AlteraWebsite;