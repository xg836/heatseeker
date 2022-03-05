import React from 'react';
import ReactDOM from 'react-dom';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import App from './App';

ReactDOM.render(
    <AmplifyProvider>
      <App />
    </AmplifyProvider>,
  document.getElementById('root')
);
