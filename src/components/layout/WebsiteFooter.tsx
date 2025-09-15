"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Shield,
  Award,
  Clock
} from "lucide-react";

const productLinks = [
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "Demo", href: "/demo" },
  { name: "API Documentation", href: "/docs" },
  { name: "Integrations", href: "/integrations" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
  { name: "Press Kit", href: "/press" },
];

const resourcesLinks = [
  { name: "Help Center", href: "/help" },
  { name: "Compliance Guide", href: "/compliance" },
  { name: "Security", href: "/security" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

const solutionLinks = [
  { name: "For Super Funds", href: "/features/super-funds" },
  { name: "For Advisers", href: "/features/advisers" },
  { name: "For Clients", href: "/features/clients" },
  { name: "Enterprise", href: "/enterprise" },
];

export function WebsiteFooter() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter Section */}
      <div className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-foreground">Stay Updated</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get the latest HR insights, compliance updates, and product news delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1"
              />
              <Button className="btn-primary-watershed">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Company Info Section - Full Width */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500" />
            <span className="text-xl font-bold text-foreground">Watershed HR</span>
          </div>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
            Streamlining workforce management for Super Funds, Advisers, and their Clients 
            with comprehensive HR solutions built for the Australian market.
          </p>
          
          {/* Trust Indicators - Centered */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Shield className="h-4 w-4 text-green-500" />
              <span>ASIC Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Award className="h-4 w-4 text-blue-500" />
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 text-yellow-500" />
              <span>99.9% Uptime Guarantee</span>
            </div>
          </div>

          {/* Contact Info - Centered */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>1800 WATERSHED</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>hello@watershedhr.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Sydney • Melbourne • Brisbane</span>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-border my-12"></div>

        {/* Navigation Links - Centered Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {/* Product Links */}
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-4">Solutions</h4>
            <ul className="space-y-2">
              {solutionLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="text-center">
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {resourcesLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-yellow-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links - Centered */}
        <div className="mt-12 pt-8 border-t border-border text-center">
          <h4 className="font-semibold text-foreground mb-4">Follow Us</h4>
          <div className="flex justify-center gap-6">
            <Link 
              href="https://twitter.com/watershedhr" 
              className="text-muted-foreground hover:text-yellow-400 transition-colors"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link 
              href="https://linkedin.com/company/watershedhr" 
              className="text-muted-foreground hover:text-yellow-400 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link 
              href="mailto:hello@watershedhr.com" 
              className="text-muted-foreground hover:text-yellow-400 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Watershed HR. All rights reserved. ABN 123 456 789
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-yellow-400 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-yellow-400 transition-colors">
                Terms
              </Link>
              <Link href="/cookies" className="hover:text-yellow-400 transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}