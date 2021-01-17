import { Component, OnInit } from '@angular/core';

import { BlogService } from '../core/services/blog.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  filters: string[];
  articles: any[];

  constructor(
    private blogService: BlogService, 
  ) {
    this.filters = [];
    this.articles = []; 
   }

  ngOnInit() {
    this.articles = this.blogService.getAllArticles();
//    this.filters = ["All", "Updates", "Tech", "Development", "Polling", "Presenting"];
  }

}
