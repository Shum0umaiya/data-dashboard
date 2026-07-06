# Web Development Project 5 - **Brewery Explorer Dashboard**

Submitted by: **Sumaiya Shumu**

This web app displays brewery information from the Open Brewery DB API in an interactive dashboard. Users can browse breweries, search by name, filter by brewery type, and view summary statistics about the dataset.

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

* [x] **The site has a dashboard displaying a list of data fetched using an API call**

  * [x] The dashboard displays at least 10 unique items, one per row
  * [x] Each row includes multiple features such as brewery name, location, and brewery type
* [x] **`useEffect` React hook and `async`/`await` are used**
* [x] **The app dashboard includes at least three summary statistics about the data**

  * [x] Total number of breweries displayed
  * [x] Number of unique states represented
  * [x] Most common brewery type
* [x] **A search bar allows the user to search for an item in the fetched data**

  * [x] The search bar correctly filters breweries by name
  * [x] Results update dynamically as the user types
* [x] **An additional filter allows the user to restrict displayed items by specified categories**

  * [x] A dropdown filters breweries by brewery type
  * [x] The filter uses a different attribute than the search bar
  * [x] Results update dynamically when the selected filter changes

The following **optional** features are implemented:

* [x] Multiple filters can be applied simultaneously
* [x] Filters use different input types

  * Text input for searching
  * Dropdown menu for brewery type
* [ ] The user can enter specific bounds for filter values

The following **additional** features are implemented:

* [x] Modern dark-themed dashboard design
* [x] Responsive card layout
* [x] Styled statistic cards
* [x] Brewery type badges
* [x] Responsive search and filter controls

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src="walkthrough.gif" title="Video Walkthrough" width="700" alt="Video Walkthrough" />

GIF created with **ScreenToGif**

## Notes

One of the biggest challenges was working with data from the API and calculating summary statistics while ensuring the search and filter updated the dashboard correctly. Styling the dashboard to resemble a modern analytics interface while keeping the code organized was also an important part of the project.

## License

Copyright 2026 Sumaiya Shumu

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
