import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from '../pagination/pagination.component';
import { SearchInputComponent } from '../search-input/search-input.component';

@NgModule({
  declarations: [
    SearchInputComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    SearchInputComponent,
    PaginationComponent
  ]
})
export class SearchAndPaginationModule { }
