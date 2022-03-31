import Head from "next/head";

import { About, Skills, Header, Footer, Work } from "../container";
import { Navbar } from "../components";
import styles from "../styles/Home.module.scss";
import { images } from "../constants";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Abinash Shasini</title>
        <meta
          name="description"
          content="Abinash shasini's personal portfolio website"
        />
        <link rel="icon" href="/a.png" />
        <link rel="preload" as="image" href={images.profile.src} />
      </Head>

      <div className={styles.app}>
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Footer />
      </div>

      <footer></footer>
    </div>
  );
}
