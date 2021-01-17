import { ModuleWithProviders } from '@angular/core';
import { NgModule }             from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';

export const routes: Routes = [
  { 
    path: 'articles', 
    component: ArticlesComponent},
  { 
    path: 'articles/:id',
    component: ArticleComponent},
  { 
    path: 'new',
    loadChildren: "app/article-editor/article-editor.module#ArticleEditorModule"},
  { 
    path: '', 
    redirectTo: 'articles', 
    pathMatch: 'full'},  
  { 
    path: '**', 
    redirectTo: 'articles',
    pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
