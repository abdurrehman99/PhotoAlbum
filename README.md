# Photo Album App

## Overview

App conatains two screens

- Home Screen
  This screen contains List of Photo Albums.Each photo albums has info about owner.There is also filter modal by which you can filter album on the basis on ownername.The photoAlbum data is coming from a rest API [getPhotoAlbumdata](https://hitboxing.herokuapp.com/getAlbumdata).
- Album View Screen
  This screen is Screen will display selected image in full width at the top of screen & thumbnails of other images at the bottom.You can slide through images using swipe buttons or select any image to display by pressing thumbnail of that image.

## Folder Structure

<pre>
src/
├── components
│   ├── AlbumCard
│   │   ├── index.js
│   │   └── styles.js
│   ├── FilterView
│   │   ├── index.js
│   │   └── styles.js
│   ├── Header
│   │   ├── index.js
│   │   └── styles.js
│   ├── ImageThumbnail
│   │   ├── index.js
│   │   └── styles.js
│   ├── index.js
│   └── SwipeButton
│   └── index.js
├── navigation
│   ├── index.js
│   └── StackNavigation.js
├── redux
│   ├── actions
│   │   └── AlbumActions.js
│   ├── reducers
│   │   ├── AlbumsReducers.js
│   │   └── index.js
│   └── store.js
├── screens
│   ├── AlbumView
│   │   ├── index.js
│   │   └── styles.js
│   ├── Home
│   │   ├── index.js
│   │   └── styles.js
│   └── index.js  
└── utils
└── App.js
</pre>

## Running app in development environment

Clone the repo [PhotoAlbum](https://github.com/abdurrehman99/PhotoAlbum) using https.
`git clone https://github.com/abdurrehman99/PhotoAlbum`

cd into this project directory.
`cd PhotoAlbum`

Use [npm](https://www.npmjs.com/) to install dependencies.
`npm install`

Use the following command to run app on Android devices.
`npx react-native run-android`

To Run test Suits
`npm test`
