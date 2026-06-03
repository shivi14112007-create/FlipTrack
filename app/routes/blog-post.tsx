import styles from "./blog-post.module.css";
import { ArticleHeader } from "~/blocks/blog-post/article-header";
import { ArticleContent } from "~/blocks/blog-post/article-content";
import { AuthorBio } from "~/blocks/blog-post/author-bio";
import { RelatedArticles } from "~/blocks/blog-post/related-articles";
import { ShareSubscribe } from "~/blocks/blog-post/share-subscribe";

export default function BlogPostPage() {
  return (
    <div className={styles.page}>
      <ArticleHeader />
      <ArticleContent />
      <AuthorBio />
      <RelatedArticles />
      <ShareSubscribe />
    </div>
  );
}
