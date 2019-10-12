//Dependences
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';

//Files
import HomePage from './HomePage';
import MenuPage from './MenuPage';
import EventsPage from './EventsPage';
import GalleryPage from './GalleryPage';
import ContactPage from './ContactPage';
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
              <Route name="menu" exact path="/MenuPage" component={MenuPage} />
              <Route name="events" exact path="/EventsPage" component={EventsPage} />
              <Route name="gallery" exact path="/GalleryPage" component={GalleryPage} />
              <Route name="contact" exact path="/ContactPage" component={ContactPage} />
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