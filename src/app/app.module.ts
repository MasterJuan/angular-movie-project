import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material/material.module';
//import { TypographyComponent } from './typography/typography.component';
import { GuiComponent } from './gui/gui.component';
import { MovieService } from './movie.service';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchAndPaginationModule } from './search-and-pagination/search-and-pagination.module';


const appRoutes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: 'gui', component: GuiComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    //TypographyComponent,
    GuiComponent,
    SearchPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),					
    BrowserAnimationsModule,
    MaterialModule,
    SearchAndPaginationModule
  ],
  providers: [ MovieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
