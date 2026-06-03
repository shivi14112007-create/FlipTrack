import { useState } from "react";
import styles from "./reset-password-page.module.css";
import { ResetPasswordForm } from "~/blocks/reset-password-page/reset-password-form";
import { SuccessMessage } from "~/blocks/reset-password-page/success-message";

export default function ResetPasswordPage() {
  const [success, setSuccess] = useState(false);
  return (
    <div className={styles.page}>
      <div style={{ width: "100%", maxWidth: 400 }}>
        {success ? <SuccessMessage /> : <ResetPasswordForm onSuccess={() => setSuccess(true)} />}
      </div>
    </div>
  );
}
