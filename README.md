# Equality Act 2019 Live Filtering Page README

View our deployed app here: https://equality-act-2019.herokuapp.com/

## Purpose and Application Value
The goal of this application is to allow users to filter congress members that voted or abstained from the 2019 Equality Act Bill, which amends the original bill to prohibit discrimination against sexual orientation. Our ultimate aim is to add all of the members from the Senate when they have processed the bill, to be able to filter on more categories and understand the politicians' stance on sexual preference equality. This application will be valuable during voting seasons, in which people can quickly determine who to vote for depending on which candidate's values align with theirs.

## Interface Relevance to Design Principles
The interface uses flex boxes, which dynamically respond to different screen sizes. The webpage also has a universal typeface and color scheme (red and blue) to represent the United States. Each politician is in an isolated card, which depicts the candidate's information (image, name, party, state, vote). Moreover, each button changes color after they are pressed, which visually notifies the user that their input is valid and caused a response. Specifically, when pressed, the favorite button is red, alike to a "liked" icon, and the sort and "Favorite List" buttons become dark grey.

## How data is passed down through components
We manually inputted 12 candidate's information into 12 dictionaries and stored them as 12 indices in an array. The data is passed into the FilteredList component that filters/sorts the items in the dictionary. The functions that filter the data are accessed by the Header component to through callback functions. Furthermore, the filtered data is passed into the List component, which maps each candidate to a specific index so that the favorited information is connected to each candidate, independent of the dropdown filters. The items in the dictionary are then passed as props into the Person component, which stylizes each candidate card.

## How user interactions can trigger changes in the state of components
The user can click Party or Vote to view a dropdown menu that allows them to filter candidates. They can also sort the politicians by their representing US state's alphabetical order or click "Favorite List" to only see candidates they favorited. All four options change the state of each filter in the FilteredList component. In particular, in the Header component, the states of the sort and "Favorite List" button also change to handle color changes. The user can also click the "Favorite" button under each candidate, which changes the color state in the Person component.
