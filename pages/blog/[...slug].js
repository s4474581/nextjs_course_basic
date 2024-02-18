import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();

  console.log("router.query:", router.query);
  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}

export default BlogPostsPage;

// [...slug]⇒slug以下のpathを配列で取得する
// 例: /1/2⇒slug: ['1', '2']
