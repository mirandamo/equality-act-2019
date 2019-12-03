import React, { Component } from "react";
import { DropdownButton, Dropdown, ButtonToolbar, Button, Navbar, NavDropdown, Nav } from "react-bootstrap";
import List from "./List";
import Person from "./Person";
import "./App.css";
import Header from "./Header";


class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      party: "Party",
      vote: "Vote",
      sort: undefined,
      fav: false,
    };
  }

  onSelectFilterTypeVote = event => {
    this.setState({vote:event})
  };

  onSelectFilterTypeParty = event => {
    this.setState({party:event})
  };

  sortAsc = (a,b) => (a.us_state > b.us_state)? 1 : -1


  sortByState = () => {
    if (this.state.sort == undefined) {
      this.setState({sort:this.sortAsc})

    } else {
      this.setState({sort:undefined})
    }

  };

  matchesFilterVote = item => {
    if (this.state.vote == "Vote"){
      return true
    } else if (this.state.vote == item.vote){
      return true
    } else {
      return false
    }
  }

  matchesFilterParty = item => {
    if (this.state.party == "Party"){
      return true
    } else if (this.state.party == item.party){
      return true
    } else {
      return false
    }
  }

  matchesFav = item => {
      if (this.state.fav == true) {
          if (item.fav == true) {
              return true
          } return false
      } else {
          return true
      }
  }

  onClickFav = () => {
    if (this.state.fav == false) {
      this.setState({fav: true})
    } else {
      this.setState({fav: false})
    }

  };

  boxClick = index => {
      if (this.props.items[index].fav === false) {
          this.props.items[index].fav = true
          this.props.items[index].color = "red"
          console.log("TRUE RED" + this.props.items[index].color + this.props.items[index].name + this.props.items[index].fav);
          return "red"
      } else {
          this.props.items[index].fav = false
          this.props.items[index].color = ""
          console.log("FALSE BLUE" + this.props.items[index].color + this.props.items[index].name + this.props.items[index].fav);
          return ""

      }

  }


  filterItems = item => {
    return this.matchesFilterVote(item) && this.matchesFilterParty(item) && this.matchesFav(item);

  }



  render() {
    return (
      <div className="filter-list">
      <Header onSelectFilterTypeParty={this.onSelectFilterTypeParty} onSelectFilterTypeVote={this.onSelectFilterTypeVote}
        sortByState={this.sortByState} onClickFav={this.onClickFav} party={this.state.party} vote={this.state.vote}/>


        <List boxClick={this.boxClick} items={this.props.items.map((item, index) => {
            item["index"] = index
            if (item.fav){item["color"] = "red"} else {item["color"] = " "}
            // {console.log("MAGIC" + item.color + item.name);}
            return item
        }).filter(this.filterItems).sort(this.state.sort)} />

      </div>


    );
  }
}

export default FilteredList;
