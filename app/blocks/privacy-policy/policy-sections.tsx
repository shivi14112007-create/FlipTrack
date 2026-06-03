import styles from "./policy-sections.module.css";

interface Props { className?: string; }

const sections = [
  { title: "Introduction", content: "This Privacy Policy explains how FlipTrack (\"we\", \"us\", or \"our\") collects, uses, and protects information that you provide when using FlipTrack. We are committed to ensuring your privacy is protected." },
  { title: "Information We Collect", content: "We collect: Account information (name, email, password hash), inventory and sales data you input, payment information processed by Stripe (we never store card numbers), usage analytics, and device/browser information." },
  { title: "How We Use Information", content: "We use your data to provide and improve the FlipTrack service, send transactional emails (alerts, receipts), calculate your P&L and generate tax reports, and aggregate anonymized analytics to improve features." },
  { title: "Data Sharing", content: "We do not sell your data. We share data only with: Supabase (database and auth), Stripe (payment processing), Resend (transactional email), Twilio (SMS alerts), and as required by law." },
  { title: "Your Rights", content: "You have the right to: access your data (export from Settings), correct inaccurate data, delete your account and all associated data, opt out of marketing emails, and lodge a complaint with a supervisory authority (GDPR/CCPA)." },
  { title: "Security", content: "All data is encrypted in transit (TLS 1.3) and at rest. We use Supabase with Row Level Security policies. Passwords are hashed with bcrypt. We conduct regular security reviews." },
  { title: "Cookies", content: "We use essential cookies for authentication and session management. We use analytics cookies (privacy-friendly) to understand usage patterns. You can disable non-essential cookies in your browser settings." },
  { title: "Third-Party Services", content: "FlipTrack integrates with third-party services (Stripe, Supabase, etc.) that have their own privacy policies. We encourage you to review their policies." },
  { title: "Changes to Policy", content: "We may update this policy occasionally. We will notify you of significant changes via email or in-app notification. Continued use after changes constitutes acceptance." },
  { title: "Contact Us", content: "Questions about this policy? Contact us at privacy@fliptrack.io or by mail at FlipTrack, Inc., [Address]." },
];

export function PolicySections({ className }: Props) {
  return (
    <div className={[styles.content, className].filter(Boolean).join(" ")}>
      {sections.map((s, i) => (
        <div key={s.title} id={`section-${i}`} className={styles.section}>
          <h2>{i + 1}. {s.title}</h2>
          <p>{s.content}</p>
        </div>
      ))}
    </div>
  );
}
