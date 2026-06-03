import { IconUser, IconAdjustments, IconBell, IconCreditCard, IconUsers, IconShieldLock } from "@tabler/icons-react";
import styles from "./settings-navigation.module.css";

interface Props { className?: string; active: string; onChange: (section: string) => void; }

const sections = [
  { id: "account", label: "Account", icon: IconUser },
  { id: "preferences", label: "Preferences", icon: IconAdjustments },
  { id: "notifications", label: "Notifications", icon: IconBell },
  { id: "billing", label: "Billing", icon: IconCreditCard },
  { id: "team", label: "Team", icon: IconUsers },
  { id: "security", label: "Security", icon: IconShieldLock },
];

export function SettingsNavigation({ className, active, onChange }: Props) {
  return (
    <nav className={[styles.nav, className].filter(Boolean).join(" ")}>
      {sections.map(s => (
        <button key={s.id} className={[styles.item, active === s.id ? styles.active : ""].join(" ")} onClick={() => onChange(s.id)}>
          <s.icon size={16} /> {s.label}
        </button>
      ))}
    </nav>
  );
}
