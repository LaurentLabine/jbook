import produce from 'immer';
import { ActionType } from '../action-types';
import { Cell } from '../cell';
import { Action } from '../actions';

interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Cell;
  };
}

const initialState: CellsState = {
  loading: false,
  error: null,
  order: [],
  data: {},
};

const reducer = produce(
  (state: CellsState = initialState, action: Action): CellsState | void => {
    switch (action.type) {
      case ActionType.UPDATE_CELL:
        const { id, content } = action.payload;

        state.data[id].content = content;
        return;
      case ActionType.DELETE_CELL:
        return state;
      case ActionType.MOVE_CELL:
        return state;
      case ActionType.INSERT_CELL_BEFORE:
        return state;
      default:
        return state;
    }
  }
);

export default reducer;
