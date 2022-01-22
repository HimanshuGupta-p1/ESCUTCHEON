import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  thinkImg="assets/thinker-28741_960_720.webp"
  bitImg="assets/steganography-hide-secret-data-inside-image-audio-file-seconds.w1456.jpg"
  sVScImg="assets/stegoVScrypto.jpg"
  authorImg="assets/IMG_20210126_203039_514.jpg"
  signImg="assets/signature.png"
  constructor() { }

  ngOnInit(): void {
  }

}
