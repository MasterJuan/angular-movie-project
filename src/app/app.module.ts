import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

// const appRoutes: Routes = [
//   { path: '', component: UserComponent },
//   { path: 'blog', component: BlogComponent},
//   { path: 'account', component: AccountComponent}
// ];									 

@NgModule({
  declarations: [
    AppComponent	 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //RouterModule.forRoot(appRoutes),					
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
