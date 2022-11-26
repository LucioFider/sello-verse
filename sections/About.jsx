"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";
import { TypingText } from "../components";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      vireport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Sello-Verse" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white"> Sello-Verse</span> is a new
        thing in the future, where you can enjoy virtual shopping experience by
        feeling like its really real, you can feel what you experience in the
        Sello-Verse world. This is the
        <span className="font-extrabold text-white">
          {" "}
          madness of sello-verse
        </span>{" "}
        of today. Using only
        <span className="font-extrabold text-white"> VR </span> devices you can
        easily explore the Sello-Verse world you want, turn your dreams into
        reality. Lets
        <span className="font-extrabold text-white"> explore</span> the madness
        of the metaverse by scrolling down.
      </motion.p>
      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
