import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Service1 from './Service1';
import Service2 from './Service2';
import React, { Suspense } from 'react';
import AddLoader from './AddLoader';

const Home = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve(import('./Home'))
    }, 2000)
  })
})

const AboutUs = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve(import('./AboutUs'))
    }, 2000)
  })
})

const Contact = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve(import('./Contact'))
    }, 2000)
  })
})

const Service = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(()=>{
      resolve(import('./Service'))
    }, 2000)
  })
})

function LinkRouter() {
  return (
    <div className="App">
      <Suspense fallback={<AddLoader />}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutus' element={<AboutUs />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/service' element={<Service />}>
              <Route path='/service/service1' element={<Service1 />} />
              <Route path='/service/service2' element={<Service2 />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default LinkRouter;