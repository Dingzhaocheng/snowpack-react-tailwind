import React, { useState, useEffect } from 'react';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Nav from '@views/Nav';
import Login from '@views/Login';
import routes from '@/router/index';

import './App.css';

interface AppProps {}

function App({}: AppProps) {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <HashRouter>{renderRoutes(routes)}</HashRouter>
    </div>
  );
}

export default App;
