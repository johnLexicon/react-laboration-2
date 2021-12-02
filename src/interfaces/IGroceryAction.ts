type Payload = {
  id?: string;
  title?: string;
};

export interface IGroceryAction {
  type: string;
  payload: Payload;
}
