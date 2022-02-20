import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReceiptComponent } from './receipt/receipt.component';
import { AllReceiptsComponent } from './all-receipts/all-receipts.component';



@NgModule({
  declarations: [
    ReceiptComponent,
    AllReceiptsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ReceiptComponent },
      { path: 'all', component: AllReceiptsComponent }
    ])
  ]
})
export class ReceiptsModule { }
