import React, {Component} from 'react';
import Person from "./Person";
import { Container } from "react-bootstrap";

class List extends Component {

  renderList() {

    const items = this.props.items.map(item => {
      return <Person key={item.name} color={item["color"]} index={item["index"]} name={item.name} party={item.party} vote={item.vote} us_state={item.us_state}
        img={item.img} boxClick={this.props.boxClick}/>
    });
    return items;
  }

  render() {
    return (
        <div className="person_list">
        {this.renderList()}
        </div>
    );
  }
}

export default List;
