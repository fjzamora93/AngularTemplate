import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';

@NgModule({
    declarations: [
        //CardComponent -> Lo declararíamos si no fuese un standalone, pero al ser un standalone, va en imports.
    ],
    imports: [
        CommonModule,
        CardComponent
    ],
    exports: [
        CardComponent
    ]
})
export class SharedModule { }