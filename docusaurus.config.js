// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');

async function createConfig() {
  const katex = (await import('rehype-katex')).default;
  return {
    title: 'Learn Prompt Engineering',
    tagline: 'Best Learning Course on Prompt Engineering',
    url: 'https://promptdev.ai/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
  
    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'prompteng', // Usually your GitHub org/user name.
    projectName: 'prompt_engineering', // Usually your repo name.
    deploymentBranch: 'gh-pages',
    trailingSlash: false,
    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
      defaultLocale: 'en',
      locales: ['en', 'es', 'ja', 'pt', 'zh-Hans'],
    },
  
    presets: [
      [
        
        'classic',
        ({
          gtag: {
            trackingID: 'G-18H7XQMVJL',
          },
          googleAnalytics: {
            trackingID: 'G-18H7XQMVJL',
          },
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            // Remove this to remove the "edit this page" links.
            
            remarkPlugins: [
              math,
              (await import("remark-gfm")).default,
              [(await import("@benchmark-urbanism/remark-bibtex")).default, { bibtexFile: 'bibliography.bib' }],
              [(await import("@renatonagliati/remark-auto-glossary")).default, { yamlFile: 'glossary.yml' }]
            ],
            rehypePlugins: [katex],
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],
    scripts: [
      {
        src: "https://embed.trydyno.com/embedder.js",
        defer: true
      }
    ],
    stylesheets: [
      {
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity:
          'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
      },
      {
        href: 'https://embed.trydyno.com/embedder.css',
        type: "text/css",
        crossorigin: 'anonymous',
      }
    ],
    themeConfig:
      ({
        navbar: {
          title: 'Prompt Development',
          logo: {
            alt: 'My Site Logo',
            src: 'img/simple_ai.png',
          },
          items: [
            {to: 'docs/intro', label:"Learn Prompt Engineering", position:"left"},
            {
              to: 'consulting', 
              label:"Consulting", 
              position:"left",          
              className: 'consulting-gradient',
            }
          ],
        },
        footer: {
          style: 'dark',
          copyright: `Copyright © ${new Date().getFullYear()} Prompt Engineering.`,
        },
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
      markdown: {
        mermaid: true,
      },
      themes: ['@docusaurus/theme-mermaid'],
  };
}

module.exports = createConfig;
