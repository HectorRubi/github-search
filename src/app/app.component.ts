import { Component, OnInit } from '@angular/core';
import { GitSearchService } from "./git-search.service";
import { GitUserService } from "./git-user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    GitSearchService,
    GitUserService
  ]
})
export class AppComponent implements OnInit{
  constructor(
    private GitSearchService: GitSearchService,
    private GitUserService: GitUserService
  ){

  }
  ngOnInit() {
    this.GitSearchService.gitSearch('angular').then((response) => {
      alert("Total de librerias encontradas: " + response.total_count);
    }, (error) => {
      alert("Error: " + error.statusText);
    })

    this.GitUserService.gitUser('tom').then((response) => {
      alert('Total de usuario encontrados' + response.total_count);
    }, (error) => {
      console.log('Error: ' + error);
    })
  }
  
  title = 'Github Browser';
}
