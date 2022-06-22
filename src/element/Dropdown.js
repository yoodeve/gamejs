import React, { useEffect, useState } from "react";
import "../css/toggle.css";


const Dropdown = (props) => {
  const [dropAnimation, setDropAnimation] = useState(false);
  const [repeat, setRepeat] = React.useState(null);

  useEffect(() => {
    if (props.drop) { //dropXXX가 true일 때
      clearTimeout(repeat);
      setRepeat(null);
      setDropAnimation(true);
    } else { //dropXXX가 false일 때
      setRepeat(setTimeout(() => {
          setDropAnimation(false);
        },400));
    }
  }, [props.drop]);
  return ( 
    <article
      className={`components-dropdown ${
        props.drop ? "slide-fade-in-dropdown" : "slide-fade-out-dropdown"
      }`}
    >
      {dropAnimation && props.children}
    </article>
  );
};

export default Dropdown;
