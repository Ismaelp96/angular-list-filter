import { Component } from '@angular/core';
import { IUser } from '../../interfaces/user/user.interface';
import { UsersList } from '../../data/users-list';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  displayedColumns: string[] = ['name', 'date', 'status'];
  usersList: IUser[] = UsersList;

  onUserSlected(user: IUser) {
    console.log('user', user);
  }
}
