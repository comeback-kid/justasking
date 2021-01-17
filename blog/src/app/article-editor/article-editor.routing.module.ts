import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewArticleComponent } from './new-article/new-article.component';

const routes: Routes = [
{ path: '', component: NewArticleComponent },
{ path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ArticleEditorRoutingModule {}