import styles from "./privacy-policy.module.css";
import { PolicyHeader } from "~/blocks/privacy-policy/policy-header";
import { PolicySections } from "~/blocks/privacy-policy/policy-sections";

export default function PrivacyPolicyPage() {
  return (
    <div className={styles.page}>
      <PolicyHeader />
      <PolicySections />
    </div>
  );
}
