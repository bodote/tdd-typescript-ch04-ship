import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bodotest',
  templateUrl: './bodotest.component.html',
  styleUrls: ['./bodotest.component.css'],
})
export class BodotestComponent implements OnInit {
  add(arg0: number, arg1: number): any {
    return arg0 + arg1;
  }

  constructor() {}

  ngOnInit(): void {}
}
