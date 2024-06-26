/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      
    },
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cqphjwakpkovcvrouaoz.supabase.co",
          port: "",
          pathname: "/storage/v1/object/public/Images/**",
        },
        {
          protocol: "https",
          hostname: "images.unsplash.com",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "daisyui.com",
          port: "",
          pathname: "/**",
        },
        {
          protocol: "https",
          hostname: "lh3.googleusercontent.com",
          port: "",
          pathname: "/**",
        },
      ],
    },
  };
  
  export default nextConfig;
  