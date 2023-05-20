/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "after8music.local",
        port: "",
        pathname: "/**",
      },
    ],
  },
}

export default nextConfig
