import { useContext } from 'react';
import { GroceryContext } from '../contexts/GroceryContext';

const GroceryDetails = ({ grocery }) => {
  const { dispatch } = useContext(GroceryContext);
  return (
    <li className="list-group-item list-group-item-success border-0 p-3 mb-3 h3">
      <div className="w-100 row">
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
        <div className="col-6">
          <button
            onClick={() => {}}
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
            className="btn btn-danger me-3"
          >
            X
          </button>

          <div
            className="modal fade"
            id="editGroceryModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content bg-success text-light">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Edit Grocery
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <input
                    className="form-control"
                    type="text"
                    name="groceryTitle"
                    id="groceryTitle"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-secondary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default GroceryDetails;
