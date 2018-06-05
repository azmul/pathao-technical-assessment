import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class TableRow extends Component{

    render(){
        return(
            <tr onClick={()=>{this.props.edit(this.props.index)}}>
                 <td   contenteditable="true">{this.props.data.company_name}</td>
                 <td   contenteditable="true">{this.props.data.product}</td>
                 <td   contenteditable="true">{this.props.data.price}</td>
                 <td   contenteditable="true">{this.props.data.fda_date_approved}</td>
            </tr>
        )
    }
    
}

TableRow.propTypes = {
    datas: PropTypes.array.isRequired
}

const mapStateToProps = ({datas}) =>{
    return{
        datas : datas.items
    }
  }
export default connect(mapStateToProps,{})(TableRow);