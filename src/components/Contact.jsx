import {useState , useRef} from 'react';
import {motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles} from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import Map from './Map';

const Contact = () => {
  const formRef =useRef();
  const [form ,setForm] = useState({
    name:"",
    email:"",
    message:'',
  })
  const [loading, setLoading] = useState(false)
  return (
    <div className='xl:mt-12 xl:flex-row flex-col flex gap-10 overflow-hidden '>
      <motion.div 
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] p-8 rounded-2xl bg-black-100"
      >
        <h3 className={`${styles.sectionHeadText}`}>Contact me</h3>
        <form
        className='mt-12 flex gap-8 flex-col'
        >
          <label className='flex flex-col'>
            <span className='text-white mb-4 font-medium'>Name</span>
            <input type='text' name='name' value={form.name} placeholder="Your Name" className="py-4 bg-myc placeholder:text-white-100 rounded-lg outline-none font-medium px-6"   />
          </label>
          <label className='flex flex-col'>
            <span className='text-white mb-4 font-medium'>Email</span>
            <input type='text' name='email' value={form.email} placeholder="Your Email" className="py-4 bg-myc placeholder:text-white-100 rounded-lg outline-none font-medium px-6"   />
          </label>
          <label className='flex flex-col'>
            <span className='text-white mb-4 font-medium'>Text</span>
            <textarea rows = '7' name='message' value={form.message} placeholder="what do you want to say?" className="py-4 bg-myc placeholder:text-white-100 rounded-lg outline-none font-medium px-6"   />
          </label>
          <button type="submit" className='bg-tertiary px-8 py-3 w-fit outline-none shadow-primary shadow-md rounded-xl'>
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)} className='xl:flex-1  w-[700px] h-[700px]'>
      </motion.div>
    </div>
    
  )
}

export default SectionWrapper(Contact, "contact")