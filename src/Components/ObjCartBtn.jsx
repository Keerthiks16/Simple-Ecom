import React from "react";
import { useState } from "react";

const ObjCartBtn = ({ description }) => {
  const [str, setStr] = useState([]);
  const [count, setCount] = useState(0);

  const Add = (description) => {
    console.log(description);
    let newcount = count + 1;
    setCount(newcount);
    const newStr = [...str, description];
    setStr(newStr);
    console.log("Itemsss : ", str);
    console.log("Count : ", count);
  };
  return <button onClick={() => Add(description)}>Add To Cart</button>;
};

export default ObjCartBtn;
