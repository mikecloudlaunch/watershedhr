"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Target, 
  Heart, 
  Award, 
  Globe, 
  TrendingUp,
  Calendar,
  MapPin,
  Linkedin,
  Mail
} from "lucide-react";
import Link from "next/link";
import { WebsiteHeader } from "@/components/layout/WebsiteHeader";
import { WebsiteFooter } from "@/components/layout/WebsiteFooter";

const values = [
  {
    icon: Users,
    title: "Three-Sided Success",
    description: "We believe in creating value for Super Funds, Financial Advisers, and Fund Members through our marketplace approach."
  },
  {
    icon: Target,
    title: "Compliance Excellence",
    description: "In retirement planning, compliance isn't optional. We build every feature with ASIC requirements and audit trails at its core."
  },
  {
    icon: Heart,
    title: "Member-Centric Focus",
    description: "Every fund member deserves access to quality financial advice. We make it scalable, accessible, and transparent."
  },
  {
    icon: Award,
    title: "Industry Expertise",
    description: "Purpose-built for the Retirement Income Covenant with deep understanding of Australian superannuation regulations."
  }
];

const timeline = [
  {
    year: "2020",
    title: "RIC Recognition",
    description: "Identified the coming Retirement Income Covenant challenges and began developing a marketplace solution."
  },
  {
    year: "2021",
    title: "Platform Foundation",
    description: "Built core marketplace infrastructure connecting super funds with verified financial advisers."
  },
  {
    year: "2022",
    title: "RIC Compliance Launch",
    description: "Launched full compliance platform as Retirement Income Covenant took effect July 1st."
  },
  {
    year: "2023",
    title: "AI Integration",
    description: "Added automated meeting transcripts and AI-generated summaries for enhanced transparency."
  },
  {
    year: "2024",
    title: "Scale & Growth",
    description: "Expanded to serve 200+ super funds with 15k+ active advisers in our marketplace."
  },
  {
    year: "2025",
    title: "Industry Standard",
    description: "Now the leading RIC compliance marketplace serving 100k+ fund members across Australia."
  }
];

const team = [
  {
    name: "Stephanie Ferguson",
    role: "CEO & Founder",
    bio: "Financial adviser with 14+ years experience, always on the cutting edge of industry development.",
    image: "/api/placeholder/150/150",
    linkedin: "#"
  },
  {
    name: "Mike Williams",
    role: "CTO & Co-Founder", 
    bio: "Cybersecurity and IT consulting expert with extensive background in web and digital projects.",
    image: "/api/placeholder/150/150",
    linkedin: "#"
  },
  {
    name: "Belinda Wright",
    role: "Compliance & Legal Director",
    bio: "Legal expert specializing in financial services compliance and regulatory requirements.",
    image: "/api/placeholder/150/150",
    linkedin: "#"
  },
  {
    name: "Jennifer Dean",
    role: "Actuary & Super Fund Founder",
    bio: "Experienced actuary with deep expertise in superannuation fund operations and member outcomes.",
    image: "/api/placeholder/150/150",
    linkedin: "#"
  },
  {
    name: "Nick Downey",
    role: "Tech & Business Development",
    bio: "Technology and business development specialist focused on marketplace growth and partnerships.",
    image: "/api/placeholder/150/150",
    linkedin: "#"
  },
  {
    name: "Tracey Horey",
    role: "Tech & AI Specialist",
    bio: "AI and technology specialist driving innovation in automated compliance and advice documentation.",
    image: "/api/placeholder/150/150",
    linkedin: "#"
  },
  {
    name: "Tom Euvrard",
    role: "Compliance & Legal",
    bio: "Compliance and legal expert ensuring platform adherence to financial advice regulations.",
    image: "/api/placeholder/150/150",
    linkedin: "#"
  },
  {
    name: "Daniel Gara",
    role: "Tech & Business Development",
    bio: "Technology and business development professional focused on platform scalability and market expansion.",
    image: "/api/placeholder/150/150",
    linkedin: "#"
  }
];

