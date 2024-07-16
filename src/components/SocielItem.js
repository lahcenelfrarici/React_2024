import React from "react";

function SocielItem(props){
    // const list={
    //     facebook:"Facebook",
    //     instagram:"Instagrame",
    //     twitter:"Twitter"
    // }
    return(
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">{props.media}</div>
          {props.p.media}
        </div>
        <span class="badge bg-primary rounded-pill">{props.p.id}</span>
        <img src="test"  alt={`Icon  of ${props.p.media}`} />
      </li>

      
    )
}
export default SocielItem;