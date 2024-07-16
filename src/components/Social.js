import React from "react";
import SocielItem from "./SocielItem";
function Social() {
  // const style = {
  //   color: "red",
  //   fontSize: "100px",
  //   backgroundColor: "yellow",
  // };
  return (
    <ol class="list-group list-group-numbered">
      <SocielItem
        p={{
          media: "Facebook",
          id: "54",
        }}
      />
      {/* <SocielItem media="Facebook" /> */}
      <SocielItem  p={{
          media: "Instagram",
          id: "100",
        }} />
      <SocielItem  p={{
          media: "Twitter",
          id: "13",
        }} />
      {/* <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li>
  <li class="list-group-item d-flex justify-content-between align-items-start">
    <div class="ms-2 me-auto">
      <div class="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <span class="badge bg-primary rounded-pill">14</span>
  </li> */}
    </ol>
  );
}
export default Social;
