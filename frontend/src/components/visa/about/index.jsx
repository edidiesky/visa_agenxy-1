import React from "react";
import styled from "styled-components";

export default function AboutIndex() {
  return (
    <AboutIndexWrapper>
      <div className="container py-5 mt-5">
        <div className="flex column gap-1 flex-1">
          <div className="w-100 right flex gap-1 item-center">
            <span
              className="span1"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="240"
            >
              35
            </span>
            <h5
              className="custom-drop-caps font-weight-medium text-4"
              data-aos="fade-up"
              data-aos-duration="1100"
              data-aos-delay="440"
            >
              Obtaining a visa can be a complex and time-consuming process,
              especially when navigating the ever-changing regulations and
              requirements. That's where our travel and immigration company
              comes in. With over 10 years of experience, we have helped
              countless clients successfully obtain visas for their travel
              needs.
            </h5>
          </div>
          <p className="w-100 hidden">
            <a
              href="#"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="540"
              className="text-uppercase text-3-5 text-decoration-underline text-color-primary text-color-hover-tertiary font-weight-semi-bold transition-3ms d-inline-block"
            >
              View More About Us
            </a>
          </p>
        </div>
        <div className="left flex-1 hidden">
          <h4 className="font-weight-bold hidden">
            We are committed to providing and serving our clients Whether it's a
            tourist visa, business visa, or work visa, our team of immigration
            specialists has the expertise to guide you through the process, from
            initial application to final approval. We work closely with our
            clients to ensure that all necessary documentation is in order and
            that the application process goes smoothly and efficiently.
          </h4>
        </div>
      </div>
    </AboutIndexWrapper>
  );
}

const AboutIndexWrapper = styled.div`
  width: 100%;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    @media (max-width: 980px) {
      flex-direction: column;
    }
    .right {
      @media (max-width: 680px) {
        flex-direction: column;
        align-items: flex-start;
      }
    }
    h5 {
      display: flex;
      align-items: center;
      font-size: 1.6rem;
      color: var(--grey-1);
      padding-right: 2rem;
      font-weight: 400;
      gap: 2rem;
      line-height: 1.6;
      text-transform: none;
    }
    .span1 {
      font-weight: 400;
      font-size: 7rem;
      font-weight: 700;
      color: var(--dark-1);
      @media (max-width: 680px) {
        display: block;
      }
    }
    .left {
      position: relative;
      &::after {
        content: "";
        width: 6px;
        height: 100%;
        background-color: #ccddf1;
        position: absolute;
        left: -5%;
        top: 50%;
        transform: translateY(-50%);
        border-radius: 5px;
        @media (max-width: 980px) {
          display: none;
        }
      }
    }
    h4 {
      font-size: 2.4rem;
      color: var(--dark-1);
      padding-right: 2rem;
      line-height: 1.6;
      gap: 2rem;
      font-weight: 600;
      text-align: start;
    }
  }
`;
