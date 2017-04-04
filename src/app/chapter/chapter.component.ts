import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { ChapterService } from '../chapter.service';


import { Chapter } from '../chapter';

@Component({
  selector: 'app-chapter',
  providers: [ChapterService],
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {
  chapters: FirebaseListObservable<any[]>;


  constructor(private router: Router, private chapterService: ChapterService){}

  ngOnInit() {
    this.chapters = this.chapterService.getChapters()
  }

  goToFirstChapter() {
    console.log('hello');
    this.router.navigate(['chapter', 1]);
  }
  goToChapter(chapter) {
    this.router.navigate(['chapter', chapter.id]);
  }


}
