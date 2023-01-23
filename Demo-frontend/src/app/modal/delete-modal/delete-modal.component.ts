import { Component, OnInit,Inject } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.css']
})
export class DeleteModalComponent implements OnInit {
id:any
  constructor(private adminserv:AdminService,
    private router:ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data:any) { }
  
  ngOnInit(): void {

  }

  reloadPage(): void {
    window.location.reload();
  }
  DeleteUser(id:any) 
  {

      this.id=id;
      this.adminserv.DeleteUser(this.data.data).subscribe((res:any)=>
       {
        // console.log("this.data.data",this.data.data)
         console.log(res)
        this.reloadPage()
        
      })
     
 }
}
