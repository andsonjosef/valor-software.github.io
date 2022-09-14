import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { AppComponent } from './app.component';
import { CommonDocsModule, ARTICLES_LIST, SeoService, OLD_ROUTES_FROM_OLD_SITE } from '@valor-software/common-docs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { articleIdList } from "../assets/blog/articles.list";
import { PORTFOLIO_LIST } from "@valor-software/portfolio";
import { portfolioList } from "../assets/portfolio/portfolio.list";
import { NotFoundComponent } from './404.component';

@NgModule({
  declarations: [
      AppComponent,
      NotFoundComponent
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
    { provide: PORTFOLIO_LIST, useValue: projectsList },
    { provide: OLD_ROUTES_FROM_OLD_SITE, useValue: linksFromOldSite },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
