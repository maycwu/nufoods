import React, { useEffect } from 'react';
import { Header, MainContainer, CreateContainer } from './components';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useStateValue } from './context/StateProvider';
import { getAllFoodItems } from '../src/utils/firebaseFunctions';
import { actionType } from './context/reducer';

function App() {
  const [{ foodItems }, dispatch] = useStateValue(); // foodItems is the object state with the list of food, if you want to use it to render it's properties in the return statement, i.e "foodItems.price" etc you must add it in the useStateValue hook (custom hook)

  const fetchData = async () => {
    await getAllFoodItems().then((data) => {
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AnimatePresence exitBeforeEnter>
      <div className='w-screen h-auto flex flex-col items-center bg-primary'>
        <Header />
        <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full'>
          <Routes>
            <Route path='/*' element={<MainContainer />} />
            <Route path='/createItem' element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
