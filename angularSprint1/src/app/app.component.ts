import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient){}

  title = 'angularSprint1';
  ngOnInit() {
    this.http.get<any>('https://cat-fact.herokuapp.com/facts').subscribe(data => {
        console.log(data);
    })        
  }
}
