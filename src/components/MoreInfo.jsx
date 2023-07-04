import React from "react";
import useUser from "../hooks/useUser"


 function MoreInfo() {
    const { name, edad } = useUser();

   
    
    return (
      <div >
        <h1>Informacion de usuario</h1>
        <p>Nombre: {name} </p>
        <p>Edad: {edad} </p>    
      </div>
    );
  }

  export default MoreInfo;
  
