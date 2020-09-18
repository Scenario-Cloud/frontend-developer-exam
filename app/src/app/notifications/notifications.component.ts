import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.less']
})
export class NotificationsComponent implements OnInit {

  notifications = [
    { count: 8, icon: 'bell', label: 'New Documents'},
    { count: 10, icon: 'exclamation triangle', label: 'Delayed Documents'},
    { count: 15, icon: 'vertically flipped paperclip', label: 'New Attachments'},
  ];
  days = [
    { count: 12, label: 'Today'},
    { count: 29, label: '7 Days'},
    { count: 88, label: '30 Days'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
