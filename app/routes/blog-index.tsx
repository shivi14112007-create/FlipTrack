import styles from "./blog-index.module.css";
import { BlogHeader } from "~/blocks/blog-index/blog-header";
import { FeaturedArticle } from "~/blocks/blog-index/featured-article";
import { ArticleGrid } from "~/blocks/blog-index/article-grid";
import { Pagination } from "~/blocks/blog-index/pagination";

export default function BlogIndexPage() {
  return (
    <div className={styles.page}>
      <BlogHeader />
      <FeaturedArticle />
      <ArticleGrid />
      <Pagination />
    </div>
  );
}
