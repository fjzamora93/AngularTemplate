import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatList, MatListItem } from '@angular/material/list';
import { MatDialogActions, MatDialogContent, MatDialogClose } from '@angular/material/dialog';
import { MatGridAvatarCssMatStyler, MatGridList, MatGridTile } from '@angular/material/grid-list';


@NgModule({
  imports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatList, MatListItem, 
    MatDialogActions, MatDialogContent, MatDialogClose,
    MatGridAvatarCssMatStyler, MatGridList, MatGridTile
  ],
  exports: [
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatList, MatListItem, 
    MatDialogActions, MatDialogContent, MatDialogClose,
    MatGridAvatarCssMatStyler, MatGridList, MatGridTile
  ]
})
export class MaterialModule { }
