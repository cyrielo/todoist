import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './pages/App';
import Store from './store';
import './styles/main.scss';

render(<Provider store= { Store } ><App /></Provider>, document.getElementById('app'));