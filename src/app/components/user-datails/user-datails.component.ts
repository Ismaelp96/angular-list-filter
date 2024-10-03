import { Component, Input } from '@angular/core';

import { IUser } from '../../interfaces/user/user.interface';

@Component({
  selector: 'app-user-datails',
  templateUrl: './user-datails.component.html',
  styleUrl: './user-datails.component.scss',
})
export class UserDatailsComponent {
  @Input({ required: true }) user: IUser = {} as IUser;
}
