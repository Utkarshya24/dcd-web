import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";

export default function CookiePolicyPage() {
  return (
    <SectionWrapper className="pt-24 pb-20">
      <SectionHeader 
        title="Cookie Policy" 
        description="Effective Date: April 25, 2026"
      />
      
      <div className="max-w-3xl mx-auto prose prose-invert prose-blue bg-card border rounded-xl p-8 shadow-sm">
        <p>
          This Cookie Policy explains how DCDeploy uses cookies and similar technologies to recognize you when you visit our website.
        </p>

        <h3>What are Cookies?</h3>
        <p>
          Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used by online service providers, including us, to (for example) make websites or services work, or to work more efficiently.
        </p>

        <h3>How we use Cookies</h3>
        <ul>
          <li><strong>Essential Cookies:</strong> Required to maintain your logged-in session, handle security, and process payments. These cannot be disabled.</li>
          <li><strong>Performance & Analytics:</strong> We use minimal analytics tools to understand page performance and identify platform friction. We do not use third-party tracking pixels (like Meta).</li>
          <li><strong>Functional Cookies:</strong> Remember your interface preferences (such as light/dark mode overrides).</li>
        </ul>

        <h3>Managing Cookies</h3>
        <p>
          You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject essential cookies, you will not be able to use the DCDeploy dashboard to manage your applications.
        </p>
      </div>
    </SectionWrapper>
  );
}
