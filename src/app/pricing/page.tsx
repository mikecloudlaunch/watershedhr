"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle, 
  X, 
  ArrowRight, 
  Building, 
  Users, 
  Crown,
  Star,
  Phone,
  Mail,
  Calendar,
  Zap,
  Shield,
  Headphones
} from "lucide-react";
import Link from "next/link";
import { WebsiteHeader } from "@/components/layout/WebsiteHeader";
import { WebsiteFooter } from "@/components/layout/WebsiteFooter";

const pricingPlans = [
  {
    name: "Super Fund Starter",
    description: "Perfect for smaller super funds beginning their RIC compliance journey",
    price: 2500,
    period: "per month",
    employees: "Up to 10k members",
    popular: false,
    icon: Users,
    features: [
      "Access to verified adviser network",
      "Basic RIC compliance reporting",
      "Member-adviser matching",
      "Standard support",
      "5 fund administrator accounts",
      "Audit trail logging",
      "Mobile app access",
      "Basic billing integration"
    ],
    limitations: [
      "Advanced analytics",
      "Custom adviser criteria",
      "API access",
      "Priority support"
    ]
  },
  {
    name: "Super Fund Professional", 
    description: "Ideal for mid-size funds with comprehensive RIC obligations",
    price: 7500,
    period: "per month",
    employees: "Up to 100k members",
    popular: true,
    icon: Building,
    features: [
      "Everything in Starter",
      "Advanced member analytics",
      "Custom adviser selection criteria",
      "Priority support & onboarding",
      "Unlimited administrator accounts",
      "Enhanced compliance reporting",
      "Advanced billing automation",
      "Multi-location management",
      "Custom branding options",
      "API access (limited)"
    ],
    limitations: [
      "24/7 dedicated support",
      "Custom integrations",
      "Dedicated relationship manager"
    ]
  },
  {
    name: "Enterprise",
    description: "Comprehensive solution for major super funds and enterprise clients",
    price: "Custom",
    period: "pricing",
    employees: "Unlimited members",
    popular: false,
    icon: Crown,
    features: [
      "Everything in Professional",
      "24/7 dedicated support",
      "Dedicated relationship manager",
      "Custom system integrations",
      "Unlimited API access",
      "White-label options",
      "Advanced security & compliance",
      "SLA guarantees",
      "Custom training programs",
      "Priority adviser allocation",
      "Custom compliance rules",
      "Regulatory consulting"
    ],
    limitations: []
  }
];

const comparisonFeatures = [
  {
    category: "Core Marketplace Features",
    features: [
      { name: "Adviser Network Access", starter: true, professional: true, enterprise: true },
      { name: "Member-Adviser Matching", starter: true, professional: true, enterprise: true },
      { name: "RIC Compliance Reporting", starter: "Basic", professional: "Advanced", enterprise: "Custom" },
      { name: "Audit Trail Logging", starter: true, professional: true, enterprise: true },
      { name: "Administrator Accounts", starter: "5", professional: "Unlimited", enterprise: "Unlimited" }
    ]
  },
  {
    category: "Advanced Features",
    features: [
      { name: "Member Analytics", starter: false, professional: true, enterprise: true },
      { name: "Custom Adviser Criteria", starter: false, professional: true, enterprise: true },
      { name: "Advanced Billing", starter: false, professional: true, enterprise: true },
      { name: "API Access", starter: false, professional: "Limited", enterprise: "Unlimited" },
      { name: "White-label Options", starter: false, professional: false, enterprise: true }
    ]
  },
  {
    category: "Support & Services",
    features: [
      { name: "Email Support", starter: true, professional: true, enterprise: true },
      { name: "Priority Support", starter: false, professional: true, enterprise: true },
      { name: "24/7 Dedicated Support", starter: false, professional: false, enterprise: true },
      { name: "Relationship Manager", starter: false, professional: false, enterprise: true },
      { name: "Regulatory Consulting", starter: false, professional: false, enterprise: true }
    ]
  }
];

