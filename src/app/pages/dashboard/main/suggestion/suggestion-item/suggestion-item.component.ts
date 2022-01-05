import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestion-item',
  templateUrl: './suggestion-item.component.html',
  styleUrls: ['./suggestion-item.component.scss']
})
export class SuggestionItemComponent implements OnInit {
  // @Input() list: [] = [];

  public list = [1, 2, 3]

  constructor() { }

  ngOnInit(): void {
  }

}
