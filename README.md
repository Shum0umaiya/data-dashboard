# Web Development Project 6 - Brewery Explorer Dashboard Part 2

Submitted by: **Sumaiya Shumu**

This web app is an interactive brewery dashboard built with React that uses the Open Brewery DB API. Users can browse breweries across the United States, search and filter the data, explore interactive charts, and click any brewery to view a dedicated detail page with additional information such as address, phone number, website, and location.

Time spent: **8** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking on an item in the list view displays more details about it**
  - [x] Clicking on a brewery navigates to its own detail page
  - [x] Detail view displays additional information including address, phone number, postal code, website, and country
  - [x] The same sidebar is displayed in both the dashboard and detail views
  - [x] Sidebar remains visible during navigation

- [x] **Each detail view of an item has a direct, unique URL link to that item’s detail view page**
  - [x] Each brewery has its own unique route using React Router (`/brewery/:id`)
  - [x] URL changes when navigating to a brewery detail page

- [x] **The app includes at least two unique charts developed using the fetched data that tell an interesting story**
  - [x] Pie Chart showing the distribution of brewery types
  - [x] Bar Chart showing the states with the highest number of breweries
  - [x] Each visualization highlights a different aspect of the dataset

## Optional Features

- [x] The site's customized dashboard contains more content explaining the dataset
  - Added descriptive sections explaining what each chart represents
  - Added helpful descriptions for searching and filtering breweries

- [ ] The site allows users to toggle between different data visualizations

## Additional Features

- [x] Responsive modern dashboard design
- [x] Dynamic summary statistics
- [x] Loading indicator while fetching API data
- [x] Error handling for failed API requests
- [x] Search and dropdown filters work simultaneously
- [x] Brewery type badges
- [x] Responsive sidebar navigation
- [x] Clickable external brewery website links
- [x] Dashboard updates dynamically based on filters
- [x] Clean component-based React architecture

## Video Walkthrough

Here's a walkthrough of implemented user stories:

<img src="./walkthrough.gif" title="Video Walkthrough" width="700" alt="Video Walkthrough" />

GIF created with **ScreenToGif**

## Notes

One of the biggest challenges in this project was refactoring the original dashboard into multiple reusable React components while introducing React Router for navigation. Implementing dynamic routes with `useParams`, integrating Recharts for data visualizations, and ensuring the dashboard remained responsive required careful planning. Error handling and component organization also improved significantly compared to the first version of the project.

## License

Copyright 2026 Sumaiya Shumu

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.