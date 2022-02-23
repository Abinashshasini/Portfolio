import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import styles from "./About.module.scss";
import { client, urlFor } from "../../client";
import { AppWrap } from "../../wrapper";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => setAbouts(data));
  }, []);

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
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className={styles.bold_text} style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className={styles.p_text} style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");
