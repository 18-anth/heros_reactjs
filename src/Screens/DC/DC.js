import * as React from "react";
import "./DC.css";
import HeroCatalog from "../../components/HeroCatalog";

function DC() {
  return (
    <>
      <div>
        <br />
        <HeroCatalog universe="DC" />
      </div>
    </>
  );
}
export default DC;
