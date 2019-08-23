//Dependences
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';

//Files
import HomePage from './HomePage';
import MenuPage from './MenuPage';
import EventsPage from './EventsPage';
import GalleryPage from './GalleryPage';
import ContactPage from './ContactPage';
import NavBar from './header-components/NavBar';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div>
            <Route name="home" exact path="/" component={HomePage} />
            <Route name="menu" exact path="/MenuPage" component={MenuPage} />
            <Route name="events" exact path="/EventsPage" component={EventsPage} />
            <Route name="gallery" exact path="/GalleryPage" component={GalleryPage} />
            <Route name="contact" exact path="/ContactPage" component={ContactPage} />
          </div>
        </div>
      </Router>
    )
  }
}


export default App;