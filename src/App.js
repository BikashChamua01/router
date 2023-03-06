import React from 'react'
import Home from './Home';
import Content from './Content';
import Nav from './Nav';
import Errorpage from './componants/Errorpage';
import About from './About';

import Home1 from './componants/Home1';
import Home2 from './componants/Home2';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Nav/>}>
            <Route path='/' element={<Home/>}>
                  <Route path='/cse' element={<Home1/>}/>
                  <Route path='/mecha' element={<Home2/>}/>
            </Route>
            <Route path='/about' element={<About/>}/>
            <Route path='/content' element={<Content/>}/>
            <Route path='*' element={<Errorpage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
