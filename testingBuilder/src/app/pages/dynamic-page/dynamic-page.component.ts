import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { fetchOneEntry, type BuilderContent } from '@builder.io/sdk-angular';
import { Content } from '@builder.io/sdk-angular';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-dynamic-page',
  standalone: true,
  imports: [Content, CommonModule],
  templateUrl: './dynamic-page.component.html',
  styleUrl: './dynamic-page.component.scss'
})
export class DynamicPageComponent {
  apiKey = '66fcb5adf9a341ce8490e572698e1b7e';
  model = 'page';
  content: BuilderContent | null = null;

  constructor(private router: Router
  ) {

}

  async ngOnInit() {
    //const urlPath = this.router.url;
    const urlPath = "/test-builder";

    const content = await fetchOneEntry({
      apiKey: this.apiKey,
      model: this.model,
      userAttributes: {
        urlPath,
      },
    });

    if (!content) {
      return;
    }

    this.content = content;
  }
}
