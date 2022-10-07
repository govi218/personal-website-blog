module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://govindmohan.com`,
    // Your Name
    name: 'Govind Mohan',
    // Main Site Title
    title: `Thinking With Portals`,
    // Description that goes under your name in main bio
    description: `Musings on technology, media, and living on the edge`,
    // Optional: Twitter account handle
    author: `@_gov218`,
    // Optional: Github account URL
    github: `https://github.com/govi218`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/govindmohan218/`,
    // Content of the About Me section
    about: `I am a blockchain developer and researcher who has been in the space since 2014.
I have participated in several hackathons, notably creating a top 10 hack at HackFS 2020 and 2022. I was also an advisor to Legal Hackers at UofT Law. The group organized a participating node in Global Legal Hackathon 2020 where the winning team went on to start a company.

I am a passionate believer in data privacy and a free and fair internet.

I have several research interests, of which I am currently exploring peer-to-peer networking and document ingestion. I am very interested in information theory, fractals, non-standard analysis, category/type theory, and neurosymbolic/mathematical logic (did I miss any buzzwords?).`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Supercluster',
        description:
          'Supercluster Files enables DAOs to share content between team members without having to rely on centralized parties.',
        link: 'https://supercluster.dev',
      },
      {
        name: 'ipfs-go-recovery',
        description:
          'IPLD middleware that adds redundancy using erasure coding',
        link: 'https://github.com/Wondertan/go-ipfs-recovery',
      },
      {
        name: '.emacs.d',
        description:
          'My emacs config',
        link: 'https//github.com/govi218/.emacs.d',
      },
      {
        name: 'Rabbithole',
        description:
          'A chrome extension that allows you to track your search paths through the internet',
        link: 'https://rabbithole.to',
      },
      {
        name: 'CSBC2000',
        description:
          'Supercluster Files enables DAOs to share content between team members without having to rely on centralized parties.',
        link: 'https://github.com/govi218/CSBC2000',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Oproma',
        description: 'Senior Software Developer, September 2022 - Present',
        link: 'https://oproma.com',
      },
      {
        name: 'App development contract',
        description: 'Fullstack developer, September 2022 - Present',
        link: 'https://www.getluut.com/',
      },
      {
        name: 'York University',
        description: 'Blockchain Development Instructor, September 2022 - Present',
        link: 'https://continue.yorku.ca/programs/certificate-in-blockchain-development/#instructors-2',
      },
      {
        name: 'Virgil Systems',
        description: 'Lead Developer, January 2019 - February 2022',
        link: 'https://virgilsystems.com',
      },
      {
        name: 'DataX Research',
        description: 'Co-Founder, October 2018 - Present',
        link: 'https://dataxresearch.net',
      },
      {
        name: 'Software development contracts',
        description: 'Full-Stack Developer, May 2015 - October 2018',
        link: 'https://github.com/govi218',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description:
          'JavaScript, Python, Golang, Java, C/C++, Dart, Prolog, Shell, Solidity, HTML/CSS, Markdown, LaTex',
      },
      {
        name: 'Frameworks and technologies',
        description: 'Node.js, Express.js, React, Flutter, Flask, Android, Tailwind CSS, PostreSQL, Gin, IPFS, Poco',
      },
      {
        name: 'Other',
        description:
          'Docker, AWS, GCP, Digital Ocean, CI/CD, API design, P2P, Agile/Scrum',
      },
    ],
    publications: [
      {
        title: 'Distributed Fractionalized Data Networks For Data Integrity',
	link: 'https://ieeexplore.ieee.org/document/9169392',
	journal: 'IEEE Xplore, 17 August 2020',
      }
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1100,
              linkImagesToOriginal: false,
              // wrapperStyle: 'margin: 15px -30px !important',
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
