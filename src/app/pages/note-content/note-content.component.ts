import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NoteServiceService } from '../../note-service.service'
@Component({
  selector: 'app-note-content',
  templateUrl: './note-content.component.html',
  styleUrls: ['./note-content.component.css']
})
export class NoteContentComponent implements OnInit {

  title: string
  body: string
  noteTitle: string
  noteBody: string
  noteDetail: any

  @ViewChild('noteForm',{static:false}) noteForm: NgForm;
  constructor(private noteService: NoteServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // console.log(this.noteService.getNote())        
    this.noteDetail = this.noteService.recentNodeId     
    if (this.noteDetail.length > 0) {
      this.noteTitle = this.noteDetail[0][0]
      this.noteBody = this.noteDetail[0][1]      
    }else{
      this.noteTitle=""
      this.noteBody=""
    }
  }

  onCancel(){
    this.noteService.removeAllRecentNote()
    this.router.navigateByUrl("")
  }

  onSubmit(form: NgForm) {    
    this.body = form.value.body;
    this.title = form.value.title;      
    if(this.noteDetail.length > 0){            
      let noteID = this.noteDetail[0][2];      
      this.noteService.updateNote(noteID,this.title,this.body);
      this.noteService.removeAllRecentNote()
    }else{      
      this.noteService.addNote(this.title, this.body)  
    }      
    this.router.navigateByUrl("")
  }
}
