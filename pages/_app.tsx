import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/22593217?v=4?s=400" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
