import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";

export default function TermsOfServicePage() {
  return (
    <SectionWrapper className="pt-24 pb-20">
      <SectionHeader 
        title="Terms of Service" 
        description="Effective Date: April 25, 2026"
      />
      
      <div className="max-w-3xl mx-auto prose prose-invert prose-blue bg-card border rounded-xl p-8 shadow-sm">
        <p>
          Welcome to DCDeploy. By using our services, you agree to these Terms of Service. Please read them carefully.
        </p>

        <h3>1. Acceptance of Terms</h3>
        <p>
          By creating an account or deploying code via DCDeploy, you are agreeing to abide by the rules outlined here. If you do not agree, you may not use the services.
        </p>

        <h3>2. Acceptable Use Policy</h3>
        <p>
          Deploying malicious software, engaging in crypto-mining, conducting DDoS attacks, or exploiting vulnerable systems via DCDeploy infrastructure is strictly forbidden. We reserve the right to instantly terminate accounts violating these parameters without refund.
        </p>

        <h3>3. Service Availability (SLA)</h3>
        <p>
          We aim for 99.99% uptime on our Pro and Enterprise tiers. In the event of an outage falling below our Service Level Agreement, impacted customers will receive service credits proportionate to their monthly spend. Basic/Free tiers carry no strict SLA availability guarantee.
        </p>

        <h3>4. Payment and Billing</h3>
        <p>
          You are responsible for paying the fees corresponding to your usage. Overages beyond the free tier limits will automatically be charged to the card on file on a monthly basis.
        </p>

        <h3>5. Limitation of Liability</h3>
        <p>
          DCDeploy is provided &quot;as is&quot;. We are not liable for lost profits, data loss, or business interruptions resulting from using or the inability to use our platform.
        </p>
      </div>
    </SectionWrapper>
  );
}
