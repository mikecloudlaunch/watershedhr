"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Shield, 
  BarChart3, 
  Clock, 
  Award, 
  TrendingUp,
  FileText,
  Database,
  Bell,
  Lock,
  Zap,
  RefreshCw,
  CheckCircle,
  Building,
  UserCheck,
  Settings,
  Globe,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { WebsiteHeader } from "@/components/layout/WebsiteHeader";
import { WebsiteFooter } from "@/components/layout/WebsiteFooter";

const coreFeatures = [
  {
    icon: Users,
    title: "Marketplace Matching",
    description: "Connect super funds with verified financial advisers and match members to appropriate advice providers.",
    benefits: ["Adviser verification", "Smart matching algorithms", "Fund preferences", "Member profiling"]
  },
  {
    icon: Shield,
    title: "RIC Compliance Suite",
    description: "Complete Retirement Income Covenant compliance with automated audit trails and regulatory reporting.",
    benefits: ["RIC compliance", "ASIC reporting", "Audit trails", "Regulatory updates"]
  },
  {
    icon: BarChart3,
    title: "Billing & Time Tracking",
    description: "Automated invoicing based on adviser hours with transparent billing for super funds.",
    benefits: ["Automated billing", "Time tracking", "Transparent pricing", "Fund invoicing"]
  },
  {
    icon: Clock,
    title: "Availability Management",
    description: "Advisers set working windows and availability, funds select advisers that match their needs.",
    benefits: ["Flexible scheduling", "Availability windows", "Capacity management", "Real-time booking"]
  },
  {
    icon: Database,
    title: "Secure Communication",
    description: "Encrypted chat, file sharing, and meeting capabilities between all parties with full compliance.",
    benefits: ["Secure messaging", "File sharing", "Video meetings", "Meeting summaries"]
  },
  {
    icon: FileText,
    title: "AI Meeting Summaries",
    description: "Automated transcription and AI-generated meeting summaries shared with clients and funds.",
    benefits: ["Auto transcription", "AI summaries", "Meeting notes", "Transparent records"]
  }
];

const superFundFeatures = [
  {
    icon: Building,
    title: "Adviser Network Access",
    description: "Access to 15k+ verified financial advisers with comprehensive qualification and CPD records."
  },
  {
    icon: FileText,
    title: "RIC Compliance Reporting",
    description: "Automated generation of Retirement Income Covenant reports with member advice tracking."
  },
  {
    icon: BarChart3,
    title: "Member Advice Analytics",
    description: "Track advice uptake, satisfaction scores, and RIC strategy effectiveness across your membership."
  },
  {
    icon: Settings,
    title: "Fund Preference Controls",
    description: "Set adviser selection criteria, compliance standards, and member matching preferences."
  }
];

const adviserFeatures = [
  {
    icon: Users,
    title: "Verified Profile System",
    description: "Comprehensive profiles showcasing qualifications, CPD records, specialties, and fund relationships."
  },
  {
    icon: Bell,
    title: "Flexible Work Opportunities",
    description: "Part-time and flexible engagement opportunities with multiple super funds on one platform."
  },
  {
    icon: TrendingUp,
    title: "Automated Documentation",
    description: "AI-powered meeting summaries and compliance documentation to reduce administrative burden."
  },
  {
    icon: Globe,
    title: "Multi-Fund Dashboard",
    description: "Manage client relationships across multiple super funds with unified communication tools."
  }
];

const clientFeatures = [
  {
    icon: UserCheck,
    title: "Easy Meeting Booking",
    description: "Simple booking system to schedule advice sessions with fund-approved advisers."
  },
  {
    icon: Clock,
    title: "Secure Chat & File Sharing",
    description: "Direct communication with advisers including secure document upload and sharing."
  },
  {
    icon: FileText,
    title: "Meeting Summaries Access",
    description: "AI-generated meeting summaries and adviser notes available immediately after sessions."
  },
  {
    icon: Bell,
    title: "Progress Tracking",
    description: "Track advice progress, action items, and follow-up recommendations in real-time."
  }
];

