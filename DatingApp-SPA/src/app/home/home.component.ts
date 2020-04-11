import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  registerMode = false;
  constructor(private http: HttpClient) {
  }
  values: any;
  ngOnInit(): void {}
  registerToggle() {
    this.registerMode = true;
  }

  CancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
}
