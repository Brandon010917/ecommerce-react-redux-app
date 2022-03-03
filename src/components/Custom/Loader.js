import React from "react";
//styles
import "../../styles/Custom/Loader.css";

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
