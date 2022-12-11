import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  imageUrl:string="";
  title:string="";
  content:string="";

  items=[
    {
      url:"site/src/assets/img/cuval.jpguval.jpg",
      title:"ÇUVAL1",
      content:"Bu bir çuvaldır."
    },
    {
      url:"assets/img/cuval.jpg",
      title:"ÇUVAL2",
      content:"Bu bir çuvaldır."
    },
    {
      url:"assets/img/cuval.jpg",
      title:"ÇUVAL3",
      content:"Bu bir çuvaldır."
    }
  ]
}
