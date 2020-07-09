import './index.css';

import React from 'react';
import { render } from 'react-dom';
import initialData from './lessonsComponents/initial-data';

import App from './lessonsComponents/App.jsx';

render(<App />, document.querySelector('#app'));
