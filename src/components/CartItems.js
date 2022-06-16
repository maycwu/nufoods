import React, { useEffect, useState } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import { motion } from 'framer-motion';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

let items = [];

const CartItem = ({ item}) => {
  const [{ cartItems }, dispatch] = useStateValue();
  const [qty, setQty] = useState(item.qty);

  const cartDispatch = () => {
    localStorage.setItem('cartItems', JSON.stringify(items));
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });
  };

  const updateQty = (action, id) => {
    if (action === 'add') {
      setQty(qty + 1);
      cartItems.map((item) => {
        if (item.id === id) {
          item.qty += 1;
        }
      });
      cartDispatch();
    }     
    
    if (action === 'remove') {
      // initial state value is one so need to check if 1 then remove it
      if (qty === 1) {
        items = cartItems.filter((item) => item.id !== id);
        cartDispatch();
      } else {
        setQty(qty - 1);
        cartItems.map((item) => {
          if (item.id === id) {
            item.qty -= 1;
          }
        });
        cartDispatch();
      }
    }
  };

  useEffect(() => {
    items = cartItems;
  }, [qty, items]);

  return (
    <div className='w-full p-1 px-4 rounded-3xl bg-orange-50 flex items-center gap-2'>
      <img
        src={item.imageUrl}
        className='w-20 h-20 max-w-[60px] rounded-full object-contain'
        alt=''
      />

      {/* name section */}
      <div className='flex flex-col gap-2'>
        <p className='text-base text-textColor'>{item?.title}</p>
        <p className='text-sm block text-textColor font-semibold'>
          $ {parseFloat(item.price) * qty}
        </p>
      </div>

      {/* button section */}
      <div className='group flex items-center gap-2 ml-auto cursor-pointer'>
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty('remove', item.id)}
        >
          <BiMinus className='text-textColor' />
        </motion.div>

        <p className='w-5 h-5 rounded-sm text-textColor flex items-center justify-center'>
          {qty}
        </p>

        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty('add', item.id)}
        >
          <BiPlus className='text-textColor' />
        </motion.div>
      </div>
    </div>
  );
};

export default CartItem;
