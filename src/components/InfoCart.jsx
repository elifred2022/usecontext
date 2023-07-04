import React from "react";
import useUser from "../hooks/useUser";


function InfoCart() {
  const { name } = useUser();

    return (
      <div className="App">
        <h3>Presidente: {name} </h3>
       
      </div>
    );
  }
  
  export default InfoCart;