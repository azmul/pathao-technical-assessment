import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './Table.css';
import {fetchdatas} from '../../../redux/actions/tableActions';
//import TableRow from './TableRow/TableRow';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            datas: [],
            tableHeaderData:{},
            index: -1,
            done: false
        };
    }
    componentWillMount = () =>{
        this.props.fetchdatas().then(
            ()=>{this.setState({datas: this.props.datas, tableHeaderData: this.props.datas[1]})},
            (err) =>{console.log(err)}
        );
    }
    editHandaler = (index) =>{
       this.setState({done: true, index: index})
    }
    dataShow = () =>{
        const data = this.state.datas[this.state.index];
    }
    onSort = (event, sortKey)=>{
        const datas = this.state.datas;
      
        datas.sort(function(a, b) {
            if (a[sortKey] > b[sortKey]) {
            return 1;
            }
            if (a[sortKey] < b[sortKey]) {
            return -1;
            }
            return 0;
        });
        this.setState({datas:datas})
      }
    render() {
        const {datas} = this.props;
        const {tableHeaderData} = this.state;
        
        let tableHeader=[];
        if(tableHeaderData){
            tableHeader = Object.keys(tableHeaderData);
        }
        const tableItems = datas.length > 0 ? (
           <div>
            <table className="data-table">
             <thead>
                 <tr className="data-table-header">
                 {
                     tableHeader.map((data,index)=>(
                        <th key={index} onClick={event => this.onSort(event, data)}>{data}</th>
                    )) 
                 }
                 </tr>
             </thead>
             <tbody>
                 {datas.map((data, index) =>
                 (
                     <tr key={index} data-item={data}>
                     <td contenteditable="true" data-title={data[tableHeader[0]]}>{data[tableHeader[0]]}</td>
                     <td contenteditable="true" data-title={data[tableHeader[1]]}>{data[tableHeader[1]]}</td>
                     <td contenteditable="true" data-title={data[tableHeader[2]]}>{data[tableHeader[2]]}</td>
                     <td contenteditable="true" data-title={data[tableHeader[3]]}>{data[tableHeader[3]]}</td>
                     </tr>
                 )
                 )}
             </tbody>
           </table>
           <button className="table-row-data-show" onClick={this.dataShow}>Show</button>
          </div>     
        ): (<div className="no-data">No Data Available</div>)

        return (
          <div>
              {tableItems}
          </div>
            
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