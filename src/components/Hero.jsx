import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import TextType from "./TextType";  // Importing the .tsx file
import DotGrid from './canvas/DotGrid.jsx';
import {logo} from "../assets/index.js";
import CurvedLoop from './CurvedLoop';
import { useRef } from 'react';
import VariableProximity from './VariableProximity';

const containerRef = useRef(null);


// Note:
// Make sure the font you're using supports all the variable properties.
// React Bits does not take responsibility for the fonts used



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
                resistance={750}
                returnDuration={1.5}
            />
        </div>
      <div className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>

            <span className={"text-7xl font-semibold text-white"}>Hi I'm </span> <span className="font-bold text-7xl text-[#915EFF]">bipknit</span>

            <h1 className={'${styles.heroHeadText} text-white flex items-center text-6xl'}>
                {/*<img src={logo} alt="logo" className="w-128 h-28 object-contain ml-2" />*/}
            </h1>


            <p className={`${styles.heroSubText} mt-2 text-transparent bg-clip-text orange-text-gradient`}>
                <TextType
                    text={["Happy coding!", "Always smile!"]}
                    typingSpeed={75}
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
            <CurvedLoop
                marqueeText="At the end what matters is what you have done."
                speed={4}
                curveAmount={200}
                direction="right"
                interactive={true}
                className="custom-text-style"
            />


            <div
                ref={containerRef}
                style={{position: 'relative'}}
            >
                <VariableProximity
                    label={'Hover me! And then star React Bits on GitHub, or else...'}
                    className={'variable-proximity-demo'}
                    fromFontVariationSettings="'wght' 400, 'opsz' 9"
                    toFontVariationSettings="'wght' 1000, 'opsz' 40"
                    containerRef={containerRef}
                    radius={100}
                    falloff='linear'
                />
            </div>

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
