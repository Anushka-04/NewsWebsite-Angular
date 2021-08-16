import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './components/topheading/topheading.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsapiService } from './services/newsapi.service';
import { TechnewsComponent } from './components/technews/technews.component';
import { SportsComponent } from './components/sports/sports.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { EntnewsComponent } from './components/entnews/entnews.component';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    SportsComponent,
    FooterComponent,
    HeaderComponent,
    EntnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
