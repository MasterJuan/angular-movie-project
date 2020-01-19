import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Ng Bootstrap Module
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
import { ModalContainerComponent } from './modal-container.component';
import { MovieComponent } from './movie/movie.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  // #1 approach: This must be the home (default) page of the application
  //{ path: '', component: SearchPageComponent },
  
  // #2 approach: This must be the home (default) page of the application
  { path: 'search-page', component: SearchPageComponent },
  { path: '', redirectTo: '/search-page', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },

  { path: 'movie/:id', component: ModalContainerComponent},
  { path: 'gui', component: GuiComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    //TypographyComponent,
    GuiComponent,
    SearchPageComponent,
    MovieComponent,
    ModalContainerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes,
      //{ enableTracing: true } // <-- debugging purposes only
    ),					
    BrowserAnimationsModule,
    MaterialModule,
    SearchAndPaginationModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [ MovieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
