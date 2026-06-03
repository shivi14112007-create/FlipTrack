import styles from "./signup-page.module.css";
import { SignupForm } from "~/blocks/signup-page/signup-form";
import { OAuthSignup } from "~/blocks/signup-page/o-auth-signup";
import { LoginLink } from "~/blocks/signup-page/login-link";
import { TermsAcceptance } from "~/blocks/signup-page/terms-acceptance";

export default function SignupPage() {
  return (
    <div className={styles.page}>
      <div style={{ width: "100%", maxWidth: 400 }}>
        <div style={{ textAlign: "center", marginBottom: "var(--space-8)" }}>
          <div style={{ fontFamily: "var(--family-display)", fontSize: 24, fontWeight: 800, marginBottom: 4, color: "var(--color-text)" }}>
            Flip<span style={{ color: "var(--color-primary)" }}>Track</span>
          </div>
          <p style={{ color: "var(--color-text-muted)", fontSize: 14 }}>Create your free account</p>
        </div>
        <OAuthSignup />
        <SignupForm />
        <TermsAcceptance />
        <LoginLink />
      </div>
    </div>
  );
}
