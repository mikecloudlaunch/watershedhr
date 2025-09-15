"use client";

import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { smoothScrollTo } from "@/utils/smoothScroll";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { 
    name: "Solutions", 
    href: "/features",
    submenu: [
      { name: "Features Overview", href: "/features" },
      { name: "For Super Funds", href: "/features/super-funds" },
      { name: "For Advisers", href: "/features/advisers" },
      { name: "For Clients", href: "/features/clients" },
    ]
  },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function WebsiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();
  
  // Add a timeout ref to manage delayed closing
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setSolutionsOpen(true);
  };

  const handleMouseLeave = () => {
    // Add a small delay before closing to allow users to move to the dropdown
    timeoutRef.current = setTimeout(() => {
      setSolutionsOpen(false);
    }, 150);
  };

  // Cleanup timeout on unmount
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Handle smooth scroll for same-page navigation
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Check if it's a same-page anchor link
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      smoothScrollTo(targetId);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-yellow-400 to-amber-500" />
              <span className="text-xl font-bold text-foreground">Watershed HR</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <div className="relative">
                      <button
                        className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors hover:text-yellow-400 ${
                          isActive(item.href) 
                            ? "text-yellow-400" 
                            : "text-muted-foreground"
                        }`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                          solutionsOpen ? "rotate-180" : ""
                        }`} />
                      </button>
                      
                      {/* Submenu */}
                      <div 
                        className={`absolute left-0 top-full mt-0 w-64 rounded-md border border-border bg-card shadow-lg transition-all duration-200 ${
                          solutionsOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {/* Add a small bridge area to prevent gaps */}
                        <div className="absolute -top-1 left-0 right-0 h-1" />
                        <div className="py-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-3 text-sm text-muted-foreground hover:bg-muted hover:text-yellow-400 transition-colors"
                              onClick={() => setSolutionsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors hover:text-yellow-400 ${
                        isActive(item.href) 
                          ? "text-yellow-400" 
                          : "text-muted-foreground"
                      }`}
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/demo">
              <Button className="btn-ghost-watershed">
                View Demo
              </Button>
            </Link>
            <Button className="btn-primary-watershed">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-1 border-t border-border px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className={`block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-muted hover:text-yellow-400 ${
                      isActive(item.href) 
                        ? "text-yellow-400 bg-muted" 
                        : "text-muted-foreground"
                    }`}
                    onClick={(e) => {
                      handleLinkClick(e, item.href);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-yellow-400 transition-colors"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 space-y-2 border-t border-border pt-4">
                <Link href="/demo">
                  <Button className="btn-ghost-watershed w-full justify-start" onClick={() => setMobileMenuOpen(false)}>
                    View Demo
                  </Button>
                </Link>
                <Button className="btn-primary-watershed w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}