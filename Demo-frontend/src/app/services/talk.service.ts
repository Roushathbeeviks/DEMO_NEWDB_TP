import { Injectable } from '@angular/core';
import Talk from "talkjs";

@Injectable({
  providedIn: 'root'
})
export class TalkService {
  constructor() {}
  public currentUser: any;
   
  async createUser(applicationUser: any) {
    await Talk.ready;
    return new Talk.User({
      id: applicationUser.id,
      name: applicationUser.username,
      // photoUrl: applicationUser.photoUrl,
      role: applicationUser.role
    });
  }

  async createCurrentSession(userDetails : any) {
    await Talk.ready;
    const user = {
      id: userDetails.id,
      username: userDetails.username,
      role: 'default'
    };
    this.currentUser = await this.createUser(user);
    const session = new Talk.Session({
         appId: 't1rdE2FN',
         me: this.currentUser
    });
    return session;
  }

  private async getOrCreateConversation(session: Talk.Session, otherApplicationUser: any) {
    const otherUser = await this.createUser(otherApplicationUser);
    const conversation = session.getOrCreateConversation(Talk.oneOnOneId(this.currentUser, otherUser));
    conversation.setParticipant(this.currentUser);
    conversation.setParticipant(otherUser);
    return conversation;
  }

  async createInbox(session: Talk.Session, otherApplicationUser:any) {

   /* let otherApplicationUser = {
      id: 8,
      username: 'this.adminserv.GetUserById',
      role: 'default'
    };*/
    otherApplicationUser['role'] ='default';
    const conversation = await this.getOrCreateConversation(session, otherApplicationUser);
    const inbox = session.createInbox();
    inbox.select(conversation);
    return inbox;
 }
}