const addOns = [
  {
    name: "Additional Member Capacity",
    description: "Extra member capacity beyond plan limits",
    price: "0.05",
    unit: "per member/month"
  },
  {
    name: "Premium Adviser Pool",
    description: "Access to top-tier advisers with specialized credentials",
    price: "500",
    unit: "per month"
  },
  {
    name: "Custom System Integration",
    description: "One-time setup for custom fund management system integration",
    price: "15,000",
    unit: "one-time fee"
  },
  {
    name: "Compliance Training",
    description: "Additional RIC compliance training sessions for your team",
    price: "2,500",
    unit: "per session"
  }
];

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");

  const getPrice = (basePrice: number | string) => {
    if (typeof basePrice === "string") return basePrice;
    return billingPeriod === "annual" ? Math.round(basePrice * 0.8) : basePrice;
  };

  const getSavings = (basePrice: number) => {
    return billingPeriod === "annual" ? Math.round(basePrice * 0.2) : 0;
  };

  return (
    <div className="min-h-screen bg-background">
      <WebsiteHeader />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center space-y-8 mb-20">
          <Badge className="badge-yellow">
            Transparent Pricing
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground">
            Choose the Right Plan for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
              {" "}Your Super Fund
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparent pricing designed for super funds of all sizes. 
            Meet your RIC obligations while providing scalable advice access to your members.
          </p>
        </div>

        {/* Stats section */}
        <div className="bg-gradient-to-br from-gray-50 to-stone-100 dark:from-gray-900 dark:to-stone-900 rounded-2xl p-8 mb-16 border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">500+</div>
              <div className="text-foreground font-medium">Verified Advisers</div>
              <div className="text-sm text-muted-foreground">Ready to serve your members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">50M+</div>
              <div className="text-foreground font-medium">Members Served</div>
              <div className="text-sm text-muted-foreground">Across Australian super funds</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">99.9%</div>
              <div className="text-foreground font-medium">Uptime SLA</div>
              <div className="text-sm text-muted-foreground">Enterprise-grade reliability</div>
            </div>
          </div>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-muted p-1 rounded-lg">
            <button
              onClick={() => setBillingPeriod("monthly")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                billingPeriod === "monthly" 
                  ? "bg-background text-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod("annual")}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                billingPeriod === "annual" 
                  ? "bg-background text-foreground shadow-sm" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
              <span className="ml-2 text-xs bg-green-500 text-white px-2 py-1 rounded">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`card-hover relative ${
                plan.popular 
                  ? "border-yellow-200 dark:border-yellow-800 ring-2 ring-yellow-400/20 scale-105" 
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="badge-yellow">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center">
                <div className="h-16 w-16 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-4">
                  <plan.icon className="h-8 w-8 text-yellow-500" />
                </div>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <p className="text-muted-foreground">{plan.description}</p>
                
                <div className="mt-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">
                      {typeof plan.price === "number" ? "$" : ""}{getPrice(plan.price)}
                    </span>
                    {typeof plan.price === "number" && (
                      <span className="text-muted-foreground">/{billingPeriod === "monthly" ? "month" : "year"}</span>
                    )}
                  </div>
                  {typeof plan.price === "number" && billingPeriod === "annual" && (
                    <p className="text-sm text-green-500 mt-1">
                      Save ${getSavings(plan.price)}/month
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground mt-2">{plan.employees}</p>
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Included:</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {plan.limitations.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Not included:</h4>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                            <span className="text-muted-foreground">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="pt-6">
                    <Button 
                      className={plan.popular ? "btn-primary-watershed w-full" : "btn-outline-watershed w-full"}
                      size="lg"
                    >
                      {plan.name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Detailed Feature Comparison</h2>
            <p className="text-xl text-muted-foreground">
              Compare plans side-by-side to find the perfect fit
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-6 font-semibold text-foreground">Features</th>
                    <th className="text-center p-6 font-semibold text-foreground">Starter</th>
                    <th className="text-center p-6 font-semibold text-foreground bg-yellow-50 dark:bg-yellow-900/10">
                      Professional
                      <Badge className="badge-yellow ml-2">Popular</Badge>
                    </th>
                    <th className="text-center p-6 font-semibold text-foreground">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((category, catIndex) => (
                    <React.Fragment key={catIndex}>
                      <tr>
                        <td colSpan={4} className="p-4 bg-muted/50">
                          <h3 className="font-semibold text-foreground">{category.category}</h3>
                        </td>
                      </tr>
                      {category.features.map((feature, featureIndex) => (
                        <tr key={featureIndex} className="border-b border-border">
                          <td className="p-4 text-muted-foreground">{feature.name}</td>
                          <td className="p-4 text-center">
                            {typeof feature.starter === "boolean" ? (
                              feature.starter ? (
                                <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                              ) : (
                                <X className="h-5 w-5 text-red-500 mx-auto" />
                              )
                            ) : (
                              <span className="text-foreground">{feature.starter}</span>
                            )}
                          </td>
                          <td className="p-4 text-center bg-yellow-50 dark:bg-yellow-900/10">
                            {typeof feature.professional === "boolean" ? (
                              feature.professional ? (
                                <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                              ) : (
                                <X className="h-5 w-5 text-red-500 mx-auto" />
                              )
                            ) : (
                              <span className="text-foreground">{feature.professional}</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {typeof feature.enterprise === "boolean" ? (
                              feature.enterprise ? (
                                <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                              ) : (
                                <X className="h-5 w-5 text-red-500 mx-auto" />
                              )
                            ) : (
                              <span className="text-foreground">{feature.enterprise}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Add-ons */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Add-ons & Services</h2>
          <p className="text-xl text-muted-foreground">
            Enhance your plan with additional services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {addOns.map((addon, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">{addon.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{addon.description}</p>
                <div className="text-lg font-bold text-yellow-400">
                  ${addon.price}
                  <span className="text-sm text-muted-foreground font-normal ml-1">
                    {addon.unit}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">
              Common questions about our pricing and plans
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Can I change my plan at any time?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle."
              },
              {
                question: "Is there a free trial available?",
                answer: "Yes, we offer a 14-day free trial with full access to Professional plan features. No credit card required."
              },
              {
                question: "What happens if I exceed my employee limit?",
                answer: "We'll notify you when you approach your limit. You can either upgrade your plan or pay a small overage fee for additional employees."
              },
              {
                question: "Do you offer custom pricing for large organizations?",
                answer: "Yes, our Enterprise plan includes custom pricing based on your specific needs. Contact our sales team for a personalized quote."
              },
              {
                question: "What kind of support is included?",
                answer: "All plans include email support. Professional adds chat support, and Enterprise includes 24/7 phone support with a dedicated account manager."
              }
            ].map((faq, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-64 lg:h-auto relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80"
                alt="Professional consultation and planning meeting"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
            <div className="p-8 bg-gradient-to-br from-gray-50 to-stone-100 dark:from-gray-900 dark:to-stone-900 flex flex-col justify-center">
              <Zap className="h-16 w-16 text-yellow-500 mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Start your free trial today or speak with our sales team to find the perfect plan for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="btn-primary-watershed">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" className="btn-outline-watershed">
                  <Phone className="mr-2 h-4 w-4" />
                  Talk to Sales
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  <span>No setup fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center gap-2">
                  <Headphones className="h-4 w-4" />
                  <span>Expert support</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <WebsiteFooter />
    </div>
  );
}