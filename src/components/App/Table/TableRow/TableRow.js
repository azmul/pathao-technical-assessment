import React, { Component } from 'react';
import {connect} from 'react-redux';

class TableRow extends Component{
    render(){
        return(
            <tr onClick={()=>{this.props.edit(this.props.index)}}>
                 <td ref={`data${this.props.index}`}  contenteditable="true">{this.props.data.company_name}</td>
                 <td ref={`data${this.props.index}`} contenteditable="true">{this.props.data.product}</td>
                 <td ref={`data${this.props.index}`} contenteditable="true">{this.props.data.price}</td>
                 <td ref={`data${this.props.index}`} contenteditable="true">{this.props.data.fda_date_approved}</td>
            </tr>
        )
    }
    
}

export default connect(null,{})(TableRow);