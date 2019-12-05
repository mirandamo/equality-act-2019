import React, {Component} from 'react';
import Person from "./Person";

class List extends Component {

  renderList() {

    // Map each dictionary in FilteredList to the stylized cards defined in Person
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
