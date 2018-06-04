import { NgModule } from '@angular/core';
import { IonicPageModule, IonicPage } from 'ionic-angular';
import { BuddiesPage } from './buddies';

@NgModule({
  declarations: [
    BuddiesPage,
  ],
  imports: [
    IonicPageModule.forChild(BuddiesPage),
  ],
  exports: [
    BuddiesPage 
  ]
})
export class BuddiesPageModule {}
