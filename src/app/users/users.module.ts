import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [UsersListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    UsersListComponent
  ]
})
export class UsersModule { }
