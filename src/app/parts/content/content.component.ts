import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'body',
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss'
})
export class ContentComponent {
    images: string[] = [
      '../../../assets/1.png',
      '../../../assets/2.png',
      '../../../assets/3.png',
      '../../../assets/4.png',
    ]
  constructor(){
   
  }

}
