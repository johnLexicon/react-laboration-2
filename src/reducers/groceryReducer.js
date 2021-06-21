import { v4 as uuidv4 } from 'uuid';

export const groceryReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_GROCERY': {
      const { title } = action.payload;
      const id = uuidv4();
      return { groceries: [...state.groceries, { id, title, ready: false }] };
    }
    case 'REMOVE_GROCERY': {
      const { id } = action.payload;
      return { groceries: state.groceries.filter((g) => g.id !== id) };
    }
    case 'TOGGLE_GROCERY': {
      const { id } = action.payload;
      const modifiedGroceries = state.groceries.map((g) => {
        if (g.id === id) {
          g.ready = !g.ready;
        }
        return g;
      });
      return { groceries: modifiedGroceries };
    }
    default:
      return state;
  }
};
