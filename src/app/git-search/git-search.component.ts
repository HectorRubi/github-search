import { Component, OnInit } from '@angular/core';

import { GitSearchService } from "../git-search.service";

@Component({
  selector: 'app-git-search',
  templateUrl: './git-search.component.html',
  styleUrls: ['./git-search.component.css']
})
export class GitSearchComponent implements OnInit {

  constructor(private GitSearchService: GitSearchService) { }

  ngOnInit() {
    this.GitSearchService.gitSearch('angular').then((response) => {
      alert('Total librerias: ' + response.total_count);
    }, (error) => {
      alert('Error: ' + error.statusText);
    })
  }

}
