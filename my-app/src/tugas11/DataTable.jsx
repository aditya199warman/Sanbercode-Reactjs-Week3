import React from "react";

function DataTable(props) {
 return (
   <tr>
    <td>{props.name}</td>
    <td>{props.price}</td>
    <td>{props.berat}</td>
   </tr>
 )
}

export default DataTable;