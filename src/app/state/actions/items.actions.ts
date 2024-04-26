import { createAction, props } from "@ngrx/store";
import { Todo } from "../../models/todo";

export const itemAdded = createAction(
  '[Todo List] Añadir tarea',
  props< { item: Todo }>()
);

export const itemRemoved = createAction(
  '[Todo List] Eliminar tarea',
  props<{ id: number }>()
);

export const itemsLoaded = createAction(
  '[Todo List] Almacenar tareas',
  props<{ items: Todo[]}>()
);

export const itemMarked = createAction(
  '[Todo List] Marcar una tarea como hecha',
  props<{ id: number }>()
)

export const getItems = createAction(
  '[Todo List] Cargar la lista de tareas'
)
