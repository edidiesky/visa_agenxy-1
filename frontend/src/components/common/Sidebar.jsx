import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import { useSelector, useDispatch } from "react-redux";

const data = [
  { id: 1, title: "Home", path: "" },
  { id: 2, title: "Passport", path: "passport" },
  { id: 3, title: "Visa", path: "visa" },
  { id: 4, title: "Travel", path: "travels" },
  { id: 5, title: "About", path: "about" },
  { id: 6, title: "Agents", path: "agents" },
  { id: 7, title: "Contact Us", path: "contact" },
];

export default function Sidebar() {
  return (
    <SidebarContent>
      <div className={"sidebarWrapper w-90 auto flex text-center"}>
        {data.map((x) => {
          return (
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-links active" : "nav-links"
              }
              to={`/${x?.path}`}
              key={x?.id}
            >
              {x?.title}
            </NavLink>
          );
        })}
      </div>
    </SidebarContent>
  );
}

const SidebarContent = styled.div`
  background-color: #fff;
  min-height: 40rem;
  width: 100vw;
  position: fixed;
  top: 6%;
  left: 0;
  z-index: 4000;
  border: 1px solid rgba(00,);
  @media (max-width:780px) {
    top:10%;
  }
  .sidebarWrapper {
    padding: 1.5rem 0;
    width: 80%;
  }
  .nav-links {
    font-size: 1.7rem;
    color: var(--dark-1);
    padding: 1.4rem 2rem;
    border-radius: 3px;
    width: 100%;
    
    &.active {
        background: #2364c429;
    }
    &:hover {
        background-color: #f7f7f7;
    }
  }
`;
