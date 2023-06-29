import { Component, OnInit } from '@angular/core';
import {ServiceService} from "../service.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  form = {
    text: ''
  }
  response: any;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.form.text);
    this.service.getMarbertResponse(this.form.text).subscribe((data: any) => {
      console.log(data);
      this.response = data;
    }, (error: any) => {
      console.log(error);
    });
  }

}
