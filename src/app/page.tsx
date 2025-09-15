"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { 
  ArrowRight, 
  Users, 
  Shield, 
  BarChart3, 
  Zap, 
  CheckCircle,
  Star,
  Building,
  TrendingUp,
  Clock,
  Award
} from "lucide-react";
import Link from "next/link";
import { WebsiteHeader } from "@/components/layout/WebsiteHeader";
import { WebsiteFooter } from "@/components/layout/WebsiteFooter";

const features = [
  {
    icon: Users,
    title: "Three-Sided Marketplace",
    description: "Connect Super Funds, Financial Advisers, and Clients in one compliant platform",
    color: "blue"
  },
  {
    icon: Shield,
    title: "RIC Compliance Ready",
    description: "Built for Retirement Income Covenant obligations with full audit trails and reporting",
    color: "green"
  },
  {
    icon: BarChart3,
    title: "Billing & Time Tracking",
    description: "Automated invoicing for funds based on adviser hours and client interactions",
    color: "purple"
  },
  {
    icon: Clock,
    title: "Availability Management",
    description: "Advisers set working windows, funds select verified advisers for their members",
    color: "orange"
  },
  {
    icon: Award,
    title: "Adviser Verification",
    description: "Comprehensive profiles with qualifications, CPD records, and specialties",
    color: "indigo"
  },
  {
    icon: TrendingUp,
    title: "AI Meeting Summaries",
    description: "Automated transcripts and notes shared with clients and funds for transparency",
    color: "pink"
  }
];

const testimonials = [
  {
    quote: "Watershed HR helped us meet our Retirement Income Covenant obligations while scaling advice access to all our members.",
    author: "Sarah Chen",
    role: "Head of Member Services",
    company: "AustralianSuper",
    rating: 5
  },
  {
    quote: "The platform gives me flexible work opportunities with full compliance support. I can focus on advice, not paperwork.",
    author: "Michael Roberts",
    role: "Senior Financial Adviser",
    company: "Independent Practice",
    rating: 5
  },
  {
    quote: "Getting financial advice through my super fund has never been easier. The chat and meeting summaries are fantastic.",
    author: "Emma Thompson",
    role: "Fund Member",
    company: "Industry SuperFund",
    rating: 5
  }
];

