import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }




  OnClickScroll(id: any){
    const health = document.getElementById(id);
    window.scrollTo((health as HTMLElement).offsetLeft,(health as HTMLElement).offsetTop);
  };
}
