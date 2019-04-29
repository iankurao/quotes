import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  title = 'quotes'
  newquote=new Quote("","",new Date());
  @Output() addquote=new EventEmitter<Quote>();
  submitQuote(){
        this.addquote.emit(this.newquote);
    }

  constructor() { }

  ngOnInit() {
  }

}
