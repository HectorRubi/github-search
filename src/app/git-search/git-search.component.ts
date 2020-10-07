import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import { GitSearchService } from "../git-search.service";
import { GitSearch } from "../git-search";

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {
  searchResult: GitSearch;
  searchQuery: string;
  title: string;
  displayQuery: string;

  constructor(
    private GitSearchService: GitSearchService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.searchQuery = params.get('query');
      this.displayQuery = params.get('query');
    });
    
    this.GitSearchService.gitSearch('angular').then((response) => {
      console.log(response);
      this.searchResult = response;
    }, (error) => {
      alert('Error: ' + error.statusText);
    })
    this.route.data.subscribe((result) => {
      this.title = result.title;
    });
  }

  gitSearch = () => {
    this.GitSearchService.gitSearch(this.searchQuery).then((response) => {
      this.searchResult = response;
    }, (error) => {
      alert('Error: ' + error.statusText);
    })
  }
}
