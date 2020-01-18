import { Injectable, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, debounceTime, catchError, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {
    apiKey: string = '85204a8cc33baf447559fb6d51b18313';
    baseUrl: string = 'https://api.themoviedb.org/3/search/movie';
    queryUrl: string = '&query=';

    constructor(private http: HttpClient) { }

    search(terms: Observable<string>) {
        return terms.pipe(debounceTime(400),
        distinctUntilChanged(),
        switchMap(term => this.fetchMovie(term)));
    }

    fetchMovie(term) {
        return this.http
            .get(this.baseUrl + '?api_key=' + this.apiKey + this.queryUrl + term)
            .pipe(map(res => res));
    }

    private handleError(error: any): Promise<any> {
        console.log('An error occured ', error);
        return Promise.reject(error.message || error);
    }
}