import Link from "next/link";
import { GitBranch, MessageCircle, Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-bold tracking-tight">
                <span className="text-primary">DC</span>Deploy
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              From code to cloud in seconds. The platform for building and scaling modern applications without the complexity.
            </p>
            <div className="flex gap-4 text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">
                <MessageCircle className="h-5 w-5" />
                <span className="sr-only">Community</span>
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                 <GitBranch className="h-5 w-5" />
                 <span className="sr-only">Source</span>
              </Link>
              <Link href="#" className="hover:text-foreground transition-colors">
                 <Globe className="h-5 w-5" />
                 <span className="sr-only">Website</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
              <li><Link href="/changelog" className="hover:text-foreground transition-colors">Changelog</Link></li>
              <li><Link href="/docs" className="hover:text-foreground transition-colors">Documentation</Link></li>
              <li><Link href="/integrations" className="hover:text-foreground transition-colors">Integrations</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
             <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-foreground transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} DCDeploy Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
