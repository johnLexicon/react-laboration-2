import { GroceryContext } from '../contexts/GroceryContext';
import { useContext, useState } from 'react';

const NewGroceryForm = () => {
  const { dispatch } = useContext(GroceryContext);
  const [title, setTitle] = useState('');

  const onAddGrocery = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_GROCERY', payload: { title } });
    setTitle('');
  };
  return (
    <form onSubmit={onAddGrocery}>
      <div className="form-group mb-3">
        <label className="form-label text-light h3" htmlFor="newGrocery">
          Grocery
        </label>
        <input
          required
          id="newGrocery"
          value={title}
          className="form-control bg-success text-light h3"
          type="text"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
    </form>
  );
};

export default NewGroceryForm;
