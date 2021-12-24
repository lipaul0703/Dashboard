import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-pie-char',
  templateUrl: './pie-char.component.html',
  styleUrls: ['./pie-char.component.css']
})
export class PieCharComponent implements OnInit {
  a: number = 60.123;
  b: number = 50;
  c: number = 50;
  d: number = 50;
  constructor() { }

  ngOnInit(): void {
  }

}
