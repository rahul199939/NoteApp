import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NoteServiceService} from '../../note-service.service'

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {
  notes = []
  constructor(private noteServices:NoteServiceService,private router:Router) { }

  ngOnInit(): void {
    this.notes = this.noteServices.getNote()    
  }

  delete(id){
    this.noteServices.deleteNote(id)
  }
  noteClick(id){
    this.router.navigateByUrl("createnote")
    this.noteServices.getSingleNote(id)        
  }
}
