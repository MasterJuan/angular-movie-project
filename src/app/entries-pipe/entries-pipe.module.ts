import { NgModule, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

@Pipe({name: 'entries'}) export default class {
  transform = Object.entries; 
}

export class EntriesPipeModule { }
