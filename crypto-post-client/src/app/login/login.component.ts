import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('openModal')
  openModal!: ElementRef<any>;
  loginForm!: FormGroup;

  constructor(public _router : Router, public formBuilder:FormBuilder) { }

  ngAfterViewInit(): void {
    this.openModal.nativeElement.click();

  }

  ngOnInit(): void {
    
    this.loginForm = this.formBuilder.group ({
      username: ['',Validators.required],
      password:['',[Validators.minLength(8),Validators.required]]
      })
  }

  login(){
    console.log(this.loginForm)
    this._router.navigate(['/home']);
  }
  

}
