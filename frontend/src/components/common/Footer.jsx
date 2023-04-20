import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaCcPaypal,
  FaCcStripe,
  FaCcApplePay,
  FaCcVisa,
  FaPhoneVolume,
  FaPhoneAlt,
  FaAt,
} from "react-icons/fa";

const iconsListData = [
  { id: 1, icon: <FaCcVisa /> },
  { id: 2, icon: <FaCcPaypal /> },
  { id: 3, icon: <FaCcStripe /> },
  { id: 4, icon: <FaCcApplePay /> },
];

const data = [
  { id: 1, title: "Home", path: "" },
  { id: 2, title: "Project", path: "" },
  { id: 3, title: "Company", path: "" },
  { id: 4, title: "Blog", path: "" },
  { id: 5, title: "Services", path: "" },
  { id: 6, title: "Contact", path: "" },
];

export default function Footer() {
  return (
    <FooterContainer>
      <img
        src="/img/demos/construction/backgrounds/background-2.jpg"
        alt=""
        className="imageBanner"
      />
      <div className="footerWrapper">
        <div className="footerWTop">
          <div className="footerWTopR hidden">
            <img
              src="img/demos/construction/logo-dark.png"
              data-aos="fade-up"
              data-aos-duration="1100"
              data-aos-delay="350"
              alt="footerImage"
            />
          </div>
          <div className="footerWTopCenter">
            <div className="w-100 hidden">
              <h4
                className="text-bold"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="250"
              >
                Navigation
              </h4>
            </div>
            <div className="footerList">
              {data.map((x, index) => {
                return (
                  <div className="hidden list">
                    <Link
                      to={"/"}
                      className="list"
                      key={x.id}
                      data-aos="fade-up"
                      data-aos-duration="1100"
                      data-aos-delay={index * 340}
                    >
                      {x.title}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="footerWTopLeft column flex gap-1">
            <div className="w-100">
              <h4
                className="text-bold"
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-delay="250"
              >
                Newsletter
              </h4>
            </div>
            <div className="w-100 hidden">
              <form
                className="formList"
                data-aos="fade-up"
                data-aos-duration="1100"
                data-aos-delay="450"
              >
                <input type="text" placeholder="Email Address" />
                <button className="btn1">
                  <img
                    src="/img/demos/construction/icons/arrow-right.svg"
                    style={{
                      width: "2rem",
                      height: "2rem",
                      color: "#fff",
                      fill: "#Fff",
                    }}
                    alt=""
                  />
                </button>
              </form>
            </div>

            <div className="w-100 flex item-center gap-1 hidden">
              <div
                className="flex item-center gap-1 fs-16 text-grey"
                data-aos="fade-left"
                data-aos-duration="1100"
                data-aos-delay="550"
              >
                <FaPhoneAlt className="fs-18" />
                (800) 123-4799
              </div>
              <div
                className="flex item-center gap-1 fs-16 text-grey"
                data-aos="fade-left"
                data-aos-duration="1100"
                data-aos-delay="750"
              >
                <FaAt className="fs-18" />
                [email protected]
              </div>
            </div>
          </div>
        </div>
        <div className="footerWCenter">
          <p>Porto Template © 2023. All Rights Reserved</p>
        </div>
        <div className="footerWBottom">
          <ul>
            {iconsListData.map((x) => {
              return <li key={x.id}>{x.icon}</li>;
            })}
          </ul>
        </div>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 100%;
  min-height: 30rem;
  position: relative;
  display: flex;
  align-items: center;
  .footerWrapper {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 4rem;
    position: relative;
    z-index: 500;
    padding-top: 8rem;
    align-items: center;
    justify-content: center;
    height: 100%;
    .footerWBottom {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      ul {
        display: flex;
        align-items: center;
        gap: 1rem;
        li {
          width: 3.5rem;
          height: 3.5rem;
          svg {
            width: 100%;
            height: 100%;
            color: var(--grey-1);
            &:hover {
              color: var(--dark-1);
            }
          }
        }
      }
    }
    .footerWCenter {
      width: 100%;
      p {
        font-size: 1.4rem;
        font-weight: 500;
        color: var(--grey-1);
      }
    }
    .footerWTop {
      display: grid;
      grid-template-columns: 20vw 30vw 1fr;
      grid-gap: 1rem;
      width: 100%;
      @media (max-width: 980px) {
        grid-template-columns: 1fr;
        grid-row-gap: 7rem;
      }
      .footerWTopCenter,
      .footerWTopLeft {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        align-items: flex-start;
        width: 100%;
        .formList {
          height: 5.5rem;
          width: 100%;
          display: flex;
          .btn1 {
            height: 100%;
            background-color: var(--green);
            padding: 0 3rem;
            border: none;
            outline: none;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              width: 100%;
              color: #fff;
            }
          }
          input {
            height: 100%;
            flex: 1;
            border: none;
            outline: none;
            font-size: 1.6rem;
            color: var(--grey-1);
            padding: 0 3rem;
          }
        }
        .footerList {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          .list {
            font-size: 1.4rem;
            font-weight: 500;
            color: var(--grey-1);
            width: 45%;
          }
        }
      }
      .footerWTopR {
        display: flex;
        align-items: center;
        img {
          width: 10rem;
        }
      }
    }
  }
`;
