import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToggle {
 screenWidth: number;
 collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  // animations: [
  //   trigger('fadeInOut', [
  //     transition('enter', [
  //       style({opacity: 0}),
  //       animate('350ms',
  //         style({opacity: 1})
  //       )
  //     ]),
  //     transition('enter', [
  //       style({opacity: 1}),
  //       animate('350ms',
  //         style({opacity: 0})
  //       )
  //     ])
  //   ]),
  //   trigger('rotate', [
  //     transition('enter', [
  //       animate('1000ms',
  //       keyframes([
  //         style({transform: 'rotate(0deg)', offset: '0'}),
  //         style({transform: 'rotate(2turn)', offset: '1'})
  //       ])
  //       )
  //     ])
  //   ])
  // ]
})

export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screeWidth = window.innerWidth;
    console.log(this.screeWidth);
    if ( this.screeWidth <= 768 ) {
      this.collapsed = false;
      this.onToggleSideNav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screeWidth
      });
    }
  }


  screeWidth = 0;
  collapsed = false;
  navData = navbarData;


  constructor() { }

  ngOnInit(): void {
    this.screeWidth = window.innerWidth;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screeWidth
    });
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screeWidth
    });
  }

}
