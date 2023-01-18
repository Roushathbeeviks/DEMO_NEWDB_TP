import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

 
  ngOnInit(): void {
    let query=this.activeRoute.snapshot.paramMap.get('query');
    console.warn('kkk',query)
  }
  searchForm:FormGroup=new FormGroup({
    search:new FormControl('')
   })
   public vesselName:Array<any>=[];

   constructor(private activeRoute:ActivatedRoute) 
   {
    // this.searchForm.get('search')?.valueChanges.pipe(
    //   debounceTime(1000),
    //   distinctUntilChanged(),
    //   switchMap((v)=>this.searchService.getvessels(v))
    // ).subscribe(
    //   (v)=>{
    //     this.vesselName=v?.vesselName
    //   }
    // )
   }


}
