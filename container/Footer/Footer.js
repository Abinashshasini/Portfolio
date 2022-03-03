import React from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import Link from "next/link";
import { BsTwitter, BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <>
      <h2 className="head-text">
        Get in <span>Touch</span>
      </h2>
      <div className={styles.app__footer__ptext}>
        <p>
          My inbox is always open. Whether you have a question or just want to
          say hello, I'll try my best to get back to you! Feel free to mail me
          about any relevant job updates.
        </p>
      </div>
      <div className={styles.app__footer_cards}>
        <div className={styles.app__footer_card}>
          <img src={images.email.src} alt="email" />
          <a href="mailto:abinashshasini125@gmail.com" className="p-text">
            abinashshasini125@gmail.com
          </a>
        </div>
        <div className={styles.app__footer_card}>
          <img src={images.mobile.src} alt="phone" />
          <a href="tel:+91 7749012570" className="p-text">
            +91 7749012570
          </a>
        </div>
      </div>
      <div className={styles.app__footer_bottom}>
        <div className={styles.footer__social}>
          <div>
            <Link href={`https://twitter.com/ShasiniAbinash`}>
              <BsTwitter />
            </Link>
          </div>
          <div>
            <Link href="https://www.facebook.com/abinash.shasini/">
              <FaFacebookF />
            </Link>
          </div>
          <div>
            <Link href="https://www.linkedin.com/in/abinash-shasini/">
              <BsLinkedin />
            </Link>
          </div>
          <div>
            <Link href="https://www.linkedin.com/in/abinash-shasini/">
              <BsInstagram />
            </Link>
          </div>
          <div>
            <Link href="https://github.com/Abinashshasini">
              <BsGithub />
            </Link>
          </div>
        </div>
        <p>
          Designed by JavaScript Mastery Build by Abinash Shasini with Next.js
          and 💕
        </p>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Footer, styles.app__footer), "contact");
