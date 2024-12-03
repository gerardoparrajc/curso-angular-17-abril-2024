import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { TodoService } from "../../services/todo.service";
import { EMPTY, catchError, exhaustMap, map } from "rxjs";

@Injectable()
export class TodosEffects {
  loadTasks$ = createEffect( () => {
    return this.actions$.pipe(
      ofType('[Todo List] Cargar la lista de tareas'),
      exhaustMap(() =>
        this.todoService
          .getTasks()
          .pipe(
            map((items) => ({ type: '[Todo List] Almacenar tareas', items })),
            catchError(() => EMPTY)
          )
      )
    );
  })

  constructor(private actions$: Actions, private todoService: TodoService) {}

}
