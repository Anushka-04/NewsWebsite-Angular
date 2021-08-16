import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewsapiService } from '../../services/newsapi.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {

  constructor(private services:NewsapiService) {}

  topheadingDisplay:any=[];

  ngOnInit(): void {
      this.services.topHeading().subscribe((result)=>{
      console.log(result);
      this.topheadingDisplay = result.articles;
  });
  }

}
