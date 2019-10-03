const pkg = require("./package");

const gray = "#424242";
const raisinBlack = "#2C1320";
const paradisePink = "#d23b58";
const title = "HSFilter";

// eslint-disable-next-line import/no-extraneous-dependencies
require("dotenv").config({
  path: ".env"
});

module.exports = {
  siteMetadata: {
    title,
    description: pkg.description,
    author: pkg.author,
    siteUrl: "https://hsfilter.netlify.com",
    logo: "https://hsfilter.netlify.com/app-preview.jpg"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-robots-txt",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdownPages",
        path: `${__dirname}/markdown/`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1920,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: "gatsby-remark-smartypants",
            options: {
              dashes: "oldschool"
            }
          },
          "gatsby-remark-autolink-headers",
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 30px"
            }
          },
          "gatsby-remark-copy-linked-files",
          "gatsby-plugin-catch-links",
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "noopener"
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/data/json`
      }
    },
    "gatsby-transformer-json",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GATSBY_GA_KEY,
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ["/preview/**", "/do-not-track/me/too/"]
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: paradisePink,
        showSpinner: true
      }
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyzer",
      options: {
        analyzerPort: 3000,
        production: true
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: title,
        short_name: title,
        start_url: "/",
        background_color: gray,
        theme_color: raisinBlack,
        display: "minimal-ui",
        icon: "src/images/funnel.png" // This path is relative to the root of the site.
      }
    },
    "gatsby-plugin-offline"
  ]
};
