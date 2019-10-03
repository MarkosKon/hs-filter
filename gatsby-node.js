const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(
    `
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) throw result.errors;

    const template = path.resolve("./src/templates/MarkdownPage.jsx");
    const markdownPages = result.data.allMarkdownRemark.edges;

    markdownPages.forEach(markdownPage => {
      createPage({
        path: markdownPage.node.fields.slug,
        component: template,
        context: {
          slug: markdownPage.node.fields.slug
        }
      });
    });

    return null;
  });
};
