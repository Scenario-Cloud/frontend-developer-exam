import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  dimmerVisibility: boolean;

  constructor() { }

  ngOnInit(): void {
    this.dimmerVisibility = false;
  }

  acceptData(data: boolean) {
    this.dimmerVisibility = data;
  }

}
