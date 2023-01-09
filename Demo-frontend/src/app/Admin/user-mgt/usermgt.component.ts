import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ColumnMode } from '@swimlane/ngx-datatable';
import { AdminService } from 'src/app/services/admin.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-usermgt',
  templateUrl: './usermgt.component.html',
  styleUrls: ['./usermgt.component.css']
})

export class UsermgtComponent implements OnInit {
// rows:any[]=[]
columnMode='standard';
// columns = [];
// ColumnMode = ColumnMode;

displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
dataSource = ELEMENT_DATA;

rows = [
  { name: 'Austin', gender: 'Male', company: 'Swimlane' },
  { name: 'Dany', gender: 'Male', company: 'KFC' },
  { name: 'Molly', gender: 'Female', company: 'Burger King' }
];
columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];
  constructor(private adminserv:AdminService,private route:Router) { }

  ngOnInit(): void {
    this.adminserv.AllUsers().subscribe((res:any)=>
    {
      // console.log(JSON.stringify(res.message))
      this.rows = res.message;
      
      console.log("users", this.rows);
      // console.log("columns", this.rows.Userid);
    });
  
  }
  navigate(){
    this.route.navigate(['/adminSignUp'])
  }


}
