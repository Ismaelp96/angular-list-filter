import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';

@NgModule({
  imports: [MatButtonModule, MatDividerModule, MatIconModule, MatListModule],
  exports: [MatButtonModule, MatDividerModule, MatIconModule, MatListModule],
})
export class AngularMaterialModule {}
