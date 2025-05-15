import { Component, OnInit, inject, signal } from '@angular/core';
import { Store } from '@ngrx/store';
import { UsersActions, UsersSelectors } from '../../store/users';
import { User } from '../../store/users/users.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent implements OnInit{
  protected isEditing = signal(false)

  private store = inject(Store);

  protected users$ = this.store.select(UsersSelectors.selectAllUsers);

  protected userForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl('')
  })

  ngOnInit(): void {
    this.store.dispatch(UsersActions.loadUsers())
  }

  onEdit(user: User) {
    console.log('onEdit', user)
  }
}
