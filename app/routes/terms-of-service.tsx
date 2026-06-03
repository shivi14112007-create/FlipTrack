import styles from "./terms-of-service.module.css";
import { TermsHeader } from "~/blocks/terms-of-service/terms-header";
import { TermsSections } from "~/blocks/terms-of-service/terms-sections";

export default function TermsOfServicePage() {
  return (
    <div className={styles.page}>
      <TermsHeader />
      <TermsSections />
    </div>
  );
}
