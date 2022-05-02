import React from 'react';
import { Header, MainContainer, CreateContainer } from './components';
import { Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className='w-screen h-auto flex flex-col items-center bg-primary'>
      <Header />
      <main className='mt-24 p-8 w-full'>
          <Routes>
            <Route path='/*' element={<MainContainer/>} />
            <Route path='/createItem' element={<CreateContainer/>} />
          </Routes>
      </main>
    </div>
  );
}

export default App;
