import React from "react";
import { Overlay } from "../Sidebar/sidebar-styles";

const Background = ({ show, setIsOpened }) => {
  return (
    <Overlay show={show} onClick={() => setIsOpened((prev) => !prev)}></Overlay>
  );
};

export default Background;
