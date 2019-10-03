import React from "react";

import Layout from "../layouts/Layout";
import SEO from "../components/SEO";
import { Centered, Heading, Text } from "../components/Primitives";
import Link from "../components/Link";

const NotFoundPage = () => (
  <Layout>
    <SEO title="Page Not found | HSFilter" />
    <Centered minHeight="100vh">
      <Heading as="h1" mb={4}>
        Page not found
      </Heading>
      <Text fontSize={4}>
        We don&apos;t have that page.
        <Link to="/" ml={2}>
          Go back.
        </Link>
      </Text>
    </Centered>
  </Layout>
);

export default NotFoundPage;
