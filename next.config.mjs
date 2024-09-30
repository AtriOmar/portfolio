/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/omar-atri/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
