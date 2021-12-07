import { useContext, useState, useEffect } from 'react';
import { GroceryContext } from '../contexts/GroceryContext';
import GroceryActionTypes from '../enums/groceryActionTypes';
import { IGrocery } from './../interfaces/groceryInterfaces';

const EditGroceryForm: React.FC = () => {
  const { state, dispatch } = useContext(GroceryContext);
  const [title, setTitle] = useState<string>('');

  useEffect(() => {
    const currentGrocery = state.groceries.find(
      (g: IGrocery) => g.id === state.editedGroceryId
    );
    if (!currentGrocery) return;
    const currentTitle = currentGrocery!.title;
    setTitle(currentTitle ? currentTitle : '');
  }, [state.editedGroceryId, state.groceries]);

  const editGrocery = () => {
    dispatch({ type: GroceryActionTypes.EDIT_GROCERY, payload: { title } });
    setTitle('');
  };
  return (
    <div
      className="modal fade"
      id="editGroceryModal"
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
              onClick={() => {
                setTitle('');
              }}
            ></button>
          </div>
          <div className="modal-body">
            <input
              className="form-control"
              type="text"
              name="groceryTitle"
              id="groceryTitle"
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => {
                setTitle('');
              }}
            >
              Close
            </button>
            <button
              data-bs-dismiss="modal"
              type="button"
              className="btn btn-secondary"
              disabled={!title}
              onClick={editGrocery}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditGroceryForm;
