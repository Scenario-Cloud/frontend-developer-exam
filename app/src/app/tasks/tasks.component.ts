import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.less']
})
export class TasksComponent implements OnInit {

  pendingHeader: string = 'Pending';
  inProgressHeader: string = 'In Progress';
  pending: any = [
    { taskCode: 'CORR00001556', desc: 'Memo for work schedule changes'},
    { taskCode: 'CORR00001557', desc: 'Memo for recent changes on work attire'},
    { taskCode: 'CORR00001577', desc: 'Letter for Department Head (III)'},
    { taskCode: 'CORR00001556', desc: 'Letter for Structural Team'}
  ];
  inProgress: any = [
    { taskCode: 'RFI00001122', desc: 'Request to review recent plan changes'},
    { taskCode: 'RFI00001123', desc: 'Request for information for ABP tower II'},
    { taskCode: 'RFI00001155', desc: 'Request for information re: PA Building'},
    { taskCode: 'RFI00001156', desc: 'Request to review recent schedule changes'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
