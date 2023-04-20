import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Layout,
  Home,
  Contact,
  About,  
  Agents,
  Passport,
  Travels,
  Visa,
  Cart,
  Checkout,
  Country
} from "./screens";
import Error from "./screens/Error";

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 4000 });
  }, []);

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="agents" element={<Agents />} />
          <Route path="passport" element={<Passport />} />
          <Route path="travels" element={<Travels />} />
          <Route path="visa" element={<Visa />} />
          <Route path="cart" element={<Cart />} />
          <Route path="billing" element={<Checkout />} />
          <Route exact path="country/:id" element={<Country />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

