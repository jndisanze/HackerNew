import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Hacker } from '../search/HackerData';

const API_URL  = 'https://hn.algolia.com/api/v1/search?';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  items = [];
  page = 0;
  nbPages = 0;
  searchValue; string;
  constructor(private http:  HttpClient) { }
  ngOnInit(): void {
  }

  onSubmit(form) {
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    console.log(API_URL + 'query=' + this.searchValue   + '&page=' + this.page + '&tags=story');
    return this.http.get<Hacker>(
      API_URL + 'query=' + this.searchValue  + '&page=' + this.page + '&tags=story',
      { headers }
    )
    .subscribe(res => {
      this.items = res.hits;
      this.nbPages = res.nbPages - 1;
      this.page = res.page;
    });
  }

 public onSearchChange(searchValue: string ): void {
           this.page = 0;
           this.searchValue = searchValue;
 }
 public previous(): void {
      if (this.page > 0) { this.page -= 1; }
  }
  public next(): void {
       if (this.page < this.nbPages ) { this.page += 1; }
  }
}