const stats = [
  { value: "200+", label: "Super Funds" },
  { value: "15k+", label: "Active Advisers" },
  { value: "100k+", label: "Members Served" },
  { value: "8", label: "Expert Team Members" }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <WebsiteHeader />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center space-y-8 mb-20">
          <Badge className="badge-yellow">
            About Watershed HR
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground">
            Bridging the Gap in
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
              {" "}Retirement Advice
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We created the first marketplace specifically designed to help Super Funds meet their 
            Retirement Income Covenant obligations by connecting members with qualified financial advisers.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  When the Retirement Income Covenant took effect on July 1, 2022, super funds faced 
                  a new reality: they needed to provide retirement income strategies and assist members 
                  with advice - but many lacked the in-house capacity to do so at scale.
                </p>
                <p>
                  Watershed HR was born from this challenge. We saw an opportunity to create an 
                  &quot;Upwork-style marketplace&quot; specifically for financial advice in retirement planning, 
                  where super funds could access vetted advisers, members could receive quality guidance, 
                  and advisers could find flexible work opportunities.
                </p>
                <p>
                  Today, we&apos;re the leading marketplace connecting 200+ super funds with 15k+ verified 
                  financial advisers, helping over 100k fund members access the retirement advice they 
                  need while ensuring full compliance with ASIC requirements.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact">
                  <Button className="btn-primary-watershed">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                  alt="Team collaboration and strategy planning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="card-hover">
                  <CardContent className="p-6 text-center">
                    <Globe className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">Nationwide Coverage</h3>
                    <p className="text-sm text-muted-foreground">
                      Connecting super funds and advisers across all states and territories
                    </p>
                  </CardContent>
                </Card>
                <Card className="card-hover">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-foreground mb-2">RIC Success</h3>
                    <p className="text-sm text-muted-foreground">
                      Helping funds achieve 100% Retirement Income Covenant compliance
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
          <p className="text-xl text-muted-foreground">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="card-hover">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-yellow-500" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              From RIC recognition to marketplace leadership
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-0.5"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-4 w-3 h-3 bg-yellow-400 rounded-full md:left-1/2 md:-translate-x-1.5 z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Calendar className="h-5 w-5 text-yellow-500" />
                          <span className="text-lg font-bold text-yellow-400">{item.year}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground">
            The people behind the platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-yellow-400 mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground mb-4">{member.bio}</p>
                <div className="flex justify-center gap-3">
                  <Link href={member.linkedin} className="text-muted-foreground hover:text-yellow-400 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@watershedhr.com`} className="text-muted-foreground hover:text-yellow-400 transition-colors">
                    <Mail className="h-5 w-5" />
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Offices */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Locations</h2>
            <p className="text-xl text-muted-foreground">
              Supporting customers across Australia
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Sydney (HQ)</h3>
                <p className="text-sm text-muted-foreground mb-2">Level 15, 1 Martin Place</p>
                <p className="text-sm text-muted-foreground">Sydney NSW 2000</p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Melbourne</h3>
                <p className="text-sm text-muted-foreground mb-2">Level 10, 101 Collins Street</p>
                <p className="text-sm text-muted-foreground">Melbourne VIC 3000</p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Brisbane</h3>
                <p className="text-sm text-muted-foreground mb-2">Level 8, 200 Queen Street</p>
                <p className="text-sm text-muted-foreground">Brisbane QLD 4000</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <Card className="p-8 bg-gradient-to-br from-gray-50 to-stone-100 dark:from-gray-900 dark:to-stone-900 border-gray-200 dark:border-gray-700">
          <CardContent className="text-center space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Ready to Meet Your RIC Obligations?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you&apos;re a super fund looking to scale advice access or an adviser seeking 
              flexible opportunities, we&apos;d love to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="btn-primary-watershed">
                  Start Your Pilot
                </Button>
              </Link>
              <Link href="/demo">
                <Button size="lg" className="btn-outline-watershed">
                  See Demo
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <WebsiteFooter />
    </div>
  );
}