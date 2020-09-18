import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p><b>Computer Engineering</b> Student at San Jose State University with an emphasis in <b>Cybersecurity</b> and <b>Computer Networks.</b></p>
        <p>
          Connect on{' '}
          <a href="https://www.linkedin.com/in/KevinGomezEngr/">LinkedIn!</a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title, group }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              {group}
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              </li>
          ))}
        </ul>
        <p>
          Check out my <b>sources</b> on{' '}
          <a href="https://github.com/KevinG182/kevgomezdev">GitHub!</a>

        </p>
      </section>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}>Experience</h2>

        <p>
          <a href="https://engineering.sjsu.edu/student-success/get-involved/student-organizations/engineering-ambassador-program">Engineering Ambassador Program Mentor</a><br />
          Charles W. Davidson College of Engineering<br />
          <small className={utilStyles.lightText}>
          Fall 2017 – Spring 2018
          </small>
          <small>
          <ul>
            <li>Supervised local high school students in the classroom and <b>reinforced STEM concepts</b> presented by lecturers</li>
            <li>Improved student work in studying the effects of <b>wingtips on airplanes</b> as well as studying the speed at which <b>wax worms consume plastic</b> by finding useful articles on similar topics and demonstrating accurate ways to <b>record data</b></li>
          </ul>
          </small>
        </p>

        <p>
          <a href="https://manosaccelerator.com/">Marketing Intern</a><br />
          Manos Accelerator, LLC<br />
          <small className={utilStyles.lightText}>
          Fall 2016 – Spring 2017
          </small>
          <small>
          <ul>
            <li>Hosted over 30 venture groups to participate in the 2017 Manos Accelerator Tech Venture Summit at the <b>Google Developers Launchpad</b> office in San Francisco for promoting tech-based startups</li>
            <li>Reviewed <b>databases of +1,000 applicable entrepreneurs</b> and startups to contact for investing opportunities</li>
            <li>Performed <b>functionality and usability testing</b> on landing page and registration website</li>
          </ul>
          </small>
        </p>
        
        <p>
          <a href="https://www.parsons.com/">Transportation Solution Intern</a><br />
          Parsons Corporation<br />
          <small className={utilStyles.lightText}>
          Summer 2015
          </small>
          <small>
          <ul>
            <li>Interned under the Parsons Transportation Solutions Group team contracted for designing the Wilshire and La Brea underground station for the <b>Los Angeles Metro Purple Line Extension Project</b></li>
            <li>Reviewed floor plans and <b>CAD models</b> for the Metro Project and participated in onsite meetings</li>
            <li>Presented results of the internship program to the <b>Los Angeles Area Chamber of Commerce counsel</b></li>
          </ul>
          </small>
        </p>

        <p>
          View current{' '}
          <a href="https://drive.google.com/file/d/1VHmUIOtgIw6wsjBkegu5F0DFti3cvftX/view?usp=sharing">resume</a>
          {' '}or send me an{' '}
          <a href="mailto:KevinGomezEngr@gmail.com">email!</a>
        </p>
      </section>
    </Layout>
  )
}
