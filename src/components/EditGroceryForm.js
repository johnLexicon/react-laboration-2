import React, {useContext, useRef} from 'react'
import {GroceryContext} from '../contexts/GroceryContext';

const EditGroceryForm = () => {
  const {dispatch} = useContext(GroceryContext);
  const inputTitle = useRef(null);
  const editGrocery = () => {
    const title = inputTitle.current.value;
    if(!title){
      return;
    }
    dispatch({type: 'EDIT_GROCERY', payload: {title}})
    inputTitle.current.value = "";
  }
  return (
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
            onClick={() => {inputTitle.current.value = ""}}
          ></button>
        </div>
        <div className="modal-body">
          <input
            className="form-control"
            type="text"
            name="groceryTitle"
            id="groceryTitle"
            ref={inputTitle}
          />
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
            onClick={() => {inputTitle.current.value = ""}}
          >
            Close
          </button>
          <button data-bs-dismiss="modal" type="button" className="btn btn-secondary" onClick={editGrocery}>
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default EditGroceryForm
