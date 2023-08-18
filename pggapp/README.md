
# Project Name: General Assembly Front End Web Development Course RCTR05A-2023 August Final Project-Jie Zheng

[LIVE DEMO](https://generalassemblyfinalproject.vercel.app/)

[BACKUP](http://generalassemblyfinalproject.surge.sh/)

[![License](https://img.shields.io/badge/license-MPL%202.0-orange.svg)](https://opensource.org/licenses/MPL-2.0)

## Description
- This project is my Final Project for the General Assembly React Course.
- This project is a web application built with React and Material UI that provides a seamless and dynamic user experience through client-side routing using React Router. This project aims to demonstrate how to implement navigation and routing functionalities in a single-page application, making it easy to create multi-page-like experiences without full page reloads.
- Some Images are created by Generate AI.

### Project Requirement
- This is an open-ended project. We can't provide any set solution, but we're always here to help. You'll be making your own React app. This can be a website you imagine, but feel free to pick an existing website and try to mimic it.
- Your app must utilize nested components and state.
- Your app must use React Router and have multiple in-app pages.
- Your app must make use of an API - either a public API or one you build yourself
- A list of some more APIs for inspiration: https://github.com/public-apis/public-apis

### My Solution
- A mimic website of www.pokemon.com using [pokeapi](pokeapi.co)

## Table of Contents
- [App Screenshot](#app-screenshot)
- [Development Journal](#development-journal)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [License](#license)
- [Contact](#contact)

## App Screenshot
### find more screenshots in development_journal folders
![Web capture_13-8-2023_95817_generalassemblyfinalproject vercel app](https://github.com/gnehzkcaj/Project-2023-JIE/assets/97222543/e725fd15-c164-4e06-b5af-d8523252555a)


## Development Journal

-week 01
<img width="2002" alt="General Assembly React Course Final Project-Website Wireframe" src="https://github.com/gnehzkcaj/Project-2023-JIE/assets/97222543/019fd947-e99e-4015-b44e-aee5fa5b1ba1">

-week 02
<img width="2320" alt="General Assembly React Project August 2023 (1)" src="https://github.com/gnehzkcaj/Project-2023-JIE/assets/97222543/71875721-b4dd-4c5f-bffe-12c3b41c89ec">

## Installation
To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/gnehzkcaj/Project-2023-JIE.git
2. Navigate to the project directory: `cd pggapp`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

## Usage

Once the development server is running, open your web browser and go to `http://localhost:3000` to access the application. You can navigate through different views by clicking on the provided links or by directly entering specific URLs in the browser.

Feel free to explore the different features implemented in the application, such as nested routes, route parameters, and the 404 page.

## Features
- **Homepage:** Utilize Material UI Library Image List Layout and Framer Motion React Library.
- **Search Bar and Nav Bar:** Enrich each webpage with both Navigation and Search feature. Users can effortlessly explore Pokémon details by searching either their ID or Name. The system will convert the search input to lowercase, ensuring a smooth searching experience.
- **Pokédex:** On the Pokédex page, you'll discover a list of over 1,281 Pokémon organized into easily navigable sections. Each page is displaying a collection of 12 Pokémon for optimal user experience. You have the flexibility to arrange the Pokémon order according to your preference: ascend or descend by ID, and alphabetically.

Moreover, for a dash of excitement, I've added a "Surprise Me" button that provides a unique twist. With each press, you'll be greeted with a selection of 12 Pokémon chosen at random, offering an element of unpredictability to your gallery experience. You can press "Fetch All" button to undo the "Surprise Me" twist.

By clicking "View Detail" button, it will bring you to the Sprite Page to view that Pokémon detail.
- **Items page:** With ability to dispay 2,050 Pokémon Items by its ID, Name and Images. It has a "Load More" button for adding display items.
- **Sprite page:** Display Pokémon Detail with height, weight, base_experience, abilities, types, held items, statistics and species Flavor Facts. There is also a TV footer for YouTube video.
- **Games & Apps page:** Display a YouTube Video crafted using Lightworks and Veeware Audio Editor. It also brings you to another Game App.  

## React Functions
- **Client-Side Routing:** Utilizes React Router to manage client-side routing, enabling smooth navigation between different views without refreshing the entire page.
- **Multiple Routes:** Configured with multiple routes, each associated with a unique URL, allowing users to access specific content through URLs directly.
- **Nested Routes:** Implements nested routes to create a hierarchical structure for components, offering flexibility and organization in building complex UI layouts.
- **Route Parameters:** Demonstrates how to use route parameters to handle dynamic content, enabling components to display data based on URL parameters.
- **404 Page:** Implements a custom 404 page for handling undefined routes, providing users with a user-friendly error page when navigating to non-existent routes.

## License

This project is licensed under the [Mozilla Public License 2.0](LICENSE.txt). You can find the full text of the license in the LICENSE.txt file.

## Youtube Demo:
https://youtu.be/S2m7-39QBp0
---



