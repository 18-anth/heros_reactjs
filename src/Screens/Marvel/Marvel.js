import * as React from "react";
import "./Marvel.css";
import HeroCatalog from "../../components/HeroCatalog";

function Marvel() {
  return (
    <>
      <div>
        <br />
        <HeroCatalog universe="Marvel" />
        <br />
      </div>
    </>
  );
}

export default Marvel;
