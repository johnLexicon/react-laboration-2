import { useContext, useState, useEffect } from 'react';
import { GroceryContext } from '../contexts/GroceryContext';

const Header = () => {
  const { groceries } = useContext(GroceryContext);
  const [undoneCount, setUndoneCount] = useState(0);

  useEffect(() => {
    if (!groceries) return;
    const count = groceries.filter((g) => !g.ready).length;
    setUndoneCount(count);
  }, [groceries]);

  return (
    <div id="header" className="bg-success text-white my-5 text-center">
      <p className="display-1">Grocery List</p>
      <p className="display-5">{undoneCount} groceries left</p>
    </div>
  );
};

export default Header;
