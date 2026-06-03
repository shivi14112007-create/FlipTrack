import { useState } from "react";
import styles from "./forgot-password-page.module.css";
import { ForgotPasswordForm } from "~/blocks/forgot-password-page/forgot-password-form";
import { ConfirmationMessage } from "~/blocks/forgot-password-page/confirmation-message";

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className={styles.page}>
      <div style={{ width: "100%", maxWidth: 400 }}>
        {sent ? <ConfirmationMessage /> : <ForgotPasswordForm onSent={() => setSent(true)} />}
      </div>
    </div>
  );
}
