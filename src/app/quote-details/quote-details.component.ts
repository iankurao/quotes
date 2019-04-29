import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  upvotes:number = 0 ;
  downvotes:number = 0 ;
  isComplete: any;
  upvote(){
    this.upvotes +=1 ;
}
downvote(){
this.downvotes +=1 ;
}

goalDelete(complete:boolean){
  this.isComplete.emit(complete);
}


  constructor() { }

  ngOnInit() {
  }

}
