import React from "react";
import DataTable from "./DataTable";
import fruits from "../fruits";

function itemFruits(fruit) {
   return(
    <DataTable 
    key={fruit.id}
    name={fruit.name}
    price={fruit.price}
    berat={fruit.berat}
  />
   )
}


function Table() {
 return (
  <div className="table">
   <table>
    <thead>
     <tr>
      <th>Nama</th>
      <th>Harga</th>
      <th>Berat</th>
     </tr>
    </thead>
    <tbody>
      {fruits.map(itemFruits)}
    </tbody>
   </table>
  </div>
 )
}

export default Table;

