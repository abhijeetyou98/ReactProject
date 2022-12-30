import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Anavbar from "./components/Anavbar";
import Accanopy from "./components/Accanopy";
import Productlist from "./Productlist";

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Anavbar />} />
        <Route path='/accanopy' element={<Accanopy />} />
        <Route path='/productlist' element={<Productlist />} />


      </Routes>

    </div>
  );
}

export default App;
