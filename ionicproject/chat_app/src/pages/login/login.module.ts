import { NgModule } from '@angular/core';
import { IonicPageModule, IonicPage } from 'ionic-angular';
import { LoginPage } from './login';

//@IonicPage()
@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
  exports: [
    LoginPage
    //how can i do the login johaness? because it says that i did not 
    //declare the property. 
    //How does actually module.ts works, how @IonicPage() works in modules
    //entry components and so on
  ]
})
export class LoginPageModule {}
