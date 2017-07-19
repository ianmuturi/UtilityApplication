import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  public address = 'UpperHill Nairobi';

  public managers = [
    'Ian Kinyua',
    'John Doe',
    'Mary Johnson'
  ];
  constructor() { }

  ngOnInit() {
  }

  getAddress(){
    this.address = 'Moi Avenue Mombasa';
  }

}
