import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChapterComponent } from './chapter/chapter.component';
import { ChapterDetailComponent } from './chapter-detail/chapter-detail.component';

const appRoutes: Routes = [
  {
    path: 'chapter/:id',
    component: ChapterDetailComponent
  },
  {
    path: '',
    component: ChapterComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
