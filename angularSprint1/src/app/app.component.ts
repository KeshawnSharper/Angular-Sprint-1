
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../environments/environment';

const API_URL = environment.API_URL;
const API_KEY = environment.API_KEY;
const API_HOST = environment.API_HOST;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient){}

  title: string = 'angularSprint1';
  posts: any[] = [];
  showCard: boolean = true;
  

  ngOnInit() {
    this.http.get<any>(`${API_URL}`, {
     
      headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "98d2502cbfmsh0837a7dc54248a0p1174f3jsn84a58769c572"
      }
    })
              .subscribe((posts) => {
                this.posts = posts.response;
                // console.log(posts.response[2])
        
    })        
  }

  theFunction() {
    this.showCard = !this.showCard;
  }
}
