import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet-async';

interface Props {
  title: string;
  description: string;
  keywords: string;
  favicon?: string;
  og?: {
    title?: string;
    description?: string;
    image?: string;
    siteName?: string;
  };
};

const Helmet: React.FC<Props> = ({ title, description, keywords, favicon, og }) => {
  return (
    <ReactHelmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      { favicon && <link rel="icon" href={`/${favicon}`} /> }
      <meta property="og:title" content={og?.title || title} />
      <meta property="og:description" content={og?.description || description} />
      { og?.image && <meta property="og:image" content={og.image} /> }
      { og?.siteName && <meta property="og:site_name" content={og.siteName} /> }
    </ReactHelmet>
  )
}

export default Helmet;
