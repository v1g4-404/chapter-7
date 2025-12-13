import React from "react";
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import Banner from "./pages/Banner"
import Contact from "./pages/Contact"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>

      <Banner />

      <Routes>
        <Route path='/'>
          <Route index={true} element={<Home />} />
          <Route path='posts/:id' element={<Detail />} />
        </Route>
        <Route path='contact' element={<Contact />} />

      </Routes>
    </>
  );
}

export default App;
