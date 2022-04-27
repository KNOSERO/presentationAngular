import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public size = 1000;

  //Zmienna kontrolująca informacje aktywowanym hamburgerze
  public hamburger = true;

  changeHamburger() {
    this.hamburger = !this.hamburger;
  }

  ngOnInit(): void {
    if (window.innerWidth > this.size) 
      this.hamburger = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth > this.size) 
        this.hamburger = false;
  }
}
