import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OnomatopiaTemplate } from '../models/onomatopialist.models';

@Component({
  selector: 'app-create-onomatopia',
  templateUrl: './create-onomatopia.component.html',
  styleUrls: ['./create-onomatopia.component.css']
})
export class CreateOnomatopiaComponent implements OnInit {

  newOnomatopia: string = '';
  
  @Output() sendOnomatopiaToParent = new EventEmitter();
  
  
  constructor() { }

  ngOnInit(): void {
  }

  createOnomatopia():void{
    this.sendOnomatopiaToParent.emit(this.newOnomatopia);
    
  }
  

}
