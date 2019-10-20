// Package Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container} from 'reactstrap';

// Local Dependences
import HomePage from './home-page';
import MenuPage from './menu-page';
import EventsPage from './events-page';
import GalleryPage from './gallery-page';
import ContactPage from './contact-page';
import ErrorPage from './error-page';
import AdminPage from './admin-page';
import NavBar from './navbar-components/navbar';
import Footer from './footer-components/footer';


// The app page holds all the components that are used throughout 
// the app (nav bar, footer, router links, container).


class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <div>
            <NavBar />
            <div>
              <Route name="home" exact path="/" component={HomePage} />
              <Route name="menu" exact path="/menu-page" component={MenuPage} />
              <Route name="events" exact path="/events-page" component={EventsPage} />
              <Route name="gallery" exact path="/gallery-page" component={GalleryPage} />
              <Route name="contact" exact path="/contact-page" component={ContactPage} />
              <Route name="admin" exact path="/admin-page" component={AdminPage} />
              <Route name="error" exact path="/error-page" component={ErrorPage} />
            </div>
          </div>
        </Router>
        <div>
          <Footer />
        </div>
      </Container>
    )
  };
};


ReactDOM.render(<App />, document.querySelector('#root'));


export default App;