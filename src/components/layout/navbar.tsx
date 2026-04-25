"use client";

import { useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Pricing", href: "/pricing" },
    { name: "Docs", href: "/docs" },
    { name: "Integrations", href: "/integrations" },
    { name: "Blog", href: "/blog" },
    { name: "Changelog", href: "/changelog" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight text-white/90">
              <span className="text-primary">DC</span>Deploy
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center justify-end gap-4">
            <Link href="#" className="text-sm font-medium text-foreground/60 hover:text-foreground/80">
              Log in
            </Link>
            <Link href="#" className={buttonVariants({ size: "sm" })}>Sign Up</Link>
          </div>
          
          <button 
            className="md:hidden text-foreground/60 hover:text-foreground/80"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-background px-4 py-6">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-foreground/60 hover:text-foreground/80"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col gap-2 border-t sm:hidden">
              <Link 
                href="#" 
                className={cn(buttonVariants({ variant: "outline", size: "sm" }), "w-full justify-center")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Log in
              </Link>
              <Link 
                href="#" 
                className={cn(buttonVariants({ size: "sm" }), "w-full justify-center")}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
