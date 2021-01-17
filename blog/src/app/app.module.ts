import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { TopnavComponent } from './topnav/topnav.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrandInfoComponent } from './brand-info/brand-info.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleComponent } from './article/article.component';
import { ArticlesComponent } from './articles/articles.component';

import { BlogService } from './core/services/blog.service';
import { SidenavService } from './core/services/sidenav.service';

@NgModule({
  declarations: [
    AppComponent,
    TopnavComponent,
    SidenavComponent,    
    FooterComponent,
    BrandInfoComponent,
    ArticleComponent,
    ArticlesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [
    BlogService,
    SidenavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
