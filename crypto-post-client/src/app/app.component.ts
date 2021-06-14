import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crypto-post-client';
  
  // @ViewChild('openModal')
  // openModal!: ElementRef<any>;

  constructor(public _router: Router){}
  ngOnInit(): void {
    
   this._router.navigate(['/login']);
  }
  // ngAfterViewInit(): void {
  //   this.openModal.nativeElement.click();
  // }

  // login(){
  //   this._router.navigate(['/home']);
  // }
}

