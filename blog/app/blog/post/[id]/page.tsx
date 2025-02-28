import Link from "next/link";

interface PostProps {
   params: {
      id: string;
   };
}

export default function Post({ params: { id } }: PostProps) {
   return (
      <div>
         <h3>Post #{id}</h3>
         <p>Lorem ipsum</p>
         <Link href="/blog">Back to blog</Link>
      </div>
   );
}
