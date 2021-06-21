import { useContext, useState, useEffect } from 'react';
import { GroceryContext } from '../contexts/GroceryContext';

const Header = () => {
  const { state } = useContext(GroceryContext);
  const [undoneCount, setUndoneCount] = useState(0);

  useEffect(() => {
    if (!state.groceries) return;
    const count = state.groceries.filter((g) => !g.ready).length;
    setUndoneCount(count);
  }, [state.groceries]);

  return (
    <div id="header" className="bg-success text-white my-5 text-center">
      <p className="display-1">Grocery List</p>
      <p className="display-5">{undoneCount} groceries left</p>
    </div>
  );
};

export default Header;
