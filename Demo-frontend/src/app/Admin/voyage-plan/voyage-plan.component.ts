import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voyage-plan',
  templateUrl: './voyage-plan.component.html',
  styleUrls: ['./voyage-plan.component.css']
})
export class VoyagePlanComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  
  

}
