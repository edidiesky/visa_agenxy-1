import React from "react";
import styled from "styled-components";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const options = {
  items: 6,
  autoplay: true,
  margin: 10,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
  // other configuration options
};

const loggoData = [
  "/img/logo-brand-2.png",
  "/img/logo-brand-1.png",
  "/img/logo-brand-3.png",
  "/img/logo-brand-4.png",
  "/img/logo-brand-5.png",
  "/img/logo-brand-6.png",
  "/img/logo-brand-7.png",
  "/img/logo-brand-8.png",
];

export default function Testimonials() {
  return (
    <TestimonialsContent>
      <div className="w-90 auto pt-4">
        <OwlCarousel {...options}>
          {loggoData.map((x) => {
            return (
              <div className="icon">
                <img src={x} alt style={{ maxWidth: "90px" }} />
              </div>
            );
          })}
        </OwlCarousel>
      </div>
    </TestimonialsContent>
  );
}

const TestimonialsContent = styled.div`
  width: 100%;
  padding: 6rem 0;
    .icon {
      width: 15rem;
      height: 12rem;
      &:hover {
        filter: brightness(9);
      }
      img {
        width: 100%;
        height: 100%;
        filter: brightness(0.1);
        transition: all 0.4s ease;
      }
    
  }
`;
