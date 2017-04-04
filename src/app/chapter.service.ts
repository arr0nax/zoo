import { Injectable } from '@angular/core';
import { Chapter } from './chapter';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class ChapterService {
  chapters: FirebaseListObservable<any[]>

  constructor(private angularFire: AngularFire) {
    this.chapters = angularFire.database.list('chapters');
  }

  getChapters(){
    return this.chapters;
  }

  getChapterById(chapterId: number){
    var newNumber = chapterId - 1;
    var chapterIdString = newNumber.toString();
    return this.angularFire.database.object('chapters/' + chapterIdString);
  }

}
