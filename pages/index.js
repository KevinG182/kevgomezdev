import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'

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
        <p>Graduating Senior in Computer Engineering at San Jose State University with a certificate in Cybersecurity.</p>
        <p>Programming experience in C, C++, Python, JavaScript, Verilog, and Assembly on ARM Cortex M4 Microprocessors, as well as hardware verification and validation with FPGA devices.</p>
        <p>
          Connect with me on{' '}
          <a href="https://www.linkedin.com/in/KevinGomezEngr/">LinkedIn!</a>
        </p>
        <p>
          Check out my other projects on{' '}
          <a href="https://github.com/KevinG182">GitHub!</a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
