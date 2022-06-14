import { Component, Inject, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NavigationEnd, Router } from "@angular/router";
import { GetArticlesService, IArticle, OLD_ROUTES_FROM_OLD_SITE} from "@valor-software/common-docs";
import { filter, switchMap, catchError } from 'rxjs/operators';
import { Subscription, of } from "rxjs";

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'article',
    templateUrl: './article.component.html'
})
export class ArticleComponent implements OnDestroy{
    changeBreadCrumbTitle?: {path: string, title: string}[];
    article?: IArticle;
    $routEvents?: Subscription;
    linksFromOldSite?: {[key: string]: string};

    constructor(
        private router: Router,
        private getArticleServ: GetArticlesService,
        private sanitizer: DomSanitizer,
        @Inject(OLD_ROUTES_FROM_OLD_SITE) linkList: {[key: string]: string},
    ) {
        this.linksFromOldSite = linkList;
        this.$routEvents = router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event) => {
            this.checkRoutePath();
        });

        if (!this.article) {
            this.checkRoutePath();
        }
    }

    checkRoutePath() {
        let artTitle = this.router.parseUrl(this.router.url).root.children.primary.segments[1].path;
        if (!artTitle) {
            this.router.navigate(['/articles']);
        }

        if (artTitle) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            artTitle = this.linksFromOldSite[artTitle] ? this.linksFromOldSite[artTitle] : artTitle;
            this.getArticleServ.getArticleRequest(artTitle).pipe(
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                switchMap((art) => {
                    this.article = art;
                    this.changeBreadCrumbTitle = [{
                        path: artTitle,
                        title: art.title
                    }];
                    return this.getArticleServ.getHTMLSource(artTitle);
                }),
                catchError(error => {
                    if (!this.article) {
                        this.router.navigate(['/articles']);
                    }
                    return of();
                })
            ).subscribe(res => {
                if (this.article) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    this.article.content = res;
                }
            }, error => {
                this.router.navigate(['/articles']);
            });
        }
    }

    checkHTML(html: string) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }

    routLink(event: any) {
        const element = event.target;

        if (element.nodeName === 'A' && element.getAttribute('routerLink')) {
            event.preventDefault();
            const link = element.getAttribute('routerLink');
            this.router.navigate([link]);
        }
    }

    ngOnDestroy() {
        this.$routEvents?.unsubscribe();
    }
}