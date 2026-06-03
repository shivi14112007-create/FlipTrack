import { Link } from "react-router";
import styles from "./related-articles.module.css";

interface Props { className?: string; }

const related = [
  { slug: "stockx-vs-goat", title: "StockX vs GOAT: Which Has Better Seller Fees?", excerpt: "Comprehensive fee comparison for 2024." },
  { slug: "tax-guide", title: "Reseller Tax Guide 2024", excerpt: "Capital gains, 1099-K, and what you need to file." },
  { slug: "inventory-tips", title: "5 Inventory Habits of Top Resellers", excerpt: "How the best resellers stay organized and profitable." },
];

export function RelatedArticles({ className }: Props) {
  return (
    <div className={[styles.section, className].filter(Boolean).join(" ")}>
      <h3 className={styles.heading}>Related Articles</h3>
      <div className={styles.grid}>
        {related.map(a => (
          <Link key={a.slug} to={`/blog/${a.slug}`} className={styles.card}>
            <div className={styles.thumb} />
            <div className={styles.title}>{a.title}</div>
            <div className={styles.excerpt}>{a.excerpt}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
