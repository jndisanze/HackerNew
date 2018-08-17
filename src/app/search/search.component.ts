import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Weather } from '../search/HackerData';

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
  searchValues: string;

  constructor(private http:  HttpClient) { }

  ngOnInit() {}

  onSubmit(form) {
    const headers = new HttpHeaders();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return this.http.get<Weather>(
      API_URL + 'query=' + form.search  + '&page=' + this.page,
      { headers }
    )
    .subscribe(res => {
      this.items = res.hits;
      this.nbPages = res.nbPages - 1;
      this.page = res.page;
      console.log(this.items);
    });
  }
 public previous(): void {
      if (this.page > 0) { this.page -= 1; }
  }
  public next(): void {
       if (this.page < this.nbPages ) { this.page += 1; }
  }
}
