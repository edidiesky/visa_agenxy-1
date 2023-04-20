import React from "react";
import styled from "styled-components";

export default function Banner3() {
  return (
    <BannerTop className="position-relative">
      <img
        src="img/page-header/page-header-background-transparent-2.jpg"
        className="img-fluid position-absolute"
        alt=""
      />
      <div className="container">
        <div className=" text-center">
          <h2 className="text-color-light font-weight-semibold">Contact Us</h2>
        </div>
        <div className="col-md-12 align-self-center order-1">
          <ul className="breadcrumb breadcrumb-light d-block text-center">
            <li>
              <a href="#">Home</a>
            </li>
            <li className="active">Pages</li>
          </ul>
        </div>
      </div>
    </BannerTop>
  );
}

const BannerTop = styled.div`
  width: 100%;
  height: 50rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width:980px) {
    height: 35rem;
  }
  .img-fluid {
    top: 0;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 40;
    .text-center {
      h2 {
        font-size: 6rem;
      }
    }
  }
`;
