import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import {CommonDocsModule, ARTICLES_LIST, SeoService} from '@valor-software/common-docs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { articlesList, articleIdList } from "../assets/blog/articles.list";
import { PORTFOLIO_LIST } from "@valor-software/portfolio";
import { portfolioList } from "../assets/portfolio/portfolio.list";


@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {anchorScrolling: 'enabled', onSameUrlNavigation: 'reload'}),
    CommonDocsModule,
    BrowserAnimationsModule,
    ScullyLibModule
  ],
  providers: [
    SeoService,
    { provide: ARTICLES_LIST, useValue: articleIdList },
    { provide: PORTFOLIO_LIST, useValue: portfolioList },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
