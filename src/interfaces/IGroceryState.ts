import { IGrocery } from './IGrocery';

export interface IGroceryState {
  groceries: IGrocery[];
  editedGroceryId: string | null | undefined;
}
