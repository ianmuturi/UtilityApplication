import { Component, OnInit } from '@angular/core';
import {GithubService} from '../github/github.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search-engine',
  templateUrl: './search-engine.component.html',
  styleUrls: ['./search-engine.component.css'],
  providers: [GithubService]
})
export class SearchEngineComponent implements OnInit {

  public searchText;

  public searchResult;

  public searchCount;

  constructor(private router: Router, private githubService: GithubService) { }

  ngOnInit() { }

  onkeyup(event){
    this.searchText = event.target.value;
  }

  showUserDeatils(user) {
    this.router.navigate(['user', user.login]);
  }

  getUsers(){
      this.githubService.getUser(this.searchText).subscribe(
        res => {
          this.searchResult = res;
          this.searchCount = res.total_count;
          console.log(res);
        }
      );
  }

}
