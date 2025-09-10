// next.config.js


/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    // Agrega aquí otras variables públicas si las necesitas
  },
  output: 'export',
  // ...otras opciones si tienes
};

module.exports = nextConfig;
