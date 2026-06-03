import styles from "./terms-sections.module.css";

interface Props { className?: string; }

const sections = [
  { title: "Acceptance of Terms", content: "By accessing or using FlipTrack, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the service. These terms constitute a legally binding agreement between you and FlipTrack." },
  { title: "User Responsibilities", content: "You are responsible for maintaining the confidentiality of your account credentials. You agree not to use FlipTrack for any unlawful purpose, to violate any marketplace terms of service, or to attempt to scrape or copy FlipTrack data." },
  { title: "Intellectual Property", content: "FlipTrack is open source under the MIT license. The underlying software may be used per that license. However, FlipTrack trademarks, logos, and brand assets may not be used without written permission." },
  { title: "Limitation of Liability", content: "FlipTrack provides price data as-is and makes no guarantees about its accuracy or completeness. We are not liable for any trading decisions you make based on data provided by FlipTrack. Total liability is limited to the amount you paid us in the past 3 months." },
  { title: "Indemnification", content: "You agree to indemnify and hold FlipTrack harmless from any claims, damages, or expenses arising from your use of the service, violation of these terms, or infringement of any third-party rights." },
  { title: "Termination", content: "We reserve the right to terminate or suspend your account for violation of these terms. You may cancel your account at any time from Settings. Upon termination, your data will be deleted within 30 days." },
  { title: "Governing Law", content: "These terms are governed by the laws of the State of Delaware, USA. Disputes will be resolved in Delaware courts or via binding arbitration under the American Arbitration Association rules." },
  { title: "Contact Information", content: "For questions about these Terms, contact legal@fliptrack.io or write to FlipTrack, Inc., [Address]." },
];

export function TermsSections({ className }: Props) {
  return (
    <div className={[styles.content, className].filter(Boolean).join(" ")}>
      {sections.map((s, i) => (
        <div key={s.title} id={`terms-${i}`} className={styles.section}>
          <h2>{i + 1}. {s.title}</h2>
          <p>{s.content}</p>
        </div>
      ))}
    </div>
  );
}
