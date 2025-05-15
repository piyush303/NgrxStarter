import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsersActions, UsersSelectors } from '../../store/users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit{
  private store = inject(Store);

  protected users$ = this.store.select(UsersSelectors.selectAllUsers)

  ngOnInit(): void {
    this.store.dispatch(UsersActions.loadUsers())
  }
}
