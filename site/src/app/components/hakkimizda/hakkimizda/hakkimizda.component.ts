import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hakkimizda',
  templateUrl: './hakkimizda.component.html',
  styleUrls: ['./hakkimizda.component.css']
})
export class HakkimizdaComponent implements OnInit {

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
