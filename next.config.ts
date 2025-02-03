//import type { NextConfig } from "next";

//const nextConfig: NextConfig = {
  /* config options here */
  //
//};

//export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: "https",
              hostname: "lh3.googleusercontent.com",
          },
      ],
  },
  
};

export default nextConfig;


