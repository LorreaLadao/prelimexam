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
        <p> I am <b>Lorrea</b>, a unique name with <b>"Ladao"</b> as my surname. I've spent 20
              years in this world, residing in the town of Guagua. Though people often address
              me as 'Lors,' the meaning of my name is <span style={{ color: 'red' }}> 'red'</span>.
              Introducing myself took time, as I
              had to understand my strengths, weaknesses, and favorites. To provide a better
              grasp of who I am, here are the following details:
              <></>
          </p>
              <br></br>
              <p>
              <b>❖ Favorite music:</b> "Scott Street" by Phoebe Bridgers
              </p>
              <p>
              <b>❖ Favorite food: </b> asado, chicken curry, ice cream, cake, mochi, gummy
              foods
              </p>
              <p>
              <b>❖ Background:</b> I transitioned from being a victim to being the hero of my
              own story.
              </p>
              <p>
              <b>❖ Hobbies:</b> Writing novels, hand designing, and dancing
              </p>
              <p>
              <b>❖ Interests:</b> Business investments, Planets, Universe, New discoveries
              </p>
              <p>
              <b>❖ Strengths: </b> Creativity, collaboration, productivity, compassion, intuitive
              understanding of people, commitment, future-driven mindset, goal-
              oriented, organizational skills, discipline
              </p>
              <p>
              <b>❖ Weaknesses: </b>Communication skills, public speaking, time
              management</p>
              <br></br>
      </section>
    </Layout>
  );
}