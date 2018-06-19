import { NgModule } from '@angular/core';
import { IonicPageModule, IonicPage } from 'ionic-angular';
import { friendsPage } from './friends';

@NgModule({
  declarations: [
    friendsPage,
  ],
  imports: [
    IonicPageModule.forChild(friendsPage),
  ],
  exports: [
    friendsPage 
  ]
})
export class friendsPageModule {}
