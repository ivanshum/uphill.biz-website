import type { GatsbyConfig } from "gatsby"
const config: GatsbyConfig = {
  graphqlTypegen: true,
  siteMetadata: {
    title: `Uphill.biz`,
    siteUrl: `https://uphill.biz`
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "0xf7j2sv",
      "dataset": "production"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-typescript", "gatsby-plugin-sharp", "gatsby-transformer-sharp", /* "gatsby-plugin-google-gtag", */ "gatsby-plugin-sitemap", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};
export default config