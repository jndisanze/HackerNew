import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
/**import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { map, switchMap, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
const API_URL = 'http://hn.algolia.com/api/v1/search';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FormBuilder]
})
export class AppComponent implements OnInit{
  title = 'Hacker News';
 searchForm: FormGroup;
  results: Observable<any>;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.searchForm = this.formBuilder.group({
      search: ['', Validators.required]
    });
  }
    ngOnInit() {
    this.search();
    console.log(this.results);   
  }
  search() {
     this.results = this.searchForm.
       .controls.search.valueChanges.pipe(
       filter(value => value.length > 2),
       distinctUntilChanged(),
       switchMap(searchTerm => this.http.get<any>(`${API_URL}?query=foo`)),
       map(response => response.items),
       Subscriber((res : any[])=>{
        console.log(res);
        })
     );

  }
}*/

