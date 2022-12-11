import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iletisim',
  templateUrl: './iletisim.component.html',
  styleUrls: ['./iletisim.component.css']
})
export class IletisimComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.scrolUp();
  }
  scrolUp() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
