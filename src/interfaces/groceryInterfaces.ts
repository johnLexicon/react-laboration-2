import GroceryActionTypes from '../enums/groceryActionTypes';

type Payload = {
  id?: string;
  title?: string;
};

export interface IGrocery {
  id: string;
  title: string | undefined;
  ready: boolean;
}

export interface IGroceryState {
  groceries: IGrocery[];
  editedGroceryId: string | null | undefined;
}

export interface IGroceryAction {
  type: GroceryActionTypes;
  payload: Payload;
}

export interface IGroceryContext {
  state?: IGroceryState;
  dispatch?: React.Dispatch<IGroceryAction>;
}
