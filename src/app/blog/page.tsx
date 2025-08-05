// app/blog/page.tsx
import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Operations Consulting Blog - Workflow & Systems Insights | Altera',
  description: 'Expert insights on operations optimization, workflow management, and business systems for founders and executives. Free resources and actionable strategies.',
  keywords: 'operations blog, workflow optimization, business systems, startup operations, operational efficiency',
}

const blogPosts = [
  {
    id: 'operations-chaos-solution',
    title: 'How I Helped a Tech Startup Reduce Operational Chaos by 60%',
    excerpt: 'A step-by-step breakdown of transforming a fragmented workflow into a streamlined system that saved 15 hours per week.',
    date: '2025-01-15',
    readTime: '8 min read',
    category: 'Case Study',
    slug: 'operations-chaos-solution'
  },
  {
    id: 'four-step-system',
    title: 'The 4-Step System Every Growing Startup Needs',
    excerpt: 'Before scaling your team, implement these four operational foundations that prevent 90% of common growing pains.',
    date: '2025-01-10',
    readTime: '6 min read',
    category: 'Systems',
    slug: 'four-step-system'
  },
  {
    id: 'consultant-mistakes',
    title: 'Why Most Operations Consultants Fail (And How We\'re Different)',
    excerpt: 'The three critical mistakes that make operations consulting ineffective, and our proven alternative approach.',
    date: '2025-01-05',
    readTime: '5 min read',
    category: 'Insights',
    slug: 'consultant-mistakes'
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50">
      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-light text-slate-800 mb-6">
              Operations <span className="text-emerald-700">Insights</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Practical strategies for workflow optimization, systems thinking, and operational excellence.
            </p>
          </div>

          <div className="space-y-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center space-x-2 text-sm text-slate-500">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-slate-500">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h2 className="text-2xl font-medium text-slate-800 mb-4 hover:text-emerald-700 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center space-x-2 text-emerald-700 hover:text-emerald-800 font-medium group"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-emerald-50 to-slate-50 p-8 rounded-2xl">
              <h2 className="text-2xl font-medium text-slate-800 mb-4">
                Want Personalized Operations Insights?
              </h2>
              <p className="text-slate-600 mb-6">
                Book a free 45-minute discovery session to discuss your specific operational challenges.
              </p>
              <Link href="/#contact">
                <button className="bg-emerald-700 text-white px-8 py-3 rounded-full hover:bg-emerald-800 transition-colors">
                  Schedule Free Consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}