import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";

export default function PrivacyPolicyPage() {
  return (
    <SectionWrapper className="pt-24 pb-20">
      <SectionHeader 
        title="Privacy Policy" 
        description="Effective Date: April 25, 2026"
      />
      
      <div className="max-w-3xl mx-auto prose prose-invert prose-blue bg-card border rounded-xl p-8 shadow-sm">
        <p>
          At DCDeploy Inc., your privacy is a priority. This Privacy Policy describes how we collect, use, and protect your information when you use our cloud deployment platform and services.
        </p>

        <h3>1. Information We Collect</h3>
        <p>
          We collect information that you explicitly provide when creating an account, such as your name, email address, billing information, and GitHub repository metadata. We also collect usage data (logs, bandwidth metrics, deployment metadata) to improve system performance.
        </p>

        <h3>2. How We Use Information</h3>
        <p>
          Your information is used strictly to provide, maintain, and secure the DCDeploy services. We use billing details exclusively for payment processing via our third-party provider (Stripe). We never sell your personal or repository data.
        </p>

        <h3>3. Data Security</h3>
        <p>
          Our infrastructure is designed with security as a default. All traffic is encrypted via TLS. User code is isolated utilizing secure MicroVM boundaries. Your database connections are encapsulated within private networks.
        </p>

        <h3>4. Data Retention</h3>
        <p>
          We retain your account information for as long as your account is active. Upon account deletion, all personal data, source code, and deployed applications are permanently removed from our active servers within 30 days.
        </p>

        <h3>5. Contact Us</h3>
        <p>
          If you have any questions regarding this Privacy Policy, please contact our Data Protection Officer at <strong>privacy@dcdeploy.com</strong>.
        </p>
      </div>
    </SectionWrapper>
  );
}
