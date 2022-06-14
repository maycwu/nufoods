import React, { useRef, useState, useEffect } from 'react';
import HomeContainer from './HomeContainer';
import RowContainer from './RowContainer';
import MenuContainer from './MenuContainer';
import { motion } from 'framer-motion';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useStateValue } from '../context/StateProvider';

function MainContainer() {
  const [{ foodItems, dispatch }] = useStateValue();
  const [scrollValue, setScrollValue] = useState();

  useEffect(() => {
    return () => {};
  }, [scrollValue]);

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer />
      <section className='w-full my-6'>
        <div className='w-full flex items-center justify-between'>
          <p
            className='text-2xl font-semibold capitalize text-headingColor relative 
          before:absolute before:rounded-lg before:content before:w-20 before:h-1 before:-bottom-2 before-left-0 before:bg-gradient-to-tr from-orange-300 to-orange-600
           transition-all ease-in-out duration-100 '
          >
            Breakfast
          </p>
          <div className=' hidden md:flex gap-3 items-center'>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className='w-8 h-8 rounded-lg bg-orange-200 hover:bg-orange-500  cursor-pointer hover:shadow-lg flex items-center justify-center'
              onClick={() => setScrollValue(-800)}
            >
              <MdChevronLeft className='text-lg text-white' />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className='w-8 h-8 rounded-lg bg-orange-200 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center'
              onClick={() => setScrollValue(800)}
            >
              <MdChevronRight className='text-lg text-white' />
            </motion.div>
          </div>
        </div>
        <RowContainer
          scrollValue={scrollValue}
          flag={true}
          data={foodItems}
          // data={foodItems?.filter((n) => n.category === 'breakfast')}
        />
      </section>

      <MenuContainer />
    </div>
  );
}

export default MainContainer;
