import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import TextType from "./TextType";  // Importing the .tsx file
import DotGrid from './canvas/DotGrid.jsx';
import {logo} from "../assets/index.js";
import CurvedLoop from './CurvedLoop';
import CountUp from './CountUp';
import Lenis from 'lenis'



const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
            <DotGrid
                dotSize={10}
                gap={15}
                baseColor="#141414"
                activeColor="#222222"
                proximity={120}
                shockRadius={250}
                shockStrength={5}
                resistance={1000}
                returnDuration={2}
            />
        </div>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>

            <span className={"text-7xl font-semibold text-white"}>Hi I'm </span> <span className="font-bold text-7xl text-[#915EFF] pb-52 mb-20">bipknit</span>

            <h1 className={'${styles.heroHeadText} text-white flex items-center text-6xl'}>
                {/*<img src={logo} alt="logo" className="w-128 h-28 object-contain ml-2" />*/}
            </h1>

            <p className={'mt-4'}> <span className={'pink-text-gradient'}>Follower count: </span>
            <CountUp
                from={0}
                to={30000}
                separator=","
                direction="up"
                duration={5}
                className="count-up-text"
            />
            </p>
            <p className={`${styles.heroSubText} mt-2 text-transparent bg-clip-text orange-text-gradient`}>
                <TextType
                    text={["Happy coding!", "Always smile!"]}
                    typingSpeed={40}
                    pauseDuration={1500}
                    showCursor={true}
                    cursorCharacter="|"
                    cursorClassName="text-white"
                    className="text-4xl"
                    style={{
                        color: "transparent", // Making text transparent so gradient can show
                        background: "linear-gradient(to right, #FF7F00, #FFDD00)", // Gradient from orange to yellow
                        backgroundClip: "text", // Clip the background to the text
                    }}
                />
            </p>
        </div>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
