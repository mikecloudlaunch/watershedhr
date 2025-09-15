"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { LoadingSpinner, ButtonLoading } from "@/components/ui/LoadingSpinner";
import { useToast } from "@/components/ui/Toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Users,
  Calendar,
  Building,
  Headphones,
  Globe,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import Link from "next/link";
import { WebsiteHeader } from "@/components/layout/WebsiteHeader";
import { WebsiteFooter } from "@/components/layout/WebsiteFooter";

// Client component can't export metadata, will handle in a separate metadata file

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    contact: "1800 WATERSHED",
    detail: "(1800 928 377)",
    hours: "Mon-Fri 9AM-6PM AEST"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help via email",
    contact: "hello@watershedhr.com",
    detail: "support@watershedhr.com",
    hours: "24-hour response time"
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team",
    contact: "Available on website",
    detail: "Instant responses",
    hours: "Mon-Fri 9AM-9PM AEST"
  },
  {
    icon: Calendar,
    title: "Schedule Demo",
    description: "Book a personalized demo",
    contact: "calendly.com/watershedhr",
    detail: "30-minute sessions",
    hours: "Available 24/7"
  }
];

const offices = [
  {
    city: "Sydney",
    type: "Headquarters",
    address: "Level 15, 1 Martin Place",
    suburb: "Sydney NSW 2000",
    phone: "+61 2 9234 5678",
    email: "sydney@watershedhr.com"
  },
  {
    city: "Melbourne",
    type: "Regional Office",
    address: "Level 10, 101 Collins Street",
    suburb: "Melbourne VIC 3000",
    phone: "+61 3 9876 5432",
    email: "melbourne@watershedhr.com"
  },
  {
    city: "Brisbane",
    type: "Regional Office",
    address: "Level 8, 200 Queen Street",
    suburb: "Brisbane QLD 4000",
    phone: "+61 7 3456 7890",
    email: "brisbane@watershedhr.com"
  }
];

const supportTypes = [
  {
    title: "Super Fund Inquiry",
    description: "Questions about RIC compliance, pricing, or onboarding your fund",
    icon: Building
  },
  {
    title: "Adviser Registration",
    description: "Information about joining our verified adviser network",
    icon: Users
  },
  {
    title: "Technical Support",
    description: "Help with using the platform or troubleshooting issues",
    icon: Headphones
  },
  {
    title: "Compliance Questions",
    description: "ASIC compliance, audit trails, or regulatory requirements",
    icon: MessageCircle
  }
];

