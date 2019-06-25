import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { GitUser } from "./git-user";

@Injectable({
  providedIn: 'root'
})
export class GitUserService {
  cachedValues: Array<{
    [query: string]: GitUser
  }> = [];

  constructor(private http: HttpClient) { }

  gitUser = (query: string): Promise<GitUser> => {
    let promise = new Promise<GitUser>((resolve, reject) => {
      if (this.cachedValues[query]) {
        resolve(this.cachedValues[query]);
      } else {
        this.http.get('https://api.github.com/search/users?q=' + query)
        .toPromise()
        .then((response) => {
          resolve(response as GitUser);
        }, (error) => {
          reject(error);
        })
      }
    })
    return promise;
  }
}
