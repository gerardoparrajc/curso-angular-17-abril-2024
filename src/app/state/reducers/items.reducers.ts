import { createReducer, on } from "@ngrx/store";
import { Todo } from "../../models/todo";
import { getItems, itemAdded, itemMarked, itemRemoved, itemsLoaded } from "../actions/items.actions";

export const initialState: Todo[] = [];

export const todoReducers = createReducer(
  initialState,
  on(itemAdded, (state, { item }) => [...state, item]),
  on(itemRemoved, (state, { id }) => state.filter((item) => item.id !== id )),
  on(itemMarked, (state, { id }) => state.map((item) => item.id === id ? {...item, hecho: true} : item )),
  on(itemsLoaded, (state, { items }) => [...items]),
  on(getItems, (state) => state)
)
