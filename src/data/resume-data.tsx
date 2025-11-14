import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Robert Sfichi",
  initials: "RS",
  location: "Cluj-Napoca, Romania, EET",
  locationLink: "https://www.google.com/maps/place/Cluj-Napoca",
  about: "Full-stack software engineer specializing in taking products from concept to production",
  summary: (
    <>
      Detail-oriented software engineer building and launching products independently.
      Generalist across the full stack, from designing scalable APIs
      to crafting pixel-perfect user interfaces.
    </>
  ),
  avatarUrl: "https://shorturl.at/h3eCd",
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
      badges: ["Remote", "Next.js", "TypeScript", "Node.js", "Jest", "GCP", "GraphQL"],
      title: "Software Engineer",
      start: "2022",
      end: "2024",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>Built internal tools to enhance CS, B2B, and Product team workflows<br /></li>
            <li>Migrated monolithic legacy API to microservices architecture<br /></li>
            <li>Implemented performance improvements to the rendering pipeline<br /></li>
            <li>Supported growth initiatives by developing landing pages for free tools that increased organic traffic</li>
            <li>Advocated for company-wide adoption of unit and integration testing frameworks<br /></li>
          </ul>
        </>
      ),
    },
    {
      company: "Jeco.dev",
      link: "https://jeco.dev/",
      badges: ["Remote", "React", "JavaScript", "Node.js", "AWS"],
      title: "Software Engineer",
      start: "2019",
      end: "2022",

      description: (
        <>
          {/* Building and scaling products for clients and internal ventures.<br />Authored technical content on web
          scraping and APIs, with articles published on Smashing Magazine.
          <br /><br /> */}
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
      title: "Film Editor & Camera Operator",
      start: "2015",
      end: "2019",
      description: (
        <>
          <ul className="list-inside list-disc">
            <li>Worn many hats creating commercials for local and global brands as editor, script-writer, director and camera operator.</li>
          </ul>
        </>
      ),
    },
  ],
  skills: [
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "Vite",
    "Jest",
    "Remotion",
    "WebSockets",
    "GraphQL",
    "Docker",
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
      techStack: ["Remotion", "AWS Lambda + S3", "TypeScript", "React", "Vite", "Cloudflare"],
      description:
        "Completely automated video generation tool that creates dialogue explainer videos between Stewie and Peter Griffin.",
      link: {
        label: "Explainer Slop",
        href: "https://explainerslop.xyz/",
      },
    },
    {
      title: "Cite Buddy",
      techStack: ["Browser Extension", "TypeScript", "GCP", "React"],
      description:
        "AI-powered citation generator Chrome extension supporting APA, MLA, Chicago, and 10+ citation formats with one-click source citation copying.",
      link: {
        label: "Chrome Web Store",
        href: "https://chromewebstore.google.com/detail/citebuddy-ai-citation-gen/hgmbbabapfgpciejfeoibakcbflnfpbm?authuser=1",
      },
    },
  ],
} as const;
