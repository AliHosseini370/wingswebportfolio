import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import hoobank from '../../../public/hoobank.jpg'
import gpt3 from '../../../public/gpt3.jpg'
import wingstheme from '../../../public/wingstheme.jpg'
import gameassist from '../../../public/gameassist.jpg'

const items = [
  {
    id: 1,
    title: "Hoobank",
    img: hoobank,
    desc: "Experience a stunning and modern landing page, meticulously crafted using React and Tailwind CSS. Our responsive design ensures a seamless viewing experience across all devices, while the sleek and captivating visuals create a lasting impression for your visitors.",
    link: 'https://alihosseini370.github.io/hoobank'
  },
  {
    id: 2,
    title: "WingsTheme",
    img: wingstheme,
    desc: "Discover a wide range of premium website themes on Wings Theme. Built with React, Tailwind CSS, and Node.js, our platform offers modern themes, including WordPress, HTML templates, and more. Enhance your website's aesthetics with Theme Hub and create a captivating online presence.",
    link: '#'
  },
  {
    id: 3,
    title: "Gpt3",
    img: gpt3,
    desc: "Immerse yourself in a fully modern and responsive website, meticulously crafted using React and regular CSS. Our clean and intuitive design ensures seamless navigation and optimal user experience across all devices. With attention to detail and a focus on aesthetics, we bring your vision to life in a visually stunning and engaging online presence.",
    link: 'https://alihosseini370.github.io/gpt3'
  },
  {
    id: 4,
    title: "GameAssist",
    img: gameassist,
    desc: "Learn, improve, and dominate your favorite games at Game Assist. Our MERN stack-powered platform offers tutorials and courses for Dota 2, CS:GO, and more. Get expert coaching, sharpen your skills, and level up your gameplay. Join Game Assist today and unleash your gaming potential.",
    link: '#'
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.link} target="_blank">See Demo</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