const securityFeatures = [
  {
    icon: Lock,
    title: "Financial-Grade Security",
    description: "Bank-level encryption and security protocols designed specifically for financial advice platforms."
  },
  {
    icon: Award,
    title: "ASIC Compliance Built-In",
    description: "Platform designed with ASIC requirements for financial advice and audit trail standards."
  },
  {
    icon: Shield,
    title: "Full Audit Trails",
    description: "Complete logging of all interactions, meetings, and document exchanges for regulatory compliance."
  },
  {
    icon: RefreshCw,
    title: "Continuous Monitoring",
    description: "24/7 security monitoring and regular compliance audits to ensure platform integrity."
  }
];

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <WebsiteHeader />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center space-y-8 mb-20">
          <Badge className="badge-yellow">
            Platform Features
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground">
            Everything You Need for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
              {" "}RIC Compliance
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive marketplace features designed specifically for Retirement Income Covenant 
            compliance, connecting super funds with qualified advisers and their members.
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Core Marketplace Features</h2>
          <p className="text-xl text-muted-foreground">
            Essential capabilities that power the financial advice marketplace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreFeatures.map((feature, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-yellow-500" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Experience the Platform</h2>
            <p className="text-xl text-muted-foreground">
              See how our marketplace brings together all stakeholders
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Financial adviser consulting with client using digital platform"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Real-Time Compliance Monitoring</h3>
                <p className="text-muted-foreground">
                  Every interaction is automatically logged and compliance-checked in real-time, 
                  ensuring your fund meets all RIC obligations without manual oversight.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-background border">
                  <Shield className="h-8 w-8 text-green-500" />
                  <div>
                    <div className="font-semibold text-sm">ASIC Compliant</div>
                    <div className="text-xs text-muted-foreground">Automatic audit trails</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-lg bg-background border">
                  <Clock className="h-8 w-8 text-blue-500" />
                  <div>
                    <div className="font-semibold text-sm">Real-Time Sync</div>
                    <div className="text-xs text-muted-foreground">Instant updates</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Role-Specific Features */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Role-Specific Solutions</h2>
            <p className="text-xl text-muted-foreground">
              Tailored features for super funds, financial advisers, and fund members
            </p>
          </div>

          {/* Super Fund Features */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-16 w-16 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Building className="h-8 w-8 text-blue-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">For Super Funds</h3>
                <p className="text-muted-foreground">Meet RIC obligations with scalable adviser access and full compliance</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {superFundFeatures.map((feature, index) => (
                <Card key={index} className="card-hover border-blue-200 dark:border-blue-800">
                  <CardContent className="p-6">
                    <feature.icon className="h-8 w-8 text-blue-500 mb-4" />
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/features/super-funds">
                <Button className="btn-outline-watershed">
                  Learn More About Super Fund Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Adviser Features */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-16 w-16 rounded-full bg-yellow-500/10 flex items-center justify-center">
                <Users className="h-8 w-8 text-yellow-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">For Financial Advisers</h3>
                <p className="text-muted-foreground">Flexible work opportunities with compliance support built-in</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {adviserFeatures.map((feature, index) => (
                <Card key={index} className="card-hover border-yellow-200 dark:border-yellow-800">
                  <CardContent className="p-6">
                    <feature.icon className="h-8 w-8 text-yellow-500 mb-4" />
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/features/advisers">
                <Button className="btn-primary-watershed">
                  Learn More About Adviser Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Client Features */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center">
                <UserCheck className="h-8 w-8 text-green-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">For Fund Members</h3>
                <p className="text-muted-foreground">Easy access to quality financial advice through your super fund</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {clientFeatures.map((feature, index) => (
                <Card key={index} className="card-hover border-green-200 dark:border-green-800">
                  <CardContent className="p-6">
                    <feature.icon className="h-8 w-8 text-green-500 mb-4" />
                    <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6">
              <Link href="/features/clients">
                <Button className="btn-outline-watershed">
                  Learn More About Client Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Security & Compliance</h2>
          <p className="text-xl text-muted-foreground">
            Enterprise-grade security with industry-leading compliance standards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6 text-center">
                <feature.icon className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-200 dark:border-red-800">
          <CardContent className="text-center space-y-4">
            <Shield className="h-16 w-16 text-red-500 mx-auto" />
            <h3 className="text-2xl font-bold text-foreground">Your Data is Safe</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We maintain the highest security standards with 256-bit encryption, regular penetration testing, 
              and compliance with Australian Privacy Principles. Your sensitive HR data is protected with 
              bank-level security protocols.
            </p>
            <Link href="/security">
              <Button className="btn-outline-watershed">
                View Security Details
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Integration Ecosystem */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Integration Ecosystem</h2>
            <p className="text-xl text-muted-foreground">
              Connect with your existing tools and systems
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
            {[
              "MYOB", "Xero", "HRIS", "Payroll", "CRM", "ATO", 
              "ASIC", "Banking", "Document", "Email", "Calendar", "Reporting"
            ].map((integration, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6 text-center">
                  <div className="h-12 w-12 rounded-lg bg-muted mx-auto mb-3 flex items-center justify-center">
                    <span className="text-xs font-semibold text-muted-foreground">
                      {integration.slice(0, 3).toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-foreground">{integration}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Can&apos;t find your integration? We offer custom API development and enterprise integration services.
            </p>
            <Link href="/integrations">
              <Button className="btn-primary-watershed">
                View All Integrations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <Card className="p-8 bg-gradient-to-br from-gray-50 to-stone-100 dark:from-gray-900 dark:to-stone-900 border-gray-200 dark:border-gray-700">
          <CardContent className="text-center space-y-6">
            <Zap className="h-16 w-16 text-yellow-500 mx-auto" />
            <h2 className="text-3xl font-bold text-foreground">Ready to Experience These Features?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how Watershed HR can transform your workforce management. 
              Start your free trial or schedule a personalized demo today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary-watershed">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/demo">
                <Button size="lg" className="btn-outline-watershed">
                  View Interactive Demo
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              No credit card required • Full feature access • 14-day trial
            </p>
          </CardContent>
        </Card>
      </section>

      <WebsiteFooter />
    </div>
  );
}