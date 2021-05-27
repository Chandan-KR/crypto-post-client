import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss']
})
export class InboxComponent implements OnInit {

  checked: boolean = false;
  multipleSelected: boolean = false;
  posts: Posts[] = [];
  public index:any

  constructor() { }

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

  deleteAll(){
    this.posts =[];
    this.seeAllChecked();
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
  refresh(){
    alert("hiiiiii");
  }
}


  export  class Posts{
  constructor(public _from:string, public _subject:string, public _textbox:string, public _checked:boolean){}
}