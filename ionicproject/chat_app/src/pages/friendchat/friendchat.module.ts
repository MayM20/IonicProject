import { NgModule } from '@angular/core';
import { IonicPageModule, IonicPage } from 'ionic-angular';
import { friendchatPage } from './friendchat';

@NgModule({
  declarations: [
    friendchatPage,
  ],
  imports: [
    IonicPageModule.forChild(friendchatPage),
  ],
  exports: [
    friendchatPage
  ]
})
export class friendchatPageModule {}
