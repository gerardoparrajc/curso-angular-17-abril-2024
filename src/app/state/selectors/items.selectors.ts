import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectorTodosFeature =(state: AppState) => state.todos;

export const selectTodos = createSelector(
  selectorTodosFeature,
  (state) => state
);
