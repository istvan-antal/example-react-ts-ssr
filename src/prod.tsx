import * as React from 'react';
import { hydrate } from 'react-dom';
import App from './App';

hydrate(<App name={'world'} />, document.getElementById('app'));