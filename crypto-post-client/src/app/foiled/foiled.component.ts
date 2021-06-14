import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-foiled',
  templateUrl: './foiled.component.html',
  styleUrls: ['./foiled.component.scss']
})
export class FoiledComponent implements OnInit {

  checked: boolean = false;
  multipleSelected: boolean = false;
  posts: Posts[] = [];
 
  
  constructor(private _route:Router) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.posts.push(new Posts('amezon', 'Order Details', 'jasdhjah', false));
    this.posts.push(new Posts('amezon', 'Order Details', 'jasdhjah', false));
    this.posts.push(new Posts('amezon', 'Order Details', 'jasdhjah', false));
    this.posts.push(new Posts('amezon', 'Order Details', 'jasdhjah', false));
    this.posts.push(new Posts('amezon', 'Order Details', 'jasdhjah', false));
    this.posts.push(new Posts('amezon', 'Order Details', 'jasdhjah', false));
    this.posts.push(new Posts('amezon', 'Order Details', 'jasdhjah', false));
    this.posts.push(new Posts('amezon', 'Order Details', 'jasdhjah', false));
    this.posts.push(new Posts('amezon', 'Order Details', 'jasdhjah', false));
    this.posts.push(new Posts('amezon', 'Order Details', 'jasdhjah', false));
    this.posts.push(new Posts('amezon', 'Order Details', 'jasdhjah', false));
    this.posts.push(new Posts('amezon', 'Order Details', 'jasdhjah', false));
  }

  selectAll(event : any){
    if(event.currentTarget.checked){
      this.posts.forEach((post)=>{
        post._checked = true;
      })
    }else{
      this.posts.forEach((post)=>{
        post._checked = false;
      })
    }
    this.seeAllChecked();
  }
 
  check(event:any, post:Posts){
    let index = this.posts.indexOf(post);
    if(event.currentTarget.checked){
      this.posts[index]._checked = true;
    }else{
      this.posts[index]._checked = false;
    }
    this.seeAllChecked();
  }

  seeAllChecked(){
    this.checked = false;
    this.multipleSelected = false;
    let checkedCount = 0;
    this.posts.forEach(element => {
      if(element._checked){
        this.checked = true;
        checkedCount++;
      }
    });
    if(checkedCount>1){
      this.multipleSelected = true;
    }
  }
  validatePassCode(){
    this._route.navigate(['/veiw']);
  }
}
export  class Posts{
  constructor(public _from:string, public _subject:string, public _textbox:string, public _checked:boolean){}
}