const stats = [
  { value: "200+", label: "Super Funds Connected" },
  { value: "99.9%", label: "Compliance Accuracy" },
  { value: "15k+", label: "Active Advisers" },
  { value: "100k+", label: "Members Served" }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <WebsiteHeader />

      {/* Hero Section */}
      <section id="hero" className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="badge-yellow">
                Retirement Income Covenant Marketplace
              </Badge>
              <h1 className="text-4xl sm:text-6xl font-bold text-foreground leading-tight">
                Connect Super Funds with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                  {" "}Qualified Advisers
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                A digital marketplace designed for Super Funds to meet Retirement Income Covenant obligations 
                by connecting members with verified financial advisers in a compliant, scalable platform.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="btn-primary-watershed group">
                Start Pilot Program
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Link href="/demo">
                <Button size="lg" className="btn-outline-watershed group">
                  Explore Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative group">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 transition-transform duration-500 group-hover:scale-105">
              <Image 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="Financial advisers collaborating on retirement planning strategies with documents and digital tools"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority
              />
            </div>
            {/* Floating stats cards */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 border transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2">
              <div className="text-2xl font-bold text-yellow-400">200+</div>
              <div className="text-sm text-muted-foreground">Super Funds</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 border transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2">
              <div className="text-2xl font-bold text-yellow-400">15k+</div>
              <div className="text-sm text-muted-foreground">Active Advisers</div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-yellow-400">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Everything You Need for RIC Compliance
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Purpose-built for the Retirement Income Covenant with compliance, transparency, and efficiency at its core.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-hover group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <CardHeader>
                <div className={`h-12 w-12 rounded-lg bg-${feature.color}-500/10 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}>
                  <feature.icon className={`h-6 w-6 text-${feature.color}-500 transition-transform duration-300 group-hover:scale-110`} />
                </div>
                <CardTitle className="transition-colors duration-300 group-hover:text-yellow-400">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground">
              See how we&apos;re helping super funds, advisers, and members navigate retirement planning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <span className="text-white font-semibold">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current transition-transform duration-300 group-hover:scale-110" style={{ transitionDelay: `${i * 50}ms` }} />
                      ))}
                    </div>
                  </div>
                  <blockquote className="text-foreground mb-4">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Preview Section */}
      <section id="platform" className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            See the Platform in Action
          </h2>
          <p className="text-xl text-muted-foreground">
            A glimpse into how our marketplace connects all stakeholders
          </p>
        </div>
        
        <div className="relative group">
          <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border shadow-2xl transition-all duration-500 group-hover:shadow-3xl group-hover:scale-[1.02]">
            <Image 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
              alt="Modern dashboard interface showing financial advice marketplace with adviser profiles, client connections, and compliance tracking features"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
              loading="lazy"
            />
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              <span className="text-sm font-medium">RIC Compliant</span>
            </div>
          </div>
          
          <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium">15k+ Advisers</span>
            </div>
          </div>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 shadow-lg transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-1">
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              <span className="text-sm font-medium">AI-Powered Matching</span>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Tailored Solutions for Every Role
          </h2>
          <p className="text-xl text-muted-foreground">
            Designed specifically for the unique needs of each stakeholder
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Super Fund Solution */}
          <Card className="card-hover border-blue-200 dark:border-blue-800 group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <CardHeader className="text-center">
              <div className="h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-blue-500/20 group-hover:scale-110">
                <Building className="h-8 w-8 text-blue-500 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <CardTitle className="text-xl transition-colors duration-300 group-hover:text-blue-400">For Super Funds</CardTitle>
              <CardDescription>
                Meet RIC obligations by providing scalable, compliant advice to all members
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Vetted Adviser Network</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Full Audit Trails</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Automated Billing</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/features/super-funds">
                  <Button className="btn-outline-watershed w-full group transition-all duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Adviser Solution */}
          <Card className="card-hover border-yellow-200 dark:border-yellow-800 ring-2 ring-yellow-400/20 group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:ring-yellow-400/40">
            <CardHeader className="text-center">
              <div className="h-16 w-16 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-yellow-500/20 group-hover:scale-110">
                <Users className="h-8 w-8 text-yellow-500 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <CardTitle className="text-xl transition-colors duration-300 group-hover:text-yellow-400">For Financial Advisers</CardTitle>
              <CardDescription>
                Find flexible work opportunities with compliance support built-in
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Flexible Part-time Work</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Verified Profile System</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Automated Documentation</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/features/advisers">
                  <Button className="btn-primary-watershed w-full group transition-all duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Client Solution */}
          <Card className="card-hover border-green-200 dark:border-green-800 group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
            <CardHeader className="text-center">
              <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-green-500/20 group-hover:scale-110">
                <Shield className="h-8 w-8 text-green-500 transition-transform duration-300 group-hover:scale-110" />
              </div>
              <CardTitle className="text-xl transition-colors duration-300 group-hover:text-green-400">For Fund Members</CardTitle>
              <CardDescription>
                Access quality financial advice through your super fund with ease
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Secure Chat & File Sharing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Easy Meeting Booking</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">AI Meeting Summaries</span>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/features/clients">
                  <Button className="btn-outline-watershed w-full group transition-all duration-300">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="mx-auto max-w-7xl px-4 py-20">
        <Card className="overflow-hidden bg-gradient-to-br from-gray-50 to-stone-100 dark:from-gray-900 dark:to-stone-900 border-gray-200 dark:border-gray-700 group transition-all duration-500 hover:shadow-2xl">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-5 min-h-[400px]">
              {/* Content side */}
              <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex justify-start mb-6">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground">Ready to Meet Your RIC Obligations?</h2>
                  <p className="text-xl text-muted-foreground">
                    Join super funds using Watershed HR to provide scalable, compliant financial advice 
                    to their members. Start your pilot program today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="btn-primary-watershed group">
                      Start Pilot Program
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                    <Button size="lg" className="btn-outline-watershed group">
                      Schedule Demo
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Pilot program available • ASIC compliant • Setup in weeks not months
                  </p>
                </div>
              </div>
              
              {/* Image side */}
              <div className="lg:col-span-2 relative overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                  alt="Professional financial consultation meeting between adviser and client discussing retirement planning and superannuation strategies"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-50/20 dark:to-gray-900/20" />
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <WebsiteFooter />
    </div>
  );
}
