import { NgModule } from '@angular/core';
import { IonicPageModule, IonicPage } from 'ionic-angular';
import { BuddychatPage } from './buddychat';

@NgModule({
  declarations: [
    BuddychatPage,
  ],
  imports: [
    IonicPageModule.forChild(BuddychatPage),
  ],
  exports: [
    BuddychatPage
  ]
})
export class BuddychatPageModule {}
