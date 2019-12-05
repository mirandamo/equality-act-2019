import React, { Component } from "react";
import List from "./List";
import "./App.css";
import Header from "./Header";

// Filtered list is the component that defines which people appear
// on screen
class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // the two filters: by party (Democrat or Republican)
      // and by vote, Yes, No, or Abstained
      party: "Party",
      vote: "Vote",
      // the sort: either none, or by the representatives' state
      sort: undefined,
      // show only favorites if true
      fav: false,
    };
  }

  // these functions set the filters based on the users
  // clicking on the drop down list or fav button
  onSelectFilterTypeVote = event => {
    this.setState({vote:event})
  };

  onSelectFilterTypeParty = event => {
    this.setState({party:event})
  };

  onClickFav = () => {
    if (this.state.fav === false) {
      this.setState({fav: true})
    } else {
      this.setState({fav: false})
    }

  };

  // defines the sort -- comparing the state name
  // alphabetically
  sortAsc = (a,b) => (a.us_state > b.us_state)? 1 : -1

  sortByState = () => {
    if (this.state.sort === undefined) {
      this.setState({sort:this.sortAsc})

    } else {
      this.setState({sort:undefined})
    }

  };

  // the matches functions go through each item and checks
  // if the given property of the item is the same as what the user 
  // selected for the filter.
  matchesFilterVote = item => {
    if (this.state.vote === "Vote"){
      return true
    } else if (this.state.vote === item.vote){
      return true
    } else {
      return false
    }
  }

  matchesFilterParty = item => {
    if (this.state.party === "Party"){
      return true
    } else if (this.state.party === item.party){
      return true
    } else {
      return false
    }
  }

  matchesFav = item => {
      if (this.state.fav === true) {
          if (item.fav === true) {
              return true
          } return false
      } else {
          return true
      }
  }

  // this is a function called in Person. If the fav button is clicked on
  // an individual person card, the fav property is updated for the 
  // same item in the list.
  // this is necessary because otherwise the state of the card would change,
  // but this.props.items would not see this change and the fav button
  // wouldn't change the filtering.
  boxClick = index => {
        if (this.props.items[index].fav === false) {
            this.props.items[index].fav = true
            this.props.items[index].color = "red"
            // returns the color back to the Person card, 
            // to change the button to red
            return "red"
        } else {
            // If the fav is true and being changed to false,
            // we need to immediately remove it from the favorites 
            // list. So if in favorite filter,
            // we set the state again. This seems redundant, but 
            // actually it causes the filteredlist to rerender
            // and thus remove the unfavorited items.
            if (this.state.fav){
              // if in favorites, need to re-render.
              this.setState({fav: true})}
            this.props.items[index].fav = false
            // "" is blue because that is the default for Card
            this.props.items[index].color = ""
            return ""

        }

    }

  // checks if each item matches all the filters, returning true if 
  // it does (this means the relevant person will show up on screen)
  filterItems = item => {
    return this.matchesFilterVote(item) && this.matchesFilterParty(item) && this.matchesFav(item);

  }

  render() {
    return (
      <div className="filter-list">
       {/* passing all the functions here as callback functions */}
      <Header onSelectFilterTypeParty={this.onSelectFilterTypeParty} onSelectFilterTypeVote={this.onSelectFilterTypeVote}
        sortByState={this.sortByState} onClickFav={this.onClickFav} party={this.state.party} vote={this.state.vote}/>

        <List boxClick={this.boxClick} items={this.props.items.map((item, index) => {
            item["index"] = index
            // we didn't want an additional color key initially because fav is 
            // equivalent and makes it redundant -- if fav is true, color is 
            // red, otherwise blue.
            if (item.fav){item["color"] = "red"} else {item["color"] = " "}
            return item
            // filters and sorts the items according to the above filtera
        }).filter(this.filterItems).sort(this.state.sort)} />
      </div>


    );
  }
}

export default FilteredList;
