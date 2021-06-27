import { useContext, useState, useEffect } from 'react';
import { GroceryContext } from '../contexts/GroceryContext';

const Header = () => {
  const { state, dispatch } = useContext(GroceryContext);
  const [undoneCount, setUndoneCount] = useState(0);

  useEffect(() => {
    if (!state.groceries) return;
    const count = state.groceries.filter((g) => !g.ready).length;
    setUndoneCount(count);
  }, [state.groceries]);

  return (
    <div id="header" className="bg-success text-white my-5 p-2 text-center rounded shadow">
      <p className="display-1">Grocery List</p>
      <p className="display-5">{undoneCount} {undoneCount === 1 ? 'grocery' : 'groceries'} left</p>
      <div><button className="btn btn-secondary" disabled={undoneCount === 0} onClick={() => {dispatch({type: 'REMOVE_ALL'})}}>Clear list</button></div>
    </div>
  );
};

export default Header;
