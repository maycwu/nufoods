import React, { useEffect, useRef, useState } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';
import NotFound from '../img/NotFound.svg';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

function RowContainer({ flag, data, scrollValue }) {
  const rowContainer = useRef();
  const [items, setItems] = useState([]);

  const [{ cartItems }, dispatch] = useStateValue();
  
  const updateCart = () => {
    const cartItemsData = JSON.parse(localStorage.getItem('cartItems'));
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: cartItemsData,
    });
  };
  
  const addToCart = (item) => {
    const arr = JSON.parse(localStorage.getItem('cartItems')) || [];
    arr.push(item);
    localStorage.setItem('cartItems', JSON.stringify(arr));
  };

  useEffect(() => {
    return () => {
      rowContainer.current.scrollLeft += scrollValue;
    };
  }, [scrollValue]);

  useEffect(() => {}, [items]);

  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-6 my-12 p-6 bg-rowBg rounded-2xl scroll-smooth ${
        flag
          ? 'overflow-x-scroll'
          : 'overflow-x-hidden flex-wrap justify-center'
      } `}
    >
      {data && data.length > 0 ? (
        data.map((item) => (
          <div
            key={item.id}
            className='w-300 min-w-[300px] md:min-w-[320px] md:w-300 h-[260px] bg-cardOverlay p-2 backdrop-blur-lg my-12 hover:drop-shadow-xl rounded-2xl
            flex flex-col items-center justify-between'
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
                className='w-8 h-8 rounded-full bg-red-400 flex items-center justify-center'
                onClick={() => {
                  setItems(item);
                  addToCart(item);
                  updateCart();
                }}
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
        ))
      ) : (
        <div className='w-60 flex flex-col items-center justify-center '>
          <img src={NotFound} alt='not found' />
          <p>Items Not Available</p>
        </div>
      )}
    </div>
  );
}

export default RowContainer;
