import Link from "next/link";
import Header from "../components/Header";

export default function Home() {
   return (
      <div>
         <Header />
         <p>This is our homepage</p>
         <div>
            <a href="/blog">Blog</a>
         </div>
         <div>
            <a href="/laundry">Laundry</a>
         </div>

         <div>
            <a href="/vacuum">Vacuum - External page</a>
         </div>

         <div>
            <Link href="/about">About us</Link>
         </div>
      </div>
   );
}
