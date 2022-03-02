import React from "react";
import { BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const SocialMedia = () => (
  <div className="app__social">
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
      <Link href="https://github.com/Abinashshasini">
        <BsGithub />
      </Link>
    </div>
  </div>
);

export default SocialMedia;
