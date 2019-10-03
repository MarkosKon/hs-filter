import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query siteMetadataQuery {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          logo
        }
      }
    }
  `);

  const {
    site: {
      siteMetadata: { title, description, author, siteUrl, logo }
    }
  } = data;

  return {
    title,
    description,
    author,
    siteUrl,
    logo
  };
};
