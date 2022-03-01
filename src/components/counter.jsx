import React, { Component } from "react";
import { Badge, Button } from "react-bootstrap";

class Counter extends Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render() {
    let classes = "";
    classes += this.state.count === 0 ? "warning" : "primary";

    return (
      <div>
        <Badge bg={classes} className="m-2">
          {this.formatCount()}{" "}
        </Badge>
        <Button onClick={this.handleIncrement} variant="secondary" size="sm">
          Increment
        </Button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "zero" : count;
  }
}

export default Counter;
