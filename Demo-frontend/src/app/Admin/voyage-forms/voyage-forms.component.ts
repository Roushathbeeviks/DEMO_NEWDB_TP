import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-voyage-forms',
  templateUrl: './voyage-forms.component.html',
  styleUrls: ['./voyage-forms.component.css']
})
export class VoyageFormsComponent implements OnInit {

  constructor(private formBuider: FormBuilder) { }

  ngOnInit(): void {
  }

}