export default function ContactPage() {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const errors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    
    if (!formData.inquiryType) {
      errors.inquiryType = "Please select an inquiry type";
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long";
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      addToast({
        type: 'error',
        title: 'Form Validation Failed',
        description: 'Please check the form for errors and try again.'
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate random success/failure for demo
      const isSuccess = Math.random() > 0.3; // 70% success rate
      
      if (isSuccess) {
        setIsSubmitted(true);
        addToast({
          type: 'success',
          title: 'Message Sent Successfully!',
          description: 'We\'ll get back to you within 24 hours.'
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          inquiryType: "",
          message: ""
        });
        setFormErrors({});
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Failed to Send Message',
        description: 'Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <WebsiteHeader />

      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-4 py-20">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gradient-to-br from-yellow-400/20 to-amber-500/20 blur-3xl" />
          <div className="absolute bottom-10 left-10 w-60 h-60 rounded-full bg-gradient-to-tr from-blue-400/20 to-purple-500/20 blur-3xl" />
        </div>
        
        <div className="relative text-center space-y-8 mb-20">
          <Badge className="badge-yellow">
            Get in Touch
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground">
            We're Here to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
              {" "}Help
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you&apos;re a super fund exploring RIC compliance solutions, an adviser 
            wanting to join our network, or need technical support, our team is ready to assist you.
          </p>
          
          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm border border-yellow-200 rounded-xl p-4 shadow-lg">
              <Phone className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-lg font-semibold text-gray-900">Quick Response</div>
              <div className="text-sm text-gray-600">Same day callback</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-yellow-200 rounded-xl p-4 shadow-lg">
              <Users className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-lg font-semibold text-gray-900">Expert Team</div>
              <div className="text-sm text-gray-600">Dedicated specialists</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm border border-yellow-200 rounded-xl p-4 shadow-lg">
              <CheckCircle className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
              <div className="text-lg font-semibold text-gray-900">Proven Results</div>
              <div className="text-sm text-gray-600">500+ satisfied clients</div>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <Card key={index} className="card-hover text-center">
              <CardContent className="p-6">
                <div className="h-16 w-16 rounded-full bg-yellow-500/10 flex items-center justify-center mx-auto mb-4">
                  <method.icon className="h-8 w-8 text-yellow-500" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{method.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                <p className="text-sm font-medium text-foreground">{method.contact}</p>
                <p className="text-xs text-muted-foreground">{method.detail}</p>
                <div className="flex items-center justify-center gap-1 mt-2 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span>{method.hours}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="card-hover">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we&rsquo;ll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center space-y-4 py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
                  <h3 className="text-xl font-semibold text-foreground">Thank You!</h3>
                  <p className="text-muted-foreground">
                    Your message has been sent successfully. We'll get back to you soon.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn-outline-watershed"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        required
                        placeholder="John Smith"
                        className={formErrors.name ? 'border-red-500' : ''}
                      />
                      {formErrors.name && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        required
                        placeholder="john@company.com"
                        className={formErrors.email ? 'border-red-500' : ''}
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        placeholder="Your Company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        placeholder="+61 4XX XXX XXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      required
                      className={`w-full px-3 py-2 border border-border rounded-md bg-background text-foreground disabled:opacity-50 ${
                        formErrors.inquiryType ? 'border-red-500' : ''
                      }`}
                    >
                      <option value="">Select inquiry type</option>
                      {supportTypes.map((type, index) => (
                        <option key={index} value={type.title}>
                          {type.title}
                        </option>
                      ))}
                    </select>
                    {formErrors.inquiryType && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.inquiryType}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={isSubmitting}
                      required
                      rows={5}
                      placeholder="Tell us about your needs or questions..."
                      className={formErrors.message ? 'border-red-500' : ''}
                    />
                    {formErrors.message && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary-watershed w-full flex items-center justify-center gap-2 py-3 relative ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <LoadingSpinner size="sm" />
                      </div>
                    )}
                    <span className={isSubmitting ? 'invisible' : 'visible flex items-center gap-2'}>
                      <Send className="h-4 w-4" />
                      {isSubmitting ? 'Sending Message...' : 'Send Message'}
                    </span>
                  </button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Support Types */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">How Can We Help?</h2>
              <div className="space-y-4">
                {supportTypes.map((type, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-4">
                        <div className="h-12 w-12 rounded-lg bg-yellow-500/10 flex items-center justify-center flex-shrink-0">
                          <type.icon className="h-6 w-6 text-yellow-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{type.title}</h3>
                          <p className="text-sm text-muted-foreground">{type.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Information & Quick Actions */}
            <div className="space-y-6">
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center">
                      <Headphones className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">Need Immediate Help?</h3>
                  </div>
                  
                  <div className="space-y-5">
                    <Link href="/demo" className="block">
                      <Button className="btn-primary-watershed w-full justify-start h-14 text-base font-medium shadow-sm hover:shadow-md transition-all duration-200">
                        <Calendar className="mr-4 h-5 w-5" />
                        Schedule a Demo
                      </Button>
                    </Link>
                    <Link href="/help" className="block">
                      <Button className="btn-outline-watershed w-full justify-start h-14 text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200">
                        <Headphones className="mr-4 h-5 w-5" />
                        Visit Help Center
                      </Button>
                    </Link>
                    <Link href="tel:1800928377" className="block">
                      <Button className="btn-ghost-watershed w-full justify-start h-14 text-base font-medium hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-all duration-200">
                        <Phone className="mr-4 h-5 w-5" />
                        Call Now: 1800 WATERSHED
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Details */}
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Contact Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                        <Phone className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Phone</div>
                        <div className="text-sm text-muted-foreground">1800 WATERSHED (1800 928 377)</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Email</div>
                        <div className="text-sm text-muted-foreground">hello@watershedhr.com</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-yellow-500/10 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-yellow-500" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">Business Hours</div>
                        <div className="text-sm text-muted-foreground">Mon-Fri 9AM-6PM AEST</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="card-hover border-yellow-200 bg-yellow-50/50 dark:bg-yellow-900/10 dark:border-yellow-800">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-foreground">Quick Response Guarantee</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    We respond to all inquiries within 24 hours during business days. 
                    For urgent matters, call us directly for immediate assistance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Offices</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Visit us at any of our locations across Australia. Our team is ready to meet 
                with you to discuss your super fund's specific requirements and how our marketplace 
                platform can help achieve RIC compliance.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  <span>3 Office Locations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>50+ Team Members</span>
                </div>
              </div>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Modern office workspace with collaborative meeting areas"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg p-3 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-yellow-600" />
                  <span className="text-sm font-medium text-gray-900">Australia-wide presence</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-foreground">{office.city}</h3>
                    <Badge variant={office.type === "Headquarters" ? "default" : "outline"}>
                      {office.type}
                    </Badge>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-foreground">{office.address}</p>
                        <p className="text-muted-foreground">{office.suburb}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <a href={`tel:${office.phone.replace(/\s/g, "")}`} className="text-yellow-500 hover:underline">
                        {office.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <a href={`mailto:${office.email}`} className="text-yellow-500 hover:underline">
                        {office.email}
                      </a>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="btn-outline-watershed w-full">
                      <MapPin className="mr-2 h-4 w-4" />
                      View on Map
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">
            Quick answers to common questions
          </p>
        </div>

        <div className="space-y-6">
          {[
            {
              question: "What's the best way to get support?",
              answer: "For urgent issues, call us at 1800 WATERSHED. For general questions, email hello@watershedhr.com or use our live chat during business hours."
            },
            {
              question: "Do you offer implementation support?",
              answer: "Yes! Our Professional and Enterprise plans include implementation support. We'll help you migrate your data and train your team."
            },
            {
              question: "Can I schedule a demo before purchasing?",
              answer: "Absolutely! We offer personalized demos where we can show you exactly how Watershed HR will work for your organization."
            },
            {
              question: "What are your support hours?",
              answer: "Phone and chat support: Mon-Fri 9AM-6PM AEST. Email support is available 24/7 with responses within 24 hours. Enterprise customers get 24/7 phone support."
            },
            {
              question: "Do you provide training for new users?",
              answer: "Yes, we provide comprehensive training materials, video tutorials, and live training sessions. Enterprise customers get custom training programs."
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
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <Card className="p-8 bg-gradient-to-br from-gray-50 to-stone-100 dark:from-gray-900 dark:to-stone-900 border-gray-200 dark:border-gray-700">
          <CardContent className="text-center space-y-6">
            <Globe className="h-16 w-16 text-yellow-500 mx-auto" />
            <h2 className="text-3xl font-bold text-foreground">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of organizations already transforming their HR operations with Watershed HR.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-primary-watershed">
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Link href="/demo">
                <Button size="lg" className="btn-outline-watershed">
                  Schedule Demo
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