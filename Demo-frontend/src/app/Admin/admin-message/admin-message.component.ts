import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { TalkService } from 'src/app/services/talk.service';


@Component({
  selector: 'app-admin-message',
  templateUrl: './admin-message.component.html',
  styleUrls: ['./admin-message.component.css']
})
export class AdminMessageComponent implements OnInit {
  private session: any;
  private inbox: any;
  constructor(private route: Router, private talkService: TalkService, private adminserv: AdminService) { }
  @ViewChild('talkjsContainer') talkjsContainer!: ElementRef;

  ngOnInit(): void {
   /* this.adminserv.AllUsers().subscribe((res: any) => {
      for (let i = 0; i <= res.message.length - 2; i++) {
        let count = 1;
        console.log("mesg", res.message[i])
        res.message[i]['id'] = count;
        this.createInbox(res.message[i]);
        count += 1;
      }
    }
    ) */
    this.createInbox();
  }
  showFiller = false;
  private async createInbox() {
    const session = await this.talkService.createCurrentSession();
    this.inbox = await this.talkService.createInbox(session);
    this.inbox.mount(this.talkjsContainer.nativeElement);

  }

}
