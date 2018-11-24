import React, { Component } from 'react';

class Card_Header_Row extends Component {
  
  render(props) {
    return (
      <div className="row mb-3">
        <div className="col-md-6 col-sm-8 mx-auto text-left">
          <label className="font-weight-bold">{  this.props.name  } </label>
        </div>
        <div className="col-md-6 col-sm-8 mx-auto text-right">
            <label className="">{  this.props.data  } </label> 
         </div>
    </div>
    );
  }
}

export default Card_Header_Row;