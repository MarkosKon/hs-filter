import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import { useSiteMetadata } from '../hooks/useSiteMetadata';

const SEO = ({
  title, description, image, url, keywords, lang,
}) => {
  const {
    title: siteTitle,
    description: siteDescription,
    author,
    siteUrl,
    logo,
  } = useSiteMetadata();

  const actualTitle = title || siteTitle;
  const actualDescription = description || siteDescription;
  const actualUrl = url || siteUrl;
  const actualImage = image || logo;
  return (
    <Helmet>
      <html lang={lang} />
      <title>{actualTitle}</title>
      <meta name="description" content={actualDescription} />
      <meta name="keywords" content={keywords} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={actualUrl} />
      <meta property="og:title" content={actualTitle} />
      <meta property="og:description" content={actualDescription} />
      <meta property="og:image" content={actualImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={actualTitle} />
      <meta name="twitter:creator" content={author} />
      <meta name="twitter:description" content={actualDescription} />
      <meta name="twitter:image" content={actualImage} />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  keywords: PropTypes.string,
  lang: PropTypes.string,
};
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  url: null,
  keywords: 'hearthstone filter collection, hearthstone deck builder',
  lang: 'en',
};

export default SEO;
