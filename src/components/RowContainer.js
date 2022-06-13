import React from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';

function RowContainer({ flag, data }) {
  console.log(data);
  return (
    <div
      className={`w-full flex items-center gap-6 my-12 p-6 bg-rowBg rounded-2xl ${
        flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap'
      } `}
    >
      {data &&
        data.map((item) => (
          <div
            key={item.id}
            className='w-300 min-w-[300px] md:min-w-[340px] md:w-300 h-auto bg-cardOverlay p-2 backdrop-blur-lg my-12 hover:drop-shadow-xl rounded-2xl'
          >
            <div className='w-full flex items-center justify-between'>
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={item.imageUrl}
                alt=''
                className='w-40 -mt-8'
              />
              <motion.div
                whileTap={{ scale: 0.75 }}
                className='w-8 h-8 rounded-full bg-red-400 flex items-center justify-center '
              >
                <MdShoppingBasket className='text-white cursor-pointer hover:shadow-md' />
              </motion.div>
            </div>
            <div className='w-full flex flex-col items-end justify-end'>
              <p className='text-textColor font-semibold text-md md:text-lg'>
                {item.title}
              </p>
              <p className='mt-1 text-sm text-gray-500'> {item.calories} </p>
              <div className='flex items-center gap-8'>
                <p className='text-lg text-headingColor font-semibold'>
                  <span className='text-sm text-red-500'>$</span>
                  {item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default RowContainer;
