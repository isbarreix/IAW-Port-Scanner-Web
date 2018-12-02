import React, { Component } from 'react';

class Table_td_portlist extends Component {
  
  render(props) {
    const openListPorts = this.props.open.list.map((open, i) => 
      <tr key={i}>
      <th scope="row">{ i+1 }</th>
      <td>{ open.port  }</td>
      <td>{ open.service  }</td>
      <td>{ open.state  }</td>
      </tr>                                    
    );
    return(
       openListPorts  
      
    );
  }
}

export default Table_td_portlist;