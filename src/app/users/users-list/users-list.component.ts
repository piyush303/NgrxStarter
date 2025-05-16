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
  protected selectedUserId = signal<number | null>(null)

  private store = inject(Store);

  protected users$ = this.store.select(UsersSelectors.selectAllUsers);
  protected id$ = this.store.select(UsersSelectors.selectCurrentUserId);

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
    console.log('onEdit', user);
    this.selectedUserId.set(user.id);


    this.store.dispatch(UsersActions.updateUser({update: {id: user.id, changes: {...user}}}))
  }

  onSave() {
    console.log(this.userForm.value)
  }
}
