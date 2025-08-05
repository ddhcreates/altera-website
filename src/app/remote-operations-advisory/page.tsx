// app/remote-operations-advisory/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Globe, Wifi, Users, Clock, Shield, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Remote Operations Advisory - Global Operations Excellence | Altera',
  description: 'Remote operations consulting for distributed teams. Optimize remote workflows, boost productivity by 45%, and scale globally. Expert advisory for remote-first companies.',
  keywords: 'remote operations, remote team management, distributed team operations, remote workflow optimization, virtual team consulting, remote work advisory',
  openGraph: {
    title: 'Remote Operations Advisory - Global Operations Excellence',
    description: 'Remote operations consulting for distributed teams. Optimize remote workflows and boost productivity by 45%.',
    url: 'https://www.iamaltera.com/remote-operations-advisory',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Remote Operations Advisory',
  description: 'Operations consulting specialized for remote and distributed teams',
  provider: {
    '@type': 'Organization',
    name: 'Altera',
    url: 'https://www.iamaltera.com'
  },
  serviceType: 'Remote Work Consulting',
  areaServed: 'Worldwide'
}

export default function RemoteOperationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <Globe className="w-4 h-4" />
                <span>Remote Operations Specialist</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-light text-slate-800 mb-8 leading-tight">
                Remote Operations<br />
                <span className="text-teal-700 font-normal">Advisory</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform your distributed team into a high-performing remote operation. 
                Specialized consulting for companies scaling globally with remote-first culture. 
                Boost productivity by 45% and eliminate the chaos of distributed work.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="#consultation">
                  <button className="bg-teal-700 text-white px-8 py-4 rounded-full text-lg hover:bg-teal-800 transition-all duration-300 flex items-center justify-center space-x-2 group">
                    <span>Get Remote Operations Audit</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="#framework">
                  <button className="border-2 border-teal-700 text-teal-700 px-8 py-4 rounded-full text-lg hover:bg-teal-50 transition-colors">
                    See Our Framework
                  </button>
                </Link>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-light text-teal-700 mb-2">45%</div>
                  <div className="text-sm text-slate-600">Productivity increase</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-teal-700 mb-2">80%</div>
                  <div className="text-sm text-slate-600">Reduction in timezone friction</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-teal-700 mb-2">6 weeks</div>
                  <div className="text-sm text-slate-600">To remote excellence</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Remote Challenges Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-slate-800 mb-6">
                Remote Operations Challenges
              </h2>
              <p className="text-lg text-slate-600">
                Common pain points that kill productivity in distributed teams
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-medium text-slate-800 mb-8">Communication Chaos</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Timezone nightmares</h4>
                      <p className="text-slate-600 text-sm">Important decisions delayed by 24+ hours across time zones</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Tool overload</h4>
                      <p className="text-slate-600 text-sm">10+ communication tools creating confusion and missed messages</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Context switching</h4>
                      <p className="text-slate-600 text-sm">Constant interruptions from different communication channels</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-medium text-slate-800 mb-8">Collaboration Breakdowns</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Async workflow gaps</h4>
                      <p className="text-slate-600 text-sm">Work stalling when team members aren&apos;t online simultaneously</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-sm font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Documentation chaos</h4>
                      <p className="text-slate-600 text-sm">Critical information scattered across platforms and time zones</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-sm font-bold">6</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Team isolation</h4>
                      <p className="text-slate-600 text-sm">Remote workers feeling disconnected from company culture</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-8 bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl border border-red-100">
              <div className="text-center">
                <h3 className="text-xl font-medium text-slate-800 mb-4">The Hidden Cost of Poor Remote Operations</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-2xl font-light text-red-600 mb-1">67%</div>
                    <p className="text-sm text-slate-600">Drop in productivity without proper remote systems</p>
                  </div>
                  <div>
                    <div className="text-2xl font-light text-red-600 mb-1">3.2 hrs</div>
                    <p className="text-sm text-slate-600">Daily time lost to poor remote collaboration</p>
                  </div>
                  <div>
                    <div className="text-2xl font-light text-red-600 mb-1">2.5x</div>
                    <p className="text-sm text-slate-600">Higher turnover in poorly managed remote teams</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Framework Section */}
        <section id="framework" className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-slate-800 mb-6">
                Remote Excellence Framework
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our proven 4-pillar approach to building world-class remote operations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <Wifi className="w-6 h-6 text-teal-700" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-800">Communication Architecture</h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li>• Async-first communication protocols</li>
                  <li>• Timezone-optimized meeting schedules</li>
                  <li>• Clear escalation paths for urgent issues</li>
                  <li>• Documentation standards & templates</li>
                  <li>• Communication tool consolidation</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-800">Workflow Optimization</h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li>• Asynchronous handoff processes</li>
                  <li>• 24-hour work cycles across time zones</li>
                  <li>• Automated status updates & reporting</li>
                  <li>• Remote-first project management</li>
                  <li>• Performance tracking systems</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-700" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-800">Team Cohesion</h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li>• Virtual team building programs</li>
                  <li>• Remote onboarding excellence</li>
                  <li>• Digital culture development</li>
                  <li>• Cross-timezone collaboration rituals</li>
                  <li>• Remote leadership training</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-indigo-700" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-800">Security & Compliance</h3>
                </div>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li>• Remote security protocols</li>
                  <li>• Data protection across jurisdictions</li>
                  <li>• Compliance management systems</li>
                  <li>• Access control & monitoring</li>
                  <li>• Incident response procedures</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-slate-800 mb-6">
                Remote Success Stories
              </h2>
            </div>
            
            <div className="space-y-12">
              <div className="bg-gradient-to-br from-teal-50 to-slate-50 p-8 rounded-2xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-teal-700 rounded-lg flex items-center justify-center text-white font-bold">G</div>
                  <div>
                    <h3 className="text-xl font-medium text-slate-800">Global Software Company</h3>
                    <p className="text-slate-600">120 employees across 15 countries</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-slate-800 mb-3">Remote Challenges:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Projects delayed by timezone coordination</li>
                      <li>• 40% of team felt disconnected</li>
                      <li>• Knowledge silos across regions</li>
                      <li>• Inconsistent communication standards</li>
                      <li>• New hires struggling with remote onboarding</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-slate-800 mb-3">6-Week Transformation:</h4>
                    <ul className="space-y-2 text-teal-700 text-sm font-medium">
                      <li>• Project delivery time reduced by 35%</li>
                      <li>• Employee engagement up 85%</li>
                      <li>• Knowledge sharing increased 200%</li>
                      <li>• Unified communication across all regions</li>
                      <li>• 95% new hire satisfaction rate</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-teal-200">
                  <div className="grid md:grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-light text-teal-700 mb-1">$2.3M</div>
                      <p className="text-xs text-slate-600">Annual productivity gain</p>
                    </div>
                    <div>
                      <div className="text-xl font-light text-teal-700 mb-1">90%</div>
                      <p className="text-xs text-slate-600">Employee retention improvement</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold">D</div>
                  <div>
                    <h3 className="text-xl font-medium text-slate-800">Digital Marketing Agency</h3>
                    <p className="text-slate-600">45 remote employees, 8 time zones</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-slate-800 mb-3">Remote Challenges:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Client work delayed by handoff issues</li>
                      <li>• Team working in isolation</li>
                      <li>• Inconsistent quality across regions</li>
                      <li>• Client communication gaps</li>
                      <li>• Burnout from timezone pressure</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-slate-800 mb-3">8-Week Results:</h4>
                    <ul className="space-y-2 text-blue-700 text-sm font-medium">
                      <li>• Client delivery time cut by 50%</li>
                      <li>• Cross-team collaboration up 150%</li>
                      <li>• Quality scores improved 40%</li>
                      <li>• Client satisfaction at 98%</li>
                      <li>• Work-life balance restored</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <div className="grid md:grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-light text-blue-700 mb-1">180%</div>
                      <p className="text-xs text-slate-600">Revenue growth enabled</p>
                    </div>
                    <div>
                      <div className="text-xl font-light text-blue-700 mb-1">24/7</div>
                      <p className="text-xs text-slate-600">Continuous delivery capability</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-slate-800 mb-6">
                Remote Operations Services
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <div className="text-center mb-6">
                  <Globe className="w-12 h-12 text-teal-700 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-slate-800 mb-2">Remote Readiness Audit</h3>
                  <div className="text-2xl font-light text-slate-800 mb-1">$89</div>
                  <p className="text-slate-500 text-sm">2-week assessment</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Current remote operations assessment</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Communication flow analysis</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Tool stack optimization plan</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Quick wins implementation guide</span>
                  </li>
                </ul>
                
                <Link href="#consultation">
                  <button className="w-full border-2 border-teal-700 text-teal-700 py-3 rounded-full hover:bg-teal-50 transition-colors font-medium">
                    Start Audit
                  </button>
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-teal-200 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-teal-700 text-white px-4 py-1 rounded-full text-xs font-medium">MOST POPULAR</span>
                </div>
                
                <div className="text-center mb-6">
                  <Zap className="w-12 h-12 text-teal-700 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-slate-800 mb-2">Remote Transformation</h3>
                  <div className="text-2xl font-light text-slate-800 mb-1">$319</div>
                  <p className="text-slate-500 text-sm">8-week intensive</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Everything in Remote Readiness Audit</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Complete workflow redesign</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Communication architecture setup</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Team training & onboarding</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Performance monitoring setup</span>
                  </li>
                </ul>
                
                <Link href="#consultation">
                  <button className="w-full bg-teal-700 text-white py-3 rounded-full hover:bg-teal-800 transition-colors font-medium">
                    Start Transformation
                  </button>
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <div className="text-center mb-6">
                  <Shield className="w-12 h-12 text-teal-700 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-slate-800 mb-2">Enterprise Remote</h3>
                  <div className="text-2xl font-light text-slate-800 mb-1">$599</div>
                  <p className="text-slate-500 text-sm">12-week program</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Everything in Remote Transformation</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Multi-region coordination systems</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Advanced security & compliance</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Leadership development program</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                    <span>Ongoing optimization support</span>
                  </li>
                </ul>
                
                <Link href="#consultation">
                  <button className="w-full border-2 border-teal-700 text-teal-700 py-3 rounded-full hover:bg-teal-50 transition-colors font-medium">
                    Start Enterprise
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="consultation" className="py-20 px-6 bg-teal-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-6">
              Ready to Master Remote Operations?
            </h2>
            <p className="text-xl text-teal-100 mb-12 max-w-2xl mx-auto">
              Get a free remote operations audit and discover how to turn your distributed 
              team into a competitive advantage.
            </p>
            
            <div className="bg-white/10 backdrop-blur p-8 rounded-2xl mb-8">
              <h3 className="text-xl font-medium mb-6">Your free remote operations audit includes:</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <Wifi className="w-5 h-5 text-teal-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Communication Analysis</h4>
                    <p className="text-sm text-teal-100">Review your current tools and workflows for optimization opportunities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-teal-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Workflow Assessment</h4>
                    <p className="text-sm text-teal-100">Identify timezone friction points and async collaboration gaps</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-teal-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Quick Wins Strategy</h4>
                    <p className="text-sm text-teal-100">Immediate actions to boost productivity by 20% within 2 weeks</p>
                  </div>
                </div>
              </div>
            </div>
            
            <a 
              href="https://calendly.com/danherbert-uze/45min" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-teal-700 px-10 py-4 rounded-full text-lg hover:bg-teal-50 transition-colors font-medium group"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <p className="text-sm text-teal-200 mt-4">
              45-minute strategic discussion • No sales pressure • Actionable insights guaranteed
            </p>
          </div>
        </section>
      </div>
    </>
  )
}