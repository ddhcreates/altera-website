// app/workflow-optimization-services/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Zap, RefreshCw, Clock, BarChart3, Workflow, Settings } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Workflow Optimization Services - Streamline Business Operations | Altera',
  description: 'Professional workflow optimization services. Eliminate bottlenecks, reduce task completion time by 50%, and create efficient processes that scale. Free workflow audit.',
  keywords: 'workflow optimization, business process optimization, workflow efficiency, process improvement, workflow consulting, business workflow automation',
  openGraph: {
    title: 'Workflow Optimization Services - Streamline Business Operations',
    description: 'Eliminate bottlenecks and reduce task completion time by 50% with proven workflow optimization.',
    url: 'https://www.iamaltera.com/workflow-optimization-services',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Workflow Optimization Services',
  description: 'Professional workflow optimization and business process improvement',
  provider: {
    '@type': 'Organization',
    name: 'Altera',
    url: 'https://www.iamaltera.com'
  },
  serviceType: 'Business Process Optimization'
}

export default function WorkflowOptimizationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <Workflow className="w-4 h-4" />
                <span>Workflow Optimization Specialists</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-light text-slate-800 mb-8 leading-tight">
                Workflow Optimization<br />
                <span className="text-blue-700 font-normal">That Actually Works</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Stop wasting time on inefficient processes. Our proven workflow optimization 
                methodology reduces task completion time by 50% and eliminates the bottlenecks 
                that slow your team down.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="#audit">
                  <button className="bg-blue-700 text-white px-8 py-4 rounded-full text-lg hover:bg-blue-800 transition-all duration-300 flex items-center justify-center space-x-2 group">
                    <span>Get Free Workflow Audit</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="#process">
                  <button className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors">
                    See Our Process
                  </button>
                </Link>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-light text-blue-700 mb-2">50%</div>
                  <div className="text-sm text-slate-600">Faster task completion</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-blue-700 mb-2">73%</div>
                  <div className="text-sm text-slate-600">Reduction in bottlenecks</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-blue-700 mb-2">2 weeks</div>
                  <div className="text-sm text-slate-600">To see improvements</div>
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
                Workflow Problems Costing You Time & Money
              </h2>
              <p className="text-lg text-slate-600">
                Inefficient workflows are the hidden productivity killer in growing businesses
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-medium text-slate-800 mb-8">Common Workflow Issues</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Task Handoff Delays</h4>
                      <p className="text-slate-600 text-sm">Work sits idle waiting for the next person to pick it up</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Context Switching</h4>
                      <p className="text-slate-600 text-sm">Constantly jumping between different tools and tasks</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Approval Bottlenecks</h4>
                      <p className="text-slate-600 text-sm">Everything waits for one person's approval</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-sm font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Duplicate Work</h4>
                      <p className="text-slate-600 text-sm">Multiple people doing the same task unknowingly</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-sm font-bold">5</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Manual Processes</h4>
                      <p className="text-slate-600 text-sm">Repetitive tasks that could be automated</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-medium text-slate-800 mb-8">The Real Cost</h3>
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border border-red-100">
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-light text-red-600 mb-2">$47,000</div>
                      <p className="text-sm text-slate-600">Average annual cost of workflow inefficiencies per employee</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700">Time lost to context switching</span>
                        <span className="font-medium text-slate-800">23 min/day</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700">Waiting for approvals</span>
                        <span className="font-medium text-slate-800">45 min/day</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700">Duplicate/rework</span>
                        <span className="font-medium text-slate-800">37 min/day</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-700">Manual processes</span>
                        <span className="font-medium text-slate-800">52 min/day</span>
                      </div>
                      <div className="border-t pt-4 flex justify-between items-center font-medium">
                        <span className="text-slate-800">Total daily loss per person</span>
                        <span className="text-red-600">2.6 hours</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-slate-800 mb-6">
                Our Proven Optimization Process
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                A systematic approach to identifying and eliminating workflow inefficiencies
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-medium text-slate-800 mb-4">1. Workflow Mapping</h3>
                <p className="text-slate-600 text-sm">Document current processes and identify all handoff points, delays, and decision nodes</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-xl font-medium text-slate-800 mb-4">2. Bottleneck Analysis</h3>
                <p className="text-slate-600 text-sm">Pinpoint exactly where work gets stuck and quantify the impact on overall efficiency</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <RefreshCw className="w-8 h-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-medium text-slate-800 mb-4">3. Process Redesign</h3>
                <p className="text-slate-600 text-sm">Create streamlined workflows that eliminate waste and reduce handoffs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="w-8 h-8 text-indigo-700" />
                </div>
                <h3 className="text-xl font-medium text-slate-800 mb-4">4. Implementation</h3>
                <p className="text-slate-600 text-sm">Deploy new workflows with proper training and continuous monitoring</p>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-slate-800 mb-6">
                Optimization Results
              </h2>
            </div>
            
            <div className="space-y-12">
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 p-8 rounded-2xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold">M</div>
                  <div>
                    <h3 className="text-xl font-medium text-slate-800">Marketing Agency</h3>
                    <p className="text-slate-600">25 employees, project-based work</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-slate-800 mb-3">Before Optimization:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Projects took 3-4 weeks on average</li>
                      <li>• 40% of time spent on admin tasks</li>
                      <li>• Constant status update meetings</li>
                      <li>• Files scattered across 8 different tools</li>
                      <li>• Clients frustrated with delays</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-slate-800 mb-3">After Optimization:</h4>
                    <ul className="space-y-2 text-blue-700 text-sm font-medium">
                      <li>• Project completion time: 1.5-2 weeks</li>
                      <li>• Admin time reduced to 15%</li>
                      <li>• Automated status updates</li>
                      <li>• Centralized project workspace</li>
                      <li>• 95% client satisfaction rate</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-blue-200">
                  <div className="text-center">
                    <div className="text-2xl font-light text-blue-700 mb-1">$180,000</div>
                    <p className="text-sm text-slate-600">Annual productivity gain</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-slate-50 p-8 rounded-2xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-700 rounded-lg flex items-center justify-center text-white font-bold">T</div>
                  <div>
                    <h3 className="text-xl font-medium text-slate-800">Tech Company</h3>
                    <p className="text-slate-600">50 employees, software development</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-slate-800 mb-3">Before Optimization:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Feature releases took 6-8 weeks</li>
                      <li>• Code reviews delayed by 3-5 days</li>
                      <li>• Deployment process took 4 hours</li>
                      <li>• Bugs discovered in production</li>
                      <li>• Team working weekends regularly</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-slate-800 mb-3">After Optimization:</h4>
                    <ul className="space-y-2 text-green-700 text-sm font-medium">
                      <li>• Feature releases: 2-3 weeks</li>
                      <li>• Same-day code reviews</li>
                      <li>• Automated deployment (30 min)</li>
                      <li>• 90% fewer production bugs</li>
                      <li>• Work-life balance restored</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-green-200">
                  <div className="text-center">
                    <div className="text-2xl font-light text-green-700 mb-1">300%</div>
                    <p className="text-sm text-slate-600">Faster delivery cycles</p>
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
                Workflow Optimization Services
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <div className="text-center mb-6">
                  <Clock className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-slate-800 mb-2">Quick Assessment</h3>
                  <div className="text-2xl font-light text-slate-800 mb-1">$59</div>
                  <p className="text-slate-500 text-sm">1-week analysis</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Current workflow documentation</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Top 5 bottleneck identification</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Quick wins recommendations</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Implementation roadmap</span>
                  </li>
                </ul>
                
                <Link href="#audit">
                  <button className="w-full border-2 border-blue-700 text-blue-700 py-3 rounded-full hover:bg-blue-50 transition-colors font-medium">
                    Start Assessment
                  </button>
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-blue-200 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-700 text-white px-4 py-1 rounded-full text-xs font-medium">MOST POPULAR</span>
                </div>
                
                <div className="text-center mb-6">
                  <RefreshCw className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-slate-800 mb-2">Full Optimization</h3>
                  <div className="text-2xl font-light text-slate-800 mb-1">$219</div>
                  <p className="text-slate-500 text-sm">4-week transformation</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Everything in Quick Assessment</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Complete workflow redesign</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Automation implementation</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Team training & onboarding</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Performance monitoring setup</span>
                  </li>
                </ul>
                
                <Link href="#audit">
                  <button className="w-full bg-blue-700 text-white py-3 rounded-full hover:bg-blue-800 transition-colors font-medium">
                    Start Optimization
                  </button>
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <div className="text-center mb-6">
                  <Settings className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-slate-800 mb-2">Enterprise Scale</h3>
                  <div className="text-2xl font-light text-slate-800 mb-1">$399</div>
                  <p className="text-slate-500 text-sm">Comprehensive overhaul</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Everything in Full Optimization</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Multi-department integration</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Advanced analytics & reporting</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Change management support</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Ongoing optimization support</span>
                  </li>
                </ul>
                
                <Link href="#audit">
                  <button className="w-full border-2 border-blue-700 text-blue-700 py-3 rounded-full hover:bg-blue-50 transition-colors font-medium">
                    Start Enterprise
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="audit" className="py-20 px-6 bg-blue-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-6">
              Ready to Optimize Your Workflows?
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Get a free workflow audit and discover exactly where you're losing time and money.
            </p>
            
            <div className="bg-white/10 backdrop-blur p-8 rounded-2xl mb-8">
              <h3 className="text-xl font-medium mb-6">Your free audit includes:</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <BarChart3 className="w-5 h-5 text-blue-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Workflow Analysis</h4>
                    <p className="text-sm text-blue-100">Map your current processes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-blue-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Bottleneck Report</h4>
                    <p className="text-sm text-blue-100">Identify top inefficiencies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-blue-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Action Plan</h4>
                    <p className="text-sm text-blue-100">Prioritized improvement steps</p>
                  </div>
                </div>
              </div>
            </div>
            
            <a 
              href="https://calendly.com/danherbert-uze/45min" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-blue-700 px-10 py-4 rounded-full text-lg hover:bg-blue-50 transition-colors font-medium group"
            >
              <span>Book Free Workflow Audit</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <p className="text-sm text-blue-200 mt-4">
              45-minute session • No commitment required • Actionable insights guaranteed
            </p>
          </div>
        </section>
      </div>
    </>
  )
}