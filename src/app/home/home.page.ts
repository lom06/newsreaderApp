import { Component } from '@angular/core';
import { NewsForYouService } from '../project/news-for-you.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedCategory: string;
  topHeadlines: any[] = [];
  imageLoadErrors: string[] = [];

  constructor(private newsService: NewsForYouService) {
    this.selectedCategory = 'sports';

    this.newsService.getTopHeadlines().subscribe((results) => {
      this.topHeadlines.push(...results.articles);
      console.log(this.topHeadlines);
    });

    this.newsService.getNewsByCategory(this.selectedCategory).subscribe((results) => {
      console.log(results);
    });
  }

  handleImageError(url: string) {
    this.imageLoadErrors.push(url);
  }
}









