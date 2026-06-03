import { Link } from "react-router";
import styles from "./article-grid.module.css";

interface Props { className?: string; }

const articles = [
  { slug: "stockx-vs-goat", cat: "Tips & Tricks", title: "StockX vs GOAT: Which Platform Has Better Seller Fees in 2024?", excerpt: "We compared seller fees, payout speed, and dispute handling across both platforms to help you decide where to list.", author: "Marcus T.", initials: "MT", date: "May 15", readTime: "6 min" },
  { slug: "ai-reselling", cat: "News", title: "How AI is Changing the Sneaker Reselling Game", excerpt: "GPT-4 powered tools are now giving resellers institutional-grade price analysis. Here's what that means for your margins.", author: "Jordan K.", initials: "JK", date: "May 10", readTime: "5 min" },
  { slug: "tax-guide", cat: "Tips & Tricks", title: "Reseller Tax Guide 2024: What You Need to Know", excerpt: "Capital gains, Schedule D, 1099-K thresholds — everything you need to file correctly and keep more of your profits.", author: "Alex R.", initials: "AR", date: "May 5", readTime: "10 min" },
  { slug: "inventory-tips", cat: "Tips & Tricks", title: "5 Inventory Management Habits of Top Resellers", excerpt: "The most profitable resellers all share these habits. Here's how to systemize your inventory for maximum efficiency.", author: "Sam L.", initials: "SL", date: "Apr 28", readTime: "7 min" },
  { slug: "yeezy-analysis", cat: "Market Analysis", title: "Yeezy Market Analysis: Are Prices Recovering?", excerpt: "Post-Ye controversy, Yeezy prices have been volatile. We analyzed 6 months of data to see where the market is heading.", author: "Marcus T.", initials: "MT", date: "Apr 20", readTime: "8 min" },
  { slug: "launch-tips", cat: "Tips & Tricks", title: "How to Win More Nike SNKRS Drops", excerpt: "From account prep to timing your entry — here's our complete guide to improving your SNKRS success rate.", author: "Jordan K.", initials: "JK", date: "Apr 15", readTime: "9 min" },
];

export function ArticleGrid({ className }: Props) {
  return (
    <section className={[styles.section, className].filter(Boolean).join(" ")}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {articles.map(a => (
            <Link key={a.slug} to={`/blog/${a.slug}`} className={styles.card}>
              <div className={styles.image}>Article Image</div>
              <div className={styles.body}>
                <div className={styles.catBadge}>{a.cat}</div>
                <div className={styles.title}>{a.title}</div>
                <div className={styles.excerpt}>{a.excerpt}</div>
                <div className={styles.meta}>
                  <div className={styles.avatar}>{a.initials}</div>
                  <span>{a.author}</span>
                  <span>·</span>
                  <span>{a.date}</span>
                  <span>·</span>
                  <span>{a.readTime} read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
