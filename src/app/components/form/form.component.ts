import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass'],
})
export class FormComponent implements OnInit {
  opcion = 0;
  opcion2 = 0;

  constructor() {}

  ngOnInit(): void {}
}
