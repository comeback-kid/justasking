import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {

  editorContent: string;
  editorOptions: any;

  constructor() {
    this.editorContent = "You got something to say?";
    this.editorOptions = {

    };
  }

  savePost(){
    console.log(this.editorContent);
  } 

  ngOnInit() {
  }

}
