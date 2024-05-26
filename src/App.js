import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Products from './product';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register" element={Register} />
          <Route path="/login" element={Login} />
          <Route path="/products" element={Products} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
