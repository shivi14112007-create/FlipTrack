import { useState } from "react";
import styles from "./settings.module.css";
import { SettingsNavigation } from "~/blocks/settings/settings-navigation";
import { AccountSettings } from "~/blocks/settings/account-settings";
import { Preferences } from "~/blocks/settings/preferences";
import { Notifications } from "~/blocks/settings/notifications";
import { BillingSection } from "~/blocks/settings/billing-section";
import { TeamSection } from "~/blocks/settings/team-section";
import { SecuritySection } from "~/blocks/settings/security-section";

type Section = "account" | "preferences" | "notifications" | "billing" | "team" | "security";

const sectionMap: Record<Section, React.ComponentType> = {
  account: AccountSettings,
  preferences: Preferences,
  notifications: Notifications,
  billing: BillingSection,
  team: TeamSection,
  security: SecuritySection,
};

export default function SettingsPage() {
  const [section, setSection] = useState<Section>("account");
  const SectionComponent = sectionMap[section];
  return (
    <div className={styles.page}>
      <SettingsNavigation active={section} onChange={(s) => setSection(s as Section)} />
      <div>
        <SectionComponent />
      </div>
    </div>
  );
}
