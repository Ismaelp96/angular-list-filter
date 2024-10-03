import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UserDatailsComponent } from './user-datails/user-datails.component';
import { FilterComponent } from './filter/filter.component';
import { UserListComponent } from './user-list/user-list.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [UserDatailsComponent, FilterComponent, UserListComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    FormsModule,
    CommonModule,
    PipesModule,
  ],
  exports: [UserDatailsComponent, FilterComponent, UserListComponent],
})
export class ComponentsModule {}
