import Banner from '@/app/(Client)/_components/banner/banner';
import info1 from './(Client)/_assets/images/info1.png';
import post from './(Client)/_assets/images/post.png';
import Post from "@/app/(Client)/_components/post/post";

export default function Home() {

  const listPost = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <Banner/>
      <div style={{ padding: "150px", display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
        {
          listPost.length > 0 && listPost.map((item, index) => {
            return <Post
              image={post}
              title="Future of Work"
              description="Majority of peole will work in jobs that don’t exist today."
              time="02 May"
              user={{
                avatar: info1,
                name: "Johanna Murray",
                status: true,
              }}
              key={index}
            />
          })
        }
      </div>
    </div>
  );
}
