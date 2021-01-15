import { Component } from '@angular/core';
import { IBlogPost } from './iblog-post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test1';

  posts : IBlogPost[] = [
    {title:'abcdefg', text:'abcdefg'},
    {title:'abcdefg', text:'abcdefg'},
  ];
}
