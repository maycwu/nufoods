import React from 'react';
import Delivery from '../img/delivery.png';
import HomeBg from '../img/home.png';
import { homeData } from '../utils/data';
import { motion } from 'framer-motion';

function homeContainer() {
  return (
    <section
      id='home'
      className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full bg-homeBackground bg-no-repeat p-5 rounded-2xl'
    >
      <div className='py-2 flex-1 flex flex-col items-start justify-start gap-6'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'>
            Bike Delivery
          </p>
          <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
            <img
              src={Delivery}
              className='w-full h-full object-contain'
              alt='delivery'
            />
          </div>
        </div>

        <p className='text-[2rem] lg:text-[3rem] font-bold tracking-wide text-headingColor'>
          Because you don't need to give up deliciousness for...
          <br />
          <span className='text-orange-600 text-[2rem] lg:text-[4rem]'>
            Healthiness
          </span>
        </p>
        <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          assumenda laborum reprehenderit cum explicabo consequuntur iusto quam
          facere, facilis numquam corrupti, corporis rerum iure debitis vero
          sunt aspernatur repellendus deleniti. Distinctio assumenda laborum
          reprehenderit cum explicabo consequuntur iusto quam facere, facilis
          numquam corrupti, corporis rerum iure debitis vero sunt aspernatur
          repellendus deleniti.
        </p>
        <div className='w-full flex items-center justify-center'>
          <a href='#menu'>
            <button
              type='button'
              className='bg-gradient-to-br from-orange-400 to-orange-500 w-full 
              md:w-auto px-4 py-2 rounded-3xl hover:shadow-lg transition-all ease-in-out duration-100 text-white'
            >
              Order Now!
            </button>
          </a>
        </div>
      </div>
      <div className='py-2 flex-1 flex items-center relative'>
        <img
          src={HomeBg}
          className='ml-auto h-400 w-full lg:w-auto lg:h-650 '
          alt='hero-bg'
        />

        <div className='w-[100%] h-full absolute top-8 left-0 flex items-center justify-center py-6 lg:px-32 gap-4 lg:gap-4 flex-wrap'>
          {homeData &&
            homeData.map((n) => (
              <div
                key={n.id}
                className='lg:w-190 p-4 rounded-full flex items-center justify-center flex-col drop-shadow-xl'
              >
                <motion.img
                  whileHover={{ scale: 1.4 }}
                  src={n.imageSrc}
                  alt='I1'
                  className='w-24 -mt-10 lg:w-40 lg:-mt-20 '
                />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default homeContainer;
