import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../../services/newsapi.service';

@Component({
  selector: 'app-entnews',
  templateUrl: './entnews.component.html',
  styleUrls: ['./entnews.component.css']
})
export class EntnewsComponent implements OnInit {

  constructor(private services:NewsapiService) { }

  entNewsDisplay:any=[];

  ngOnInit(): void {
    this.services.entertainmentNews().subscribe((result)=>
      this.entNewsDisplay = result.articles 
      )
  }

}
