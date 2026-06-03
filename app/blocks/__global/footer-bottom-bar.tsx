import { IconBrandTwitter, IconBrandDiscord, IconBrandGithub } from "@tabler/icons-react";
import styles from "./footer-bottom-bar.module.css";

interface Props {
  className?: string;
}

export function FooterBottomBar({ className }: Props) {
  const year = new Date().getFullYear();
  return (
    <div className={[styles.bar, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <span className={styles.copyright}>
          © {year} FlipTrack. MIT License. Built with ❤️ for resellers.
        </span>
        <div className={styles.socials}>
          <span className={styles.badge}>Open Source</span>
          <a href="https://twitter.com" className={styles.socialLink} aria-label="Twitter">
            <IconBrandTwitter size={18} />
          </a>
          <a href="https://discord.com" className={styles.socialLink} aria-label="Discord">
            <IconBrandDiscord size={18} />
          </a>
          <a href="https://github.com" className={styles.socialLink} aria-label="GitHub">
            <IconBrandGithub size={18} />
          </a>
        </div>
      </div>
    </div>
  );
}
