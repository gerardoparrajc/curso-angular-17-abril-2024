import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { getItems } from './state/actions/items.actions';
import { Observable } from 'rxjs';
import { Todo } from './models/todo';
import { selectTodos } from './state/selectors/items.selectors';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  items$: Observable<Todo[]> = new Observable();


  constructor(private store: Store) {}

  ngOnInit(): void {
    this.items$ = this.store.select(selectTodos)
      this.store.dispatch(getItems());
  }

}
