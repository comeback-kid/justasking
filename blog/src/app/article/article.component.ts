import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { BlogService } from '../core/services/blog.service';

import { Article } from '../core/models/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: Article;
  articleBanner: string;

  constructor( 
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService,
    private domSanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    let articleId = "";
    this.route.params.forEach((params: Params) => {
      articleId = params["id"];
    });
    this.article = this.blogService.getArticleById(articleId);
    let trustedBackgroundImageUrl : any = this.domSanitizer.bypassSecurityTrustStyle(`url(${this.article.ImageUrl})`);
    this.articleBanner = trustedBackgroundImageUrl.changingThisBreaksApplicationSecurity;
  }
}
