import {motion} from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas, StarsCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen '>
    <ComputersCanvas />
      <div className={`absolute inset-0  top-[100px] flex  items-start mx-auto gap-5`}>
        <div className='stage '>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
          <div class="layer"></div>
        </div>
        
      </div>
      
      <StarsCanvas />
      <div className='my-30'>
        
      </div>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <h1 className='font_mouse'>scroll</h1>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
          <motion.dev
            animate={{
              y: [0, 24 ,0]
            }}
            transition={{
              duration: 1.5,
              repeat:Infinity,
              repeatType:"loop"
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1" 
           />

          </div>
        </a>
      </div>
      <div className=' top-[120px] flex  mx-auto gap-5'>

      </div>
      
    </section>
  )
}

export default Hero