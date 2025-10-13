import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Robert Sfichi",
  initials: "RS",
  location: "Cluj-Napoca, Romania, EET",
  locationLink: "https://www.google.com/maps/place/Cluj-Napoca",
  about: "Full stack software engineer specializing in taking products from concept to production.",
  summary: (
    <>
      Self-taught software engineer building and launching products independently.
      Generalist across the full stack, from designing scalable architectures and APIs
      to crafting pixel-perfect user interfaces.
    </>
  ),
  avatarUrl: "https://lh3.googleusercontent.com/a/ACg8ocLPOIZNAaz-mMkBQTlC5dRHu7pbnAicismtuy3hqrDfuqdzbXU3SQ=s576-c-no",
  personalWebsiteUrl: "",
  contact: {
    email: "robsfichi@gmail.com",
    tel: "+40752630507",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/robsltd",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/robertsfichi/",
        icon: "linkedin",
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: "x",
      // },
    ],
  },
  education: [
    {
      school: "UBB, Universitatea Babeș-Bolyai",
      degree: "Bachelor's Degree in Advertising",
      start: "2014",
      end: "2017",
    },
  ],
  work: [
    {
      company: "VEED.IO",
      link: "https://veed.io/",
      badges: ["Remote", "React", "Next.js", "TypeScript", "Node.js", "GCP", "GraphQL"],
      title: "Software Engineer",
      start: "2022",
      end: "2024",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>Built internal tools to improve developer experience and streamline workflows<br /></li>
            <li>Migrated monolithic legacy API to microservices architecture<br /></li>
            <li>Implemented performance improvements to the rendering pipeline, helping optimize system resources and reduce processing time<br /></li>
            <li>Advocated for company-wide adoption of automated testing frameworks and successfully onboarded other teams to these testing practices after implementing it in our own<br /></li>
            <li>Supported growth initiatives by developing landing pages for free tools that increased organic traffic<br /></li>
          </ul>
        </>
      ),
    },
    {
      company: "Jeco.dev",
      link: "https://jeco.dev/",
      badges: ["Remote", "React", "Next.js", "TypeScript",],
      title: "Software Engineer",
      start: "2019",
      end: "2021",

      description: (
        <>
          Building and scaling products for clients and internal ventures.<br />Authored technical content on web
          scraping and APIs, with articles published on Smashing Magazine.
          <br /><br />
          <ul className="list-inside list-disc">
            <li>
              Full-stack development across multiple product launches
            </li>
            <li>
              Migrated <a href="https://webscrapingapi.com/" style={{
                fontWeight
                  : "bold"
              }}>WebScrapingAPI.com</a>'s legacy monolith to AWS, significantly reducing infrastructure costs
            </li>
            <li>
              Built <a style={{
                fontWeight
                  : "bold"
              }} href="https://startupcafe.ro/gumzzz-platforma-it-stomatologie-finantare-htm-12825">Gumzzz.com</a> dental platform from scratch, collaborating with designers,
              product owners, and marketers to deliver complete features including real-time
              chat system and clinic/doctor management systems
            </li>
            <li>Wrote <a style={{
              fontWeight
                : "bold"
            }} href="https://www.webscrapingapi.com/author/robert">technical articles</a> covering web scraping techniques, REST API best practices, and developer tooling, including
              publication on <a style={{
                fontWeight
                  : "bold"
              }} href="https://www.smashingmagazine.com/author/robert-sfichi/">Smashing Magazine</a></li>
          </ul>
        </>
      ),
    },
    {
      company: "Sunny Side Up",
      link: "https://www.sunnysideup.agency/",
      badges: ["On Site", "Adobe Premiere Pro", "After Effects"],
      title: "Filme Editor & Camera Operator",
      start: "2015",
      end: "2019",
      description: (
        <>
          Created commercials for local and global brands, working across roles including
          director, script-writer, camera operator, and editor.
        </>
      ),
    },
  ],
  skills: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Remotion",
    "Vite",
    "WebSockets",
    "Node.js",
    "GraphQL",
    "Cloudflare",
    "AWS",
    "GCP",
  ],
  projects: [
    {
      title: "letslock.in",
      techStack: [
        "TypeScript",
        "React",
        "Vite",
        "Tailwind CSS",
        "Solana",
        "Rust",
        "Anchor",
        "Cloudflare"
      ],
      description:
        "Blockchain based accountability platform. Users stake USDC when committing. When they miss their goal, funds are automatically transferred to the penalty recipient.",
      link: {
        label: "letslock.in",
        href: "https://letslock.in/",
      },
    },
    {
      title: "Explainer Slop",
      techStack: ["TypeScript", "React", "Vite", "Remotion", "AWS Lambda + S3", "Whisper API", "Cloudflare"],
      description:
        "Completely automated video generation tool that creates dialogue explainer videos between Stewie and Peter Griffin.",
      link: {
        label: "Explainer Slop",
        href: "https://explainerslop.xyz/",
      },
    },
    {
      title: "Cite Buddy",
      techStack: ["TypeScript", "Browser Extension", "openAI API"],
      description:
        "AI-powered citation generator Chrome extension supporting APA, MLA, Chicago, and 10+ citation formats with one-click source citation copying.",
      link: {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/citebuddy-ai-citation-gen/hgmbbabapfgpciejfeoibakcbflnfpbm?authuser=1",
      },
    },
  ],
} as const;
