import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './Table.css';
import {fetchdatas} from '../../../redux/actions/tableActions';
import TableRow from './TableRow/TableRow';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            done: false
        };
    }
    componentWillMount = () =>{
        this.props.fetchdatas();
    }
    render() {
        const {datas} = this.props;
        
        const tableItems = datas.length > 0 ? (
            <tbody>
                {datas.map((data, index)=><TableRow key={index} index={index} data={data}  />)}
            </tbody>     
        ): (<div className="no-data">No Data Available</div>)

        return (
            <table>   
                <tbody>
                    <tr>
                        <th>company_name</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>fda_date_approved</th>
                    </tr>
                    {tableItems}
                 </tbody>  
            </table>
        );
    }
}

Table.propTypes = {
    fetchdatas: PropTypes.func.isRequired,
    datas: PropTypes.array.isRequired
}

const mapStateToProps = ({datas}) =>{
  return{
      datas : datas.items
  }
}
export default connect(mapStateToProps ,{fetchdatas})(Table);