import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root: string = "HomePage";
  tab2Root: string = "ContactsPage";
  tab3Root: string = "ProfilePage";
 
  constructor() {

  }
}
