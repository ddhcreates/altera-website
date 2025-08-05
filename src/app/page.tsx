// app/page.tsx
import { Metadata } from 'next'
import AlteraWebsite from '../AlteraWebsite'

export const metadata: Metadata = {
  title: 'Altera - Executive Workflow Transformation & Operations Consulting',
  description: 'Transform your operations with strategic advisory and systems crafting. For founders, CXOs, and senior operators scaling with elegance. Start with a free 45-minute discovery session.',
  keywords: 'operations consulting, workflow optimization, executive advisory, systems consulting, business operations, operational efficiency, startup consulting, founder advisory',
  authors: [{ name: 'Altera Consulting' }],
  creator: 'Altera',
  publisher: 'Altera',
  openGraph: {
    title: 'Altera - Executive Workflow Transformation',
    description: 'Crafting systems that think with you. Strategic advisory for operational clarity.',
    url: 'https://www.iamaltera.com',
    siteName: 'Altera',
    images: [
      {
        url: '/images/og-image.jpg', // You need to create this
        width: 1200,
        height: 630,
        alt: 'Altera - Executive Workflow Transformation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Altera - Executive Workflow Transformation',
    description: 'Transform your operations with strategic advisory and systems crafting.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-site-verification-code', // Add when you get it
  },
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Altera',
  description: 'Executive workflow transformation and operations consulting for founders and CXOs.',
  url: 'https://www.iamaltera.com',
  logo: 'https://www.iamaltera.com/images/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-XXX-XXX-XXXX', // Add your phone
    contactType: 'customer service',
    availableLanguage: 'English'
  },
  areaServed: 'Worldwide',
  serviceType: 'Business Operations Consulting',
  offers: [
    {
      '@type': 'Offer',
      name: 'ALIGN Package',
      description: '4x Weekly Advisory Calls for operational clarity',
      price: '59',
      priceCurrency: 'USD'
    },
    {
      '@type': 'Offer', 
      name: 'FRAME Package',
      description: 'ALIGN + 2hrs/week System Crafting',
      price: '119',
      priceCurrency: 'USD'
    },
    {
      '@type': 'Offer',
      name: 'STRUCTURE Package', 
      description: 'ALIGN + 4hrs/week System Crafting',
      price: '219',
      priceCurrency: 'USD'
    },
    {
      '@type': 'Offer',
      name: 'FLOW Package',
      description: 'ALIGN + 8hrs/week Systems Architecture', 
      price: '399',
      priceCurrency: 'USD'
    }
  ]
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AlteraWebsite />
    </>
  )
}