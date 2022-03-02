import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import styles from "./Navbar.module.scss";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={styles.app__navbar}>
      <div className={styles.app__navbar_logo}>
        <img src={images.logo.src} alt="logo" />
      </div>
      <ul className={styles.app__navbar_links}>
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li
            className={styles.app__navbar_links}
            key={`link-${item}`}
            className="p-text"
          >
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className={styles.app__navbar_menu}>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
