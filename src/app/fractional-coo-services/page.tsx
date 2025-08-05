// app/fractional-coo-services/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Shield, Target, Users, BarChart3, Briefcase, Crown } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Fractional COO Services - Part-Time Operations Leadership | Altera',
  description: 'Get experienced COO leadership without the full-time cost. Fractional COO services for growing companies. Scale operations, reduce chaos, drive results.',
  keywords: 'fractional COO, part-time COO, fractional chief operating officer, interim COO, operations leadership, COO consultant, fractional executive',
  openGraph: {
    title: 'Fractional COO Services - Part-Time Operations Leadership',
    description: 'Get experienced COO leadership without the full-time cost. Scale operations and drive results.',
    url: 'https://www.iamaltera.com/fractional-coo-services',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Fractional COO Services',
  description: 'Part-time Chief Operating Officer services for growing companies',
  provider: {
    '@type': 'Organization',
    name: 'Altera',
    url: 'https://www.iamaltera.com'
  },
  serviceType: 'Executive Leadership',
  audience: 'Growing companies and startups'
}

export default function FractionalCOOPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <Crown className="w-4 h-4" />
                <span>Fractional COO Leadership</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-light text-slate-800 mb-8 leading-tight">
                Fractional COO Services<br />
                <span className="text-indigo-700 font-normal">Executive Impact, Startup Budget</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Ready for COO-level leadership but not ready for a $200K+ salary? Get the strategic 
                operations expertise you need to scale, without the full-time commitment. 
                Drive results from day one.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="#consultation">
                  <button className="bg-indigo-700 text-white px-8 py-4 rounded-full text-lg hover:bg-indigo-800 transition-all duration-300 flex items-center justify-center space-x-2 group">
                    <span>Schedule Strategy Call</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <Link href="#approach">
                  <button className="border-2 border-indigo-700 text-indigo-700 px-8 py-4 rounded-full text-lg hover:bg-indigo-50 transition-colors">
                    See Our Approach
                  </button>
                </Link>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-light text-indigo-700 mb-2">70%</div>
                  <div className="text-sm text-slate-600">Less than full-time COO</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-indigo-700 mb-2">90 days</div>
                  <div className="text-sm text-slate-600">To operational excellence</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-indigo-700 mb-2">15+ yrs</div>
                  <div className="text-sm text-slate-600">COO experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* When You Need Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-slate-800 mb-6">
                When You Need a Fractional COO
              </h2>
              <p className="text-lg text-slate-600">
                Strategic operations leadership for critical growth phases
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-medium text-slate-800 mb-8">You&apos;re Ready When...</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Revenue is $1M-$10M</h4>
                      <p className="text-slate-600 text-sm">You&apos;ve proven product-market fit and need operational scale</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Team is 15-50 people</h4>
                      <p className="text-slate-600 text-sm">Beyond startup chaos but not yet enterprise</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">CEO is overwhelmed</h4>
                      <p className="text-slate-600 text-sm">Spending too much time on operations vs strategy</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Growth is stalling</h4>
                      <p className="text-slate-600 text-sm">Operational bottlenecks limiting expansion</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-slate-800 mb-2">Preparing for funding</h4>
                      <p className="text-slate-600 text-sm">Need operational sophistication for investors</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-medium text-slate-800 mb-8">What We Provide</h3>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-2xl border border-indigo-100">
                  <div className="space-y-6">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-light text-indigo-700 mb-2">Strategic Leadership</div>
                      <p className="text-sm text-slate-600">Not just consulting - actual execution</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Target className="w-5 h-5 text-indigo-600" />
                        <span className="text-slate-700">Operational strategy & roadmap</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Users className="w-5 h-5 text-indigo-600" />
                        <span className="text-slate-700">Team leadership & development</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <BarChart3 className="w-5 h-5 text-indigo-600" />
                        <span className="text-slate-700">Performance metrics & KPIs</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Shield className="w-5 h-5 text-indigo-600" />
                        <span className="text-slate-700">Risk management & compliance</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Briefcase className="w-5 h-5 text-indigo-600" />
                        <span className="text-slate-700">Cross-functional coordination</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section id="approach" className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-slate-800 mb-6">
                Our Fractional COO Approach
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Strategic leadership with hands-on execution, tailored to your growth stage
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-blue-700" />
                </div>
                <h3 className="text-xl font-medium text-slate-800 mb-4">Month 1: Strategic Foundation</h3>
                <p className="text-slate-600 text-sm mb-4">Deep dive into operations, assess team capabilities, identify key leverage points</p>
                <ul className="text-left text-sm text-slate-600 space-y-2">
                  <li>• Complete operational audit</li>
                  <li>• Leadership team assessment</li>
                  <li>• 90-day improvement roadmap</li>
                  <li>• Quick wins implementation</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-indigo-700" />
                </div>
                <h3 className="text-xl font-medium text-slate-800 mb-4">Month 2-3: Systems & Team</h3>
                <p className="text-slate-600 text-sm mb-4">Build scalable systems, develop team capabilities, establish governance</p>
                <ul className="text-left text-sm text-slate-600 space-y-2">
                  <li>• Process standardization</li>
                  <li>• Team structure optimization</li>
                  <li>• Performance management</li>
                  <li>• Communication frameworks</li>
                </ul>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-purple-700" />
                </div>
                <h3 className="text-xl font-medium text-slate-800 mb-4">Ongoing: Scale & Optimize</h3>
                <p className="text-slate-600 text-sm mb-4">Continuous improvement, strategic planning, growth enablement</p>
                <ul className="text-left text-sm text-slate-600 space-y-2">
                  <li>• Monthly strategic reviews</li>
                  <li>• KPI monitoring & reporting</li>
                  <li>• Growth planning & execution</li>
                  <li>• Culture & leadership development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-slate-800 mb-6">
                Fractional COO Impact
              </h2>
            </div>
            
            <div className="space-y-12">
              <div className="bg-gradient-to-br from-indigo-50 to-slate-50 p-8 rounded-2xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-indigo-700 rounded-lg flex items-center justify-center text-white font-bold">F</div>
                  <div>
                    <h3 className="text-xl font-medium text-slate-800">FinTech Company</h3>
                    <p className="text-slate-600">$3M ARR, 35 employees</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-slate-800 mb-3">Challenge:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• CEO spending 60% of time on operations</li>
                      <li>• No clear accountability structure</li>
                      <li>• Customer churn increasing due to service issues</li>
                      <li>• Team morale declining with rapid growth</li>
                      <li>• Investor concerns about operational maturity</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-slate-800 mb-3">6-Month Results:</h4>
                    <ul className="space-y-2 text-indigo-700 text-sm font-medium">
                      <li>• CEO operational time reduced to 20%</li>
                      <li>• Clear org chart and reporting structure</li>
                      <li>• Customer churn reduced by 40%</li>
                      <li>• Employee satisfaction up 65%</li>
                      <li>• Successfully raised Series B</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-indigo-200">
                  <div className="text-center">
                    <div className="text-2xl font-light text-indigo-700 mb-1">$8M</div>
                    <p className="text-sm text-slate-600">Series B raise (2x valuation increase)</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-slate-50 p-8 rounded-2xl">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-purple-700 rounded-lg flex items-center justify-center text-white font-bold">H</div>
                  <div>
                    <h3 className="text-xl font-medium text-slate-800">HealthTech Startup</h3>
                    <p className="text-slate-600">$5M ARR, 42 employees</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-slate-800 mb-3">Challenge:</h4>
                    <ul className="space-y-2 text-slate-600 text-sm">
                      <li>• Regulatory compliance gaps</li>
                      <li>• Scaling issues with customer onboarding</li>
                      <li>• Departments working in silos</li>
                      <li>• No standardized processes</li>
                      <li>• High employee turnover (35%)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-slate-800 mb-3">9-Month Results:</h4>
                    <ul className="space-y-2 text-purple-700 text-sm font-medium">
                      <li>• Full regulatory compliance achieved</li>
                      <li>• Customer onboarding 3x faster</li>
                      <li>• Cross-functional collaboration up 80%</li>
                      <li>• Documented all core processes</li>
                      <li>• Employee turnover down to 8%</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-purple-200">
                  <div className="text-center">
                    <div className="text-2xl font-light text-purple-700 mb-1">200%</div>
                    <p className="text-sm text-slate-600">Revenue growth enabled by operational scale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light text-slate-800 mb-6">
                Fractional COO Investment
              </h2>
              <p className="text-lg text-slate-600">
                Executive-level impact at a fraction of the cost
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-medium text-slate-800 mb-2">PART-TIME ENGAGEMENT</h3>
                  <p className="text-indigo-700 font-medium mb-4">20 hours/week, 6-month minimum</p>
                  <div className="text-4xl font-light text-slate-800">$599</div>
                  <p className="text-slate-500">per week</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Strategic operational leadership</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Weekly leadership team meetings</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Process & system development</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Team coaching & development</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Monthly board-ready reports</span>
                  </li>
                </ul>
                
                <div className="text-center mb-6">
                  <p className="text-xs text-slate-500">
                    Compare to: $200K+ full-time COO salary
                  </p>
                  <p className="text-green-600 font-medium text-sm">
                    Save $100K+ annually
                  </p>
                </div>
                
                <Link href="#consultation">
                  <button className="w-full border-2 border-indigo-700 text-indigo-700 py-3 rounded-full hover:bg-indigo-50 transition-colors font-medium">
                    Schedule Strategy Call
                  </button>
                </Link>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-indigo-200 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-700 text-white px-4 py-1 rounded-full text-xs font-medium">MOST IMPACT</span>
                </div>
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-medium text-slate-800 mb-2">INTENSIVE ENGAGEMENT</h3>
                  <p className="text-purple-700 font-medium mb-4">30 hours/week, 6-month minimum</p>
                  <div className="text-4xl font-light text-slate-800">$899</div>
                  <p className="text-slate-500">per week</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Everything in Part-Time Engagement</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Daily operational leadership</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Crisis management & escalation</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Investor & stakeholder relations</span>
                  </li>
                  <li className="flex items-start space-x-2 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Strategic planning facilitation</span>
                  </li>
                </ul>
                
                <div className="text-center mb-6">
                  <p className="text-xs text-slate-500">
                    75% of full-time COO capacity
                  </p>
                  <p className="text-green-600 font-medium text-sm">
                    Save $80K+ annually
                  </p>
                </div>
                
                <Link href="#consultation">
                  <button className="w-full bg-indigo-700 text-white py-3 rounded-full hover:bg-indigo-800 transition-colors font-medium">
                    Schedule Strategy Call
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="consultation" className="py-20 px-6 bg-indigo-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-6">
              Ready for COO-Level Leadership?
            </h2>
            <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
              Let&apos;s discuss your operational challenges and see if fractional COO services 
              are the right fit for your growth stage.
            </p>
            
            <div className="bg-white/10 backdrop-blur p-8 rounded-2xl mb-8">
              <h3 className="text-xl font-medium mb-6">In our strategy call, we&apos;ll:</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <Target className="w-5 h-5 text-indigo-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Assess your needs</h4>
                    <p className="text-sm text-indigo-100">Understand your growth challenges</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <BarChart3 className="w-5 h-5 text-indigo-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Review your operations</h4>
                    <p className="text-sm text-indigo-100">Identify improvement opportunities</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <ArrowRight className="w-5 h-5 text-indigo-200 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium mb-1">Design engagement</h4>
                    <p className="text-sm text-indigo-100">Customize approach to your needs</p>
                  </div>
                </div>
              </div>
            </div>
            
            <a 
              href="https://calendly.com/danherbert-uze/45min" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white text-indigo-700 px-10 py-4 rounded-full text-lg hover:bg-indigo-50 transition-colors font-medium group"
            >
              <span>Schedule Strategy Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <p className="text-sm text-indigo-200 mt-4">
              60-minute strategic discussion • No sales pressure • Actionable insights guaranteed
            </p>
          </div>
        </section>
      </div>
    </>
  )
}