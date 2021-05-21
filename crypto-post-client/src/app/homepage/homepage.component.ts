import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  applicationTitle:string="Crypto - Post";
  constructor() { }

  ngOnInit(): void {
  }

}
