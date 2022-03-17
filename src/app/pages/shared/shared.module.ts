import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from "./components/cards/cards.component";
import { LongCardComponent } from './components/long-card/long-card.component';



@NgModule({
  declarations: [
    CardsComponent,
    LongCardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CardsComponent,
    LongCardComponent
  ]
})
export class SharedModule { }
