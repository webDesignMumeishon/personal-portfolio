export const projects = [
  {
    title: 'find-henry-app',
    description: "The app consists in a map where all the registered and verified users can be seen in the location that was selected by them. The app was meant to have all the henry bootcamp’s graduates connected across the world. It was developed using MongoDB and mongoose for the database (no-sql), express for the server side and React.js for the front-end. Also, the site has its own admin page, where the administrator has the power to add and delete users. A login system was implemented together with a reset password, all done using jwtoken",
    image: '/images/find-henry-app.png',
    tags: ['MongoDB', 'Mongoose', "React", "Express"],
    source: 'https://github.com/webDesignMumeishon/red-henry',
    visit: 'https://find-closest-henry.netlify.app/',
    id: 0,
  },
  {
    title: 'Movie App',
    description: "The project consists of calling an API (http://www.omdbapi.com/). The user types the movie in the search bar, after clicking the API is called and a set of movies in the main page are shown with details displayed, to see further details the user have to click over the name. Every single movie can be added to the favorite sections.",
      image: '/images/movie-app.png',
      tags: ['React', 'Redux', "AJAX"],
    source: 'https://github.com/webDesignMumeishon/movie-app',
    visit: 'https://movie-app-mumeishon.netlify.app/',
    id: 1,
  },
  {
    title: 'books-counter-app',
    description: "This app was built behind the idea of the data structure STACK. A stack is an abstract data type that holds an ordered, linear sequence of items. In contrast to a queue, a stack is a last in, first out (LIFO) structure. It was developed only using plain vanilla JavaScript, HTML and CSS.",
    image: '/images/book-stack.png',
    tags: ['Javascript', 'HTML', 'CSS'],
    source: 'https://github.com/webDesignMumeishon/books-counter-app',
    visit: 'https://webdesignmumeishon.github.io/books-counter-app/',
    id: 2,
  },
];

export const TimeLineData = [
  { year: 2020, text: 'Started my journey', },
  { year: 2021, text: 'Got into a Henry Bootcamp', },
  { year: 2021, text: 'Currently looking for my first job as a developer', },
];