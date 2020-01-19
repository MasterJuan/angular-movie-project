import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationComponent } from '../pagination/pagination.component';
import { SearchInputComponent } from '../search-input/search-input.component';

@NgModule({
  declarations: [
    SearchInputComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchInputComponent,
    PaginationComponent
  ]
})
export class SearchAndPaginationModule { }
