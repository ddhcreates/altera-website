// app/startup-operations-consultant/page.tsx
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Zap, Target, Clock, TrendingUp, Users, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Operations Consultant for Startups - Scale Without Chaos | Altera',
  description: 'Transform your startup operations with proven systems. Reduce founder bottlenecks by 60%, scale efficiently, and build processes that grow with you. Free consultation.',
  keywords: 'startup operations consultant, startup operations, business operations startup, operational efficiency startup, startup workflow optimization, fractional COO startup',
  openGraph: {
    title: 'Operations Consultant for Startups - Scale Without Chaos',
    description: 'Transform your startup operations with proven systems. Reduce founder bottlenecks by 60% and scale efficiently.',
    url: 'https://www.iamaltera.com/startup-operations-consultant',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Startup Operations Consulting',
  description: 'Operations consulting specifically designed for growing startups',
  provider: {
    '@type': 'Organization',
    name: 'Altera',
    url: 'https://www.iamaltera.com'
  },
  areaServed: 'Worldwide',
  audience: 'Startups and growing companies'
}

export default function StartupOperationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <Zap className="w-4 h-4" />
                <span>Startup Operations Specialist</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-light text-slate-800 mb-8 leading-tight">
                Operations Consultant for<br />
                <span className="text-emerald-700 font-normal">Growing Startups</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Scaling faster than your systems can handle? Transform chaos into clarity with 
                operations designed specifically for high-growth startups. Reduce founder bottlenecks 
                by 60% and build processes that scale with you.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="#assessment">
                  <button className="bg-emerald-700 text-white px-8 py-4 rounded-full text-lg hover:bg-emerald-800 transition-all duration-300 flex items-center justify-center space-x-2 group">
                    <span>Get Free Operations Assessment</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="#case-studies">
                  <button className="border-2 border-emerald-700 text-emerald-700 px-8 py-4 rounded-full text-lg hover:bg-emerald-50 transition-colors">
                    See Success Stories
                  </button>
                </Link>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-light text-emerald-700 mb-2">60%</div>
                  <div className="text-sm text-slate-600">Reduction in founder bottlenecks</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-emerald-700 mb-2">10+ hrs</div>
                  <div className="text-sm text-slate-600">Weekly time savings</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-emerald-700 mb-2">4 weeks</div>
                  <div className="text-sm text-slate-600">To see measurable results</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-slate-800 mb-6">
                Sound Familiar?
              </h2>
              <p className="text-lg text-slate-600">
                Common startup operations pain points we solve every day
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-red-50 rounded-xl border border-red-100">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-slate-800 mb-2">Everything runs through you</h3>
                    <p className="text-slate-600 text-sm">Team constantly asks for decisions, approvals, and context you&apos;ve already explained</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-red-50 rounded-xl border border-red-100">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-slate-800 mb-2">Information black holes</h3>
                    <p className="text-slate-600 text-sm">Important details live in someone&apos;s head or buried in Slack threads</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-red-50 rounded-xl border border-red-100">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-slate-800 mb-2">Processes break when scaling</h3>
                    <p className="text-slate-600 text-sm">What worked at 5 people creates chaos at 15</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 p-6 bg-red-50 rounded-xl border border-red-100">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-slate-800 mb-2">Meeting overload</h3>
                    <p className="text-slate-600 text-sm">Spending more time talking about work than doing it</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-red-50 rounded-xl border border-red-100">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-slate-800 mb-2">Tool chaos</h3>
                    <p className="text-slate-600 text-sm">15 different tools that don&apos;t talk to each other</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4 p-6 bg-red-50 rounded-xl border border-red-100">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-medium text-slate-800 mb-2">Reactive mode</h3>
                    <p className="text-slate-600 text-sm">Always firefighting instead of building for the future</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-slate-800 mb-6">
                Our Startup-Specific Approach
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Not generic consulting. Systems designed for the unique challenges of high-growth startups.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-emerald-700" />
                </div>
                <h3 className="text-xl font-medium text-slate-800 mb-4">Week 1: Rapid Assessment</h3>
                <p className="text-slate-600 text-sm">Identify the 3 biggest bottlenecks and implement quick wins that save 5+ hours immediately</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-medium text-slate-800 mb-4">Week 2-3: Core Systems</h3>
                <p className="text-slate-600 text-sm">Build the operational backbone: communication flows, decision frameworks, and information systems</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-medium text-slate-800 mb-4">Week 4: Team Integration</h3>
                <p className="text-slate-600 text-sm">Onboard your team to new systems and establish sustainable rhythms that stick</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-indigo-700" />
                </div>
                <h3 className="text-xl font-medium text-slate-800 mb-4">Ongoing: Scale Ready</h3>
                <p className="text-slate-600 text-sm">Systems that grow with you from 10 to 100+ employees without breaking</p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-slate-800 mb-6">
                Startup Success Stories
              </h2>
            </div>
            
            <div className="space-y-12">
              <div className="bg-gradient-to-br from-emerald-50 to-slate-50 p-8 rounded-2xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-emerald-700 rounded-lg flex items-center justify-center text-white font-bold">S</div>
                  <div>
                    <h3 className="text-xl font-medium text-slate-800">SaaS Startup (15 employees)</h3>
                    <p className="text-slate-600">B2B software, Series A</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-slate-800 mb-3">Challenge:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• CEO was approving every expense over $50</li>
                      <li>• Customer issues took 3+ days to resolve</li>
                      <li>• Team duplicating work across departments</li>
                      <li>• No visibility into project status</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-slate-800 mb-3">Results after 4 weeks:</h4>
                    <ul className="space-y-2 text-emerald-700 text-sm font-medium">
                      <li>• CEO time freed up by 15 hours/week</li>
                      <li>• Customer response time down to 4 hours</li>
                      <li>• 40% reduction in duplicate work</li>
                      <li>• Real-time project dashboard implemented</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold">E</div>
                  <div>
                    <h3 className="text-xl font-medium text-slate-800">E-commerce Startup (8 employees)</h3>
                    <p className="text-slate-600">Direct-to-consumer brand</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-slate-800 mb-3">Challenge:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Inventory constantly out of sync</li>
                      <li>• Manual order processing taking 6+ hours daily</li>
                      <li>• Customer service overwhelmed</li>
                      <li>• Founders working 80+ hour weeks</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-slate-800 mb-3">Results after 4 weeks:</h4>
                    <ul className="space-y-2 text-blue-700 text-sm font-medium">
                      <li>• Automated 90% of order processing</li>
                      <li>• Real-time inventory tracking</li>
                      <li>• Customer service response time cut in half</li>
                      <li>• Founders back to 50-hour weeks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-slate-800 mb-6">
                Startup-Friendly Investment
              </h2>
              <p className="text-lg text-slate-600">
                Designed for growing companies that need results fast
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-emerald-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-medium text-slate-800 mb-2">STARTUP ACCELERATOR</h3>
                  <p className="text-emerald-700 font-medium mb-4">Perfect for early-stage startups</p>
                  <div className="text-4xl font-light text-slate-800">$119</div>
                  <p className="text-slate-500">4-week intensive</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>4 weekly strategy calls with founder</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Operational bottleneck assessment</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>2 hours/week hands-on system building</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Essential dashboards & workflows</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>Team onboarding playbook</span>
                  </li>
                </ul>
                
                <p className="text-xs text-slate-500 mb-6 text-center">
                  ROI typically 10x within first month
                </p>
                
                <Link href="#assessment">
                  <button className="w-full bg-emerald-700 text-white py-3 rounded-full hover:bg-emerald-800 transition-colors font-medium">
                    Start Free Assessment
                  </button>
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-medium text-slate-800 mb-2">SCALE READY</h3>
                  <p className="text-indigo-700 font-medium mb-4">For startups ready to 10x</p>
                  <div className="text-4xl font-light text-slate-800">$399</div>
                  <p className="text-slate-500">4-week transformation</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Everything in Startup Accelerator</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>8 hours/week intensive system building</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Advanced automation & integrations</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Multi-department orchestration</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Scalable team processes</span>
                  </li>
                </ul>
                
                <p className="text-xs text-slate-500 mb-6 text-center">
                  Built to handle 5x team growth
                </p>
                
                <Link href="#assessment">
                  <button className="w-full border-2 border-indigo-700 text-indigo-700 py-3 rounded-full hover:bg-indigo-50 transition-colors font-medium">
                    Start Free Assessment
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Assessment CTA */}
        <section id="assessment" className="py-20 px-6 bg-emerald-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-6">
              Ready to Scale Without Chaos?
            </h2>
            <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto">
              Get a free 45-minute operations assessment. We&apos;ll identify your biggest bottlenecks 
              and show you exactly how to fix them.
            </p>
            
            <div className="bg-white/10 backdrop-blur p-8 rounded-2xl mb-8">
              <h3 className="text-xl font-medium mb-6">In your free assessment, we&apos;ll:</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-emerald-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Map your workflow</h4>
                    <p className="text-sm text-emerald-100">Identify where time gets lost</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Target className="w-5 h-5 text-emerald-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Spot bottlenecks</h4>
                    <p className="text-sm text-emerald-100">Find the 3 biggest problems</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-emerald-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Create action plan</h4>
                    <p className="text-sm text-emerald-100">Get specific next steps</p>
                  </div>
                </div>
              </div>
            </div>
            
            <a 
              href="https://calendly.com/danherbert-uze/45min" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-emerald-700 px-10 py-4 rounded-full text-lg hover:bg-emerald-50 transition-colors font-medium group"
            >
              <span>Book Free Operations Assessment</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <p className="text-sm text-emerald-200 mt-4">
              No sales pitch. Just actionable insights you can use immediately.
            </p>
          </div>
        </section>
      </div>
    </>
  )
}