import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  applicationTitle:string="Crypto - Post";
  menuTitle:string='';
  constructor(public _router:Router) { }

  ngOnInit(): void {
    this._router.navigate(['/inbox']);
    this.menuTitle='Inbox';
  }

  selectedMenu(selectedMenu : string){
    this.menuTitle=selectedMenu;
  }

}
