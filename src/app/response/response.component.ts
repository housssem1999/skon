import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.css']
})
export class ResponseComponent implements OnInit {
  @Input() response: any;
  constructor() { }

  ngOnInit(): void {
  }

}
