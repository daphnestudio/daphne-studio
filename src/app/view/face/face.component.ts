import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'daphne-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.scss']
})  
export class FaceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
        console.log('face is loaded');
    }, 5000);
  }
}
