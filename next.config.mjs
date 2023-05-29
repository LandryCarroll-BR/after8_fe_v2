/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "after8music.local",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "after8stg.wpengine.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "after8.wpengine.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "after8music.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
