// Package Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container} from 'reactstrap';

// Local Dependences
import HomePage from './home-page';
import MenuPage from './menu-page';
import EventsPage from './events-page';
import GalleryPage from './gallery-page';
import ContactPage from './contact-page';
import AdminPage from './admin-page';
import AdminMenuPage from './admin-menu-page';
import LoginPage from './login-page';
import RegisterPage from './register-page';
import ErrorPage from './error-page';
import NavBar from './navbar/navbar';
import Footer from './footer/footer';


class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <div>
            <NavBar />
            <div>
              <Switch>
              <Route name="home" exact path="/" component={HomePage} />
              <Route name="menu" exact path="/menu-page" component={MenuPage} />
              <Route name="events" exact path="/events-page" component={EventsPage} />
              <Route name="gallery" exact path="/gallery-page" component={GalleryPage} />
              <Route name="contact" exact path="/contact-page" component={ContactPage} />
              <Route name="admin" exact path="/admin-page" component={AdminPage} />
              <Route name="admin-menu" exact path="/admin-menu-page" component={AdminMenuPage} />
              <Route name="login" exact path="/login-page" component={LoginPage} />
              <Route name="register" exact path="/register-page" component={RegisterPage} />
              <Route name="error" status={404} component={ErrorPage} />
              </Switch>
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


export default App;