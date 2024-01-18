import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Introducing Lorrea</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p> I am <b>Lorrea</b>, a unique name with <b>"Ladao"</b> as my surname. A student from University of the Assumption, Bachelor
	of Science in Information Technology. I've spent 20 years in this world, residing in the town of Guagua.
        </p>
         <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
