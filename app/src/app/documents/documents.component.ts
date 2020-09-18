import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.less']
})
export class DocumentsComponent implements OnInit {

  header: string = 'Approved Documents';
  documents = [
    { name: 'DOC000001996', remarks: 'Approved with Comments', image: 'doc-1.jpg'},
    { name: 'CORR000001957', remarks: 'Approved with Comments', image: 'doc-2.jpg'},
    { name: 'SI000001996', remarks: 'Approved with out Comments', image: 'doc-3.png'},
    { name: 'SCHED000001996', remarks: 'Approved with Comments', image: 'doc-4.png'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
