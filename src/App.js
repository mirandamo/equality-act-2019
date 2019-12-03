import React, { Component } from "react";
import "./App.css";
import FilteredList from "./FilteredList";
import Person from "./Person";

const people = [
  { name: "Rep. Lacy Clay Jr. [D]", party: "Democrat", vote: "Yes", us_state: "MO", img: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Lacy_Clay_official_photo.jpg", fav: false },
  { name: "Rep. Robert Aderholt [R]", party: "Republican", vote: "No", us_state: "NY", img: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Robert_Aderholt_official_photo.jpg", fav: false },
  { name: "Rep. Ed Case [D]", party: "Democrat", vote: "Yes", us_state: "HI", img: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Ed_Case%2C_Official_Portrait%2C_116th_Congress_2.jpg", fav: false },
  { name: "Rep. Rob Bishop [R]", party: "Republican", vote: "No", us_state: "UT", img: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Rob_Bishop_official_portrait.jpg", fav: false },
  { name: "Rep. Max Rose [D]", party: "Democrat", vote: "Yes", us_state: "NY", img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Max_Rose%2C_official_116th_Congress_photo_portrait.jpg", fav: false },
  { name: "Rep. Kevin Brady [R]", party: "Republican", vote: "Abstained", us_state: "TX", img: "https://upload.wikimedia.org/wikipedia/commons/1/19/Kevin_Brady_official_photo.jpg", fav: false },
  { name: "Rep. Joe Cunningham [D]", party: "Democrat", vote: "Yes", us_state: "SC", img: "https://upload.wikimedia.org/wikipedia/commons/7/75/Joe_Cunningham%2C_Official_Porrtait%2C_116th_Congress.jpg", fav: false },
  { name: "Rep. Kay Granger [R]", party: "Republican", vote: "No", us_state: "TX", img: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Kay_Granger.jpg", fav: false  },
  { name: "Rep. Lori Trahan [D]", party: "Democrat", vote: "Yes", us_state: "MA", img: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Lori_Trahan%2C_official_portrait%2C_116th_Congress.jpg", fav: false  },
  { name: "Rep. Greg Walden [R]", party: "Republican", vote: "Yes", us_state: "OR", img: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Greg_Walden_official_photo.jpg", fav: false },
  { name: "Rep. Cynthia Axne [D]", party: "Democrat", vote: "Yes", us_state: "IA", img: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Axne_Official_Portrait.jpg", fav: false  },
  { name: "Rep. Sean Casten [D]", party: "Democrat", vote: "Yes", us_state: "IL", img: "https://upload.wikimedia.org/wikipedia/commons/d/df/Sean_Casten%2C_official_portrait%2C_116th_Congress.jpg", fav: false  },
];
 
class App extends Component {
  render() {
    return (
      <div className="App">
         <FilteredList items={people} />
      </div>
    );
  }
}

export default App;
