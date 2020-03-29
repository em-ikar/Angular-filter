import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LectureComponent } from './components/lecture/lecture.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/lecture-list',
    pathMatch: 'full'
  },
  {
    path: 'lecture-list',
    component: LectureComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
