/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['shadrach-first-bucket.s3.amazonaws.com','nimbus-images.s3.amazonaws.com', "nimbus-images.s3.us-east-2.amazonaws.com"]
  },
  env: {
    SITE_URL : "https://nimbus.com.ng",

    NEXT_PUBLIC_API_BASE_URL: 'https://nimbus-3yuck.ondigitalocean.app/api/v1/',

    NEXT_PUBLIC_GOOGLE_ANALYTICS: 'G-EV5RB6XF8Q'
  },
}

module.exports = nextConfig
