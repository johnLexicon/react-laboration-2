import { GroceryContext } from '../contexts/GroceryContext';
import { useContext, useState } from 'react';
import GroceryActionTypes from '../enums/groceryActionTypes';

const NewGroceryForm: React.FC = () => {
  const { dispatch } = useContext(GroceryContext);
  const [title, setTitle] = useState<string>('');

  const onAddGrocery = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: GroceryActionTypes.ADD_GROCERY, payload: { title } });
    setTitle('');
  };
  return (
    <form onSubmit={onAddGrocery}>
      <div className="form-group mb-3">
        <label className="form-label text-light h5" htmlFor="newGrocery">
          Grocery Name:
        </label>
        <input
          required
          id="newGrocery"
          value={title}
          className="form-control bg-success text-light h3"
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          }}
        />
      </div>
    </form>
  );
};

export default NewGroceryForm;
