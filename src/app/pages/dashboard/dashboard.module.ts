import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';
import { SuggestionComponent } from './main/suggestion/suggestion.component';

@NgModule({
  declarations: [
    MainComponent,
    SuggestionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: MainComponent }
    ])
  ]
})
export class DashboardModule { }
