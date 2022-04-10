# MyReads Project

This project is the final assessment project for Udacity's React Fundamentals course. The project uses React to build the "MyReads" web application. This app allows users to manage and track different books and their own reading plans and habits. Users can shift books between different "shelves" based on whether they are currently reading, intend to read, or already read a particular book. Users can also use a search feature to find and add additional books to the three shelves in the main app. 

The frontend part of the project is built using React.js. It makes extensive use of composability by separating core responsibilities into separate, reusable components. An overview of the main app structure is provided below.

## Installation and Use

The application was created with create-react-app. Users need to have node.js/npm installed. Installation only requires running "npm install" to install required dependencies. The project can then be launched by running "npm start".

## App structure (main files)
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

