import { Component, OnInit } from '@angular/core';

import { GitSearchService } from "../git-search.service";
import { GitSearch } from "../git-search";

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  searchResult: GitSearch;

  constructor(private GitSearchService: GitSearchService) { }

  ngOnInit() {
    this.GitSearchService.gitSearch('angular').then((response) => {
      this.searchResult = response;
    }, (error) => {
      alert('Error: ' + error.statusText);
    })
  }

  gitSearch = (query: string) => {
    this.GitSearchService.gitSearch(query).then((response) => {
      this.searchResult = response;
    }, (error) => {
      alert('Error: ' + error.statusText);
    })
  }

}
