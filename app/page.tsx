import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import Card from "@/component/Card";
import Header from "@/component/Header";

export default function Home() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <>
      <Header />
      <div className="mx-auto max-w-xs xl:max-w-xl sm:max-w-sm py-8">
        <h1 className="mb-8 text-center text-2xl font-black">林荷馬的部落格</h1>
        {posts.map((post, idx) => (
          // <PostCard key={idx} {...post} />
          <>
            <Card key={idx} {...post} />
          </>
        ))}
      </div>
    </>
  );
}
