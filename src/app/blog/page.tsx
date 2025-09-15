"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  User, 
  BookOpen, 
  TrendingUp,
  Shield,
  Users,
  FileText,
  Search,
  Filter
} from "lucide-react";
import Link from "next/link";
import { WebsiteHeader } from "@/components/layout/WebsiteHeader";
import { WebsiteFooter } from "@/components/layout/WebsiteFooter";

const blogPosts = [
  {
    title: "Understanding the Retirement Income Covenant: A Complete Guide for Super Funds",
    excerpt: "Everything super funds need to know about RIC obligations and how marketplace platforms can help achieve compliance while serving members.",
    author: "Stephanie Ferguson",
    date: "2024-12-10",
    readTime: "8 min read",
    category: "Compliance",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: true
  },
  {
    title: "How AI is Revolutionizing Financial Advice Documentation",
    excerpt: "Discover how automated meeting summaries and AI transcripts are improving transparency and compliance in financial advice sessions.",
    author: "Mike Williams",
    date: "2024-12-05",
    readTime: "6 min read",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80",
    featured: false
  },
  {
    title: "Scaling Financial Advice: The Marketplace Model for Super Funds",
    excerpt: "Learn how marketplace platforms enable super funds to provide scalable advice access without building expensive in-house capacity.",
    author: "Stephanie Ferguson",
    date: "2024-11-28",
    readTime: "10 min read",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    featured: false
  },
  {
    title: "Adviser Verification: Building Trust in Digital Advice Platforms",
    excerpt: "The importance of comprehensive adviser verification including qualifications, CPD records, and ongoing compliance monitoring.",
    author: "Belinda Wright",
    date: "2024-11-20",
    readTime: "12 min read",
    category: "Compliance",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
    featured: false
  },
  {
    title: "The Economics of Part-Time Financial Advice",
    excerpt: "How flexible work arrangements are reshaping the financial advice industry and benefiting both advisers and super funds.",
    author: "Mike Williams",
    date: "2024-11-15",
    readTime: "7 min read",
    category: "Industry",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    featured: false
  },
  {
    title: "Member Engagement in Retirement Planning: Best Practices",
    excerpt: "Strategies for improving member engagement with retirement advice services through user-friendly digital platforms.",
    author: "Stephanie Ferguson",
    date: "2024-11-08",
    readTime: "9 min read",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    featured: false
  }
];

const categories = ["All", "Compliance", "Technology", "Strategy", "Industry"];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <WebsiteHeader />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="text-center space-y-8 mb-20">
          <Badge className="badge-yellow">
            Insights & Resources
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-bold text-foreground">
            Watershed HR
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
              {" "}Blog
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed with the latest insights on Retirement Income Covenant compliance, 
            marketplace trends, and best practices in financial advice platforms.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "btn-primary-watershed" : "btn-outline-watershed"}
              >
                <Filter className="h-4 w-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && !searchQuery && (
        <section className="mx-auto max-w-7xl px-4 mb-20">
          <Card className="overflow-hidden card-hover">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto relative">
                <img 
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Financial planning and retirement advice consultation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <Badge className="badge-yellow">Featured</Badge>
                  <Badge variant="outline">{featuredPost.category}</Badge>
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">{featuredPost.title}</h2>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button className="btn-primary-watershed">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="mx-auto max-w-7xl px-4 py-20">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No articles found</h3>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria.</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold text-foreground">
                {selectedCategory === "All" ? "Latest Articles" : `${selectedCategory} Articles`}
              </h2>
              <p className="text-muted-foreground">
                {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <Card key={index} className="card-hover overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-900">
                        {post.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg leading-tight line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm text-muted-foreground">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <Button size="sm" className="btn-ghost-watershed">
                        Read More
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </section>

      {/* Newsletter Signup */}
      <section className="bg-muted/30 py-20">
        <div className="mx-auto max-w-4xl px-4">
          <Card className="p-8 bg-gradient-to-br from-gray-50 to-stone-100 dark:from-gray-900 dark:to-stone-900 border-gray-200 dark:border-gray-700">
            <CardContent className="text-center space-y-6">
              <BookOpen className="h-16 w-16 text-yellow-500 mx-auto" />
              <h2 className="text-3xl font-bold text-foreground">Never Miss an Update</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest HR insights, compliance updates, 
                and industry trends delivered directly to your inbox.
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
              <p className="text-sm text-muted-foreground">
                Join 5,000+ HR professionals who trust our insights
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <WebsiteFooter />
    </div>
  );
}