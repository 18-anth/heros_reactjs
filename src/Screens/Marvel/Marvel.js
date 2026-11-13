import * as React from "react";
import "./Marvel.css";
import HeroCatalog from "../../components/HeroCatalog";

function Marvel() {
  return (
    <>
      <div>
        <br />
        <HeroCatalog universe="Marvel" />
      </div>
    </>
  );
}

export default Marvel;
