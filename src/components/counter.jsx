import React, { Component } from "react";
import { Badge, Button } from 'react-bootstrap';

class Counter extends Component {
  state = {
    count: 0
  };

  

  render() {
    let classes = "";
    classes += (this.state.count === 0) ? "warning" : "primary";

    return (
      <div>
        <Badge bg={classes} className={classes}>{this.formatCount()} </Badge>
        <Button variant="secondary" size="sm">Increment</Button>
      </div>
    );
  }

  getBadgeClasses(){
    let classes = "badge m-2 badge-";
    classes += (this.state.count === 0) ? "warning" : "primary";
  }

  formatCount(){
      const { count } = this.state;
      return count === 0 ? "zero" : count;
  }
}

export default Counter;
