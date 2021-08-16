import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  constructor(private http:HttpClient) { }

   newsapiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=884ba3212fc6474a904b7d240e32a9d0";

   technewsapiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=884ba3212fc6474a904b7d240e32a9d0";

   sportsnewsapiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=884ba3212fc6474a904b7d240e32a9d0";

   entnewsapiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=884ba3212fc6474a904b7d240e32a9d0";

  topHeading():Observable<any>{
    return this.http.get(this.newsapiUrl);
  }

  techNews():Observable<any>{
    return this.http.get(this.technewsapiUrl);
  }

  sportsNews():Observable<any>{
    return this.http.get(this.sportsnewsapiUrl);
  }

  entertainmentNews():Observable<any>{
    return this.http.get(this.entnewsapiUrl);
  }
}
