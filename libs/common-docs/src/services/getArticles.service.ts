import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ARTICLES_LIST } from "../tokens/articlesList.token";
import { IArticle } from "../models/article.interface";
import {blogTitleRefactoring, checkHTMLExtension} from '../utils/titleRefactoringUtil';

@Injectable({providedIn: 'platform'})
export class GetArticlesService {
    private apiArray?: Observable<any>[];
    private articlesList?: string[];
    private refactoredArticleList?: string[];

    constructor(
        private http: HttpClient,
        @Inject(ARTICLES_LIST) articlesList: string[]
    ){
        this.articlesList = articlesList;
        this.apiArray = this.articlesList.map((art, index) => {
            return this.getArticleRequest((index + 1).toString());
        }).reverse();
        if (!this.refactoredArticleList?.length) {
            this.refactoredArticleList = this.articlesList.map(item => {
                return blogTitleRefactoring(item);
            })
        }
    }

    getArticleRequest(art: string):Observable<IArticle> {
        return this.http.get(`assets/blog/articles/${art}.json`) as Observable<IArticle>;
    }

    getPreviewArticle(): Observable<any>[] | undefined {
        return this.apiArray?.slice(0, 3);
    }

    getFullListOfArticles(): Observable<any>[] | undefined {
        return this.apiArray;
    }

    getArticleRouteLink(title: string): string | undefined {
        if (!title || !this.articlesList?.length) {
            return;
        }

        const arr = [...this.articlesList].reverse();
        const index = arr.findIndex(item => item === title);
        if (!index && index !== 0) {
            return;
        }

        return (index + 1).toString();
    }

    getArticlesByNames(value: string[]): Observable<any>[] | undefined {
        if (!this.articlesList?.length) {
            return;
        }

        const articlesList = [...this.articlesList];
        if (articlesList?.length) {
            return value.map(art => this.getArticleRequest(art));
        }
        return;
    }

    getRefactoredArticlesList(): string[] | undefined {
        return this.refactoredArticleList;
    }

    getTitleArticleIndex(title: string): number | undefined {
        if (!this.refactoredArticleList?.length) {
            return;
        }

        let index = this.refactoredArticleList?.findIndex(item => item === title || item === checkHTMLExtension(title));
        if (index || index === 0) {
            return index ++;
        }

        return;
    }

    // @ts-ignore
    getHTMLSource(link?: string): Observable<any> | undefined {
        if (!link) {
            return;
        }

        return this.http.get(`assets/blog/adoc/${link}.adoc`, {responseType:'text'})
    }
}