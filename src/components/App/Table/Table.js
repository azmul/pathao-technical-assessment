import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import './Table.css';
import {fetchdatas} from '../../../redux/actions/tableActions';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            datas: [],
            tableHeaderData:{},
            index: -1,
            done: false,
            editedDataBtn: false,
        };
        this.editedData = {};
        this.count = 0;
    }
    componentWillMount = () =>{
        this.setState({done: false})
        this.props.fetchdatas().then(
            ()=>{
                let tableHeaderCount;
                if((Object.keys(this.props.datas[1]).length)> (Object.keys(this.props.datas[0]).length)){
                    tableHeaderCount = this.props.datas[1];
                }else{
                    tableHeaderCount = this.props.datas[0];
                }
                this.setState({datas: this.props.datas, tableHeaderData: tableHeaderCount ,done: true})
            },
            (err) =>{console.log(err)}
        );
    }
    editText = (event,key,index) =>{
        const data = this.state.datas[index];
        this.editedData = data;
        this.editedData[key] = event.target.textContent;
        if(this.count === 0){
            this.setState({ editedDataBtn: true }, () =>{
                this.count =1;
          });
        }
        

     }
    editHandaler = (index) =>{
       this.count = 0;
       this.setState({done: true, index: index,editedDataBtn :false })
    }
    dataShow = () =>{
        console.log(this.editedData);
    }
    onSort = (event, sortKey)=>{
        const datas = this.state.datas;
        datas.sort((a, b)=> {
            if (a[sortKey] > b[sortKey]) {
            return 1;
            }
            if (a[sortKey] < b[sortKey]) {
            return -1;
            }
            return 0;
        });
        this.editedDataBtn = false;
        this.setState({datas:datas})
      }
    render() {
        const {datas} = this.props;
        const {tableHeaderData,editedDataBtn} = this.state;
        
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
                     <tr key={index} onClick={()=> this.editHandaler(index)}>
                        <td onKeyDown={(event)=> this.editText(event,tableHeader[0],index)} contenteditable="true">{data[tableHeader[0]]}</td>
                        <td onKeyDown={(event)=> this.editText(event,tableHeader[1],index)} contenteditable="true">{data[tableHeader[1]]}</td>
                        <td onKeyDown={(event)=> this.editText(event,tableHeader[2],index)} contenteditable="true">{data[tableHeader[2]]}</td>
                        <td onKeyDown={(event)=> this.editText(event,tableHeader[3],index)} contenteditable="true">{data[tableHeader[3]]}</td>
                     </tr>
                 )
                 )}
             </tbody>
           </table>
            {editedDataBtn ? <button className="table-row-data-show" onClick={this.dataShow}>Show</button> : null}
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