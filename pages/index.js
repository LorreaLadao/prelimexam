import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p> I am <b>Lorrea</b>, a unique name with <b>"Ladao"</b> as my surname. I've spent 20
              years in this world, residing in the town of Guagua. Though people often address
              me as 'Lors,' the meaning of my name is 'red'. Introducing myself took time, as I
              had to understand my strengths, weaknesses, and favorites. To provide a better
              grasp of who I am, here are the following details:
              <></>
          </p>
              <br></br>
              <p>
              ❖ Favorite music: "Scott Street" by Phoebe Rodgers
              Trivia: This song became my favorite two months ago, reminding me
              of my experiences rising from rock-bottom and the new chapters
              opening in my life.
              </p>
              <br></br>
              <p>
              ❖ Favorite food: asado, chicken curry, ice cream, cake, mochi, gummy
              foods
              </p>
              <br></br>
              <p>
              ❖ Background: I transitioned from being a victim to being the hero of my
              own story.
              </p>
              <br></br>
              <p>
              ❖ Hobbies: Writing novels, hand designing, and dancing
              </p>
              <br></br>
              <p>
              ❖ Interests: Business investments, Planets, Universe, New discoveries
              </p>
              <br></br>
              <p>
              ❖ Strengths: Creativity, collaboration, productivity, compassion, intuitive
              understanding of people, commitment, future-driven mindset, goal-
              oriented, organizational skills, discipline
              </p>
              <br></br>
              <p>
              ❖ Weaknesses: Communication skills, public speaking, time
              management</p>
              <br></br>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        
      </section>
    </Layout>
  );
}