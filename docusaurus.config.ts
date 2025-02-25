import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { FaLinkedin } from "react-icons/fa";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Datalore tech writing task",
  tagline:
    "Discourse rules all. Empowering excellence in technical and scientific communication: Your gateway to expert technical writing and API documentation",
  favicon: "img/favicon.ico",
  url: "https://tlabuk.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/datalore/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "labtom", // Usually your GitHub org/user name.
  projectName: "datalore-task", // Usually your repo name.
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // Initial config, to be changed, styles to be reafctored
        indexDocs: true,
        indexBlog: true,
        hashed: true,
        docsRouteBasePath: "/",
        searchBarShortcut: true,
        searchBarPosition: "right",
      },
    ],
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/tlabuk/datalore/tree/main/",
          admonitions: {
            keywords: ["troubleshooting"],
            extendDefaults: true,
          },
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Datalore task",
      logo: {
        alt: "My Site Logo",
        src: "img/datalore-logo.svg",
      },
      items: [
        {
          to: "https://tlabuk.github.io/this-cursive-page/about/bio",
          label: "About me",
          position: "left",
        },
        {
          href: "https://github.com/tlabuk/datalore",
          className: "header-github-link",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Other resources",
          items: [
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/tomasz-labuk/",
            },
            {
              label: "Academia",
              href: "https://independent.academia.edu/TomaszLabuk",
            },
            {
              label: "GitHub",
              href: "https://github.com/tlabuk",
            },
          ],
        },
        {
          title: "Other resources",
          items: [
            {
              label: "Ph.D. thesis",
              href: "https://opus.us.edu.pl/info/phd/USLe9b9fbcfe5a44450af007b14af391dcf/",
            },
            {
              label: "The Codex",
              href: "https://www.davincilabs.eu/downloads/The_Codex_Q2_2021.pdf",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} this.cursive | labtom.`,
    },
    themeConfig: {
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
