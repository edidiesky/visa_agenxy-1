import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { CartSidebar, Footer, Header, Testimonials } from "../components/common";



export default function Layout() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".layout");
    const height = container.getBoundingClientRect().height;
    setHeight(height);
  }, []);

  return (
    <LayoutContainer className="layout" style={{ height }}>
      <Outlet />
      <Testimonials/>
      <Footer />  
      <Header type="passport" />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  width: 100%;
  
`;
