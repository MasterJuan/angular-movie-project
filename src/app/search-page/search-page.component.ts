import { Component, OnInit, Input, Output, EventEmitter, Pipe, PipeTransform  } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { MovieService } from '../movie.service';
import { FormBuilder, FormGroup, ValidationErrors, AbstractControl } from '@angular/forms';

// @Pipe({
//   name: 'keyValueFilter'
// })

// export class keyValueFilterPipe {
//    transform(value: any, args: any[] = null): any {

//        return Object.keys(value).map(function(key) {
//            let pair = {};
//            let k = 'key';
//            let v = 'value'


//            pair[k] = key;
//            pair[v] = value[key];

//            return pair;
//        });
//    }

// }

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  providers: [MovieService]
})

export class SearchPageComponent implements OnInit {
  reactiveForm: FormGroup;
  response: any = [];
  results: any = [];
  moviePosterPath:  object = [];
  movieTitle:  object = [];
  movieVoteAverage:  object = [];
  searchTerm$ = new Subject<string>();

  submitted = false;

  public totalUsersAmount: number = 0;
  private _currentPage: number = 1;
  private _currentSearchValue: string = '';

  ngOnInit() {
    // this._loadMovies(
    //   this._currentPage,
    //   this._currentSearchValue
    // );
  }
  // public filterList(searchParam: string): void {
  //   this._currentSearchValue = searchParam;
  //   this._loadMovies(
  //     this._currentPage,
  //     this._currentSearchValue
  //   );
  // }
  // public goToPage(page: number): void {
  //   this._currentPage = page;
  //   this._loadMovies(
  //     this._currentPage,
  //     this._currentSearchValue
  //   );
  // }
  // private _loadMovies(
  //   page: number = 1, searchParam: string = '' 
  // ) {
  //   this.searchService.getUsers(
  //     page, searchParam
  //   ).subscribe((response) => {
  //     this.results = response.data.results;
  //     this.totalUsersAmount = response.data.totalAmount;
  //   }, (error) => console.error(error));
  // }

  onSubmit() { this.submitted = true; }
  constructor(private searchService: MovieService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(response => {
        //console.log(response);
        // // Step 1. Get all the object keys.
        // let evilResponseProps = Object.keys(response);
        // // Step 2. Create an empty array.
        // let goodResponse = [];
        // // Step 3. Iterate throw all keys.
        // for (prop of evilResponseProps) { 
        //     goodResponse.push(evilResponseProps[prop]);
        // }
        this.response = response;
        this.results = response['results'];
        for ( let i = 1; i < this.results.length; i++ ) {
          this.moviePosterPath = this.results[i]['poster_path'];
          this.movieTitle = this.results[i]['title'];
          this.movieVoteAverage = this.results[i]['vote_average'];
        }
        console.log(this.moviePosterPath);
        console.log(this.movieTitle);
        console.log(this.movieVoteAverage);
      });
  } 

  // public getMovies(): Observable<Movie[]> {
  //   return this.searchService.get<Movie[]>(`http://localhost:3000/users`).pipe(
  //     map(data => data.map(data => new Movie().deserialize(data)))
  //   );
  // }

  static customValidation(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
        return { shouldNotHaveSpaces: true }
    }

    // If there is no validation failure, return null
    return null;
  }
 
}
