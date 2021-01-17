import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { ArticleEditorRoutingModule } from './article-editor.routing.module';

import { NewArticleComponent } from './new-article/new-article.component';

@NgModule({
  imports: [
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    CommonModule,
    ArticleEditorRoutingModule
  ],
  declarations: [
    NewArticleComponent
  ]
})
export class ArticleEditorModule { }
