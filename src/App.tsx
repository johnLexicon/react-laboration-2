import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { GroceryContext } from './contexts/GroceryContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';

function App() {
  const { dispatch }: any = useContext(GroceryContext);
  useEffect(() => {
    dispatch({ type: 'FETCH_GROCERIES' });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container-md container-fluid">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
