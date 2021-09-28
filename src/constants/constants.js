export const projects = [
  {
    title: 'videogames-app',
    description: "The project consists of calling an API (https://rawg.io/apidocs) to show an initial set of 80 videogames on the /home page to see a variety of items and click over one and to access the details about the platforms, genres, name, released date, etc.The app has a database built with Sequelize and Postgres where the client can add new games by filling up a form. For the front-end was developed using React and Redux. ",
    image: '/images/videogame-app.png',
    tags: ['Sequelize', 'Postgres', "React", "Express"],
    source: 'https://github.com/webDesignMumeishon/videogames-main',
    visit: 'https://videogames-app-pi.netlify.app/',
    id: 0,
  },
  {
    title: 'find-henry-app',
    description: "The app consists of a map where all the registered and verified users can be seen in the location that was selected by them. The app was meant to have all the henry bootcamp’s graduates connected across the world. The back-end was developed using MongoDB & Mongoose for the database, and Express. React.js for client side. Also, the site has its own admin page. A login system was implemented together with a reset password.",
    image: '/images/find-henry-app.png',
    tags: ['MongoDB', 'Mongoose', "React", "Express"],
    source: 'https://github.com/webDesignMumeishon/red-henry',
    visit: 'https://find-closest-henry.netlify.app/',
    id: 1,
  },
  {
    title: 'Movie App',
    description: "The project consists of calling an API (http://www.omdbapi.com/). The user types the movie in the search bar, after clicking the API is called and a set of movies in the main page are shown with details displayed, to see further details the user have to click over the name. Every single movie can be added to the favorite sections.",
      image: '/images/movie-app.png',
      tags: ['React', 'Redux', "AJAX"],
    source: 'https://github.com/webDesignMumeishon/movie-app',
    visit: 'https://movie-app-mumeishon.netlify.app/',
    id: 2,
  },
  {
    title: 'books-counter-app',
    description: "This app was built behind the idea of the data structure STACK. A stack is an abstract data type that holds an ordered, linear sequence of items. In contrast to a queue, a stack is a last in, first out (LIFO) structure. It was developed only using plain vanilla JavaScript, HTML and CSS.",
    image: '/images/book-stack.png',
    tags: ['Javascript', 'HTML', 'CSS'],
    source: 'https://github.com/webDesignMumeishon/books-counter-app',
    visit: 'https://webdesignmumeishon.github.io/books-counter-app/',
    id: 3,
  },
  {
    title: 'weather-app',
    description: "The app was developed during the bootcamp course. It was the first project built after learning React.The app consists in calling an external API that provides information about the current weather of any city in the world. The cities get accumulated in several cards in the cards section.The technologies used are React.js, JavaScript, HTML and CS",
    image: '/images/weather-app.png',
    tags: ['Javascript', 'HTML', 'CSS', 'React'],
    source: 'https://github.com/webDesignMumeishon/weather-app',
    visit: 'https://weather-app-tomasmacchi.netlify.app/',
    id: 4,
  },
];

export const TimeLineData = [
  { year: 2020, text: 'Started my journey', },
  { year: 2021, text: 'Got into a Henry Bootcamp', },
  { year: 2021, text: 'Currently looking for my first job as a developer', },
];