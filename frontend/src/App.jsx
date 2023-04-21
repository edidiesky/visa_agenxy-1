import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Layout,
  Contact,
  About,
  Agents,
  Cart,
  Checkout,
} from "./screens";
import Error from "./screens/Error";
import LoaderIndex from "./components/loaders";
const LazyHome = React.lazy(() => import("./screens/Home"));
const LazyTravels = React.lazy(() => import("./screens/Travels"));
const LazyVisa = React.lazy(() => import("./screens/Visa"));
const LazyPassport = React.lazy(() => import("./screens/Passport"));
const LazyCountry = React.lazy(() => import("./screens/Country"));
export default function App() {
  useEffect(() => {
    AOS.init({ duration: 4000 });
  }, []);

  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout />}>
          <Route
            exact
            path=""
            element={
              <React.Suspense fallback={<LoaderIndex />}>
                <LazyHome />
              </React.Suspense>
            }
          />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="agents" element={<Agents />} />
          <Route
            path="passport"
            element={
              <React.Suspense fallback={<LoaderIndex />}>
                <LazyPassport />
              </React.Suspense>
            }
          />
          <Route
            path="travels"
            element={
              <React.Suspense fallback={<LoaderIndex />}>
                <LazyTravels />
              </React.Suspense>
            }
          />
          <Route
            path="visa"
            element={
              <React.Suspense fallback={<LoaderIndex />}>
                <LazyVisa />
              </React.Suspense>
            }
          />
          <Route path="cart" element={<Cart />} />
          <Route path="billing" element={<Checkout />} />
          <Route
            path="country/:id"
            element={
              <React.Suspense fallback={<LoaderIndex />}>
                <LazyCountry />
              </React.Suspense>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}
