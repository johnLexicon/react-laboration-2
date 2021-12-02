import { v4 as uuidv4 } from 'uuid';
import { IGroceryState } from '../interfaces/IGroceryState';
import { IGroceryAction } from '../interfaces/IGroceryAction';
import { IGrocery } from '../interfaces/IGrocery';

export const groceryReducer = (
  state: IGroceryState,
  action: IGroceryAction
): IGroceryState => {
  switch (action.type) {
    case 'FETCH_GROCERIES': {
      const groceries: string | null = localStorage.getItem('groceries');
      if (!groceries) {
        return { ...state, groceries: [] };
      }
      return { ...state, groceries: JSON.parse(groceries) };
    }
    case 'ADD_GROCERY': {
      const { title } = action.payload;
      const id = uuidv4();
      const groceries = [...state.groceries, { id, title, ready: false }];
      localStorage.setItem('groceries', JSON.stringify(groceries));
      return { ...state, groceries };
    }
    case 'REMOVE_GROCERY': {
      const { id } = action.payload;
      const groceries = state.groceries.filter((g: IGrocery) => g.id !== id);
      localStorage.setItem('groceries', JSON.stringify(groceries));
      return { ...state, groceries };
    }
    case 'REMOVE_ALL': {
      localStorage.setItem('groceries', JSON.stringify([]));
      return { ...state, groceries: [] };
    }
    case 'TOGGLE_GROCERY': {
      const { id } = action.payload;
      const groceries = state.groceries.map((g) => {
        if (g.id === id) {
          g.ready = !g.ready;
        }
        return g;
      });
      localStorage.setItem('groceries', JSON.stringify(groceries));
      return { ...state, groceries };
    }
    case 'EDIT_GROCERY': {
      const { title } = action.payload;
      const editedGroceries = state.groceries.map((g: IGrocery) => {
        if (g.id === state.editedGroceryId) {
          g.title = title;
        }
        return g;
      });
      localStorage.setItem('groceries', JSON.stringify(editedGroceries));
      return { ...state, groceries: editedGroceries };
    }
    case 'SET_EDIT_GROCERY_ID': {
      const { id } = action.payload;
      return { ...state, editedGroceryId: id };
    }
    default:
      return state;
  }
};
