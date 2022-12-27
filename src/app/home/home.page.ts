import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  optionsfortop = {
    slidesPerView: 2.8,
    slidesOffsetBefore: 5,
    spaceBetween: 15,
    freeMode: true,
  };
  getOTP() {}
  verifyOTP() {}
  constructor() {}
}
