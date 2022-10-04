import { Component } from '@angular/core';
import { OnomatopiaTemplate } from './models/onomatopialist.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'output';

  onomatopiaList: OnomatopiaTemplate[] = [];

  
  
  onReceiveOnomatopia(newOnomatopia: OnomatopiaTemplate):void{
    
    this.onomatopiaList.push(newOnomatopia);
    console.log(this.onomatopiaList);
    
  }
}
