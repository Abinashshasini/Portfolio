import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import styles from "./About.module.scss";
import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";
import images from "../../constants/images";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  console.log();

  return (
    <>
      <h2 className="head-text">
        All About <span>Me</span> 😊
      </h2>
      <div className={styles.app__aboout_container}>
        <motion.div
          whileInView={{ opacity: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <img src={images.profilenew.src} alt="second profile picture" />
        </motion.div>
        <h2 className="p-text" style={{ marginTop: 20 }}>
          <b>Hi</b> there. I'm Abinash Shasini. I'm an India based software
          developer with a goal-driven creative mindset and passion for learning
          and innovating. I specialise in creating beautiful, usable and
          professional websites & mobile applications with best practice,
          accessibility and latest standards. Interestingly, I got introduced to
          programming in my freshman year at{" "}
          <a href="https://silicon.ac.in/">Silicon Institute Of Technology</a>,
          Bhubaneswar where I completed my Bachelors in Computer Science and
          Engineering (2017-2021) with 80.1% aggregate. I'm currently working as
          a Frontend developer in{" "}
          <a ȟref="https://www.justdial.com/"> JustDial.com</a>. My
          responsibilty includes React & JS based forntend development. I'm also
          a colaborator in greate day to day problem solving Technologies.
        </h2>
      </div>
      <div className={styles.head__wraper}>
        <h2 className={styles.bold_text}>
          ➡️ Here is a list of the technologies that I'm familiar with!
        </h2>
      </div>
      <div className={styles.app__profiles}>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className={styles.app__profile_item}
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <div>
              <h2 className={styles.bold_text} style={{ marginTop: 20 }}>
                {about.title}
              </h2>
              <p className="p-text" style={{ marginTop: 10 }}>
                {about.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, styles.app__about),
  "about",
  styles.app_whitebg
);

{
  /* <h2 className={styles.head_text}>
        I Know That <span>Good Development</span>
        <br />
        means <span>Good Business</span>
      </h2> */
}
{
  /* <div className={styles.app__profiles}>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className={styles.app__profile_item}
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className={styles.bold_text} style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className={styles.p_text} style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div> */
}
