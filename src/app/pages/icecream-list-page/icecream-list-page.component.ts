import { Component, OnInit } from '@angular/core';
import { IcecreamService } from '../../services/icecream.service';

@Component({
  selector: 'app-icecream-list-page',
  templateUrl: './icecream-list-page.component.html',
  styleUrls: ['./icecream-list-page.component.scss']
})
export class IcecreamListPageComponent implements OnInit {
  icecreams: Array<any>;
  error: boolean;

  constructor(private icecreamService: IcecreamService) { }

  ngOnInit() {
    this.icecreamService.getAll()
    .then((results) => {
      this.icecreams = results
    })
    .catch((error) => {
      console.log(error);
      this.error = true;
    })
  }

}
