import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { JSX } from 'react';
import Header from './Header';

type Props = {
  children?: JSX.Element[] | JSX.Element;
};

const Layout = ({ children, ...customMeta }: Props) => {
  const router = useRouter();
  const meta = {
    title: 'Wayne Jones - Software Engineer, Developer Advocate, Creator and Photographer',
    description: `I've been developing websites for 5 years straight. Get in touch with me to know more.`,
    image: '/avatar.png',
    type: 'website',
    date: '',
    ...customMeta
  };
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta property='og:url' content={`https://yourwebsite.com${router.asPath}`} />
        <link rel='canonical' href={`https://yourwebsite.com${router.asPath}`} />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Manu Arora' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@mannupaaji' />
        <meta name='twitter:title' content={meta.title} />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:image' content={meta.image} />
        {meta.date && <meta property='article:published_time' content={meta.date} />}
      </Head>
      <main>
        <Header />
        {children}
      </main>
    </>
  );
};

export default Layout;
