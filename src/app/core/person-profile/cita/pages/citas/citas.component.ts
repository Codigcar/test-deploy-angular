import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit {

  minDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }



}
