# Arc Touch
Front-end ( React.JS ) and back-end ( Ruby on Rails / API ) for Arc Touch.

### Functional Requirements

It's expected that user will be able to:
- See a list of upcoming movies - including the movies' name, poster or backdrop image,
genre and release date. The list should not be limited to only the first 20 movies as
returned by the API.
- Select a specific movie to see its details (name, poster image, genre, overview and
release date).
- Search for movies by entering a partial or full movie name.

### Installation

Application requires:
- [Node.js](https://nodejs.org/) v4+
- [React.JS](https://reactjs.org/)
- [Ruby](https://www.ruby-lang.org) v2.6.3
- [Rails](https://rubyonrails.org/) v5+
- [MySQL](https://www.mysql.com/) v8.0.19

Install the dependencies and start the back-end.

```sh
$ cd arc_touch_api
$ bundle install
$ rails db:create ENV=development
$ rails db:migrate ENV=development
$ rails s -p 3333
```

Install the dependencies and start the front-end.

```sh
$ cd arc_touch_frontend
$ yarn install
$ yarn start
```

### Demo:
https://arc-touch-frontend.now.sh/
