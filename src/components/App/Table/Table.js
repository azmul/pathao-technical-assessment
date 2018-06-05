import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './Table.css';
import {fetchdatas} from '../../../redux/actions/tableActions';

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
        const tableHeaderData = datas[1];

        //const tableHeader = Object.keys(tableHeaderData);
        console.log(tableHeaderData);

        return (
            <table>
                <tbody>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
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