import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Building } from "lucide-react";

export default function ContactPage() {
  return (
    <SectionWrapper className="pt-24 pb-20">
      <SectionHeader 
        title="Get in touch" 
        description="Have a question about pricing, enterprise plans, or just want to say hi? We'd love to hear from you."
      />

      <div className="max-w-5xl mx-auto mt-12 grid md:grid-cols-2 gap-12 items-start">
         <Card className="p-6 border bg-card/50">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first_name" className="text-sm font-medium">First name</label>
                  <input id="first_name" type="text" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last_name" className="text-sm font-medium">Last name</label>
                  <input id="last_name" type="text" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input id="email" type="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea id="message" rows={5} className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" />
              </div>
              <Button type="button" className="w-full">Send Message</Button>
            </form>
         </Card>

         <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Other ways to connect</h3>
              <p className="text-muted-foreground">Prefer not to use the form? Reach out directly via email or visit one of our global headquarters.</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                 <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                    <Mail className="h-5 w-5" />
                 </div>
                 <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-sm text-muted-foreground mb-1">General inquiries & support.</p>
                    <a href="mailto:hello@dcdeploy.com" className="text-primary hover:underline font-medium">hello@dcdeploy.com</a>
                 </div>
              </div>

              <div className="flex gap-4 items-start">
                 <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                    <Building className="h-5 w-5" />
                 </div>
                 <div>
                    <h4 className="font-semibold mb-1">Sales</h4>
                    <p className="text-sm text-muted-foreground mb-1">Discuss enterprise configurations.</p>
                    <a href="mailto:sales@dcdeploy.com" className="text-primary hover:underline font-medium">sales@dcdeploy.com</a>
                 </div>
              </div>

              <div className="flex gap-4 items-start">
                 <div className="p-3 bg-primary/10 rounded-full text-primary shrink-0">
                    <MapPin className="h-5 w-5" />
                 </div>
                 <div>
                    <h4 className="font-semibold mb-1">Headquarters</h4>
                    <p className="text-sm text-muted-foreground text-balance">
                      123 Cloud Avenue<br />
                      Suite 400<br />
                      San Francisco, CA 94107
                    </p>
                 </div>
              </div>
            </div>
         </div>
      </div>
    </SectionWrapper>
  );
}
