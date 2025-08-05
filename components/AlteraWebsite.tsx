'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar, Mail, Shield, Zap, Target, Settings, Users, ArrowRight, CheckCircle, MapPin, Clock, Building } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const AlteraWebsite = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const packages = [
    {
      id: 'align',
      name: 'ALIGN Package',
      subtitle: '4x Weekly Advisory Calls',
      price: '$59',
      duration: '4 weeks',
      calls: '4 sessions',
      buildHours: null,
      description: 'One-on-one calls to help you surface friction, clarify how you think, and identify blind spots that shape your workflow. A fast, high-trust sounding board to recalibrate your operational rhythm.',
      features: [
        'Four 45-min strategy calls — weekly cadence',
        'Identify bottlenecks & blind spots in execution',
        'Understand your decision-making wiring',
        'Tailored workflow insights, not templates',
        'Trusted strategic sparring',
        'No tools built - pure insight, pure thinking'
      ],
      ideal: 'Founders & Execs with self-sufficient ops teams',
      color: 'emerald'
    },
    {
      id: 'frame',
      name: 'FRAME Package',
      subtitle: 'ALIGN + 2hrs/week System Crafting',
      price: '$119',
      duration: '4 weeks',
      calls: '4 sessions',
      buildHours: '8 hours',
      description: 'Everything in ALIGN, plus two hours/week of hands-on system-building — to relieve recurring stressors and structure your thinking. Simple tools, real momentum.',
      features: [
        'All of ALIGN',
        '2 hours/week of backend support',
        'Prototype Google Sheets dashboards',
        'Shared Notion boards for visibility',
        'Systems map of priorities andssssss rituals',
        'Smart automation cues - lightweight but powerful'
      ],
      ideal: 'Leaders seeking hands-on help creating clarity',
      color: 'blue'
    },
    {
      id: 'structure',
      name: 'STRUCTURE Package',
      subtitle: 'ALIGN + 4hrs/week System Crafting',
      price: '$219',
      duration: '4 weeks',
      calls: '4 sessions',
      buildHours: '16 hours',
      description: 'Deeper structure, real integration. Designed for founders in transition or growing teams needing grounded rituals and calm clarity. From recurring pain to elegant pattern.',
      features: [
        'All of ALIGN',
        '4 hours/week of co-design and build',
        'Custom Operational Console',
        'System to manage key workflows',
        'KPI mirrors and decision dashboards',
        'Seamless Calendar, To-do, and Reporting integrations'
      ],
      ideal: 'Leaders craving rhythm, not chaos.',
      color: 'purple'
    },
    {
      id: 'flow',
      name: 'FLOW Package',
      subtitle: 'ALIGN + 8hrs/week Systems Architecture',
      price: '$399',
      duration: '4 weeks',
      calls: '4 sessions',
      buildHours: '32 hours',
      description: 'Your fractional workflow CTO. Architecture for scale that feels simple. You’ll think less about tools, and lead more with clarity. Quietly powerful, designed to disappear behind you.',
      features: [
        'All of ALIGN',
        '8 hours/week of system design & orchestration',
        'Advanced dashboards (Google Sheets + Apps Script)',
        'Multi-tool orchestration',
        'Tool selection & integration design',
        'Team onboarding, documentation & process adoption'
      ],
      ideal: 'Founders scaling beyond memory.',
      color: 'indigo'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      emerald: 'border-emerald-200 bg-emerald-50 text-emerald-800',
      blue: 'border-blue-200 bg-blue-50 text-blue-800',
      purple: 'border-purple-200 bg-purple-50 text-purple-800',
      indigo: 'border-indigo-200 bg-indigo-50 text-indigo-800'
    };
    return colors[color as keyof typeof colors] || colors.emerald;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-emerald-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
                <Image 
                src="/images/logo.png" 
                alt="Altera Logo" 
                width={120} 
                height={40} 
                className="object-contain"
                />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('mission')} className="text-slate-600 hover:text-emerald-700 transition-colors">About</button>
              <button onClick={() => scrollToSection('packages')} className="text-slate-600 hover:text-emerald-700 transition-colors">Packages</button>
              <button onClick={() => scrollToSection('contact')} className="bg-emerald-700 text-white px-6 py-2 rounded-full hover:bg-emerald-800 transition-colors">Start Free Discovery</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span>🧭</span>
              <span>Remote Advisory for Operations Flow</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-slate-800 mb-8 leading-tight">
              Crafting Systems<br />
              <span className="text-emerald-700 font-normal">That Think With You</span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              For founders, CXOs, and senior operators ready to scale with elegance.
              Quiet, tailored systems thinking, crafted to match the pace and precision of high-growth global teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('discovery')}
                className="bg-emerald-700 text-white px-8 py-4 rounded-full text-lg hover:bg-emerald-800 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Start Your Complimentary Session</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollToSection('packages')}
                className="border-2 border-emerald-700 text-emerald-700 px-8 py-4 rounded-full text-lg hover:bg-emerald-50 transition-colors"
              >
                Explore Packages
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <button 
            onClick={() => scrollToSection('discovery')}
            className="animate-bounce p-2 rounded-full hover:bg-emerald-100 transition-colors"
          >
            <ChevronDown className="w-6 h-6 text-emerald-700" />
          </button>
        </div>
      </section>

      {/* Discovery Section */}
      <section id="discovery" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span>00</span>
            <span>Discovery Session – Complimentary</span>
          </div>
          <h2 className="text-4xl font-light text-slate-800 mb-8">Before We Begin</h2>
          
          <div className="bg-gradient-to-br from-emerald-50 to-slate-50 p-8 rounded-2xl mb-12">
            <div className="flex items-center justify-center mb-6">
              <Clock className="w-12 h-12 text-emerald-700" />
            </div>
            <h3 className="text-2xl font-medium text-slate-800 mb-6">45-Minute Private Consultation</h3>
            <p className="text-lg text-slate-600 mb-8">
              After a thoughtful pre-call questionnaire, we meet one-on-one to map your current workflow,
              pain points, and operational hopes. This is a calm, strategic unpacking - not a pitch.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="space-y-4">
                <h4 className="font-medium text-slate-800">We&apos;ll Explore:</h4>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>How your days and weeks actually unfold</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Where friction slows flow, or dims focus</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <MapPin className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Aspirational goals across operations and leadership</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-medium text-slate-800">You&apos;ll leave with:</h4>
                    <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>A clearer mental map and practical next steps</span>
                    </li>
                    <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                        <span>A discreet, respectful lens, regardless of whether we continue or not</span>
                    </li>
                    </ul>
                <div className="text-3xl font-light text-emerald-700">
                  Cost: $0
                </div>
              </div>
            </div>
          </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
                onClick={() => scrollToSection('contact')}
                className="bg-emerald-700 text-white px-10 py-3 rounded-full hover:bg-emerald-800 transition-colors text-lg flex items-center justify-center space-x-2 group"
                >
                <span>Book Your Complimentary Session</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-emerald-700 text-sm font-semibold tracking-wide uppercase">Unblock, Systemise, Scale</span>
            <h2 className="text-4xl font-light text-slate-800 mt-4 mb-8">Four Structured Pathways</h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Progressive engagements for operational clarity — <br />tailored to how you think,
              and built one leader at a time.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {packages.map((pkg, index) => (
              <div key={pkg.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="flex items-center justify-between mb-6">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getColorClasses(pkg.color)}`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-light text-slate-800">{pkg.price}</div>
                    <div className="text-sm text-slate-500">{pkg.duration}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-medium text-slate-800 mb-2">{pkg.name}</h3>
                <p className="text-emerald-700 font-medium mb-4">{pkg.subtitle}</p>
                <p className="text-slate-600 mb-6 leading-relaxed">{pkg.description}</p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-4 text-sm text-slate-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{pkg.calls}</span>
                    </div>
                    {pkg.buildHours && (
                      <div className="flex items-center space-x-2">
                        <Settings className="w-4 h-4" />
                        <span>{pkg.buildHours} build time</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-xl">
                    <p className="text-sm text-slate-600 mb-2">
                      <span className="font-medium">Ideal for:</span> {pkg.ideal}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-sm text-slate-600">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-emerald-700 text-white py-3 rounded-full hover:bg-emerald-800 transition-colors font-medium"
                >
                  Start with Complimentary Session
                </button>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
              <h3 className="text-xl font-medium text-slate-800 mb-4">Need something unique?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm text-slate-600">
                <div>
                  <span className="font-medium">Custom scopes and white-labeled delivery available.</span>
                </div>
                <div>
                  <span className="font-medium">For retainer engagements or embedded roles, let&apos;s design the right shape.</span>
                </div>
                <div>
                  <span className="font-medium">Additional work billed at $95/hr.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 px-6 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light mb-8">Built for Visionary Leaders</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Building className="w-8 h-8 mx-auto mb-4 text-emerald-200" />
              <h3 className="font-medium mb-2">Fortune 500 Standards</h3>
              <p className="text-emerald-100 text-sm">Enterprise-grade thinking with boutique attention</p>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 mx-auto mb-4 text-emerald-200" />
              <h3 className="font-medium mb-2">Remote Excellence</h3>
              <p className="text-emerald-100 text-sm">India-based founder delivering global quality</p>
            </div>
            <div className="text-center">
              <Target className="w-8 h-8 mx-auto mb-4 text-emerald-200" />
              <h3 className="font-medium mb-2">Focused Engagement</h3>
              <p className="text-emerald-100 text-sm">One client per month for white-glove depth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light text-slate-800 mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-xl text-slate-600 mb-12">
            Start with a no-pressure, 45-minute discovery session.<br />
            One conversation can reframe everything.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-50 to-slate-50 p-8 rounded-2xl">
              <Calendar className="w-8 h-8 text-emerald-700 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-slate-800 mb-4">Book Discovery Session</h3>
              <p className="text-slate-600 mb-6">Schedule your free 45-minute consultation to explore what clarity could look like for you.</p>
                <a 
                  href="https://calendly.com/danherbert-uze/45min" 
                  target="_blank"
                  className="w-full bg-emerald-700 text-white py-3 rounded-full hover:bg-emerald-800 transition-colors text-center block"
                >
                  Schedule Free Call
                </a>
            </div>
            
            <div className="bg-gradient-to-br from-slate-50 to-emerald-50 p-8 rounded-2xl">
              <Mail className="w-8 h-8 text-emerald-700 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-slate-800 mb-4">Send Inquiry</h3>
              <p className="text-slate-600 mb-6">Have specific questions about our packages or want to discuss custom scopes?</p>
              <Link href="/contact"><button className="w-full border-2 border-emerald-700 text-emerald-700 py-3 rounded-full hover:bg-emerald-50 transition-colors">
                Send Message
              </button></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
                <div className="flex items-center mb-6 md:mb-0">
                    <Image 
                        src="/images/logo-w.png" 
                        alt="Altera Logo (white)" 
                        width={100} 
                        height={35} 
                        className="object-contain"
                    />
                </div>
            </div>
            <p className="text-slate-400 text-center md:text-right">
              Executive Workflow Transformation<br />
              <span className="text-sm">Rewiring Operations for Insight, Flow & Scale</span>
            </p>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-slate-500 text-sm">
              © 2025 Altera. All rights reserved. Remote advisory crafted in India.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AlteraWebsite;