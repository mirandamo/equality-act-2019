import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import "./App.css";


class Person extends Component {

    constructor(props) {
      super(props);

      this.state = {
        // Setting the "Favorite" button to the color set by FilteredList
        color: this.props.color
      };
}

changeColor = () => {
        // When the "Favorite" button is clicked, change its color according to the boxClick function in FilteredList
        this.setState({color: this.props.boxClick(this.props.index)})
    }

  render() {
    return (
        <div className="person">
        <Card mx-auto>
            <Card.Img bsPrefix="custom-img" src={this.props.img} />
            <Card.Body>
            <Card.Title>{this.props.name}</Card.Title>
            <Card.Text>
              Party: {this.props.party} <br/>
              State: {this.props.us_state} <br/>
              Vote: {this.props.vote}
            </Card.Text>
            <Button onClick={this.changeColor} style={{backgroundColor: this.state.color}}>Favorite</Button>
            </Card.Body>
        </Card>
        </div>
    );
  }
}

export default Person;
