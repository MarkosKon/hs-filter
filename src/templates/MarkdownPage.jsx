import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { graphql } from "gatsby";

import Layout from "../layouts/Layout";
import SEO from "../components/SEO";
import { Box } from "../components/Primitives";

const Content = styled(Box)`
  h1 {
    font-size: 72px;
    text-align: center;
    margin-top: 0px;
    margin-bottom: 64px;
    @media (max-width: 600px) {
      font-size: 48px;
    }
  }
  a {
    color: #e7d5a7;
  }
  /* autolink-headers svg */
  path {
    fill: #e7d5a7;
  }
  /* autolink-headers anchor */
  .anchor {
    float: none;
  }
  li {
    line-height: 30px;
  }
  p {
    line-height: 25px;
  }
`;
const MarkdownPage = ({ data }) => {
  const {
    html,
    frontmatter: { title, description }
  } = data.markdownRemark;
  return (
    <Layout>
      <SEO title={title} description={description} />
      <Box minHeight="calc(100vh - 59px)" bg="gray" color="white">
        <Content
          style={{ maxWidth: "900px" }}
          mx="auto"
          px={[3, 4]}
          py={5}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </Box>
    </Layout>
  );
};

MarkdownPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      html: PropTypes.string.isRequired,
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

export default MarkdownPage;

export const pageQuery = graphql`
  query MarkdownPageBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        description
      }
    }
  }
`;
