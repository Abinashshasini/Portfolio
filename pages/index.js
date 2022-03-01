import Head from "next/head";

import { About, Skills, Testimonial, Header, Footer, Work } from "../container";
import { Navbar } from "../components";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abinash Shasini</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.app}>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        {/* <Testimonial />
        <Footer /> */}
      </div>

      <footer></footer>
    </div>
  );
}
