import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-receipts',
  templateUrl: './all-receipts.component.html',
  styleUrls: ['./all-receipts.component.scss']
})
export class AllReceiptsComponent implements OnInit {
  public list = [1, 2, 3];

  constructor() { }

  ngOnInit(): void {
  }

}
