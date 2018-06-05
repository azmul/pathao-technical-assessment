import React, { Component } from 'react';

const TableRow = (props) =>{

    return(
        <tr >
             <td contenteditable="true">{props.data.company_name}</td>
             <td contenteditable="true">{props.data.product}</td>
             <td contenteditable="true">{props.data.price}</td>
             <td contenteditable="true">{props.data.fda_date_approved}</td>
        </tr>
    )
}

export default TableRow;