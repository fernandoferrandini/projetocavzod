import { NgModule } from '@angular/core';
import {MatButtonModule, MatCardModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule
  ]
})
export class MaterialModule { }
