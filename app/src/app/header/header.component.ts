import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  title: string = 'Document Tracking System';
  logo: string = 'assets/logo.png';
  accountDetails: any = {
    image: '/assets/justen.jpg',
    name: 'James Scott',
    position: 'Administrator',
  };
  dropdown = [
    { name: 'Home Menu', icon: 'home icon' },
    { name: 'Favourites', icon: 'star icon' }, 
    { name: 'My Settings', icon: 'cog icon' },
    { name: 'System Info', icon: 'info circle icon' },
    { name: 'Logout', icon: 'logout icon' }
  ];

  @Output() hovered = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  openDropdown() {
    this.hovered.emit(true);
  }

  closeDropdown() {
    this.hovered.emit(false);
  }

}
