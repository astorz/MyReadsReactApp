# MyReads Project

This project is the final assessment project for Udacity's React Fundamentals course. The project uses React to build the "MyReads" web application. This app allows users to manage and track different books and their own reading plans and habits. Users can shift books between different "shelves" based on whether they are currently reading, intend to read, or already read a particular book. Users can also use a search feature to find and add additional books to the three shelves in the main app. 

The frontend part of the project is built using React.js. It makes extensive use of composability by separating core responsibilities into separate, reusable components. An overview of the main app structure is provided below.

## Installation and Use

The application was created with create-react-app. Users need to have node.js/npm installed. Installation only requires running "npm install" to install required dependencies. The project can then be launched by running "npm start".

## App structure (main files)
```bash
── App #stateful component implementing routes
  └──BooksList #the 'Main' app page
    └── BookShelf #reusable shelf component 
      └── Book #individual book item
        └── BookShelfChanger #control to see and change the shelf 
  └── SearchBooks #separate page to search for and add books
    └── Book
      └── BookShelfChanger
```