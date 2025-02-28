const { BLOG_URL, LAUNDRY_URL, VACUUM_URL } = process.env;

/** @type {import('next').NextConfig} */
const nextConfig = {
   async rewrites() {
      return [
         {
            source: "/blog",
            destination: `${BLOG_URL}/blog`,
         },
         {
            source: "/blog/:path+",
            destination: `${BLOG_URL}/blog/:path+`,
         },
         {
            source: "/blog-static/_next/:path+",
            destination: `${BLOG_URL}/blog-static/_next/:path+`,
         },
         /* add laundry project */
         {
            source: "/laundry",
            destination: `${LAUNDRY_URL}`,
         },
         {
            source: "/laundry/:path+",
            destination: `${LAUNDRY_URL}/:path+`,
         },
         {
            source: "/laundry/_next/:path+",
            destination: `${LAUNDRY_URL}/laundry/_next/:path+`,
         },
         /* add vacuum project */
         {
            source: "/vacuum",
            destination: `${VACUUM_URL}`,
         },
         {
            source: "/vacuum/:path+",
            destination: `${VACUUM_URL}/:path+`,
         },
         {
            source: "/us/discover-vacuums/assets/:path*",
            destination: `${VACUUM_URL}/us/discover-vacuums/assets/:path*`,
         },
         {
            source: "/us/discover-vacuums/fonts/:path*",
            destination: `${VACUUM_URL}/us/discover-vacuums/fonts/:path*`,
         },
      ];
   },
};

module.exports = nextConfig;
