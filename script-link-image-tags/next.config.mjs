/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  //  images: {
  //   remotePatterns: [new URL('https://media.licdn.com/dms/image/v2/D5603AQGGzIlF-k3KrQ/profile-displayphoto-crop_800_800/B56Z71zu96KYAM-/0/1782240441792?e=1788393600&v=beta&t=CsdWNS5A72TsvoBWCoh48VoXQsH0Wemf3tgah-TBPiQ')],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        port: '',
        pathname: '/photos/**',
        search: '',
      },
    ],
  },
  // images: {
  //   localPatterns: [
  //     {
  //       pathname: '/assets/images/**',
  //       search: '',
  //     },
  //   ],
  // },
};


export default nextConfig;
