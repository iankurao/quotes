
import { Component } from '@angular/core';
import { Quote } from './quote';
import { update } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes';
  voters:number[]=[0,0] ;
  upvotes:number = 0 ;
  downvotes:number = 0 ;
  quotes = [
        new Quote('Xystus','Politics is a strong and slow boring of hard boards',new Date(2019,1,25)),
        new Quote('Mawarks','Never give up till the end',new Date(2019,1,6)),
        new Quote('Ian','Work hard in silence,,Let your lamborghini make the noise',new Date(2019,1,24)),
    ]
    upvote(){
      this.upvotes +=1 ;
}
downvote(){
  this.downvotes +=1 ;
}

addNewquote(quote){
        this.quotes.unshift(quote)
    }




}




