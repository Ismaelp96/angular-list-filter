import { Component, OnInit } from '@angular/core';

import { IUser } from './interfaces/user/user.interface';
import { UsersList } from './data/users-list';
import { IfilterOptions } from './interfaces/filter-options.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  usersList: IUser[] = [];
  userSelected: IUser = {} as IUser;
  usersListFiltered: IUser[] = [];
  showUserDetails: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.usersList = UsersList;
      this.usersListFiltered = this.usersList;
    }, 1);
  }

  onUserSelected(user: IUser) {
    this.userSelected = user;
    this.showUserDetails = true;
  }

  onFilter(filterOptions: IfilterOptions) {
    console.log(filterOptions);
    this.usersListFiltered = this.filterUsersList(
      filterOptions,
      this.usersList
    );
  }

  filterUsersList(filterOptions: IfilterOptions, usersList: IUser[]): IUser[] {
    let filteredList: IUser[] = [];

    filteredList = this.filterUsersListByName(filterOptions.name, usersList);

    return filteredList;
  }

  filterUsersListByName(name: string | null, usersList: IUser[]): IUser[] {
    const NAME_NOT_TYPPED = name === null;
    if (NAME_NOT_TYPPED) {
      return usersList;
    }

    const filteredLIst = usersList.filter((user) =>
      user.nome.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    );

    return filteredLIst;
  }
}
