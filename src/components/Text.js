import React from "react";

function Text() {
  const somme = 10 + 10;
  let title = "";
  const client = "lahcen";
  // 
  const info={
    name:"lahcen",
    prenom:"elfarici"
  }

  // if(client==="lahcen"){
  //     title="my first react is lahcen";
  // }
  // else{
  //     title="my first react is hamza";
  // }
  return (
    <div>
        hello {info.name+" and "+ info.prenom}
        <br></br>
        hello {`${info.name} and  ${info.prenom}`}
      <h1>{title}</h1>
      <h2>{somme}</h2>
      <h2>{  client === "lahcen" ? "my first react is lahcen" : "my first react is hamza"}</h2>
    </div>
  );
}
export default Text;
