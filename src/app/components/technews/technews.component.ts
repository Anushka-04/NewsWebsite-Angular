import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../../services/newsapi.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private services:NewsapiService) { }

  techNewsDisplay:any=[];

  ngOnInit(): void {
    this.services.techNews().subscribe((result)=>
      this.techNewsDisplay = result.articles 
      )};

}
