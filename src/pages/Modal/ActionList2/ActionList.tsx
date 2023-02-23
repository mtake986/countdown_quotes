import React from "react";
import Cd from "./Cd/Cd";
import Quote from "./Quote/Quote";
import { useModalContext } from "../../../contexts/ModalContext";

const ActionList = () => {
  const { selectTypeAndAct } = useModalContext();

  return <div>{selectTypeAndAct.type === "cd" ? <Cd /> : <Quote />}</div>;
};

export default ActionList;
