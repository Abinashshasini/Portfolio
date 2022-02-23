import React from "react";
import { motion } from "framer-motion";
import styles from "./Header.module.scss";
import { images } from "../../constants";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => (
  <div className={styles.app__header}>
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className={styles.app__header_info}
    >
      <div className={styles.app__header_badge}>
        <div className={styles.badge_cmp}>
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className={styles.p_text}>Hello, I am</p>
            <h1 className={styles.head_text}>Abinash</h1>
          </div>
        </div>

        <div className={styles.tag_cmp}>
          <p className={styles.p_text}>Web Developer</p>
          <p className={styles.p_text}>Software Engineer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className={styles.app__header_img}
    >
      <img src={images.profile.src} alt="profile_bg" />
      <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: "easeInOut" }}
        src={images.circle.src}
        alt="profile_circle"
        className={styles.overlay_circle}
      />
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className={styles.app__header_circles}
    >
      {[images.flutter, images.redux, images.sass].map((circle, index) => (
        <div
          className={[styles.circle_cmp, styles.app__flex]}
          key={`circle-${index}`}
        >
          <img src={circle.src} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default Header;
