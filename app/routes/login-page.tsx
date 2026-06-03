import styles from "./login-page.module.css";
import { LoginForm } from "~/blocks/login-page/login-form";
import { OAuthOptions } from "~/blocks/login-page/o-auth-options";
import { MagicLinkOption } from "~/blocks/login-page/magic-link-option";
import { SignupLink } from "~/blocks/login-page/signup-link";

export default function LoginPage() {
  return (
    <div className={styles.page}>
      <div style={{ width: "100%", maxWidth: 400 }}>
        <div style={{ textAlign: "center", marginBottom: "var(--space-8)" }}>
          <div style={{ fontFamily: "var(--family-display)", fontSize: 24, fontWeight: 800, marginBottom: 4, color: "var(--color-text)" }}>
            Flip<span style={{ color: "var(--color-primary)" }}>Track</span>
          </div>
          <p style={{ color: "var(--color-text-muted)", fontSize: 14 }}>Sign in to your account</p>
        </div>
        <LoginForm />
        <OAuthOptions />
        <MagicLinkOption />
        <SignupLink />
      </div>
    </div>
  );
}
