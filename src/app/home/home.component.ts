import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  keyImg="assets/key-2114046_960_720.webp"
  icoImg="assets/incognito-2231825_960_720.png"
  topImg="assets/top-secret-2054429_960_720.png"
  constructor() { }

  ngOnInit(): void {
  }

}
