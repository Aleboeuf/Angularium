import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-stickheader',
  templateUrl: './stickheader.component.html',
  styleUrls: ['./stickheader.component.scss']
})
export class StickheaderComponent{

  @ViewChild('header') headerElement: ElementRef<HTMLDivElement> | undefined;
  isHeaderSticky: boolean = false;
  headerPosition: number | undefined;

  @HostListener('window:scroll', ['$event'])
  checkSticky() {    

    if (this.headerPosition == undefined) {
      this.initializeHeaderPosition();
    } else {
      if (window.scrollY >= this.headerPosition) {
        this.isHeaderSticky = true;
      } else {
        this.isHeaderSticky = false;
      }
    }

  }

  initializeHeaderPosition() {
    if (this.headerElement != undefined) {
      this.headerPosition = this.headerElement.nativeElement.offsetTop;
    }
  }

  constructor() {
  }
}
