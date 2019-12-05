import $ from "jquery";
import csv from "./congress_votes_equality_act.csv";


//ajax GET request to load the csv file
function readcsv(callback) {
   return $(document).ready(function() {
    $.ajax( {
        type: "GET",
        url: csv  ,
        dataType: "text",
        success: function(data) { callback(data)}
    });
  });
};

// construct the dictionary like below from the csv
function processData(allText) {
  var people = []
  var allTextLines = allText.split(/\r\n|\n/);

  for (var i = 1; i< allTextLines.length-1; i++){
    var tmp = allTextLines[i].split(',');
    var vote = tmp[3];
    if (vote === 'Aye'){
        vote = 'Yes'
    } else if (vote === 'Not Voting'){
        vote = 'Abstained'
    }
    var person = {
      us_state: tmp[1],
      vote: vote,
      party: tmp[5],
      name: tmp[4],
      fav:false,
      img: "https://www.govtrack.us/static/legislator-photos/" + tmp[0] + "-200px.jpeg"
    };
    people.push(person);
    console.log(person);

  }
  return people;
}
