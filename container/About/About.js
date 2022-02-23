import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import styles from "./About.module.scss";
import { images } from "../../constants";

const About = () => {
  const abouts = [
    {
      title: "Web Development",
      description: "I am a good web developer",
      imgUrl: images.about01.src,
    },
    {
      title: "UI Design",
      description: "I am a good web developer",
      imgUrl: images.about02.src,
    },
    {
      title: "Mobile apps Development",
      description: "I am a good web developer",
      imgUrl: images.about03.src,
    },
    {
      title: "MERN stack",
      description: "I am a good web developer",
      imgUrl: images.about04.src,
    },
  ];
  return (
    <>
      <h2 className={styles.head_text}>
        I Know That <span>Good Development</span>
        <br />
        means <span>Good Business</span>
      </h2>
      <div className={styles.app__profiles}>
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className={styles.app__profile_item}
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className={styles.bold_text} style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className={styles.p_text} style={{ marginTop: 10 }}>
              {about.description}
            </p>
            <h1>Baklol</h1>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
