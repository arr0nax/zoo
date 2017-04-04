import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Chapter } from '../chapter';
import { ChapterService } from '../chapter.service';

@Component({
  selector: 'app-chapter-detail',
  providers: [ChapterService],
  templateUrl: './chapter-detail.component.html',
  styleUrls: ['./chapter-detail.component.css']
})
export class ChapterDetailComponent implements OnInit {
  chapterId: number = null;
  chapterToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private chapterService: ChapterService) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.chapterId = parseInt(urlParameters['id']);
    });
    this.chapterToDisplay = this.chapterService.getChapterById(this.chapterId);
  }

  nextChapterZero() {
    this.chapterToDisplay.subscribe(chapter => {
      this.chapterToDisplay = this.chapterService.getChapterById(chapter.options[0]);
    })
  }

  nextChapterOne() {
    this.chapterToDisplay.subscribe(chapter => {
      this.chapterToDisplay = this.chapterService.getChapterById(chapter.options[1]);
    })
  }

}
