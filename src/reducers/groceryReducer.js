import { v4 as uuidv4 } from 'uuid';

export const groceryReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_GROCERIES': {
      const groceries = localStorage.getItem('groceries');
      if (!groceries) {
        return { groceries: [] };
      }
      return { groceries: JSON.parse(groceries) };
    }
    case 'ADD_GROCERY': {
      const { title } = action.payload;
      const id = uuidv4();
      const groceries = [...state.groceries, { id, title, ready: false }];
      localStorage.setItem('groceries', JSON.stringify(groceries));
      return { groceries };
    }
    case 'REMOVE_GROCERY': {
      const { id } = action.payload;
      const groceries = state.groceries.filter((g) => g.id !== id);
      localStorage.setItem('groceries', JSON.stringify(groceries));
      return { groceries };
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
      return { groceries };
    }
    default:
      return state;
  }
};