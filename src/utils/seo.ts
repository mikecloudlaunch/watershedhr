import { Metadata } from 'next';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

const defaultConfig = {
  siteName: 'Watershed HR',
  domain: 'watershedhr.com',
  ogImage: '/og-image.jpg',
  twitterHandle: '@watershedhr'
};

export const generateSEO = (config: SEOConfig): Metadata => {
  const { title, description, keywords, ogImage, canonical } = config;
  
  const fullTitle = title.includes('Watershed HR') ? title : `${title} | ${defaultConfig.siteName}`;
  const fullURL = canonical ? `https://${defaultConfig.domain}${canonical}` : `https://${defaultConfig.domain}`;
  const imageURL = ogImage || defaultConfig.ogImage;
  
  return {
    title: fullTitle,
    description,
    keywords: keywords?.join(', '),
    robots: 'index, follow',
    authors: [{ name: 'Watershed HR Team' }],
    
    // Open Graph
    openGraph: {
      title: fullTitle,
      description,
      url: fullURL,
      siteName: defaultConfig.siteName,
      images: [
        {
          url: imageURL,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_AU',
      type: 'website',
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageURL],
      site: defaultConfig.twitterHandle,
      creator: defaultConfig.twitterHandle,
    },
    
    // Additional metadata
    category: 'Financial Services',
    metadataBase: new URL(`https://${defaultConfig.domain}`),
    alternates: canonical ? {
      canonical: fullURL,
    } : undefined,
  };
};

// Page-specific SEO configurations
export const seoConfigs = {
  home: {
    title: 'Watershed HR - Retirement Income Covenant Marketplace',
    description: 'Connect Super Funds with qualified Financial Advisers through our compliant marketplace. Meet RIC obligations with verified advisers, automated billing, and full audit trails.',
    keywords: [
      'retirement income covenant', 
      'ric compliance', 
      'super fund advisers', 
      'financial advice marketplace', 
      'australian superannuation', 
      'qualified financial advisers'
    ],
    canonical: '/'
  },
  
  about: {
    title: 'About Watershed HR - RIC Compliance Solutions',
    description: 'Learn how Watershed HR helps Super Funds meet Retirement Income Covenant obligations through our three-sided marketplace connecting funds, advisers, and members.',
    keywords: [
      'watershed hr', 
      'about us', 
      'ric compliance', 
      'super fund solutions', 
      'financial services marketplace'
    ],
    canonical: '/about'
  },
  
  features: {
    title: 'Features - Watershed HR Marketplace Platform',
    description: 'Explore features designed for RIC compliance: verified adviser networks, automated billing, AI meeting summaries, and comprehensive audit trails for super funds.',
    keywords: [
      'marketplace features', 
      'ric compliance tools', 
      'adviser verification', 
      'automated billing', 
      'ai meeting summaries'
    ],
    canonical: '/features'
  },
  
  pricing: {
    title: 'Pricing Plans - Watershed HR Marketplace',
    description: 'Flexible pricing for Super Funds, Financial Advisers, and Clients. Start with our pilot program and scale as you grow your advice offering.',
    keywords: [
      'pricing plans', 
      'super fund pricing', 
      'adviser fees', 
      'marketplace pricing', 
      'pilot program'
    ],
    canonical: '/pricing'
  },
  
  contact: {
    title: 'Contact Us - Watershed HR Support',
    description: 'Get in touch with Watershed HR for demo requests, technical support, or partnership inquiries. Available Mon-Fri with 24-hour email response.',
    keywords: [
      'contact watershed hr', 
      'customer support', 
      'demo request', 
      'partnership inquiry', 
      'technical support'
    ],
    canonical: '/contact'
  },
  
  blog: {
    title: 'Blog - Watershed HR Insights & News',
    description: 'Stay updated with the latest insights on Retirement Income Covenant compliance, superannuation industry news, and financial advice trends.',
    keywords: [
      'ric insights', 
      'superannuation news', 
      'financial advice blog', 
      'compliance updates', 
      'industry trends'
    ],
    canonical: '/blog'
  }
};