//Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';

//Files
import HomePage from './home-page';
import MenuPage from './menu-page';
import EventsPage from './events-page';
import GalleryPage from './gallery-page';
import ContactPage from './contact-page';
import NavBar from './navbar-components/navbar';
import Footer from './footer-components/footer';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <NavBar />
            <div>
              <Route name="home" exact path="/" component={HomePage} />
              <Route name="menu" exact path="/menu-page" component={MenuPage} />
              <Route name="events" exact path="/events-page" component={EventsPage} />
              <Route name="gallery" exact path="/gallery-page" component={GalleryPage} />
              <Route name="contact" exact path="/contact-page" component={ContactPage} />
            </div>
          </div>
        </Router>
        <div>
          <Footer />
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />,document.querySelector('#root'));

export default App;