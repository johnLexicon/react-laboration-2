import { useContext } from 'react';
import { GroceryContext } from '../contexts/GroceryContext';

const GroceryDetails = ({ grocery }) => {
  const { dispatch } = useContext(GroceryContext);
  return (
    <li className="list-group-item list-group-item-success p-3 mb-3 h3 rounded shadow">
      <div className="row align-items-center">
        <div
          className={
            grocery.ready ? 'col-6 grocery-title marked' : 'col-6 grocery-title'
          }
          onClick={() => {
            dispatch({ type: 'TOGGLE_GROCERY', payload: { id: grocery.id } });
          }}
        >
          {grocery.title}
        </div>
        <div className="col-6 text-end">
          <button
            onClick={() => {
              dispatch({
                type: 'SET_EDIT_GROCERY_ID',
                payload: { id: grocery.id },
              });
            }}
            className="btn btn-success me-3"
            data-bs-toggle="modal"
            data-bs-target="#editGroceryModal"
          >
            Edit
          </button>
          <button
            onClick={() =>
              dispatch({ type: 'REMOVE_GROCERY', payload: { id: grocery.id } })
            }
            className="btn btn-danger"
          >
            X
          </button>
        </div>
      </div>
    </li>
  );
};

export default GroceryDetails;
