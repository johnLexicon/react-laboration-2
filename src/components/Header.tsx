import { useContext, useState, useEffect } from 'react';
import { GroceryContext } from '../contexts/GroceryContext';
import GroceryActionTypes from '../enums/groceryActionTypes';
import { IGrocery } from '../interfaces/groceryInterfaces';

const Header: React.FC = () => {
  const { state, dispatch } = useContext(GroceryContext);
  const [undoneCount, setUndoneCount] = useState<number>(0);

  useEffect(() => {
    if (!state.groceries) return;
    const count = state.groceries.filter((g: IGrocery) => !g.ready).length;
    setUndoneCount(count);
  }, [state.groceries]);

  return (
    <div
      id="header"
      className="bg-success text-white my-5 p-2 text-center rounded shadow"
    >
      <p className="display-1">Grocery List</p>
      <p className="display-5">
        <span className={undoneCount > 0 ? 'text-danger' : ''}>
          {undoneCount}
        </span>{' '}
        {undoneCount === 1 ? 'grocery' : 'groceries'} left
      </p>
      <div>
        <button
          className="btn btn-secondary"
          onClick={() => {
            dispatch({ type: GroceryActionTypes.REMOVE_ALL, payload: {} });
          }}
        >
          Clear list
        </button>
      </div>
    </div>
  );
};

export default Header;
