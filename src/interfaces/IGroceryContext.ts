import { IGroceryState } from './IGroceryState';
import { IGroceryAction } from './IGroceryAction';

export interface IGroceryContext {
  state?: IGroceryState;
  dispatch?: React.Dispatch<IGroceryAction>;
}
