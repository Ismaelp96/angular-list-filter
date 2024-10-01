import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
  exports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class AngularMaterialModule {}
