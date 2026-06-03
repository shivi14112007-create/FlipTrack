import { useState } from "react";
import { Link, NavLink } from "react-router";
import {
  IconChartBar,
  IconBox,
  IconCurrencyDollar,
  IconBell,
  IconBrain,
  IconSettings,
  IconReceipt,
  IconTrendingUp,
  IconShoppingCart,
  IconMenu2,
  IconX,
} from "@tabler/icons-react";
import styles from "./navigation-bar.module.css";

interface Props {
  className?: string;
  appMode?: boolean;
}

const publicLinks = [
  { to: "/features", label: "Features" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/changelog", label: "Changelog" },
];

const appLinks = [
  { to: "/app/dashboard", label: "Dashboard", icon: IconChartBar },
  { to: "/app/inventory", label: "Inventory", icon: IconBox },
  { to: "/app/market-prices", label: "Prices", icon: IconTrendingUp },
  { to: "/app/sales", label: "Sales", icon: IconShoppingCart },
  { to: "/app/expenses", label: "Expenses", icon: IconReceipt },
  { to: "/app/alerts", label: "Alerts", icon: IconBell },
  { to: "/app/ai-insights", label: "AI Insights", icon: IconBrain },
  { to: "/app/income-statement", label: "P&L", icon: IconCurrencyDollar },
];

export function NavigationBar({ className, appMode }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={[styles.nav, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          <div className={styles.logoIcon}>FT</div>
          <span className={styles.logoText}>
            Flip<span className={styles.logoAccent}>Track</span>
          </span>
        </Link>

        {appMode ? (
          <>
            <div className={styles.appNavLinks}>
              {appLinks.map(({ to, label, icon: Icon }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    [styles.appNavLink, isActive ? styles.active : ""].join(" ")
                  }
                >
                  <Icon size={15} />
                  {label}
                </NavLink>
              ))}
            </div>
            <div className={styles.spacer} />
            <div className={styles.actions}>
              <Link to="/app/settings" className={styles.btnGhost}>
                <IconSettings size={18} />
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className={styles.navLinks}>
              {publicLinks.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  className={({ isActive }) =>
                    [styles.navLink, isActive ? styles.active : ""].join(" ")
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
            <div className={styles.spacer} />
            <div className={styles.actions}>
              <Link to="/auth/login" className={styles.btnGhost}>Sign In</Link>
              <Link to="/auth/signup" className={styles.btnPrimary}>Start Free</Link>
            </div>
          </>
        )}

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </div>

      <div className={[styles.mobileMenu, menuOpen ? styles.open : ""].join(" ")}>
        {appMode ? (
          appLinks.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              className={styles.mobileNavLink}
              onClick={() => setMenuOpen(false)}
            >
              <Icon size={16} style={{ display: "inline", marginRight: 8 }} />
              {label}
            </Link>
          ))
        ) : (
          <>
            {publicLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={styles.mobileNavLink}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
            <div className={styles.mobileDivider} />
            <Link to="/auth/login" className={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Sign In</Link>
            <Link to="/auth/signup" className={styles.mobileBtnPrimary} onClick={() => setMenuOpen(false)}>Start Free</Link>
          </>
        )}
      </div>
    </nav>
  );
}
