import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import * as serviceWorker from './serviceWorker';

import store from './store/store';

window.store = store;

ReactDOM.render(<Provider store= {store}> <App /> </Provider>, document.getElementById('root'));


serviceWorker.unregister();
