import React from "react";
import { useData } from "../context/dataContext";

const Summary = () => {
  const { data } =  useData();
  // console.log(data);
  return (
    <div>summary</div>
  )
}

export default Summary;