/** @type {import('next').NextConfig} */
export default {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
            },
          ],
    }
};

