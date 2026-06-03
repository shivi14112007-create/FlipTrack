import styles from "./changelog-page.module.css";
import { ChangelogHeader } from "~/blocks/changelog-page/changelog-header";
import { VersionReleases } from "~/blocks/changelog-page/version-releases";
import { SubscribeToUpdates } from "~/blocks/changelog-page/subscribe-to-updates";

export default function ChangelogPage() {
  return (
    <div className={styles.page}>
      <ChangelogHeader />
      <VersionReleases />
      <SubscribeToUpdates />
    </div>
  );
}
