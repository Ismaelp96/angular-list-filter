import { NgModule } from '@angular/core';
import { UserDatailsComponent } from './user-datails/user-datails.component';
import { FilterComponent } from './filter/filter.component';
import { UserListComponent } from './user-list/user-list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UserDatailsComponent, FilterComponent, UserListComponent],
  imports: [CommonModule],
  exports: [UserDatailsComponent, FilterComponent, UserListComponent],
})
export class ComponentsModule {}
