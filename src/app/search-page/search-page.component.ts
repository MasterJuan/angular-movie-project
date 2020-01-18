import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  providers: [MovieService]
})

export class SearchPageComponent implements OnInit {
  results: any = [];
  searchTerm$ = new Subject<string>();

  constructor(private searchService: MovieService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        console.log(results);
        // // Step 1. Get all the object keys.
        // let evilResponseProps = Object.keys(results);
        // // Step 2. Create an empty array.
        // let goodResponse = [];
        // // Step 3. Iterate throw all keys.
        // for (prop of evilResponseProps) { 
        //     goodResponse.push(evilResponseProps[prop]);
        // }
        this.results = results;
      });
  } 

  ngOnInit() {}
 
}
