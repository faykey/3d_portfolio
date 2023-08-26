import React from 'react';
import {motion} from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import useScript from '../useScript';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';



const Works = () => {
  useScript("/src/useScript.js");
  return (
    <>
    <div className={`${styles.sectionHeadText} flex flex-row bouncing-text`}>
          <div class="b">M</div>
          <div class="o">Y &nbsp;</div>
          <div class="u">W</div>
          <div class="n">O</div>
          <div class="c">R</div>
          <div class="e">K</div>
          <div class="d">S</div>
    </div>
    <div id="drag-container" className="flex flex-row">
       <div id="spin-container">
        <img src="https://th.bing.com/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
        <img src="https://th.bing.com/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
        <img src="https://th.bing.com/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />
        <img src="https://th.bing.com/th?id=OIP.PYipJ_hSncugM2SwnZitvgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2" />

      </div>
      <div id="ground"></div>
    </div>
    </>
  )
}

export default SectionWrapper(Works , "work");