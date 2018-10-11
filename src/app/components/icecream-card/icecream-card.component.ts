import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icecream-card',
  templateUrl: './icecream-card.component.html',
  styleUrls: ['./icecream-card.component.scss']
})
export class IcecreamCardComponent implements OnInit {
  @Input() icecream: any;

  constructor() { }

  ngOnInit() {
  }

}
