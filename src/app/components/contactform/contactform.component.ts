import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.scss']
})
export class ContactformComponent implements OnInit {

  public title = "";
  public description: any;
  
  constructor() { }

  ngOnInit(): void {
  }

  @Output() 
  eventSubmit = new EventEmitter<string>();

  submit(title: string) {
    this.title.emit(title);
  }
}