import React from 'react';
import { Dashboard, Login,PrivateRoute, Error, AuthWrapper } from './pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <AuthWrapper>
    <BrowserRouter>
      <Switch>
        <PrivateRoute path='/' exact={true}>
          <Dashboard />
        </PrivateRoute>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='*'>
          <Error />
        </Route>
      </Switch>
    </BrowserRouter>
    </AuthWrapper>
  )
}

export default App;