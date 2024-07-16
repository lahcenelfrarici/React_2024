import React from "react";
function CardItem(props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src="https://picsum.photos/id/1015/600/400"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title name">{props.name}</h5>
        <h5 className="card-title role">{props.role}</h5>
        <p className="card-text phone">{props.phone}</p>
        <p className="card-text email">{props.email}</p>
        <p className="card-text website">{props.website}</p>
        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
      </div>
    </div>
  );
}
export default CardItem;
