import { useContext } from 'react';
import { GroceryContext } from '../contexts/GroceryContext';

const GroceryDetails = ({ grocery }) => {
  const { removeGrocery, toggleReady } = useContext(GroceryContext);
  return (
    <li className="list-group-item list-group-item-success border-0 p-3 mb-3 h3">
      <div className="w-100 row">
        <div
          className={
            grocery.ready
              ? 'col-10 grocery-title marked'
              : 'col-10 grocery-title'
          }
          onClick={() => {
            toggleReady(grocery.id);
          }}
        >
          {grocery.title}
        </div>
        <div className="col-2">
          <button
            onClick={() => removeGrocery(grocery.id)}
            className="btn btn-sm btn-danger"
          >
            X
          </button>
        </div>
      </div>
    </li>
  );
};

export default GroceryDetails;
