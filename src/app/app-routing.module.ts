import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteContentComponent } from './pages/note-content/note-content.component';
import { NoteDetailsComponent } from './pages/note-details/note-details.component';

const routes: Routes = [
  {
    path:'',
    component:NoteDetailsComponent
  },
  {
    path:'createnote',
    component:NoteContentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
