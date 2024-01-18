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
        <p> I am <b>Lorrea</b>, a unique name with <b>"Ladao"</b> as my surname. A student from University of the Assumption, taking up Bachelor
	of Science in Information Technology. I've spent 20 years in this world, residing in the town of Guagua.
        </p>
	<br>
	<ul>
	<p> Expectations:</p>
        <li> I expect to learn more about web and client services as these terms are not new but it requires the fundamental topics for me to delve deeper as I don't have an idea yet on how it works.</li>
        <li> The course may seem challenging but I do believe that our professor can make it easier for us to learn about it.</li>
        <li> Looking forward into passing the exams and have a passing grades with enough knowledge.</li>        
    </ul>
	<br>
    <ol>
	<p> Things that require zero talent:</p>
        <li> Punctuality </li>
        <li> Accountability </li>
        <li> Responsible </li>
        <li> Loving Yourself </li>
        <li> Attentively Listening </li>
        <li> Doing Better </li>
        <li> Appreciative </li>
        <li> Healthy Living </li>
        <li> Maintaining Positive Affirmations</li>
        <li> Showing Concern </li>
    </ol>
         <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
